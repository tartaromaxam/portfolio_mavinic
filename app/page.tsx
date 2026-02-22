import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Banner />
      <About />
      <Services />
      <Tech />
      <Process />
      <Projects />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
