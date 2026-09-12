import Reveal from "./Reveal";

/* ------------------------------------------------------------------
   SECTION PODCAST — "Em Boa Companhia"
   Cabeçalho no mesmo padrão das outras seções (igual ao de Palestras):
   tracejado + eyebrow, título font-cinzel em ink com destaque coral e
   o texto logo abaixo — tudo alinhado à esquerda.
------------------------------------------------------------------ */

/* links oficiais do podcast "Em Boa Companhia" */
const PODCAST_SPOTIFY =
  "https://open.spotify.com/show/033ExO6uBkJ1nuWdc792EY?si=-B1EkBVQSACFsxbyP2fF-Q";
const PODCAST_YOUTUBE =
  "https://youtube.com/@emboacampanhiapodcast?si=Kt_ugG8qRDmjmZsn";
/* se quiser recolocar algum dia:
   https://www.instagram.com/emboacompanhiapodcast/ */

/* paleta coral (harmoniza com o creme e o verde do site)
   ROSE      → coral principal: destaque do título, botão, fundo
   ROSE_DEEP → coral escuro: hover do botão (precisa ser mais forte)     */
const ROSE = "#E69B97";
const ROSE_DEEP = "#C97B76";

/* alturas (em px) das barrinhas de áudio que decoram o fundo */
const ONDA_A = [10, 18, 8, 26, 14, 22, 12, 30, 16, 10, 24, 12];
const ONDA_B = [14, 24, 10, 18, 30, 12, 20, 8, 26, 14, 10, 22];

const InstagramIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const SpotifyIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.62.62 0 0 1-.85.21c-2.36-1.44-5.31-1.76-8.8-.96a.62.62 0 0 1-.29-1.21c3.83-.87 7.09-.5 9.73 1.12.3.18.4.57.21.84Zm1.22-2.75a.78.78 0 0 1-1.07.26c-2.7-1.66-6.8-2.14-9.99-1.17a.78.78 0 0 1-.45-1.49c3.62-1.1 8.13-.57 11.2 1.32.36.22.48.69.25 1.08Zm.13-2.86C14.53 8.49 9.29 8.32 6.07 9.3a.93.93 0 1 1-.54-1.79c3.69-1.12 9.53-.91 13.29 1.28a.93.93 0 0 1-.95 1.61Z" />
  </svg>
);

const YouTubeIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10.5 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none" />
  </svg>
);

/* barrinhas de waveform — decorativo */
function Onda({ alturas, className = "" }: { alturas: number[]; className?: string }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {alturas.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}px` }}
          className="w-[3px] rounded-full bg-ink/20"
        />
      ))}
    </div>
  );
}

/* brilho de quatro pontas */
function Brilho({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 2v36M2 20h36M6 6l28 28M34 6L6 34"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* microfone — bem apagado, só para dar o tema da seção */
function Microfone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className}>
      <rect
        x="42"
        y="10"
        width="36"
        height="76"
        rx="18"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M28 78a32 32 0 0 0 64 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M60 110v34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M40 168h40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 46h20M50 60h20M50 74h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ============ FUNDO DECORATIVO DA SEÇÃO ============
   Fundo NEUTRO, no mesmo clima das outras seções: manchas em tinta
   apagada + verde-sálvia, sem nenhuma mancha coral.
   O coral (ROSE) agora aparece só no texto/botão — tracejado,
   eyebrow "Podcast", destaque do título e botão.
   Se quiser um pingo de coral de volta no fundo, troque as classes
   bg-ink/[0.05] e bg-sage/20 por bg-[#E69B97]/20.
==================================================== */
function PodcastBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* manchas neutras de cor */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-ink/[0.05] blur-3xl" />
      <div className="absolute -right-28 -bottom-28 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/[0.04] blur-3xl" />
      {/* toque de verde, mantendo a harmonia com o resto do site */}
      <div className="absolute -left-16 bottom-8 h-40 w-40 rounded-full bg-sage/15 blur-3xl" />

      {/* anéis concêntricos — traço neutro */}
      <div className="absolute -left-10 top-[12%] h-[13rem] w-[13rem] rounded-full border border-ink/[0.08]" />
      <div className="absolute -left-2 top-[19%] h-[8rem] w-[8rem] rounded-full border border-sage/25" />
      <div className="absolute -right-14 bottom-[10%] h-[16rem] w-[16rem] rounded-full border border-ink/[0.07]" />
      <div className="absolute right-[2%] bottom-[18%] h-[10rem] w-[10rem] rounded-full border border-sage/20" />

      {/* moldura de "post" inclinada, como no Instagram */}
      <div className="absolute -right-10 top-[8%] h-[13rem] w-[13rem] rotate-[10deg] rounded-[2.5rem] border border-ink/[0.07]" />
      <div className="absolute -right-2 top-[13%] h-[9rem] w-[9rem] rotate-[10deg] rounded-[2rem] border border-sage/20" />

      {/* grade de pontinhos nas laterais — cinza quente, quase invisível */}
      <div
        className="absolute inset-y-0 right-0 w-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(52,59,52,0.16) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(52,59,52,0.16) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      {/* traços finos em cima e embaixo */}
      <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
      <div className="absolute inset-x-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />

      {/* barrinhas de áudio (waveform) */}
      <Onda alturas={ONDA_A} className="absolute left-[6%] top-[26%] opacity-70" />
      <Onda alturas={ONDA_B} className="absolute right-[7%] top-[62%] opacity-60" />

      {/* microfone apagado */}
      <Microfone className="absolute -bottom-6 left-[8%] hidden w-[7rem] text-ink opacity-[0.09] lg:block" />
      <Microfone className="absolute -top-10 right-[10%] hidden w-[6rem] -scale-x-100 rotate-12 text-ink opacity-[0.08] lg:block" />

      {/* brilhos de quatro pontas */}
      <Brilho className="absolute right-[16%] top-[18%] h-6 w-6 text-sage-deep opacity-30" />
      <Brilho className="absolute bottom-[22%] left-[13%] h-4 w-4 text-sage-deep opacity-25" />
      <Brilho className="absolute left-[46%] top-[8%] h-3 w-3 text-sage-deep opacity-25" />
    </div>
  );
}

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="relative isolate overflow-hidden border-y border-line bg-paper"
    >
      <PodcastBackdrop />

      <div className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-5xl py-16 sm:py-20 lg:w-[calc(100%-4rem)] lg:py-24">
        {/* bloco de texto alinhado à esquerda, igual às outras seções */}
        <div className="max-w-3xl text-left">
          {/* eyebrow — mesmo padrão de Palestras, tracejado em coral sólido */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E69B97]" />
            <span className="eyebrow text-[#E69B97]">Podcast</span>
          </div>

          <Reveal delay={80}>
            <h2 className="font-cinzel text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Em Boa{" "}
              {/* destaque em coral sólido */}
              <span style={{ color: ROSE }}>Companhia</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-ink-soft">
              As conversas mais importantes da vida nem sempre têm roteiro,
              câmera ou plateia — às vezes, são só duas amigas e um café. É o
              caso de{" "}
              <span className="font-medium text-ink">Renata e Letícia</span>,
              amigas de infância que compartilham mais de 35 anos de histórias,
              desafios, conquistas, dúvidas, risadas e aprendizados.
            </p>

            <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-ink-soft">
              Foi dessa troca — de uma boa conversa capaz de mudar o jeito de
              enxergar um problema, aliviar um peso e trazer coragem — que
              nasceu o{" "}
              <span className="font-medium text-ink">Em Boa Companhia</span>:
              um espaço para conversas sinceras sobre a vida real, com leveza,
              profundidade e verdade.
            </p>
          </Reveal>

          {/* botões — Spotify (coral sólido) e YouTube (contorno coral).
              No mobile ficam empilhados e CENTRALIZADOS (~80% da largura);
              do sm para cima voltam à posição original, à esquerda.
              Altura mínima de 44px. */}
          <Reveal delay={220}>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
              <a
                href={PODCAST_SPOTIFY}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvir o podcast Em Boa Companhia no Spotify (abre em nova aba)"
                className="inline-flex min-h-11 w-[80%] items-center justify-center gap-2.5 rounded-[7px] bg-[#E69B97] px-8 py-3 text-[14px] font-semibold leading-none text-[#343b34] shadow-[0_6px_16px_-12px_rgba(230,155,151,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C97B76] hover:text-cream hover:shadow-[0_10px_20px_-12px_rgba(230,155,151,.75)] sm:w-auto"
              >
                <SpotifyIcon className="h-4 w-4" />
                Ouvir no Spotify
              </a>

              <a
                href={PODCAST_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvir o podcast Em Boa Companhia no YouTube (abre em nova aba)"
                className="inline-flex min-h-11 w-[80%] items-center justify-center gap-2.5 rounded-[7px] border border-[#E69B97] bg-transparent px-8 py-3 text-[14px] font-semibold leading-none text-[#9c7a70] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C97B76] hover:bg-[#E69B97] hover:text-[#343b34] sm:w-auto"
              >
                <YouTubeIcon className="h-4 w-4" />
                Ouvir no YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
