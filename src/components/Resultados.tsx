import { useState, useEffect } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "../data/site";
import { ArrowRight } from "./icons";

const ROSE_TEXT = "#9c7a70";
const CORAL = "#E69B97";

function FairPlayModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay */}
      <button
        aria-label="Fechar modal"
        onClick={onClose}
        className="absolute inset-0 bg-[#252722]/60 backdrop-blur-sm"
      />

      {/* container */}
      <div className="relative flex max-h-[90vh] w-full max-w-[780px] flex-col overflow-hidden rounded-[2rem] border border-[#c3a398]/30 bg-cream shadow-[0_24px_60px_rgba(37,39,34,0.28)]">
        {/* header sticky */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#c3a398]/20 bg-cream px-6 py-5 sm:px-8 sm:py-6">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: CORAL }}
            >
              Programa completo
            </p>
            <h3 className="mt-1.5 font-cinzel text-xl leading-tight text-ink sm:text-2xl">
              Fair Play 360º
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-soft">
              Integridade, proteção e cultura de paz no esporte
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c3a398]/30 bg-white text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* scroll content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 [scrollbar-width:thin]">
          {/* O que aborda */}
          <div>
            <h4 className="font-cinzel text-lg leading-tight text-ink">
              O que o programa aborda?
            </h4>
            <ul className="mt-4 grid gap-3">
              {[
                "Prevenção à violência, bullying e cyberbullying;",
                "Enfrentamento ao racismo, à injúria racial e à discriminação;",
                "Prevenção ao assédio e à violência psicológica e sexual;",
                "Proteção de crianças e adolescentes;",
                "Gestão de riscos jurídicos e institucionais;",
                "Segurança digital e orientação às famílias;",
                "Criação de canais de escuta e procedimentos para apuração de ocorrências.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: CORAL }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8 pilares */}
          <div className="mt-8 rounded-[1.5rem] border border-[#c3a398]/25 bg-[rgba(220,197,187,0.18)] p-5 sm:p-6">
            <h4 className="font-cinzel text-lg leading-tight text-ink">
              Os 8 pilares do programa
            </h4>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Governança e diagnóstico de riscos",
                "Prevenção da violência e cultura de paz",
                "Enfrentamento ao racismo e à discriminação",
                "Protocolos de apuração de incidentes",
                "Canal seguro de escuta e denúncia",
                "Capacitação dos profissionais",
                "Educação e conscientização dos atletas",
                "Orientação às famílias e à comunidade esportiva",
              ].map((pilar, idx) => (
                <li
                  key={pilar}
                  className="flex gap-3 rounded-2xl bg-white px-4 py-3 text-sm leading-snug text-ink shadow-[0_4px_16px_rgba(37,39,34,0.06)]"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: CORAL }}
                  >
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 font-medium">{pilar}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Como funciona */}
          <div className="mt-8">
            <h4 className="font-cinzel text-lg leading-tight text-ink">Como funciona?</h4>
            <p className="mt-3 text-sm leading-[1.8] text-ink-soft">
              O programa envolve diagnóstico institucional, mapeamento de riscos, elaboração de políticas e protocolos, capacitação, ações educativas, simulações e monitoramento contínuo.
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-ink-soft">
              Conforme os serviços contratados, podem ser desenvolvidos códigos de conduta, políticas de proteção, protocolos de denúncia e apuração, relatórios de conformidade e planos de ação.
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-ink-soft">
              A atuação considera a legislação aplicável, incluindo a Lei Geral do Esporte, o Estatuto da Criança e do Adolescente, as normas de combate ao racismo e ao bullying e a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          {/* Por que escolher */}
          <div className="mt-8 rounded-[1.5rem] border border-[#c3a398]/25 bg-white p-5 sm:p-6">
            <h4 className="font-cinzel text-lg leading-tight text-ink">
              Por que escolher o Fair Play 360º?
            </h4>
            <p className="mt-3 text-sm leading-[1.8] text-ink-soft">
              O diferencial está na <strong className="font-semibold text-ink">prevenção, e não apenas na reação às crises</strong>. O programa auxilia organizações esportivas a identificar vulnerabilidades, definir responsabilidades, padronizar procedimentos, registrar decisões e fortalecer a proteção dos envolvidos.
            </p>
            <div className="mt-5 rounded-2xl bg-ink px-5 py-4 text-center">
              <p className="text-sm font-semibold leading-relaxed text-paper">
                Proteja pessoas. Fortaleça sua instituição.
              </p>
              <p className="mt-2 text-sm italic leading-relaxed text-paper/80">
                Fair Play não é apenas uma regra do jogo. É uma cultura que precisa existir dentro e fora de campo.
              </p>
            </div>
          </div>

          {/* CTA no modal */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#c3a398]/20 pt-6 sm:flex-row">
            <p className="text-sm font-medium text-ink">
              Quer implementar na sua instituição?
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-[#C97B76]"
            >
              Falar com a equipe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resultados() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Section
        id="resultados"
        tone="cream"
        className="relative isolate overflow-hidden py-10 lg:py-14"
      >
        {/* backdrop suave */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-48 top-[-6rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(230,155,151,0.16)_0%,rgba(230,155,151,0.05)_45%,transparent_72%)] blur-2xl" />
          <div className="absolute -left-56 bottom-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(195,163,152,0.12)_0%,rgba(195,163,152,0.04)_46%,transparent_72%)] blur-2xl" />
          <div className="absolute -right-32 top-[14%] hidden h-[26rem] w-[26rem] rounded-full border border-[#c3a398]/20 lg:block" />
          <div className="absolute -right-16 top-[20%] hidden h-[18rem] w-[18rem] rounded-full border border-[#E69B97]/25 lg:block" />
        </div>

        <div className="relative z-10">
          {/* Tag + Título */}
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-gradient-to-r from-[#E69B97] to-[#c3a398]" />
                <span className="eyebrow" style={{ color: CORAL }}>
                  Programa exclusivo
                </span>
                <span className="h-px w-8 bg-gradient-to-r from-[#c3a398] to-[#E69B97] lg:hidden" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-center font-cinzel text-[32px] font-normal leading-none tracking-tight text-ink sm:text-[42px] lg:text-left lg:text-[44px]">
                FAIR PLAY <span style={{ color: CORAL }}>360º</span>
              </h2>
              <p
                className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm lg:text-left"
                style={{ color: ROSE_TEXT }}
              >
                Integridade, proteção e cultura de paz no esporte
              </p>
            </Reveal>
          </div>

          {/* Card principal */}
          <Reveal delay={140}>
            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[2rem] border border-[#c3a398]/30 bg-white shadow-[0_12px_32px_rgba(37,39,34,0.07)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Esquerda - texto */}
              <div className="p-6 sm:p-8 lg:p-9">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: CORAL }}>
                  Renata Souza Consultoria Jurídica e Auditoria
                </p>

                <p className="mt-4 text-base leading-[1.8] text-ink-soft">
                  O <strong className="font-semibold text-ink">Fair Play 360º</strong>, desenvolvido pela Renata Souza Consultoria Jurídica e Auditoria, é um programa de consultoria preventiva voltado à gestão de riscos jurídicos, prevenção da violência, combate ao racismo e à injúria racial e proteção de crianças e adolescentes no ambiente esportivo.
                </p>

                <p className="mt-4 text-base leading-[1.8] text-ink-soft">
                  Destinado a{" "}
                  <strong className="font-semibold text-ink">
                    clubes, SAFs, escolinhas, associações esportivas, academias e projetos sociais
                  </strong>
                  , o programa promove ambientes mais seguros por meio de políticas institucionais, protocolos de atuação e capacitação.
                </p>

                <button
                  onClick={() => setIsOpen(true)}
                  className="group mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-[#E69B97] hover:text-[#C97B76]"
                >
                  Continuar lendo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Direita - visual / pilares preview */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[rgba(220,197,187,0.18)] p-6 sm:p-8 lg:p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E69B97]/20"
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ROSE_TEXT }}>
                    8 pilares
                  </p>
                  <ul className="mt-4 grid gap-2.5">
                    {[
                      "Governança e diagnóstico de riscos",
                      "Prevenção da violência e cultura de paz",
                      "Enfrentamento ao racismo",
                      "Protocolos e canal seguro de escuta",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-ink shadow-sm">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                    <li className="pl-1 text-xs font-medium italic text-ink-soft">+ 4 pilares no programa completo</li>
                  </ul>
                </div>

                <div className="relative mt-6 rounded-2xl bg-ink px-5 py-4">
                  <p className="text-sm font-medium leading-snug text-paper">Prevenção, e não só reação à crise.</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/70">Vulnerabilidades mapeadas, procedimentos padronizados.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* selo inferior */}
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-5xl text-center text-xs leading-relaxed text-ink-soft lg:text-left">
              Baseado na Lei Geral do Esporte, ECA, normas de combate ao racismo e bullying e LGPD.
            </p>
          </Reveal>
        </div>
      </Section>

      <FairPlayModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
