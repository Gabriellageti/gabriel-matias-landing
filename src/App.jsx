import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import Consulting from "./components/Consulting";
import DashboardGallery from "./components/DashboardGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HumanSide from "./components/HumanSide";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";

export default function App() {
  return (
    <div className="min-h-screen bg-obs-base text-obs-soft">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <DashboardGallery />
        <Skills />
        <HumanSide />
        <Consulting />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
