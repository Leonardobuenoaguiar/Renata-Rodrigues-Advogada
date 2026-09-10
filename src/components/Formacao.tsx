import Reveal from "./Reveal";

const formacao = [
  {
    n: "01",
    t: "Graduação em Direito",
    i: "Universidade Cândido Mendes",
  },
  {
    n: "02",
    t: "Pós-graduação em Proteção de Dados e Direito Digital",
    i: "Universidade São Judas Tadeu",
  },
  {
    n: "03",
    t: "Pós-graduação em Auditoria Interna, Compliance e Controladoria",
    i: "PUC-RS",
  },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/renata-rodrigues-de-souza-advogada/";

/* cor do sombreado verde (swatch fornecido) */
const GREEN = "56,68,59"; // #38443b

export default function Formacao() {
  return (
    <section id="formacao" className="overflow-hidden bg-paper">
      <div className="relative isolate min-h-[580px] overflow-hidden border-y border-line bg-paper lg:min-h-[555px]">
        <img
          src="/formacao.jpg"
          alt="Formação e experiência profissional de Renata Rodrigues de Souza"
          loading="lazy"
          className="absolute inset-x-0 top-0 -z-30 h-[300px] w-full object-cover object-[65%_center] saturate-[.78] sm:h-[355px] lg:inset-0 lg:h-full lg:object-[72%_center]"
        />

        {/* mobile: a foto derrete no sombreado verde (fade na altura da foto) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-20 h-[300px] bg-[linear-gradient(180deg,rgba(56,68,59,0)_0%,rgba(56,68,59,.14)_46%,rgba(56,68,59,.72)_74%,rgb(56,68,59)_100%)] sm:h-[355px] lg:hidden"
        />
        {/* mobile: painel verde sólido atrás dos textos */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-20 top-[300px] bg-[#38443b] sm:top-[355px] lg:hidden"
        />
        {/* desktop: sombreado verde lateral, dissolvendo sobre a foto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 hidden bg-[linear-gradient(90deg,rgb(56,68,59)_0%,rgba(56,68,59,.97)_45%,rgba(56,68,59,.92)_60%,rgba(56,68,59,.35)_80%,rgba(56,68,59,.15)_100%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden w-[15%] bg-gradient-to-l from-[#38443b]/45 to-transparent lg:block"
        />

        <div className="relative mx-auto flex min-h-[580px] w-[calc(100%-2.5rem)] max-w-[1135px] items-start pt-[318px] pb-16 sm:pt-[375px] lg:min-h-[555px] lg:w-[calc(100%-4rem)] lg:items-center lg:py-14">
          <div className="w-full max-w-[550px]">
            <Reveal>
              <p className="inline-flex min-h-9 items-center border border-paper/70 bg-paper/10 px-7 font-hist text-[15px] font-medium tracking-[0.06em] text-paper [clip-path:polygon(0_0,calc(100%_-_9px)_0,100%_50%,calc(100%_-_9px)_100%,0_100%,9px_50%)]">
                Formação &amp; Experiência
              </p>

              <h2 className="mt-4 max-w-[530px] font-cinzel text-[clamp(1.9rem,3.2vw,3rem)] font-medium leading-[1.12] tracking-tight text-paper">
                Uma trajetória que une{" "}
                <span className="text-sage">Direito e gestão</span>
              </h2>

              <p className="mt-4 max-w-[490px] text-[16px] font-medium leading-[1.8] text-paper/80">
                Mais de 20 anos de experiência profissional, incluindo
                aproximadamente 18 anos na Eletrobras, entre atuação jurídica e
                Auditoria Interna.
              </p>
            </Reveal>

            <div className="mt-6 max-w-[530px]">
              {formacao.map((f, i) => (
                <Reveal key={f.t} delay={120 + i * 80}>
                  <div
                    className={`grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-paper/20 py-3.5 ${
                      i === formacao.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-hist pt-0.5 text-[17px] italic leading-none text-sage">
                      {f.n}
                    </span>

                    <div>
                      <h3 className="font-cinzel text-[1.02rem] font-medium leading-[1.45] tracking-[0.01em] text-paper sm:text-[1.08rem]">
                        {f.t}
                      </h3>
                      <p className="mt-1 text-[13.5px] font-bold leading-relaxed tracking-[0.02em] text-sage">
                        {f.i}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={390}>
              <div className="mt-5 max-w-[510px] border-l-2 border-sage pl-4">
                <p className="text-[15px] font-bold text-paper">
                  Projeto OAB nas Escolas
                </p>
                <p className="mt-1.5 text-[14px] font-medium leading-[1.65] text-paper/75">
                  Atuação voluntária com palestras para comunidades escolares,
                  aproximando o Direito da realidade de escolas, famílias e
                  estudantes.
                </p>
              </div>
            </Reveal>

            {/* redirect para o LinkedIn */}
            <Reveal delay={470}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Renata Rodrigues de Souza no LinkedIn (abre em nova aba)"
                className="group mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2.5 border border-paper/70 bg-paper/10 px-6 font-hist text-[15px] font-semibold tracking-[0.05em] text-paper transition-colors duration-300 [clip-path:polygon(0_0,calc(100%_-_9px)_0,100%_50%,calc(100%_-_9px)_100%,0_100%,9px_50%)] hover:bg-paper hover:text-[#38443b] sm:w-auto sm:justify-start"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
                Conecte-se no LinkedIn
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
