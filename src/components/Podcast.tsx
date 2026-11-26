"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";

const PODCAST_SPOTIFY =
  "https://open.spotify.com/show/033ExO6uBkJ1nuWdc792EY?si=-B1EkBVQSACFsxbyP2fF-Q";
const PODCAST_YOUTUBE =
  "https://youtube.com/@emboacampanhiapodcast?si=Kt_ugG8qRDmjmZsn";
const PODCAST_VIDEO_ID = "a1ZfPuw0joM";
// Coloque doutorarenata.png na pasta public do projeto.
const PODCAST_VIDEO_THUMB = "/doutorarenata.png";

const ONDA_A = [10, 18, 8, 26, 14, 22, 12, 30, 16, 10, 24, 12];
const ONDA_B = [14, 24, 10, 18, 30, 12, 20, 8, 26, 14, 10, 22];

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

const CoffeeIcon = ({ className = "" }) => (
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
    <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
    <path d="M16 10.5h1.2a2.6 2.6 0 0 1 0 5.2H15.7" />
    <path d="M8 3.5v2.2M12 3.5v2.2" />
  </svg>
);

const FriendsIcon = ({ className = "" }) => (
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
    <circle cx="8.5" cy="8" r="3" />
    <path d="M2.8 19.5a5.7 5.7 0 0 1 11.4 0" />
    <circle cx="16.8" cy="9" r="2.5" />
    <path d="M16.8 14a4.7 4.7 0 0 1 4.6 5.5" />
  </svg>
);

const MicIcon = ({ className = "" }) => (
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
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
    <path d="M12 17.5V21" />
    <path d="M8.5 21h7" />
  </svg>
);

function Cartao({ icone, children }: { icone: ReactNode; children: ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-[7px] bg-[#F7EEE4] p-6 shadow-[0_6px_14px_rgba(37,39,34,0.22)]">
      <div aria-hidden="true" className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-[#F7EEE4]">
          {icone}
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{children}</p>
    </article>
  );
}

function Onda({ alturas, className = "" }: { alturas: number[]; className?: string }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {alturas.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}px` }}
          className="w-[3px] rounded-full bg-[#F7EEE4]/35"
        />
      ))}
    </div>
  );
}

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
      <path d="M40 168h40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M50 46h20M50 60h20M50 74h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PodcastBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-10 top-[12%] h-[13rem] w-[13rem] rounded-full border border-[#F7EEE4]/15" />
      <div className="absolute -left-2 top-[19%] h-[8rem] w-[8rem] rounded-full border border-[#F7EEE4]/20" />
      <div className="absolute -right-14 bottom-[10%] h-[16rem] w-[16rem] rounded-full border border-[#F7EEE4]/15" />
      <div className="absolute right-[2%] bottom-[18%] h-[10rem] w-[10rem] rounded-full border border-[#F7EEE4]/20" />

      <div className="absolute -right-10 top-[8%] h-[13rem] w-[13rem] rotate-[10deg] rounded-[2.5rem] border border-[#F7EEE4]/15" />
      <div className="absolute -right-2 top-[13%] h-[9rem] w-[9rem] rotate-[10deg] rounded-[2rem] border border-[#F7EEE4]/20" />

      <div
        className="absolute inset-y-0 right-0 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(247,238,228,0.3) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(247,238,228,0.3) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      <Onda alturas={ONDA_A} className="absolute left-[4%] top-[26%] opacity-20 xl:opacity-70" />
      <Onda alturas={ONDA_B} className="absolute right-[7%] top-[62%] opacity-20 lg:opacity-60" />

      <Microfone className="absolute -bottom-6 left-[2%] hidden w-[7rem] text-[#F7EEE4] opacity-[0.16] xl:block" />
      <Microfone className="absolute -top-10 right-[10%] hidden w-[6rem] -scale-x-100 rotate-12 text-[#F7EEE4] opacity-[0.14] lg:block" />

      <Brilho className="absolute right-[16%] top-[18%] h-6 w-6 text-[#F7EEE4] opacity-30" />
      <Brilho className="absolute bottom-[22%] left-[13%] h-4 w-4 text-[#F7EEE4] opacity-25" />
      <Brilho className="absolute left-[46%] top-[8%] h-3 w-3 text-[#F7EEE4] opacity-25" />
    </div>
  );
}

/* Capa personalizada; o player só é carregado após o clique. */
function PodcastVideo() {
  const [reproduzindo, setReproduzindo] = useState(false);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative aspect-video overflow-hidden rounded-[10px] bg-ink shadow-[0_10px_30px_rgba(37,39,34,0.25)]">
        {reproduzindo ? (
          <iframe
            src={`https://www.youtube.com/embed/${PODCAST_VIDEO_ID}?autoplay=1&rel=0`}
            title="Em Boa Companhia — vídeo do podcast"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setReproduzindo(true)}
            aria-label="Reproduzir vídeo do podcast Em Boa Companhia"
            className="group absolute inset-0 block h-full w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#F7EEE4]"
          >
            <img
              src={PODCAST_VIDEO_THUMB}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7EEE4] text-ink shadow-lg transition-colors duration-300 group-hover:bg-ink group-hover:text-[#F7EEE4] sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="relative isolate overflow-hidden bg-[#909677]"
    >
      <PodcastBackdrop />

      <div className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-5xl py-16 sm:py-20 lg:w-[calc(100%-4rem)] lg:py-24">
        <div className="max-w-3xl text-left">
          <div className="mb-3 flex items-center gap-3 text-ink">
            <span className="h-px w-8 bg-current" />
            <span className="eyebrow" style={{ color: "inherit" }}>Podcast</span>
          </div>

          <Reveal delay={80}>
            <h2 className="font-cinzel text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Em Boa <span>Companhia</span>
            </h2>
          </Reveal>
        </div>

        {/* Cards: um por linha no mobile, 2 + 1 no tablet e três no desktop. */}
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
          <Reveal delay={140} className="h-full">
            <Cartao icone={<CoffeeIcon className="h-[18px] w-[18px]" />}>
              As conversas mais importantes da vida nem sempre têm roteiro,
              câmera ou plateia — às vezes, são só duas amigas e um café.
            </Cartao>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <Cartao icone={<FriendsIcon className="h-[18px] w-[18px]" />}>
              É o caso de{" "}
              <span className="font-medium text-ink">Renata e Letícia</span>,
              amigas de infância que compartilham mais de 35 anos de histórias,
              desafios, conquistas, dúvidas, risadas e aprendizados.
            </Cartao>
          </Reveal>

          <Reveal delay={260} className="h-full md:col-span-2 lg:col-span-1">
            <Cartao icone={<MicIcon className="h-[18px] w-[18px]" />}>
              Foi dessa troca — de uma boa conversa capaz de mudar o jeito de
              enxergar um problema, aliviar um peso e trazer coragem — que
              nasceu o{" "}
              <span className="font-medium text-ink">Em Boa Companhia</span>:
              um espaço para conversas sinceras sobre a vida real, com leveza,
              profundidade e verdade.
            </Cartao>
          </Reveal>
        </div>

        {/* Vídeo centralizado abaixo dos cards, com a capa doutorarenata.png. */}
        <Reveal delay={300} className="mt-8 sm:mt-10">
          <PodcastVideo />
        </Reveal>

        {/* Botões centralizados abaixo do vídeo em todas as telas. */}
        <Reveal delay={320}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PODCAST_SPOTIFY}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvir o podcast Em Boa Companhia no Spotify (abre em nova aba)"
              className="inline-flex min-h-11 w-[80%] items-center justify-center gap-2.5 rounded-[7px] bg-ink px-8 py-3 text-[14px] font-semibold leading-none text-[#F7EEE4] shadow-[0_6px_16px_-12px_rgba(37,39,34,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7EEE4] hover:text-ink hover:shadow-[0_10px_20px_-12px_rgba(37,39,34,.75)] sm:w-auto"
            >
              <SpotifyIcon className="h-4 w-4" />
              Ouça no Spotify
            </a>

            <a
              href={PODCAST_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvir o podcast Em Boa Companhia no YouTube (abre em nova aba)"
              className="inline-flex min-h-11 w-[80%] items-center justify-center gap-2.5 rounded-[7px] border border-[#F7EEE4] bg-[#F7EEE4] px-8 py-3 text-[14px] font-semibold leading-none text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-[#F7EEE4] sm:w-auto"
            >
              <YouTubeIcon className="h-4 w-4" />
              Veja no YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
