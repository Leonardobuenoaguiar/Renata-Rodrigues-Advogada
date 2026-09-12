import Reveal from "./Reveal";
import { site } from "../data/site";
import {
  MapPin,
  Phone,
  WhatsApp,
  Instagram,
  LinkedIn,
} from "./icons";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative isolate scroll-mt-28 overflow-hidden border-b-[18px] border-[#f7eee4] bg-[#1d302b] px-5 py-8 sm:px-8 sm:py-10 lg:flex lg:min-h-[430px] lg:items-center lg:py-8"
    >
      {/* Camadas leves de textura sobre o fundo verde escuro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[#10251f]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(164,178,148,0.12),transparent_44%),linear-gradient(180deg,rgba(7,23,18,0.05),rgba(7,20,16,0.42))]"
      />

      <Reveal className="relative z-10 mx-auto w-full max-w-[1040px]">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-cream/95 shadow-[0_28px_80px_rgba(6,18,14,0.34)] ring-1 ring-white/20 backdrop-blur-[2px]">
          {/* Foto no topo do cartão (contato.jpg) — imagem inteira, com moldura */}
          <div className="p-3 sm:p-4">
            <div className="w-full overflow-hidden rounded-[1.05rem] border border-[#E69B97]/50 bg-cream p-1.5 shadow-[0_12px_32px_rgba(6,18,14,0.16)] lg:mx-auto lg:max-w-[420px]">
              <img
                src="/contato.jpg"
                alt="Renata Rodrigues de Souza"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[0.7rem]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Painel esquerdo */}
            <div className="relative flex flex-col justify-between border-b border-ink/10 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(144,150,119,0.15),transparent_42%)]"
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#E69B97]" />
                  {/* cor sólida #E69B97 (era o marrom/degradê text-brand-dark) */}
                  <span className="eyebrow" style={{ color: "#E69B97" }}>
                    Entre em contato
                  </span>
                </div>

                <h2 className="font-cinzel text-[1.7rem] leading-[1.15] tracking-tight text-[#173c36] sm:text-[2rem]">
                  Uma gestão escolar mais{" "}
                  {/* cor sólida #E69B97 (era text-brand-dark) */}
                  <span style={{ color: "#E69B97" }}>segura</span> começa aqui.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-[1.6] text-ink-soft sm:text-[15px]">
                  Vamos conversar sobre como a prevenção jurídica pode contribuir
                  para que sua instituição decida com mais segurança e
                  tranquilidade.
                </p>
              </div>

              <div className="relative z-10 mt-5">
                <p
                  className="font-hist text-xl sm:text-[1.35rem]"
                  style={{ color: "#E69B97" }}
                >
                  Renata Rodrigues de Souza
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  {site.city}
                </p>

                <div className="mt-3 flex items-center gap-3 text-ink">
                  <span className="text-sage-deep">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm">Florianópolis, Santa Catarina</span>
                </div>
              </div>
            </div>

            {/* Painel direito */}
            <div className="bg-paper/30 p-7 sm:p-8 lg:p-8">
              <Reveal delay={120}>
                {/* Telefone / WhatsApp */}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="group flex items-center gap-3.5 border-b border-line pb-4 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage-deep transition-colors group-hover:bg-sage/30">
                    <Phone className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="mb-1 block text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                      Telefone / WhatsApp
                    </span>
                    <span className="text-lg font-medium text-ink">
                      {site.phoneDisplay}
                    </span>
                  </span>
                </a>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] bg-[#22483e] px-4 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#183b33] sm:col-span-2 lg:col-span-1"
                  >
                    <WhatsApp className="h-[18px] w-[18px]" />
                    Falar pelo WhatsApp
                  </a>

                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border border-[#22483e]/30 bg-cream/60 px-4 py-3 text-sm font-semibold text-[#22483e] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22483e] hover:bg-cream"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>

                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border border-[#22483e]/30 bg-cream/60 px-4 py-3 text-sm font-semibold text-[#22483e] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22483e] hover:bg-cream sm:col-span-2 lg:col-span-1"
                  >
                    <LinkedIn className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft">
                  Atendimento a escolas e instituições de ensino.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
