import { Mail, Phone, Send, Instagram } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Información de contacto</h2>
      <p className="text-gray-300">Estoy disponible para colaborar en proyectos y oportunidades.</p>

      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Mail className="text-secondary" size={22} />
          <Link href="mailto:tairon.rojas.dev@gmail.com" className="hover:underline">
            tairon.rojas.dev@gmail.com
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="text-secondary" size={22} />
          <a href="tel:+584125436728" className="hover:underline">+58 412 543 6728</a>
        </li>
        <li className="flex items-center gap-3">
          <Send className="text-secondary" size={22} />
          <Link href="https://t.me/Danreeds" target="_blank" className="hover:underline">@Danreeds</Link>
        </li>
        <li className="flex items-center gap-3">
          <Instagram className="text-secondary" size={22} />
          <Link href="https://instagram.com/tairon_dev" target="_blank" className="hover:underline">@tairon_dev</Link>
        </li>
      </ul>

      <div className="pt-2">
        <Link
          href="mailto:tairon.rojas.dev@gmail.com"
          className="inline-block px-4 py-2 font-semibold rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Enviar correo directo
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
