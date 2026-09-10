import { useRef, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import BrandImage from "./BrandImage";

const diffs = [
  {
    t: "Experiência jurídica",
    d: "Mais de 20 anos de vivência profissional na área jurídica.",
  },
  {
    t: "Experiência corporativa",
    d: "Aproximadamente 18 anos de atuação na Eletrobras.",
  },
  {
    t: "Visão jurídica e de gestão",
    d: "Direito, auditoria, compliance, riscos e governança combinados.",
  },
  {
    t: "Conhecimento educacional",
    d: "Atuação voltada às necessidades reais das instituições de ensino.",
  },
  {
    t: "Prevenção",
    d: "Antecipar riscos e evitar que problemas virem conflitos ou processos.",
  },
  {
    t: "Linguagem prática",
    d: "Jurídico traduzido para a realidade de gestores e equipes escolares.",
  },
];

export default function Diferencial() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function getStep() {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("[data-diff-card]");
    return card ? card.offsetWidth + 12 : 280;
  }

  function move(direction: number) {
    carouselRef.current?.scrollBy({
      left: direction * getStep(),
      behavior: "smooth",
    });
  }

  function goTo(index: number) {
    carouselRef.current?.scrollTo({
      left: index * getStep(),
      behavior: "smooth",
    });
  }

  function updateActive() {
    const carousel = carouselRef.current;
    if (!carousel) return;
    setActive(Math.min(Math.round(carousel.scrollLeft / getStep()), diffs.length - 1));
  }

  return (
    <Section
      id="diferencial"
      tone="sage"
      className="relative overflow-hidden py-8 lg:py-11"
    >
      {/* Elemento de fundo preservado */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 w-[400px] opacity-[0.08]"
        aria-hidden="true"
      >
        <BrandImage className="w-full brightness-0" />
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-center lg:gap-6">
        {/* Coluna fixa, como na referência */}
        <Reveal>
          <div className="max-w-sm lg:max-w-[12.5rem]">
            <h2 className="font-cinzel text-3xl leading-[1.1] tracking-tight text-ink lg:text-[2rem]">
              Nosso
              <span className="block text-ink">diferencial</span>
            </h2>
          </div>
        </Reveal>

        {/* Carrossel compacto */}
        <Reveal delay={100} className="min-w-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver diferencial anterior"
              className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 text-ink/55 transition-colors hover:text-ink lg:block"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>

            <div
              ref={carouselRef}
              onScroll={updateActive}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {diffs.map((d, i) => (
                <article
                  key={d.t}
                  data-diff-card
                  className="min-h-[148px] min-w-[82vw] snap-start rounded-[3px] border border-ink/20 bg-cream px-5 py-4 shadow-[0_10px_24px_-20px_rgba(30,42,34,.9)] sm:min-w-[calc((100%_-_0.75rem)_/_2)] lg:min-h-[170px] lg:min-w-[calc((100%_-_1.5rem)_/_3)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink font-cinzel text-[10px] text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-cinzel text-sm leading-snug tracking-tight text-ink">
                      {d.t}
                    </h3>
                  </div>

                  <p className="mt-4 text-[13px] leading-[1.55] text-ink-soft">
                    {d.d}
                  </p>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Ver próximo diferencial"
              className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-ink/55 transition-colors hover:text-ink lg:block"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {diffs.map((d, i) => (
              <button
                key={d.t}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver diferencial ${i + 1}: ${d.t}`}
                aria-current={active === i ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-5 bg-cream" : "w-1.5 bg-cream/55 hover:bg-cream"
                }`}
              />
            ))}
          </div>

          <div className="mt-4 hidden justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver diferencial anterior"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Ver próximo diferencial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
