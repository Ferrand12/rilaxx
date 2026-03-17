import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Sabores from "@/components/sections/Sabores";
import MoodRilaxx from "@/components/sections/MoodRilaxx";
import Comunidad from "@/components/sections/Comunidad";
import Nosotros from "@/components/sections/Nosotros";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sabores />
        <MoodRilaxx />
        <Comunidad />
        <Nosotros />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
