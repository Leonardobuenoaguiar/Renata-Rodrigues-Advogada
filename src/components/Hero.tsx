/* Ajustes da imagem para mobile e desktop. Os arquivos devem estar em public. */
const FOTO_MOBILE = "/DSC_5577.jpg";
const FOTO_DESKTOP = "/DSC_5577.jpg";

const ALTURA_FOTO = "h-[64svh] min-h-[360px] max-h-[660px]";
const FOCO = "object-[56%_82%]";

const LARGURA_FOTO_DESKTOP = "lg:w-[78%]";
const CENTRO_FOTO_DESKTOP = "lg:left-[62%]";
const FOCO_DESKTOP = "lg:object-[center_35%]";
const SUBIR_FOTO_DESKTOP = "lg:top-[-12%] lg:h-[112%]";

/* Janela suave no véu sobre o rosto, no desktop. */
const ROSTO = { x: "55%", y: "17%", rx: "15%", ry: "18%", lift: 0.5 };

const rostoMask =
  `radial-gradient(${ROSTO.rx} ${ROSTO.ry} at ${ROSTO.x} ${ROSTO.y}, ` +
  `rgba(0,0,0,${(1 - ROSTO.lift).toFixed(2)}) 0%, ` +
  `rgba(0,0,0,${(1 - ROSTO.lift * 0.55).toFixed(2)}) 45%, #000 100%)`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-cream pt-[104px] sm:pt-32"
    >
      {/* Foto no topo: mobile e tablet */}
      <div className={`relative ${ALTURA_FOTO} w-full overflow-hidden lg:hidden`}>
        <img
          src={FOTO_MOBILE}
          alt="Renata Rodrigues de Souza"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`h-full w-full object-cover ${FOCO}`}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream via-cream/60 to-transparent"
        />
      </div>

      {/* Foto de fundo: desktop */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[104px] hidden overflow-hidden sm:top-32 lg:block"
        aria-hidden="true"
      >
        <img
          src={FOTO_DESKTOP}
          alt=""
          loading="eager"
          decoding="async"
          className={`absolute inset-0 h-full w-full origin-top scale-[1.02] object-cover object-[65%_5%] blur-[3px] sm:object-[62%_5%] ${FOCO_DESKTOP} ${SUBIR_FOTO_DESKTOP}`}
        />
        <img
          src={FOTO_DESKTOP}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-y-0 h-full w-full max-w-none -translate-x-1/2 object-cover object-[65%_5%] sm:object-[62%_5%] ${FOCO_DESKTOP} lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] ${CENTRO_FOTO_DESKTOP} ${LARGURA_FOTO_DESKTOP} ${SUBIR_FOTO_DESKTOP}`}
        />
        <div
          style={{ maskImage: rostoMask, WebkitMaskImage: rostoMask }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_36%_122%_at_31%_50%,rgba(247,238,228,0.98)_0%,rgba(247,238,228,0.92)_44%,rgba(247,238,228,0.44)_68%,rgba(247,238,228,0)_100%)]"
        />
        <div className="absolute inset-y-0 right-0 w-[26%] bg-gradient-to-l from-cream/85 via-cream/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/20 to-transparent" />
      </div>

      {/* Conteúdo sem botões */}
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
        </div>
      </div>
    </section>
  );
}
