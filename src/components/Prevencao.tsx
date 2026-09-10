import Reveal from "./Reveal";

export default function Prevencao() {
  return (
    <section
      id="prevencao"
      className="relative isolate min-h-[430px] scroll-mt-28 overflow-hidden bg-[#1d302b] px-5 py-14 sm:px-8 sm:py-16 lg:flex lg:min-h-[470px] lg:items-center lg:py-20"
    >
      {/* Fundo panorâmico */}
      <img
        src="/prevencao-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center brightness-[0.82] contrast-125 saturate-125"
        loading="lazy"
        decoding="async"
      />

      {/* Manchas orgânicas: efeito camuflado sem esconder a fotografia */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 34% 46% at 8% 20%, rgba(155, 166, 133, 0.58) 0%, rgba(89, 111, 88, 0.28) 48%, transparent 74%),
            radial-gradient(ellipse 30% 42% at 39% 8%, rgba(38, 72, 61, 0.72) 0%, rgba(38, 72, 61, 0.22) 55%, transparent 78%),
            radial-gradient(ellipse 38% 48% at 77% 28%, rgba(128, 143, 112, 0.46) 0%, rgba(70, 96, 78, 0.22) 50%, transparent 76%),
            radial-gradient(ellipse 42% 52% at 18% 92%, rgba(31, 61, 52, 0.68) 0%, rgba(31, 61, 52, 0.18) 58%, transparent 80%),
            radial-gradient(ellipse 35% 48% at 91% 88%, rgba(104, 125, 98, 0.48) 0%, rgba(41, 72, 61, 0.18) 56%, transparent 80%)
          `,
        }}
      />

      {/* Sombra suave nas bordas, preservando os detalhes do fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(175,186,154,0.08),transparent_44%),linear-gradient(180deg,rgba(9,25,20,0.08),rgba(7,20,16,0.34))]"
      />

      <Reveal className="relative z-10 mx-auto w-full max-w-[760px]">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-cream/95 px-6 py-12 text-center shadow-[0_24px_70px_rgba(7,20,16,0.32)] ring-1 ring-white/20 backdrop-blur-[2px] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          {/* Pequeno recorte superior inspirado na referência */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-5 w-12 -translate-x-1/2 bg-[#243a33] [clip-path:polygon(0_0,100%_0,64%_62%,56%_100%,44%_100%,36%_62%)]"
          />

          {/* Brilho muito sutil dentro do cartão */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.55),transparent_45%)]"
          />

          <div className="relative z-10">
            <span className="font-hist text-5xl leading-none text-brand-soft sm:text-6xl">
              “
            </span>

            <h2 className="mx-auto -mt-3 max-w-3xl font-cinzel text-3xl leading-[1.18] tracking-tight text-[#173c36] sm:text-4xl lg:text-[2.65rem]">
              Prevenir é mais seguro
              <span className="text-brand-dark"> do que remediar.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.85] text-ink-soft sm:text-base">
              A prevenção jurídica ajuda instituições de ensino a tomar decisões
              mais seguras, estruturar processos e reduzir riscos antes que eles
              se transformem em conflitos ou judicialização.
            </p>

            <div className="mx-auto mt-8 h-px w-20 bg-brand/50" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
