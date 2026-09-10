import Section, { SectionHeading } from "./Section";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Diagnosticar",
    d: "Identificar riscos, fragilidades e necessidades da instituição.",
  },
  {
    n: "02",
    t: "Orientar",
    d: "Apresentar soluções jurídicas adequadas à sua realidade.",
  },
  {
    n: "03",
    t: "Estruturar",
    d: "Criar políticas, documentos, protocolos e processos.",
  },
  {
    n: "04",
    t: "Prevenir",
    d: "Reduzir riscos e aumentar a segurança jurídica da escola.",
  },
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
      {/* Fundo decorativo suave */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-52 top-12 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(126,143,122,0.16)_0%,rgba(126,143,122,0.06)_42%,transparent_72%)] blur-xl" />
        <div className="absolute -right-56 bottom-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(52,59,52,0.14)_0%,rgba(52,59,52,0.05)_46%,transparent_72%)] blur-2xl" />

        <div className="absolute -left-40 top-[18%] h-[27rem] w-[27rem] rounded-full border border-[#343b34]/[0.07]" />
        <div className="absolute -left-24 top-[24%] h-[18rem] w-[18rem] rounded-full border border-[#343b34]/[0.05]" />

        <BotanicalBranch className="absolute -right-8 top-4 w-[19rem] text-[#687765] opacity-[0.14] sm:w-[24rem] lg:right-2 lg:top-0 lg:w-[29rem] lg:opacity-[0.17]" />
        <BotanicalBranch className="absolute -bottom-40 -left-20 w-[18rem] -scale-x-100 rotate-12 text-[#687765] opacity-[0.09] sm:w-[22rem] lg:w-[26rem]" />

        <div className="absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#343b34]/[0.06] to-transparent" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Como funciona"
          align="center"
          title={
            <>
              Uma metodologia clara, do{" "}
              <span className="text-brand-dark">
                diagnóstico à prevenção
              </span>
            </>
          }
        />

        <div className="relative mt-8 rounded-[2rem] border border-[#343b34]/[0.07] bg-cream/25 px-5 py-6 shadow-[0_24px_70px_rgba(52,59,52,0.05)] backdrop-blur-[2px] sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute left-0 right-0 top-[3.75rem] hidden lg:block">
            <div className="mx-auto h-px w-[76%] bg-[#343b34]/20" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative text-center lg:text-left">
                  <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-brand-deep/50 bg-cream/90 shadow-[0_8px_24px_rgba(52,59,52,0.07)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#343b34] group-hover:bg-[#343b34] group-hover:shadow-[0_12px_28px_rgba(52,59,52,0.16)] lg:mx-0">
                    <span className="font-cinzel text-lg text-brand-dark transition-colors duration-500 group-hover:text-cream">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-cinzel text-xl tracking-tight text-ink">
                    {s.t}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[16rem] text-[15px] leading-[1.8] text-ink-soft lg:mx-0">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
