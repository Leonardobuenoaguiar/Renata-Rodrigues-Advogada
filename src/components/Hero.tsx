import { site } from "../data/site";
import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-cream pt-[104px] sm:pt-32"
    >
      {/* Imagem única ocupando todo o fundo do Hero */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[104px] overflow-hidden sm:top-32"
        aria-hidden="true"
      >
        {/* Camada de preenchimento: evita bordas ao reduzir o zoom */}
        <img
          src="/hero.jpg"
          alt=""
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full origin-top scale-[1.02] object-cover object-[65%_9%] blur-[3px] sm:object-[62%_9%] lg:object-[center_5%]"
        />

        {/* Foto principal alinhada pelo topo para não cortar o rosto */}
        <img
          src="/hero.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-y-0 left-1/2 h-full w-full max-w-none -translate-x-1/2 object-cover object-[65%_9%] sm:object-[62%_9%] lg:w-[90%] lg:object-[center_5%] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
        />

        {/* Leitura do texto em telas menores */}
        <div className="absolute inset-0 bg-cream/85 sm:bg-cream/70 lg:hidden" />

        {/* Mancha clara central, como na imagem de referência */}
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_38%_125%_at_33%_50%,rgba(247,238,228,0.98)_0%,rgba(247,238,228,0.94)_44%,rgba(247,238,228,0.48)_68%,rgba(247,238,228,0)_100%)] lg:block" />

        {/* Acabamento claro na lateral direita */}
        <div className="absolute inset-y-0 right-0 hidden w-[28%] bg-gradient-to-l from-cream/95 via-cream/45 to-transparent lg:block" />

        {/* Suavização discreta nas extremidades verticais */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/20 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-[calc(100svh-104px)] w-full items-center px-5 py-10 sm:min-h-[calc(100svh-8rem)] sm:px-8 lg:min-h-[580px] lg:px-0 lg:py-8 2xl:min-h-[620px]">
        <div className="w-full max-w-[430px] lg:ml-[clamp(6rem,8.5vw,10rem)]">
          <h1
            className="font-cinzel text-[1.8rem] leading-[1.06] tracking-tight text-[#343b34] opacity-0 animate-rise sm:text-[2rem] lg:text-[2.1rem]"
            style={{ animationDelay: "180ms" }}
          >
            Renata Rodrigues
            <span className="block text-[#343b34]">de Souza</span>
          </h1>

          <div
            className="mt-3 opacity-0 animate-rise"
            style={{ animationDelay: "300ms" }}
          >
            <span className="font-hist text-[1.15rem] text-[#343b34] sm:text-xl">
              Consultoria Jurídica Educacional
            </span>
          </div>

          <p
            className="mt-4 max-w-[410px] text-[15px] leading-[1.55] text-ink opacity-0 animate-rise sm:text-base"
            style={{ animationDelay: "420ms" }}
          >
            Prevenção jurídica para decisões mais{" "}
            <span className="font-medium text-ink">seguras</span> no ambiente
            educacional.
          </p>

          <p
            className="mt-2.5 max-w-[410px] text-[13px] leading-[1.65] text-ink-soft opacity-0 animate-rise sm:text-sm"
            style={{ animationDelay: "500ms" }}
          >
            Estratégia, prevenção e segurança jurídica para escolas e
            instituições de ensino.
          </p>

          <div
            className="mt-5 flex flex-col items-start gap-2.5 opacity-0 animate-rise sm:flex-row sm:items-center sm:gap-3"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#servicos"
              className="group inline-flex min-h-9 items-center justify-center gap-1.5 rounded-[3px] bg-[#343b34] px-4 text-[12px] font-semibold text-cream shadow-[0_4px_14px_rgba(52,59,52,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a302a] hover:shadow-[0_7px_20px_rgba(52,59,52,0.24)] sm:min-h-11 sm:gap-2 sm:px-5 sm:text-[13px]"
            >
              Conheça as soluções
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center justify-center rounded-[3px] border border-[#343b34]/35 bg-cream/60 px-4 text-[12px] font-semibold text-[#343b34] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#343b34] hover:bg-cream sm:min-h-11 sm:px-5 sm:text-[13px]"
            >
              Fale com Renata
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
