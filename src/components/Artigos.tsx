import { useRef, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { articles, type Article } from "../data/articles";
import ArticleModal from "./ArticleModal";
import { ArrowRight } from "./icons";

export default function Artigos() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  function getStep() {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("[data-article-card]");
    return card ? card.offsetWidth + 28 : 320;
  }

  function move(direction: number) {
    carouselRef.current?.scrollBy({
      left: direction * getStep(),
      behavior: "smooth",
    });
  }

  function goTo(index: number) {
    carouselRef.current?.scrollTo({
      left: index * getStep(),
      behavior: "smooth",
    });
  }

  function updateActive() {
    const carousel = carouselRef.current;
    if (!carousel) return;
    setActive(Math.min(Math.round(carousel.scrollLeft / getStep()), articles.length - 1));
  }

  return (
    <>
      {/* Mesmo fundo da section Serviços */}
      <Section id="artigos" tone="paper" className="py-12 lg:py-16">
        <Reveal>
          <div className="text-center">
            <h2 className="font-cinzel text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.7rem]">
              Artigos recentes
            </h2>
            <span className="mx-auto mt-5 block h-px w-12 bg-sage-deep/60" />
          </div>
        </Reveal>

        {/* Mecânica de carrossel igual à de Diferenciais; visual original dos cards. */}
        <Reveal delay={100} className="mt-12">
          <div className="relative">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver artigos anteriores"
              className="absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-paper p-2 text-sage-deep shadow-sm transition-colors hover:border-sage hover:bg-sage hover:text-cream lg:flex"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>

            <div
              id="article-list"
              ref={carouselRef}
              onScroll={updateActive}
              className="flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {articles.map((article, i) => (
                <Reveal
                  key={article.id}
                  delay={(i % 3) * 80}
                  className="min-w-[84vw] snap-start sm:min-w-[calc((100%_-_1.75rem)_/_2)] lg:min-w-[calc((100%_-_3.5rem)_/_3)]"
                >
                  <article
                    data-article-card
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-sage"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-sage-deep">
                        {article.category}
                      </p>

                      <h3 className="font-cinzel text-xl leading-[1.45] tracking-tight text-ink">
                        {article.title}
                      </h3>

                      <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-ink-soft">
                        {article.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        aria-haspopup="dialog"
                        aria-label={`Leia o artigo: ${article.title}`}
                        className="mt-6 inline-flex min-h-12 items-center justify-between gap-2 border-t border-line pt-4 text-left text-sm font-semibold text-sage-deep transition-colors hover:text-ink"
                      >
                        Leia o artigo
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Ver próximos artigos"
              className="absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-paper p-2 text-sage-deep shadow-sm transition-colors hover:border-sage hover:bg-sage hover:text-cream lg:flex"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {articles.map((article, i) => (
              <button
                key={article.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver artigo ${i + 1}: ${article.title}`}
                aria-current={active === i ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-sage-deep" : "w-1.5 bg-sage/50 hover:bg-sage-deep"
                }`}
              />
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver artigos anteriores"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage-deep"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Ver próximos artigos"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage-deep"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </Section>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
