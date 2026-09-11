import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Atuacao from "./components/Atuacao";
import Formacao from "./components/Formacao";
import Servicos from "./components/Servicos";
import Diferencial from "./components/Diferencial";
import Artigos from "./components/Artigos";
import Metodologia from "./components/Metodologia";
import Palestras from "./components/Palestras";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-mont text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:not-sr-only focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:font-semibold"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Atuacao />
        <Formacao />
        <Servicos />
        <Diferencial />
        <Metodologia /> {/* Como funciona */}
        <Palestras />
        <Artigos /> {/* agora mostra os destaques do Instagram */}
        <Contato />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
