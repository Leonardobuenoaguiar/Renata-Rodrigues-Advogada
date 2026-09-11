import { site } from "../data/site";
import { ArrowRight } from "./icons";

/* Ajuste fino do hero empilhado (mobile / tablet)
   ALTURA_FOTO  → altura da foto no topo
   FOCO         → object-position: [horizontal] [vertical]
                  2º valor MENOR = a Dra. desce (0% = topo da imagem
                  alinhado ao topo do quadro) — use 0% se ainda cortar */
const ALTURA_FOTO = "h-[56svh] min-h-[320px] max-h-[580px]";
const FOCO = "object-[56%_4%]";

/* Desktop: "janela" que abre o véu creme sobre o rosto da Dra.
   x/y   → centro do rosto em % da seção (a foto ocupa 90% centralizada,
            então 50% da imagem ≈ 50% da seção)
   rx/ry → raio da janela suave
   lift  → 0 = sem mexer | 0.5 = remove metade do véu no rosto | 1 = limpa tudo
   (a janela fica na faixa vertical de cima, fora da área do texto) */
const ROSTO = { x: "55%", y: "17%", rx: "15%", ry: "18%", lift: 0.5 };

const rostoMask = `radial-gradient(${ROSTO.rx} ${ROSTO.ry} at ${ROSTO.x} ${ROSTO.y}, ` +
  `rgba(0,0,0,${(1 - ROSTO.lift).toFixed(2)}) 0%, ` +
  `rgba(0,0,0,${(1 - ROSTO.lift * 0.55).toFixed(2)}) 45%, #000 100%)`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-cream pt-[104px] sm:pt-32"
    >
      {/* ============ FOTO NO TOPO (mobile / tablet) ============ */}
      <div
        className={`relative ${ALTURA_FOTO} w-full overflow-hidden lg:hidden`}
      >
        <img
          src="/hero.jpg"
          alt="Renata Rodrigues de Souza"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`h-full w-full object-cover ${FOCO}`}
        />

        {/* a foto "derrete" no creme antes do texto */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream via-cream/60 to-transparent"
        />
      </div>

      {/* ============ FOTO DE FUNDO (desktop — tratamento anterior) ============ */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[104px] hidden overflow-hidden sm:top-32 lg:block"
        aria-hidden="true"
      >
        {/* Camada de preenchimento: evita bordas ao reduzir o zoom */}
        <img
          src="/hero.jpg"
          alt=""
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full origin-top scale-[1.02] object-cover object-[65%_5%] blur-[3px] sm:object-[62%_5%] lg:object-[center_2%]"
        />

        {/* Foto principal alinhada pelo topo para não cortar o rosto */}
        <img
          src="/hero.jpg"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-y-0 left-1/2 h-full w-full max-w-none -translate-x-1/2 object-cover object-[65%_5%] sm:object-[62%_5%] lg:w-[90%] lg:object-[center_2%] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
        />

        {/* Mancha clara central, como na imagem de referência
            (com a "janela" do rosto recortada no véu) */}
        <div
          style={{ maskImage: rostoMask, WebkitMaskImage: rostoMask }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_36%_122%_at_31%_50%,rgba(247,238,228,0.98)_0%,rgba(247,238,228,0.92)_44%,rgba(247,238,228,0.44)_68%,rgba(247,238,228,0)_100%)]"
        />

        {/* Acabamento claro na lateral direita */}
        <div className="absolute inset-y-0 right-0 w-[26%] bg-gradient-to-l from-cream/85 via-cream/35 to-transparent" />

        {/* Suavização discreta nas extremidades verticais */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/20 to-transparent" />
      </div>

      {/* ============ CONTEÚDO: texto e botões abaixo da foto ============ */}
      <div className="relative z-10 mx-auto w-full max-w-[540px] px-5 pb-12 pt-7 text-center sm:px-8 lg:flex lg:min-h-[580px] lg:max-w-none lg:items-center lg:px-0 lg:py-8 lg:text-left 2xl:min-h-[620px]">
        <div className="lg:ml-[clamp(6rem,8.5vw,10rem)] lg:w-full lg:max-w-[430px]">
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
            className="mx-auto mt-4 max-w-[410px] text-[15px] leading-[1.55] text-ink opacity-0 animate-rise sm:text-base lg:mx-0"
            style={{ animationDelay: "420ms" }}
          >
            Prevenção jurídica para decisões mais{" "}
            <span className="font-medium text-ink">seguras</span> no ambiente
            educacional.
          </p>

          <p
            className="mx-auto mt-2.5 max-w-[410px] text-[13px] leading-[1.65] text-ink-soft opacity-0 animate-rise sm:text-sm lg:mx-0"
            style={{ animationDelay: "500ms" }}
          >
            Estratégia, prevenção e segurança jurídica para escolas e
            instituições de ensino.
          </p>

          <div
            className="mt-5 flex flex-col items-center gap-2.5 opacity-0 animate-rise sm:flex-row sm:justify-center lg:justify-start lg:gap-2.5"
            style={{ animationDelay: "600ms" }}
          >
            {/* Botão principal — verde escuro, só texto */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#38443b] px-4 py-2 text-[12px] font-semibold leading-none text-cream shadow-[0_6px_16px_-12px_rgba(56,68,59,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c362d] hover:shadow-[0_10px_20px_-12px_rgba(56,68,59,.75)] sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              Fale com Renata
            </a>

            {/* Botão secundário */}
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-1.5 rounded-[7px] border border-[#343b34]/35 bg-cream/60 px-4 py-2 text-[12px] font-semibold leading-none text-[#343b34] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#343b34] hover:bg-cream sm:px-5 sm:py-2.5 sm:text-[13px]"
            >
              Conheça as soluções
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
