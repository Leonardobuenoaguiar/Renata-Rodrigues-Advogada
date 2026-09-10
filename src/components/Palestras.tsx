import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "../data/site";
import { ArrowRight } from "./icons";

const temas = [
  "Letramento Jurídico sem juridiquês",
  "Autoridade Escolar com Segurança Jurídica",
  "Bullying e Cyberbullying",
  "LGPD e ECA Digital",
  "Inclusão e Educação Especial",
  "Saúde Mental Docente e NR-1",
];

const publicacoes = [
  {
    titulo: "Direito das Startups na Prática",
    atuacao: "Coautora e coordenadora",
    capas: ["/capa-livro-startups.png"],
    painel: "bg-[#eef0d6]",
  },
  {
    titulo: "Vade Mecum de Direito das Startups",
    atuacao: "Coautora",
    capas: [
      "/capa-livro-vade mecum.png",
      "/capa-livro-vade-mecum.png",
      "/capa-livro-vademecum.png",
    ],
    painel: "bg-[#f6eee4]",
  },
  {
    titulo: "Vade Mecum de Direito Digital",
    atuacao: "Coautora",
    capas: [
      "/capa-livro-direito digital.png",
      "/capa-livro-direito-digital.png",
      "/capa-livro-direitodigital.png",
    ],
    painel: "bg-[#eadbd2]",
  },
];

function BookCover({ sources, alt }) {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleError = () => {
    setSourceIndex((currentIndex) => {
      if (currentIndex >= sources.length - 1) return currentIndex;
      return currentIndex + 1;
    });
  };

  return (
    <img
      src={sources[sourceIndex]}
      alt={alt}
      onError={handleError}
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
      loading="lazy"
    />
  );
}

function PublicationCard({ item, index }) {
  return (
    <Reveal
      delay={120 + index * 80}
      className="w-[82vw] max-w-[340px] shrink-0 snap-center xl:w-auto xl:max-w-none"
    >
      <article
        className={`relative flex h-full min-h-[410px] flex-col overflow-hidden rounded-[2rem] border border-ink/10 ${item.painel}`}
      >
        {/* Formas apenas nos cantos, longe dos textos */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-sage/25"
        />

        <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-4">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-ink/15 bg-cream/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink">
              {item.atuacao}
            </span>
            <span
              aria-hidden="true"
              className="text-[10px] font-semibold tracking-[0.14em] text-sage-deep"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="my-4 flex flex-1 items-center justify-center">
            <div className="aspect-[0.7] w-[72%] max-w-[185px] overflow-hidden rounded-[1.25rem] border border-ink/10 bg-cream shadow-[0_12px_30px_rgba(37,39,34,0.13)]">
              <BookCover
                sources={item.capas}
                alt={`Capa do livro ${item.titulo}`}
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-sage-deep">
              Produção jurídica
            </p>
            <h3 className="mt-1.5 font-cinzel text-[15px] leading-snug text-ink">
              {item.titulo}
            </h3>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function PalestrasBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -right-56 top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(126,143,122,0.16)_0%,rgba(126,143,122,0.05)_46%,transparent_72%)] blur-2xl" />
      <div className="absolute -left-60 bottom-[-14rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(52,59,52,0.11)_0%,rgba(52,59,52,0.04)_45%,transparent_72%)] blur-2xl" />

      <div className="absolute -right-36 top-[7%] h-[29rem] w-[29rem] rounded-full border border-[#343b34]/[0.06]" />
      <div className="absolute -right-20 top-[11%] h-[20rem] w-[20rem] rounded-full border border-[#343b34]/[0.05]" />

      <svg
        viewBox="0 0 520 420"
        fill="none"
        className="absolute -right-20 top-10 hidden w-[25rem] text-[#343b34] opacity-[0.075] sm:block sm:w-[30rem] lg:right-2 lg:top-6 lg:w-[34rem] lg:opacity-[0.09]"
      >
        <path
          d="M257 357C210 319 148 306 70 326L66 105C143 84 207 97 257 135V357Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M263 357C310 319 372 306 450 326L454 105C377 84 313 97 263 135V357Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M260 137V357"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M91 139C151 126 200 137 236 162M91 181C151 168 200 179 236 204M91 223C151 210 200 221 236 246"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M429 139C369 126 320 137 284 162M429 181C369 168 320 179 284 204M429 223C369 210 320 221 284 246"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-x-[7%] top-[47%] h-px bg-gradient-to-r from-transparent via-[#343b34]/[0.05] to-transparent" />
    </div>
  );
}

export default function Palestras() {
  return (
    <Section
      id="palestras"
      tone="cream"
      className="relative isolate overflow-hidden py-10 lg:py-12"
    >
      <PalestrasBackdrop />

      <div className="relative z-10">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-deep/70" />
            <span className="eyebrow text-brand-dark">
              Livros & Publicações
            </span>
          </div>

          <Reveal delay={80}>
            <h2 className="font-cinzel text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Conhecimento jurídico para quem{" "}
              <span className="text-brand-dark">vive a rotina escolar</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-ink-soft">
              Conteúdo jurídico traduzido para a realidade das escolas, com
              linguagem prática e aplicável ao dia a dia de gestores,
              professores e equipes.
            </p>
          </Reveal>
        </div>

        <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-sage-deep xl:hidden">
          Deslize para conhecer a trajetória e as publicações
        </p>

        {/* Painéis editoriais */}
        <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 xl:mx-0 xl:mt-8 xl:grid xl:grid-cols-[1fr_repeat(3,minmax(0,1fr))_1.12fr] xl:gap-3 xl:overflow-visible xl:px-0 xl:pb-0 [&::-webkit-scrollbar]:hidden">
          {/* Experiência profissional */}
          <Reveal className="w-[82vw] max-w-[340px] shrink-0 snap-center xl:w-auto xl:max-w-none">
            <article className="flex h-full min-h-[410px] flex-col justify-center overflow-hidden rounded-[2rem] border border-ink/10 bg-[#f6eee4] p-6 xl:p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  Experiência
                </p>
                <p className="mt-4 text-xl leading-[1.45] text-ink xl:text-[15px] xl:leading-[1.45]">
                  Atuação por{" "}
                  <strong className="font-semibold">
                    18 anos na maior empresa de energia da América Latina,
                  </strong>{" "}
                  em departamento jurídico e na área de auditoria interna com
                  gestão de riscos.
                </p>
                <span className="mt-5 block h-px w-20 bg-brand/70" />
              </div>
            </article>
          </Reveal>

          {/* Somente as capas dos três livros */}
          {publicacoes.map((item, index) => (
            <PublicationCard key={item.titulo} item={item} index={index} />
          ))}

          {/* Propósito */}
          <Reveal
            delay={360}
            className="w-[82vw] max-w-[340px] shrink-0 snap-center xl:w-auto xl:max-w-none"
          >
            <article className="flex h-full min-h-[410px] flex-col justify-center overflow-hidden rounded-[2rem] border border-ink/10 bg-[#f6eee4] p-6 xl:p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  Propósito
                </p>
                <p className="mt-4 text-base leading-[1.55] text-ink xl:text-[13px] xl:leading-[1.5]">
                  A chegada da maturidade me trouxe incertezas e me fez lembrar
                  minha carreira, o significado de sucesso e o impacto positivo
                  que eu gostaria de causar com o meu conhecimento.
                </p>
                <span className="my-4 block h-px w-14 bg-brand/70" />
                <p className="text-base font-semibold leading-[1.5] text-brand-dark xl:text-[13px] xl:leading-[1.5]">
                  Assim, numa decisão muito corajosa, pedi demissão e resolvi
                  atuar profissionalmente com propósito na proteção jurídica de
                  escolas.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Temas e chamada para contato */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-paper/40 lg:mt-10 lg:grid lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="flex flex-col justify-between bg-sage/25 p-6 sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-deep">
                Formação prática
              </p>
              <h3 className="mt-3 font-cinzel text-2xl leading-tight text-ink sm:text-3xl">
                Temas para equipes educacionais
              </h3>
              <p className="mt-4 max-w-md text-sm leading-[1.8] text-ink-soft">
                Formação que protege e orienta a equipe no dia a dia.
              </p>
            </div>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand-dark"
            >
              Solicitar uma palestra
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120} className="p-6 sm:p-7">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {temas.map((tema, index) => (
                <li
                  key={tema}
                  className="flex items-start gap-3 border-b border-line py-3 text-[15px] leading-relaxed text-ink"
                >
                  <span
                    className="mt-0.5 text-xs font-medium text-sage-deep"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {tema}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
