import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactLimiter, getClientIp } from "@/utils/rate-limit";

export async function POST(req: Request) {
  try {
    const json = await req.json();

    // Basic rate limiting per IP
    const ip = getClientIp(req);
    if (!contactLimiter.take(ip)) {
      return NextResponse.json(
        { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo más tarde." },
        { status: 429 }
      );
    }

    // Validation with Zod
    const schema = z.object({
      name: z.string().trim().max(100).optional().or(z.literal("")),
      email: z.string().trim().email(),
      message: z.string().trim().min(10).max(3000),
      // Honeypot must be empty
      website: z.string().optional().default("").refine((v) => !v, {
        message: "Honeypot detectado",
      }),
      // Client-calculated fill time in ms
      elapsedMs: z.number().int().nonnegative().optional(),
    });

    const { name, email, message, website, elapsedMs } = schema.parse(json);

    // Minimum time to fill form to deter bots (e.g., >= 3s)
    if (typeof elapsedMs === "number" && elapsedMs < 3000) {
      return NextResponse.json(
        { ok: false, error: "Formulario enviado demasiado rápido." },
        { status: 400 }
      );
    }

    // Simple sanitization (escape HTML)
    const escapeHtml = (s: string) =>
      s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    const sName = name ? escapeHtml(name) : "";
    const sEmail = escapeHtml(email);
    const sMessage = escapeHtml(message);

    // Resend configuration
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM; // e.g. "Portfolio <onboarding@resend.dev>" or a verified domain sender
    const to = process.env.CONTACT_TO || "tairon.rojas.dev@gmail.com";

    if (!apiKey || !from) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Configuración de Resend faltante. Define RESEND_API_KEY y RESEND_FROM en .env.local y reinicia el servidor.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data: sent, error } = await resend.emails.send({
      from,
      to,
      replyTo: sEmail,
      subject: `Nuevo mensaje desde el portafolio - ${sName || "Sin nombre"} <${sEmail}>`,
      text: `Nombre: ${sName || "(no provisto)"}\nEmail: ${sEmail}\n\nMensaje:\n${sMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${sName || "(no provisto)"}</p>
          <p><strong>Email:</strong> ${sEmail}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${(sMessage || "").replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: error.message || "Error enviando email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: sent?.id });
  } catch (err: any) {
    console.error("/api/contact error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Error interno" },
      { status: 500 }
    );
  }
}
