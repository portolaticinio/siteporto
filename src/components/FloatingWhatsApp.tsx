import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Porto Laticínios pelo WhatsApp"
      className="
        fixed bottom-3 right-6 z-50
        inline-flex items-center gap-2
        rounded-full
        bg-[#075E54]
        px-4 py-3
        text-sm font-medium
        text-white
        shadow-warm
        transition
        hover:scale-105
      "
    >
      <FaWhatsapp className="h-5 w-5" />

      <span className="hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}