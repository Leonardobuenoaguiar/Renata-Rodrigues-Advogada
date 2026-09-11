const paragraphs = [
  <>
    Renata Rodrigues de Souza é advogada e consultora jurídica educacional, com
    mais de 20 anos de experiência em ambientes corporativos, jurídicos e de
    auditoria.
  </>,
  <>
    Foram aproximadamente 18 anos na Eletrobras, atuando na área jurídica e,
    posteriormente, em Auditoria Interna, com gestão de riscos, compliance,
    controles, processos e governança.
  </>,
  <>
    Hoje dedica-se à consultoria jurídica preventiva para escolas e
    instituições de ensino, com foco na prevenção da judicialização, no
    compliance educacional e na segurança jurídica.
  </>,
];

const highlights = [
  "Mais de 20 anos na área jurídica",
  "Compliance, riscos e governança",
  "Atuação focada no ambiente escolar",
];

export default function About() {
  return (
    <section id="sobre" className="sobre-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

        .sobre-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse 52% 44% at 69% 8%,
              rgba(118, 137, 116, 0.17) 0%,
              rgba(118, 137, 116, 0.05) 42%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 48% 52% at 92% 78%,
              rgba(11, 23, 16, 0.36) 0%,
              transparent 74%
            ),
            radial-gradient(
              ellipse 36% 48% at 7% 86%,
              rgba(105, 123, 105, 0.12) 0%,
              transparent 72%
            ),
            linear-gradient(125deg, #354038 0%, #2d3830 49%, #313b33 100%);
          padding: 70px 0;
        }

        .sobre-section::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: -14%;
          pointer-events: none;
          opacity: 0.78;
          background:
            radial-gradient(
              ellipse 23% 42% at 72% 21%,
              rgba(167, 181, 156, 0.16) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 34% 32% at 54% 55%,
              rgba(137, 155, 133, 0.09) 0%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 27% 48% at 88% 70%,
              rgba(4, 14, 9, 0.28) 0%,
              transparent 72%
            ),
            linear-gradient(
              108deg,
              transparent 21%,
              rgba(157, 173, 148, 0.06) 48%,
              transparent 75%
            );
          filter: blur(26px);
          transform: rotate(-5deg) scale(1.08);
        }

        .sobre-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 887px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Título */
        .sobre-heading {
          border-left: 2px solid rgba(255, 255, 255, 0.6);
          padding-left: 15px;
        }

        .sobre-eyebrow {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .sobre-title {
          margin: 10px 0 0;
          color: #fff;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 45px;
          line-height: 1.07;
        }

        /* Foto e coluna de texto */
        .sobre-row {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .sobre-col-left {
          flex: 0 0 58%;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .sobre-photo {
          width: 92%;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 14px;
        }

        .sobre-photo img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
          border-radius: 14px;
        }

        /* Destaques abaixo da foto */
        .sobre-highlights {
          margin: 16px 0 0;
          max-width: 78%;
          list-style: none;
          padding: 0 0 0 15px;
          border-left: 2px solid rgba(255, 255, 255, 0.6);
        }

        .sobre-highlights li {
          color: #fff;
          font-size: 22px;
          line-height: 35.6px;
          letter-spacing: 0.05em;
        }

        .sobre-highlights li + li {
          margin-top: 8px;
        }

        /* Coluna de texto */
        .sobre-text {
          flex: 1;
          min-width: 0;
          max-width: 42%;
          color: rgba(255, 255, 255, 0.88);
          font-size: 18px;
          line-height: 1.4;
        }

        .sobre-text p {
          margin: 0;
        }

        .sobre-text p + p {
          margin-top: 16px;
        }

        .sobre-sign {
          margin: 40px 0 0 !important;
          color: #fff;
          font-size: 24px;
        }

        .sobre-role {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .sobre-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
          }
        }

        /* Mobile e tablet */
        @media (max-width: 1023px) {
          .sobre-section {
            padding: 52px 0 60px;
          }

          .sobre-container {
            padding: 0 22px;
          }

          .sobre-heading {
            padding-left: 13px;
          }

          .sobre-eyebrow {
            font-size: 10px;
            letter-spacing: 0.18em;
          }

          .sobre-title {
            margin-top: 9px;
            font-size: clamp(1.85rem, 8.2vw, 2.2rem);
            line-height: 1.16;
            letter-spacing: -0.015em;
          }

          .sobre-row {
            margin-top: 30px;
            gap: 34px;
          }

          .sobre-col-left {
            flex: none;
          }

          .sobre-photo img {
            object-position: center;
            border-radius: 14px;
          }

          .sobre-text {
            max-width: 100%;
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            line-height: 1.7;
            letter-spacing: 0.005em;
            text-wrap: pretty;
          }

          .sobre-text p + p {
            margin-top: 20px;
          }

          .sobre-highlights {
            max-width: 100%;
            margin-top: 24px;
            padding-left: 14px;
          }

          .sobre-highlights li {
            font-size: 17px;
            line-height: 1.55;
            letter-spacing: 0;
          }

          .sobre-highlights li + li {
            margin-top: 10px;
          }

          .sobre-sign {
            margin-top: 34px !important;
            font-size: 21px;
            line-height: 1.3;
          }

          .sobre-role {
            margin-top: 10px !important;
            font-size: 10px;
            line-height: 1.5;
            letter-spacing: 0.13em;
          }
        }
      `}</style>

      <div className="sobre-container">
        {/* Título */}
        <div className="sobre-heading">
          <p className="sobre-eyebrow">Sobre Renata</p>

          <h2 className="sobre-title">
            Autoridade jurídica com olhar de gestão de riscos
          </h2>
        </div>

        {/* Foto e conteúdo */}
        <div className="sobre-row">
          <div className="sobre-col-left">
            <div className="sobre-photo">
              <img
                src="/hero.jpg"
                alt="Renata Rodrigues de Souza"
                loading="lazy"
                decoding="async"
              />
            </div>

            <ul className="sobre-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="sobre-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p className="font-hist sobre-sign">Renata Rodrigues de Souza</p>

            <p className="sobre-role">
              Advogada e consultora jurídica educacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}