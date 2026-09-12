import { useMemo, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

/* ------------------------------------------------------------------
   DESTAQUES DO INSTAGRAM DA DRA.

   Você não precisa me dizer onde salvou as capas nem a extensão:
   o card testa sozinho, nesta ordem, até encontrar o arquivo:
     pasta:  raiz de /public  →  /public/instagram
     nome:   as variações listadas em `arquivos`
     extensão: .png → .jpeg → .jpg
   Se nenhuma combinação existir, mostra um círculo rosé com o glifo
   do Instagram (nunca aparece imagem quebrada).
------------------------------------------------------------------ */

const PASTAS = ["", "/instagram"];
const EXTENSOES = [".png", ".jpeg", ".jpg"];

const INSTAGRAM_URL = "https://www.instagram.com/re_souza.adv.aud/";
const INSTAGRAM_HANDLE = "@re_souza.adv.aud";

type Destaque = {
  nome: string;
  arquivos: string[];
  link: string;
};

const DESTAQUES: Destaque[] = [
  {
    // o arquivo que você salvou é "bullyng" (sem o i)
    nome: "Bullying",
    arquivos: ["bullyng", "bullying"],
    link: "https://www.instagram.com/stories/highlights/18093131072608136/",
  },
  {
    nome: "Podcast",
    arquivos: ["podcast"],
    link: "https://www.instagram.com/stories/highlights/17891813949378947/",
  },
  {
    nome: "Compliance",
    arquivos: ["compliance", "complience"],
    link: "https://www.instagram.com/stories/highlights/18088536575376384/",
  },
  {
    nome: "OAB nas escolas",
    arquivos: ["oabnaescola", "oab-na-escola", "oabnasescolas"],
    link: "https://www.instagram.com/stories/highlights/18101370545364060/",
  },
  {
    // não apareceu no print — salve como protecaodedados.jpeg
    // (ou me diga o nome) e ela entra automaticamente
    nome: "Proteção de dados",
    arquivos: ["protecaodedados", "protecao-de-dados", "dados", "protecao"],
    link: "https://www.instagram.com/stories/highlights/18342018256216805/",
  },
  {
    nome: "Eventos",
    arquivos: ["eventos"],
    link: "https://www.instagram.com/stories/highlights/17983165833107501/",
  },
];

function montarCaminhos(arquivos: string[]) {
  const lista: string[] = [];

  for (const pasta of PASTAS) {
    for (const nome of arquivos) {
      for (const ext of EXTENSOES) {
        lista.push(`${pasta}/${nome}${ext}`);
      }
    }
  }

  return lista;
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.423.422.69.82.9 1.382.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.423-.824.689-1.38.898-.42.166-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function DestaqueItem({ destaque, index }: { destaque: Destaque; index: number }) {
  const caminhos = useMemo(() => montarCaminhos(destaque.arquivos), [destaque]);
  const [tentativa, setTentativa] = useState(0);

  const src = caminhos[Math.min(tentativa, caminhos.length - 1)];
  const esgotou = tentativa >= caminhos.length;

  return (
    <Reveal delay={(index % 4) * 70} className="w-[74px] sm:w-[92px]">
      <a
        href={destaque.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir o destaque ${destaque.nome} no Instagram`}
        className="group flex flex-col items-center text-center"
      >
        {/* capa redonda, como no perfil do Instagram */}
        <span className="relative block aspect-square w-full rounded-full border border-[#c3a398]/50 bg-cream p-[3px] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c3a398] group-hover:shadow-[0_14px_30px_-12px_rgba(156,122,112,0.6)]">
          <span className="block h-full w-full overflow-hidden rounded-full">
            {esgotou ? (
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#dcc5bb_0%,#c3a398_55%,#38443b_100%)]">
                <InstagramGlyph className="h-6 w-6 text-cream/85" />
              </span>
            ) : (
              <img
                key={src}
                src={src}
                alt={`Capa do destaque ${destaque.nome}`}
                loading="lazy"
                decoding="async"
                onError={() => setTentativa((v) => v + 1)}
                className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
            )}
          </span>

          <span
            aria-hidden="true"
            className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-[#38443b] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:h-6 sm:w-6"
          >
            <InstagramGlyph className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </span>
        </span>

        <span className="mt-2.5 font-mont text-[11px] font-semibold leading-[1.35] text-ink transition-colors duration-300 group-hover:text-[#9c7a70] sm:text-[12px]">
          {destaque.nome}
        </span>
      </a>
    </Reveal>
  );
}

/* ---------------- Fundo decorativo da seção ----------------
   Tudo em rosé apagado, atrás do conteúdo (z-0) e sem clique.
------------------------------------------------------------ */
function ArtigosBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* manchas de cor */}
      <div className="absolute -right-44 -top-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(195,163,152,0.30)_0%,rgba(195,163,152,0.10)_46%,transparent_72%)] blur-2xl" />
      <div className="absolute -left-48 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(156,122,112,0.20)_0%,rgba(195,163,152,0.07)_45%,transparent_72%)] blur-2xl" />
      <div className="absolute left-[38%] top-[42%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(220,197,187,0.34)_0%,transparent_70%)] blur-3xl" />

      {/* anéis concêntricos */}
      <div className="absolute -right-24 top-[6%] h-[19rem] w-[19rem] rounded-full border border-[#c3a398]/30" />
      <div className="absolute -right-12 top-[12%] h-[13rem] w-[13rem] rounded-full border border-[#c3a398]/25" />
      <div className="absolute -left-28 bottom-[4%] h-[15rem] w-[15rem] rounded-full border border-[#c3a398]/25" />

      {/* moldura de post, inclinada */}
      <div className="absolute -left-24 top-[10%] h-[15rem] w-[15rem] rotate-[-12deg] rounded-[2.5rem] border border-[#c3a398]/25" />
      <div className="absolute -left-16 top-[14%] h-[11rem] w-[11rem] rotate-[-12deg] rounded-[2rem] border border-[#c3a398]/20" />

      {/* grade de pontinhos */}
      <div
        className="absolute inset-y-0 right-0 w-40 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(195,163,152,0.45) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(195,163,152,0.45) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      {/* traços finos */}
      <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#c3a398]/45 to-transparent" />
      <div className="absolute inset-x-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#c3a398]/45 to-transparent" />

      {/* brilhos de quatro pontas */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="absolute right-[12%] top-[16%] h-6 w-6 text-[#c3a398] opacity-50"
      >
        <path
          d="M20 2v36M2 20h36M6 6l28 28M34 6L6 34"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="absolute bottom-[18%] left-[10%] h-4 w-4 text-[#c3a398] opacity-45"
      >
        <path
          d="M20 2v36M2 20h36M6 6l28 28M34 6L6 34"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* livro aberto, bem apagado */}
      <svg
        viewBox="0 0 260 170"
        fill="none"
        className="absolute bottom-[-1.5rem] right-[6%] hidden w-[15rem] text-[#c3a398] opacity-[0.18] lg:block"
      >
        <path
          d="M130 132C104 112 62 104 12 116V32C62 20 104 28 130 48V132Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M130 132C156 112 198 104 248 116V32C198 20 156 28 130 48V132Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M130 48V132" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M34 54C74 44 100 52 120 70M34 80C74 70 100 78 120 96"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M226 54C186 44 160 52 140 70M226 80C186 70 160 78 140 96"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Artigos() {
  return (
    <Section
      id="artigos"
      tone="paper"
      className="relative isolate overflow-hidden py-8 lg:py-10"
    >
      <ArtigosBackdrop />

      <div className="relative z-10">
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            {/* Pílula do handle — texto em coral sólido
                (o glifo fica com cor fixa para continuar visível) */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c3a398]/50 bg-cream/70 px-3.5 py-1 font-hist text-[12px] tracking-[0.04em]">
              <InstagramGlyph className="h-3 w-3 text-[#E69B97]" />
              {/* coral sólido (antes era gradiente com bg-clip-text) */}
              <span className="text-[#E69B97]">{INSTAGRAM_HANDLE}</span>
            </span>

            <h2 className="mt-3.5 font-cinzel text-2xl leading-tight tracking-tight text-ink sm:text-3xl lg:text-[2rem]">
              Destaques do{" "}
              {/* coral sólido (antes era gradiente com bg-clip-text) */}
              <span className="text-[#E69B97]">Instagram</span>
            </h2>

            <span className="mx-auto mt-3.5 block h-px w-10 bg-[#c3a398]" />

            <p className="mt-3.5 max-w-md text-[13.5px] leading-[1.7] text-ink-soft sm:text-[14px]">
              Temas do dia a dia das escolas em formato curto. Toque em um
              destaque para abrir os stories no Instagram.
            </p>
          </div>
        </Reveal>

        {/* Destaques — capas redondas */}
        <Reveal delay={100} className="mt-7">
          <ul className="flex flex-wrap items-start justify-center gap-x-5 gap-y-5 sm:gap-x-9 sm:gap-y-6">
            {DESTAQUES.map((d, i) => (
              <li key={d.nome}>
                <DestaqueItem destaque={d} index={i} />
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Chamada para seguir */}
        <Reveal delay={180} className="mt-8">
          <div className="flex flex-col items-center gap-2.5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-[#38443b] px-6 py-2.5 text-[13px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c362d] sm:text-[14px]"
            >
              <InstagramGlyph className="h-4 w-4" />
              Siga no Instagram
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="text-[13px] text-ink-soft">
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
