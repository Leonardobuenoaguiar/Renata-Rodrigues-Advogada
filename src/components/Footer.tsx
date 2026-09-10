import { nav, site } from "../data/site";
import { Instagram, LinkedIn, Phone } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#343b34] text-paper">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-5">
            <a
              href="#inicio"
              aria-label="Renata Rodrigues de Souza: voltar ao início"
              className="inline-flex max-w-full transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/renata-logofooter.png"
                alt="Renata Rodrigues de Souza — Consultoria Jurídica Educacional"
                loading="lazy"
                decoding="async"
                className="h-auto w-full max-w-[140px] object-contain object-left sm:max-w-[170px]"
              />
            </a>

            <p className="mt-7 max-w-sm text-[15px] leading-[1.8] text-paper">
              Prevenção, compliance, governança e segurança jurídica para
              escolas e instituições de ensino.
            </p>

            <p className="mt-6 max-w-sm text-xs leading-loose tracking-wide text-brand-soft">
              {site.tagline}
            </p>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Navegação
            </h4>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group inline-flex min-h-8 items-center gap-2 text-sm text-paper transition-colors hover:text-brand-soft"
                  >
                    <span className="h-px w-0 bg-brand-soft transition-all duration-300 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Contato
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-paper">
              <li>
                <a
                  href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-brand-soft"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sage" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-7 w-fit max-w-full">
              <div className="flex flex-wrap gap-5">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex min-h-11 items-center gap-2 text-sm text-paper transition-colors hover:text-brand-soft"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex min-h-11 items-center gap-2 text-sm text-paper transition-colors hover:text-brand-soft"
                >
                  <LinkedIn className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/25 py-5">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="text-xs leading-relaxed text-paper/85">
                © {new Date().getFullYear()} Renata Rodrigues de Souza.
                Consultoria Jurídica Educacional. Todos os direitos reservados.
              </p>

              <p className="relative top-8 mt-1.5 hidden text-[10px] leading-relaxed tracking-[0.02em] text-paper/[0.45] lg:block">
                Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/leonardo-bueno-de-aguiar-b8062a212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/[0.58] underline decoration-paper/20 underline-offset-2 transition-colors hover:text-paper/80"
                >
                  Leonardo Aguiar
                </a>
              </p>
            </div>

            {/* Sublogo no canto inferior direito */}
            <img
              src="/sublogo.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-auto w-16 select-none object-contain opacity-90 sm:w-20 lg:mr-24"
            />

            {/* Crédito abaixo do sublogo no mobile */}
            <p className="relative top-3 -mt-3 text-center text-[9px] leading-relaxed tracking-[0.02em] text-paper/[0.45] sm:text-[10px] lg:hidden">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/leonardo-bueno-de-aguiar-b8062a212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/[0.58] underline decoration-paper/20 underline-offset-2 transition-colors hover:text-paper/80"
              >
                Leonardo Aguiar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
