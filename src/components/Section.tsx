import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "paper" | "sage" | "brand";
};

/** Wrapper de seção com espaçamento e cor de fundo consistentes. */
export default function Section({
  id,
  children,
  className = "",
  tone = "cream",
}: SectionProps) {
  const tones: Record<string, string> = {
    cream: "bg-cream text-ink",
    paper: "bg-paper text-ink",
    sage: "bg-sage text-ink",
    brand: "bg-brand text-ink",
  };
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Cabeçalho padrão das seções — sobretítulo + título + texto. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: HeadingProps) {
  const center = align === "center";
  const titleColor = tone === "light" ? "text-paper" : "text-ink";
  const soft = tone === "light" ? "text-paper" : "text-ink-soft";

  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-brand-deep/70" />
          <span
            className={`eyebrow ${
              tone === "light" ? "text-brand-soft" : "text-brand-dark"
            }`}
          >
            {eyebrow}
          </span>
          {center && <span className="h-px w-8 bg-brand-deep/70" />}
        </div>
      )}
      <h2
        className={`font-cinzel text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-[2.7rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-[1.8] ${soft} ${
            center ? "mx-auto max-w-xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
