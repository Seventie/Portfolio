import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import IntroAnimation from "@/components/portfolio/IntroAnimation";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import TechStack from "@/components/portfolio/TechStack";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Toaster } from "@/components/ui/toaster";
import Research from "@/components/portfolio/Research";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize scroll reveal animations
  useScrollReveal();

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

      // Re-initialize scroll reveal after intro completes
      setTimeout(() => {
        const revealElements = document.querySelectorAll(
          ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          }
        );

        revealElements.forEach((el) => observer.observe(el));
      }, 100);

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
        <Research />
        <Projects />
        <Education />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;