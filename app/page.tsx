import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutBrief from "./components/AboutBrief";
import OvocioHighlight from "./components/OvocioHighlight";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutBrief />
        <OvocioHighlight />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
