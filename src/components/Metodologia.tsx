import Section, { SectionHeading } from "./Section";
import Reveal from "./Reveal";

/* ------- Cores desta seção — fundo claro, com as cores das outras seções -------
   verde  #909677  → o verde do site: bordas, tracinhos, painel, ramos e formas do fundo
   verde escuro #6E744E → eyebrow (o mesmo de Palestras; o #909677 é claro demais para letra pequena)
   creme  #F7EEE4  → cards e número dentro do selo
   ink (tema)      → título, selo do número e título dos cards
   ink-soft (tema) → palavra-chave de cada card
   Sem rosé nem coral.
---------------------------------------------------------------------------------- */

const steps = [
  { n: "01", t: "Diagnóstico", d: "Conhecer" },
  { n: "02", t: "Avaliação", d: "Identificar riscos" },
  { n: "03", t: "Adequação", d: "Estruturar" },
  { n: "04", t: "Monitoramento", d: "Acompanhar" },
];

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M393 546C343 488 326 432 310 368C290 287 249 208 165 120C128 81 89 53 34 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M317 394C347 350 370 306 373 252"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M285 286C244 258 218 223 202 180"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M229 195C254 151 264 111 257 67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M158 113C130 126 104 129 76 121"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M370 256C335 242 329 209 344 180C376 193 388 222 370 256Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M347 346C368 318 398 316 414 329C400 359 374 367 347 346Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M301 363C273 341 271 308 288 287C318 304 324 335 301 363Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M245 249C213 245 194 220 198 192C230 193 251 216 245 249Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M254 113C226 94 226 63 240 42C269 58 276 87 254 113Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M205 163C175 158 158 135 162 109C192 111 211 134 205 163Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M111 91C91 67 95 38 114 22C138 44 136 72 111 91Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M82 122C58 143 28 137 13 117C35 94 64 95 82 122Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function Metodologia() {
  return (
    <Section
      id="metodologia"
      tone="paper"
      className="relative isolate overflow-hidden py-10 lg:py-12"
    >
      {/* Fundo claro, como estava — os desenhos é que ficam no verde do site */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-52 top-12 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(144,150,119,0.22)_0%,rgba(144,150,119,0.07)_42%,transparent_72%)] blur-xl" />
        <div className="absolute -right-56 bottom-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(144,150,119,0.18)_0%,rgba(144,150,119,0.06)_46%,transparent_72%)] blur-2xl" />

        <div className="absolute -left-40 top-[18%] h-[27rem] w-[27rem] rounded-full border border-[#909677]/30" />
        <div className="absolute -left-24 top-[24%] h-[18rem] w-[18rem] rounded-full border border-[#909677]/45" />

        <BotanicalBranch className="absolute -right-8 top-4 w-[19rem] text-[#909677] opacity-[0.4] sm:w-[24rem] lg:right-2 lg:top-0 lg:w-[29rem] lg:opacity-[0.5]" />
        <BotanicalBranch className="absolute -bottom-40 -left-20 w-[18rem] -scale-x-100 rotate-12 text-[#909677] opacity-[0.28] sm:w-[22rem] lg:w-[26rem]" />

        <div className="absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#909677]/50 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* eyebrow "Como funciona" em verde escuro (#6E744E); título só "Metodologia" */}
        <div className="[&_.eyebrow]:text-[#6E744E]">
          <SectionHeading
            eyebrow="Como funciona"
            align="center"
            title="Metodologia"
          />
        </div>

        {/* Passos em cards: selo escuro com o número (como nas outras seções),
            tracinho verde, título e palavra-chave.
            Celular: 1 por linha (selo à esquerda) · sm: 2×2 · lg: 4 lado a lado */}
        <div className="mt-8 rounded-[2rem] border border-[#909677]/40 bg-[#909677]/[0.14] p-3 shadow-[0_24px_70px_rgba(37,39,34,0.08)] backdrop-blur-[2px] sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-[#909677]/40 bg-[#F7EEE4] px-4 py-4 text-left shadow-[0_8px_24px_rgba(37,39,34,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#909677] hover:shadow-[0_12px_28px_rgba(37,39,34,0.18)] sm:flex-col sm:justify-center sm:gap-0 sm:py-8 sm:text-center">
                  {/* selo escuro redondo com o número, como nos cartões das outras seções */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-semibold tracking-[0.06em] text-[#F7EEE4] sm:h-12 sm:w-12 sm:text-sm">
                    {s.n}
                  </span>

                  {/* tracinho entre o selo e o texto (vertical no celular) */}
                  <span
                    aria-hidden="true"
                    className="h-9 w-px shrink-0 bg-[#909677] transition-all duration-500 sm:my-4 sm:h-px sm:w-8 sm:group-hover:w-12"
                  />

                  <div className="min-w-0">
                    {/* no celular a fonte acompanha a largura da tela para
                        "Monitoramento" caber inteiro, sem quebrar no meio */}
                    <h3 className="font-cinzel text-[length:clamp(0.8125rem,4.6vw,1.125rem)] leading-7 tracking-tight text-ink sm:text-lg">
                      {s.t}
                    </h3>
                    <p className="text-[15px] leading-snug text-ink-soft sm:mt-1">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
