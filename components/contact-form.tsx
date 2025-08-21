"use client";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "No se pudo enviar el mensaje");
      }
      setStatus({ ok: true, msg: "¡Mensaje enviado con éxito! Te responderé pronto." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Error inesperado" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2 text-sm">Nombre</label>
        <input
          type="text"
          className="w-full px-3 py-2 text-white placeholder:text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-white/10 hover:bg-white/15 transition-colors"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 text-white placeholder:text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-white/10 hover:bg-white/15 transition-colors"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm">Mensaje</label>
        <textarea
          className="w-full h-32 px-3 py-2 text-white placeholder:text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-white/10 hover:bg-white/15 transition-colors"
          placeholder="Cuéntame sobre tu proyecto o duda"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 font-semibold rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status && (
        <p className={`${status.ok ? "text-emerald-400" : "text-red-400"}`}>
          {status.msg}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
