import { useState } from "react";
import Section, { SectionHeading } from "./Section";
import Reveal from "./Reveal";
import BrandImage from "./BrandImage";

/* Ícone sólido preto e branco (estilo do anexo: silhueta com recortes) */
const I = ({ d }: { d: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const areas = [
  {
    t: "Direito Educacional",
    d: "A base jurídica que sustenta a rotina das instituições de ensino.",
    // chapéu de formatura
    icone:
      "M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.18v3.72c0 1.97 3.13 3.57 7 3.57s7-1.6 7-3.57v-3.72l-7 3.82-7-3.82z",
  },
  {
    t: "Compliance Educacional",
    d: "Alinhamento contínuo a normas, regulamentos e boas práticas.",
    // escudo com check
    icone:
      "M12 2l8 3.2V11c0 5.1-3.4 8.7-8 11-4.6-2.3-8-5.9-8-11V5.2L12 2zM8.4 11.6l2.3 2.3 5-5.2 1.5 1.4-6.4 6.7-3.8-3.8 1.4-1.4z",
  },
  {
    t: "Prevenção da Judicialização",
    d: "Antecipar riscos e evitar que situações se tornem processos.",
    // guarda-chuva
    icone:
      "M12.5 2c-5.24 0-9.55 3.94-9.98 9.08-.03.29.19.54.48.54h19c.29 0 .51-.25.48-.54A10.01 10.01 0 0 0 12.5 2zM12 12v7.25c0 1.52-1.23 2.75-2.75 2.75S6.5 20.77 6.5 19.25H8c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V12H12z",
  },
  {
    t: "Gestão de Riscos",
    d: "Identificar, avaliar e tratar vulnerabilidades antes que cresçam.",
    // alerta
    icone: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  },
  {
    t: "Governança",
    d: "Estruturas decisórias, responsabilidades e processos bem definidos.",
    // organograma
    icone:
      "M9 2h6v5H9zM11 7h2v3h-2zM6 9.5h12v2H6zM5 11.5h2v3.5H5zM17 11.5h2v3.5h-2zM2 15h8v6H2zM14 15h8v6h-8z",
  },
  {
    t: "Auditoria e Controles",
    d: "Revisão de processos, documentos e práticas internas.",
    // lupa com check
    icone:
      "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-3.5 6.2 2.3 2.3 4.7-4.9 1.4 1.4-6 6.3-3.8-3.8 1.4-1.3zM16.6 15.2l4.9 4.9-1.4 1.4-4.9-4.9z",
  },
  {
    t: "LGPD e Proteção de Dados",
    d: "Conformidade e tratamento adequado de dados de alunos e equipes.",
    // cadeado
    icone:
      "M5 8h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2zm7 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 8V6c0-2.21 1.79-4 4-4s4 1.79 4 4v2h-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2H8z",
  },
  {
    t: "Bullying e Cyberbullying",
    d: "Protocolos de prevenção, responsabilização e acolhimento.",
    // escudo com coração
    icone:
      "M12 2l8 3.2V11c0 5.1-3.4 8.7-8 11-4.6-2.3-8-5.9-8-11V5.2L12 2zm0 14.5s-4.2-2.7-4.2-5.7c0-1.16.94-2.1 2.1-2.1.86 0 1.6.51 2.1 1.05.5-.54 1.24-1.05 2.1-1.05 1.16 0 2.1.94 2.1 2.1 0 3-4.2 5.7-4.2 5.7z",
  },
  {
    t: "Inclusão e Educação Especial",
    d: "Apoio jurídico ao PEI, PAEE e à acessibilidade.",
    // pessoa de braços abertos (acessibilidade)
    icone: "M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 6h18v2h-7v13h-2V8H3V6z",
  },
  {
    t: "Mediação e Gestão de Conflitos",
    d: "Condução segura de situações sensíveis e delicadas.",
    // balança
    icone:
      "M11 1h2v18h-2zM4 5h7v2H4zM13 5h7v2h-7zM4 7l3 5H1l3-5zM20 7l3 5h-6l3-5zM8 19h8v2H8z",
  },
  {
    t: "ECA Digital",
    d: "Proteção da infância e da juventude no ambiente on-line.",
    // globo
    icone:
      "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM4 11h16v2H4zM12 4c2.49 0 4.5 3.58 4.5 8S14.49 20 12 20 7.5 16.42 7.5 12 9.51 4 12 4zm0 2c-1.38 0-2.5 2.69-2.5 6s1.12 6 2.5 6 2.5-2.69 2.5-6-1.12-6-2.5-6z",
  },
  {
    t: "Orientação a Gestores",
    d: "Suporte preventivo para decisões diárias da gestão escolar.",
    // bússola
    icone:
      "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.5 4.5-2.1 5-5 2.1 2.1-5 5-2.1z",
  },
];

// Divide em 2 colunas com a mesma quantidade (6 e 6)
const metade = Math.ceil(areas.length / 2);
const colunas = [areas.slice(0, metade), areas.slice(metade)];

export default function Atuacao() {
  // Item aberto: 0 = primeiro aberto por padrão (use null para todos fechados)
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <Section id="atuacao" className="relative overflow-hidden py-12 lg:py-16">
      {/* Árvore decorativa no canto inferior esquerdo */}
      <div
        className="pointer-events-none absolute bottom-5 -left-[80px] w-40 opacity-[0.08] sm:-bottom-12 sm:-left-14 sm:w-64 lg:-bottom-24 lg:-left-24 lg:w-[460px]"
        aria-hidden="true"
      >
        <BrandImage className="w-full brightness-0" />
      </div>

      <div className="relative">
        {/* Texto grande em cima, centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Atuação"
            title={
              <>
                Um leque completo para a{" "}
                <span className="text-brand-dark">gestão educacional</span>
              </>
            }
          />
          <Reveal delay={150}>
            <p className="mt-4 text-base leading-[1.7] text-ink-soft">
              Do jurídico ao compliance, da proteção de dados à condução de
              situações sensíveis, uma atuação ampla e integrada para proteger
              escolas, gestores, equipes e alunos.
            </p>
          </Reveal>
        </div>

        {/* Áreas de atuação: 2 colunas lado a lado, mesma quantidade em cada */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-x-12 sm:grid-cols-2 lg:mt-10">
          {colunas.map((coluna, c) => (
            <div key={c}>
              {coluna.map((a, k) => {
                // Índice global do item
                const i = c * metade + k;
                const isOpen = aberto === i;

                return (
                  <Reveal
                    key={a.t}
                    delay={i * 50}
                    className="border-b border-line first:pt-1"
                  >
                    {/* Nome da atuação — clicável, abre a explicação abaixo */}
                    <button
                      type="button"
                      onClick={() => setAberto(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-3 py-4 text-left"
                    >
                      {/* Ícone preto e branco */}
                      <span className="text-ink">
                        <I d={a.icone} />
                      </span>
                      <span className="flex-1 text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-brand-dark">
                        {a.t}
                      </span>

                      {/* Ícone + (vira × quando aberto) */}
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-brand-dark transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>

                    {/* Área que abre abaixo, explicando a atuação */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 pl-9 pr-8 text-[15px] leading-[1.7] text-ink-soft">
                          {a.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
