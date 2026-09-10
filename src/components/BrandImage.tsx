import { useState } from "react";
import { brandAssets } from "../data/site";

type BrandImageProps = {
  variant?: keyof typeof brandAssets;
  className?: string;
  eager?: boolean;
};

export default function BrandImage({
  variant = "symbol",
  className = "",
  eager = false,
}: BrandImageProps) {
  const [attempt, setAttempt] = useState(0);
  const sources = brandAssets[variant];

  if (attempt >= sources.length) return null;

  return (
    <img
      src={sources[attempt]}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setAttempt((value) => value + 1)}
      className={`select-none object-contain ${className}`}
    />
  );
}