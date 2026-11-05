import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

/** Botão fixo de WhatsApp no canto inferior direito, presente em todas as páginas. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-50 flex h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-4 text-[15px] font-semibold text-[#0B3B1F] shadow-[0_6px_20px_rgba(8,11,33,0.28)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#1FBF5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B1F] md:px-5"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
