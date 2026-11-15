import type { ReactNode } from "react";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------
   SECTION PODCAST — "Em Boa Companhia"
   Cabeçalho no mesmo padrão das outras seções (igual ao de Palestras):
   tracejado + eyebrow e título font-cinzel em ink, direto sobre o verde.
   Abaixo, o texto em três cartões creme pequenos (selo escuro + texto),
   no estilo da seção "Nosso diferencial", e por fim os botões.
   Cores iguais às da seção "Nosso diferencial" (verde, creme e ink).
------------------------------------------------------------------ */

/* links oficiais do podcast "Em Boa Companhia" */
const PODCAST_SPOTIFY =
  "https://open.spotify.com/show/033ExO6uBkJ1nuWdc792EY?si=-B1EkBVQSACFsxbyP2fF-Q";
const PODCAST_YOUTUBE =
  "https://youtube.com/@emboacampanhiapodcast?si=Kt_ugG8qRDmjmZsn";
/* se quiser recolocar algum dia:
   https://www.instagram.com/emboacompanhiapodcast/ */

/* cores da seção — as mesmas do print da seção "Nosso diferencial"
   verde  #909677  → fundo da seção
   creme  #F7EEE4  → cartões, botão claro, letra do botão escuro e desenhos do fundo
   ink (tema)      → eyebrow, título, selos dos cartões e botão escuro
   ink-soft (tema) → texto dos cartões
   Não há mais coral nesta seção.                                          */

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

/* ícones dos selos dos cartões (decorativos) */
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

/* cartão pequeno, no estilo dos cartões da seção "Nosso diferencial":
   selo escuro com ícone, um traço fino e o texto */
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

/* barrinhas de waveform — decorativo */
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
   Verde liso (#909677), como no print — sem manchas de cor.
   Os desenhos (anéis, moldura, pontinhos, ondas, microfone e brilhos)
   ficam em creme (#F7EEE4) bem apagado, o mesmo creme dos cartões e das
   bolinhas do print.
==================================================== */
function PodcastBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* anéis concêntricos — traço creme */}
      <div className="absolute -left-10 top-[12%] h-[13rem] w-[13rem] rounded-full border border-[#F7EEE4]/15" />
      <div className="absolute -left-2 top-[19%] h-[8rem] w-[8rem] rounded-full border border-[#F7EEE4]/20" />
      <div className="absolute -right-14 bottom-[10%] h-[16rem] w-[16rem] rounded-full border border-[#F7EEE4]/15" />
      <div className="absolute right-[2%] bottom-[18%] h-[10rem] w-[10rem] rounded-full border border-[#F7EEE4]/20" />

      {/* moldura de "post" inclinada, como no Instagram */}
      <div className="absolute -right-10 top-[8%] h-[13rem] w-[13rem] rotate-[10deg] rounded-[2.5rem] border border-[#F7EEE4]/15" />
      <div className="absolute -right-2 top-[13%] h-[9rem] w-[9rem] rotate-[10deg] rounded-[2rem] border border-[#F7EEE4]/20" />

      {/* grade de pontinhos nas laterais — creme, quase invisível */}
      <div
        className="absolute inset-y-0 right-0 w-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(247,238,228,0.3) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(247,238,228,0.3) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      {/* barrinhas de áudio (waveform) — quase invisíveis nas telas em que
          passariam por trás do texto; aparecem de verdade nas telas largas */}
      <Onda alturas={ONDA_A} className="absolute left-[4%] top-[26%] opacity-20 xl:opacity-70" />
      <Onda alturas={ONDA_B} className="absolute right-[7%] top-[62%] opacity-20 lg:opacity-60" />

      {/* microfone apagado */}
      <Microfone className="absolute -bottom-6 left-[2%] hidden w-[7rem] text-[#F7EEE4] opacity-[0.16] xl:block" />
      <Microfone className="absolute -top-10 right-[10%] hidden w-[6rem] -scale-x-100 rotate-12 text-[#F7EEE4] opacity-[0.14] lg:block" />

      {/* brilhos de quatro pontas */}
      <Brilho className="absolute right-[16%] top-[18%] h-6 w-6 text-[#F7EEE4] opacity-30" />
      <Brilho className="absolute bottom-[22%] left-[13%] h-4 w-4 text-[#F7EEE4] opacity-25" />
      <Brilho className="absolute left-[46%] top-[8%] h-3 w-3 text-[#F7EEE4] opacity-25" />
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
        {/* cabeçalho alinhado à esquerda, igual às outras seções */}
        <div className="max-w-3xl text-left">
          {/* eyebrow — mesmo padrão de Palestras; tracejado e texto em ink.
              A cor fica no pai e o eyebrow herda por style, que vence a cor
              própria da classe .eyebrow */}
          <div className="mb-3 flex items-center gap-3 text-ink">
            <span className="h-px w-8 bg-current" />
            <span className="eyebrow" style={{ color: "inherit" }}>Podcast</span>
          </div>

          <Reveal delay={80}>
            <h2 className="font-cinzel text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Em Boa{" "}
              {/* sem cor de destaque: título todo em ink, como no print */}
              <span>Companhia</span>
            </h2>
          </Reveal>
        </div>

        {/* o texto em três cartões pequenos, no estilo dos cartões da seção
            "Nosso diferencial": selo escuro com ícone + texto.
            MOBILE: um embaixo do outro | TABLET: 2 + 1 | DESKTOP: 3 lado a lado */}
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

        {/* botões — Spotify (ink com letra creme) e YouTube (creme com letra ink);
            no hover, cada um troca para as cores do outro.
            No mobile ficam empilhados e CENTRALIZADOS (~80% da largura);
            do sm para cima ficam lado a lado, à esquerda.
            Altura mínima de 44px. */}
        <Reveal delay={320}>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
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
