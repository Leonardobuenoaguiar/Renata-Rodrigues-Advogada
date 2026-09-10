import { useEffect, useState } from "react";
import { nav, site } from "../data/site";
import { Menu, Close, ArrowRight } from "./icons";
import Modal from "./Modal";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.45-4.25A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.15 7.65c.25-.35.52-.36.8-.36h.47c.14 0 .3.04.4.3l.78 1.86c.08.2.04.36-.08.52l-.6.76c-.12.15-.12.29-.03.45.38.67 1.78 2.3 3.78 2.91.18.06.31.03.43-.11l.88-1.04c.14-.17.32-.2.51-.12l1.76.83c.21.1.3.25.27.46-.13.9-.7 1.72-1.5 2.05-.7.29-1.62.26-2.72-.12-1.07-.37-2.3-1.03-3.54-2.27-1.23-1.22-2.08-2.61-2.4-3.68-.31-1.03-.2-1.8.48-2.44Z" />
    </svg>
  );
}

function formatWhatsAppNumber(value) {
  if (!value) return "Fale pelo WhatsApp";

  let digits = "";

  try {
    const url = new URL(value);
    digits =
      url.searchParams.get("phone") ||
      url.pathname.split("/").filter(Boolean).pop() ||
      "";
  } catch {
    digits = String(value);
  }

  digits = digits.replace(/\D/g, "");

  if (digits.startsWith("55") && digits.length >= 12) {
    digits = digits.slice(2);
  }

  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return "Fale pelo WhatsApp";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  const whatsappLabel =
    site.phone || site.whatsappNumber || formatWhatsAppNumber(site.whatsapp);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");

    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);

    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      {
        rootMargin: "-138px 0px -60% 0px",
        threshold: 0,
      },
    );

    for (const item of nav) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#343b34] text-cream transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_7px_25px_rgba(20,27,23,0.28)]"
          : "shadow-[0_3px_16px_rgba(20,27,23,0.16)]"
      }`}
    >
      {/* Barra superior com a cor antiga da navbar */}
      <div className="h-8 w-full bg-sage text-ink sm:h-10">
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-center px-5 sm:px-8 lg:px-10">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar com a Dra. Renata pelo WhatsApp: ${whatsappLabel}`}
            className="group inline-flex items-center gap-2 text-[11px] font-medium text-ink transition-opacity duration-300 hover:opacity-70 sm:text-xs"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{whatsappLabel}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center justify-between gap-3 px-5 sm:min-h-[88px] sm:gap-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex h-[68px] shrink-0 items-center sm:h-[74px] xl:h-20"
          aria-label="Renata Souza: ir para o início"
        >
          <img
            src="/renata-logo.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            draggable="false"
            className="block max-h-[68px] w-auto max-w-[190px] select-none object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[74px] sm:max-w-[235px] xl:max-h-20 xl:max-w-[255px]"
          />
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 xl:flex"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className="group relative py-3 text-[13px] font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              {item.label}

              <span
                className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-cream via-cream to-cream/40 transition-all duration-300 group-hover:w-full ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden min-h-10 items-center gap-3 rounded-[3px] border border-cream/80 bg-transparent px-5 py-2 text-[12px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream hover:text-[#343b34] lg:inline-flex"
          >
            Fale com Renata
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-haspopup="dialog"
            className="flex h-11 w-11 items-center justify-center text-cream transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70 focus:outline-none focus-visible:opacity-60 [-webkit-tap-highlight-color:transparent] xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="mobile-menu-title"
        className="mobile-menu-dialog"
      >
        <div className="flex h-full min-h-0 flex-col bg-sage">
          <div className="flex items-center justify-between border-b border-ink/20 px-6 py-4">
            <h2
              id="mobile-menu-title"
              className="font-cinzel text-lg font-medium text-ink"
            >
              Renata Souza
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              autoFocus
              className="flex h-11 w-11 items-center justify-center text-ink transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70 focus:outline-none focus-visible:opacity-60 [-webkit-tap-highlight-color:transparent]"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-6 pb-6 pt-3">
            <nav aria-label="Navegação móvel" className="flex flex-col">
              {nav.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "location" : undefined}
                  className="group flex items-center justify-between border-b border-ink/20 py-3 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mont text-xs font-medium text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="font-cinzel text-xl text-ink">
                      {item.label}
                    </span>
                  </span>

                  <ArrowRight className="h-5 w-5 text-ink transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </nav>

            <div className="mt-7">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink shadow-[0_4px_14px_rgba(37,39,34,0.12)] transition-all duration-300 hover:bg-ink hover:text-cream hover:shadow-[0_7px_20px_rgba(37,39,34,0.20)]"
              >
                Fale com Renata
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink">
                {site.city}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
}