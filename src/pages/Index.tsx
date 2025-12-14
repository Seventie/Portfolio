import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import IntroAnimation from "@/components/portfolio/IntroAnimation";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import TechStack from "@/components/portfolio/TechStack";
import Contact from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (introComplete) {
      // Initialize Lenis smooth scroll after intro
      const lenis = new Lenis({
        duration: 1.3,
        smoothWheel: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [introComplete]);

  return (
    <div className="min-h-screen bg-background">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      
      <Header visible={introComplete} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <TechStack />
        <Contact />
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;