import Section from "./Section";
import Reveal from "./Reveal";

/* ---------------- Paleta rosé da seção (mesma da Metodologia/Palestras) ----------------
   ROSE       #c3a398  → tom principal (decoração, bordas, traços)
   ROSE_SOFT  #dcc5bb  → lavagem de fundo
   ROSE_TEXT  #9c7a70  → versão escura do mesmo tom, usada em texto
   CORAL      #E69B97  → secundária (acentos, shapes, gradientes) — mesma cor da barra top
   CORAL_DEEP #C97B76  → versão escura do coral (hovers)
---------------------------------------------------------------------------- */
const ROSE_TEXT = "#9c7a70";
const CORAL = "#E69B97";

function TrajetoriaBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -right-56 top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(230,155,151,0.20)_0%,rgba(230,155,151,0.06)_46%,transparent_72%)] blur-2xl" />
      <div className="absolute -left-60 bottom-[-14rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(156,122,112,0.16)_0%,rgba(195,163,152,0.05)_45%,transparent_72%)] blur-2xl" />

      <div className="absolute -left-36 top-[7%] h-[29rem] w-[29rem] rounded-full border border-[#c3a398]/25" />
      <div className="absolute -left-20 top-[11%] h-[20rem] w-[20rem] rounded-full border border-[#E69B97]/30" />

      <div className="absolute inset-x-[7%] bottom-[38%] h-px bg-gradient-to-r from-transparent via-[#E69B97]/40 to-transparent" />
    </div>
  );
}

export default function Trajetoria() {
  return (
    <Section
      id="trajetoria"
      tone="cream"
      className="relative isolate overflow-hidden py-10 lg:py-12"
    >
      <TrajetoriaBackdrop />

      <div className="relative z-10">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#E69B97] to-[#c3a398]" />
            <span className="eyebrow" style={{ color: CORAL }}>
              Trajetória
            </span>
          </div>

          <Reveal delay={80}>
            <h2 className="font-cinzel text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Experiência que se transformou{" "}
              <span style={{ color: CORAL }}>em propósito</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-ink-soft">
              Uma carreira construída na gestão de riscos e no jurídico —
              hoje dedicada à proteção jurídica das instituições de ensino.
            </p>
          </Reveal>
        </div>

        {/* Cards Experiência + Propósito - MOBILE: coluna | DESKTOP: 2 colunas */}
        <div className="mt-6 grid gap-4 lg:mt-8 lg:grid-cols-2">
          {/* Experiência profissional */}
          <Reveal className="w-full">
            <article className="relative flex h-full min-h-[240px] flex-col justify-center overflow-hidden rounded-[2rem] border border-[#c3a398]/30 bg-[#f6eee4] p-5 sm:p-6 lg:min-h-[260px] lg:p-7">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#E69B97]/30"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: ROSE_TEXT }}
                  >
                    Experiência
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-semibold tracking-[0.14em]"
                    style={{ color: ROSE_TEXT }}
                  >
                    01
                  </span>
                </div>

                <p className="mt-4 text-base leading-[1.55] text-ink sm:text-lg sm:leading-[1.5]">
                  Atuação por{" "}
                  <strong className="font-semibold">
                    18 anos na maior empresa de energia da América Latina,
                  </strong>{" "}
                  em departamento jurídico e na área de auditoria interna com
                  gestão de riscos.
                </p>

                <span className="mt-5 block h-px w-16 bg-gradient-to-r from-[#c3a398] to-[#E69B97]" />
              </div>
            </article>
          </Reveal>

          {/* Propósito */}
          <Reveal delay={120} className="w-full">
            <article className="relative flex h-full min-h-[240px] flex-col justify-center overflow-hidden rounded-[2rem] border border-[#c3a398]/30 bg-[#f6eee4] p-5 sm:p-6 lg:min-h-[260px] lg:p-7">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[rgba(220,197,187,0.45)]"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: ROSE_TEXT }}
                  >
                    Propósito
                  </p>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-semibold tracking-[0.14em]"
                    style={{ color: ROSE_TEXT }}
                  >
                    02
                  </span>
                </div>

                <p className="mt-4 text-sm leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                  A chegada da maturidade me trouxe incertezas e me fez
                  lembrar minha carreira, o significado de sucesso e o impacto
                  positivo que eu gostaria de causar com o meu conhecimento.
                </p>

                <span className="my-4 block h-px w-12 bg-gradient-to-r from-[#E69B97] to-[#c3a398]" />

                <p className="text-sm font-semibold leading-[1.6] text-brand-dark sm:text-[15px] sm:leading-[1.55]">
                  Assim, numa decisão muito corajosa, pedi demissão e resolvi
                  atuar profissionalmente com propósito na proteção jurídica
                  de escolas.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
