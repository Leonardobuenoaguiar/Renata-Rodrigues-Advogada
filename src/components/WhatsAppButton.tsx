import { site } from "../data/site";
import { WhatsApp } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Renata pelo WhatsApp"
      className="group fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 rounded-full border border-cream bg-sage text-ink shadow-[0_4px_18px_rgba(37,39,34,0.16)] transition-colors hover:bg-sage-deep hover:text-white sm:right-7 sm:bottom-7"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <WhatsApp className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-line bg-paper px-4 py-2 text-sm font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Fale com Renata
      </span>
    </a>
  );
}
