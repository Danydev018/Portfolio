import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos (email, message)" },
        { status: 400 }
      );
    }

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
      replyTo: email,
      subject: `Nuevo mensaje desde el portafolio - ${name || "Sin nombre"} <${email}>`,
      text: `Nombre: ${name || "(no provisto)"}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${name || "(no provisto)"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${(message || "").replace(/\n/g, "<br/>")}</p>
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
