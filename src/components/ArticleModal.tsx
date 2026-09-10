import { useEffect, useRef } from "react";
import type { Article } from "../data/articles";
import BrandImage from "./BrandImage";
import Modal from "./Modal";
import { ArrowRight, ArrowUpRight, Close } from "./icons";

type ArticleModalProps = {
  article: Article | null;
  onClose: () => void;
};

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const readerRef = useRef<HTMLDivElement>(null);
  const hasFullText = Boolean(article?.body.length);

  useEffect(() => {
    if (readerRef.current) readerRef.current.scrollTop = 0;
  }, [article?.id]);

  return (
    <Modal
      open={article !== null}
      onClose={onClose}
      labelledBy="article-dialog-title"
      className="article-dialog"
    >
      {/* Cabeçalho leve: substitui a antiga faixa verde. */}
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line bg-paper px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sage-deep/30 bg-cream">
            <BrandImage className="h-6 w-6 brightness-0 opacity-70" />
          </span>
          <div>
            <p className="eyebrow text-[10px] text-sage-deep">Artigos</p>
            <p className="mt-1 text-xs font-medium tracking-[0.08em] text-ink-soft">
              Leitura jurídica educacional
            </p>
          </div>
        </div>

        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Fechar artigo"
          className="flex h-10 w-10 shrink-0 items-center justify-center text-ink transition-colors duration-300 hover:text-sage-deep"
        >
          <Close className="h-4 w-4" />
        </button>
      </div>

      {article && (
        <div ref={readerRef} className="article-reader min-h-0 overflow-y-auto bg-paper">
          <article className="mx-auto max-w-[740px] px-6 pb-10 pt-9 sm:px-10 sm:pb-12 sm:pt-12">
            <header>
              <p className="eyebrow flex items-center gap-3 text-sage-deep">
                <span className="h-px w-7 bg-sage-deep" />
                {article.category}
              </p>

              <h2
                id="article-dialog-title"
                className="mt-5 font-cinzel text-[1.75rem] leading-[1.28] tracking-tight text-ink sm:text-[2.35rem]"
              >
                {article.title}
              </h2>

              {(article.author || article.publishedAt) && (
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
                  {article.author && <span>Por {article.author}</span>}
                  {article.publishedAt && (
                    <time dateTime={article.publishedAt}>
                      {new Date(
                        `${article.publishedAt}T12:00:00`,
                      ).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                </div>
              )}
            </header>

            {hasFullText ? (
              <div className="space-y-9">
                {article.body.map((section, index) => (
                  <section key={`${article.id}-${index}`}>
                    {section.heading && (
                      <h3 className="border-b border-line pb-3 font-cinzel text-xl leading-snug text-ink sm:text-2xl">
                        {section.heading}
                      </h3>
                    )}
                    <div className={section.heading ? "mt-5 space-y-5" : "space-y-5"}>
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-base leading-[1.9] text-ink sm:text-[17px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <section className="border-t border-line pt-7">
                <h3 className="font-cinzel text-xl leading-snug text-ink">
                  Texto integral ainda não disponibilizado
                </h3>
                <p className="mt-4 text-base leading-[1.85] text-ink-soft">
                  O conteúdo acima é um resumo temático. O texto integral ainda
                  não foi disponibilizado para publicação nesta página.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-ink-soft">
                  Para saber mais sobre este assunto, entre em contato diretamente
                  com Renata pelos canais profissionais.
                </p>
              </section>
            )}

            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sage-deep underline decoration-sage underline-offset-4 transition-colors hover:text-ink"
              >
                Consultar publicação original
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            <footer className="mt-10 border-t border-line pt-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-sage-deep transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Voltar aos artigos
              </button>
            </footer>
          </article>
        </div>
      )}
    </Modal>
  );
}
