import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const introRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    const tl = gsap.timeline();

    // Animate each letter one by one
    letters.forEach((letter, index) => {
      tl.to(letter, {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: "power2.out",
      }, index * 0.15);

      tl.add(() => {
        letter.classList.add("filled");
      }, `>-0.2`);
    });

    // Slash animations
    tl.to(".slash-left", { opacity: 1, duration: 0.3 }, "+=0.3");
    tl.to(".slash-right", { opacity: 1, duration: 0.3 }, "<");

    // Slash split animation
    tl.to(".slash-left", {
      x: -45,
      y: 45,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.2");

    tl.to(".slash-right", {
      x: 45,
      y: -45,
      duration: 0.8,
      ease: "power2.out"
    }, "<");

    // Slash disappear
    tl.to([".slash-left", ".slash-right"], {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "+=0.4");

    // Page scroll up animation
    tl.to(introRef.current, {
      y: "-100vh",
      duration: 2,
      ease: "expo.out",
      onStart: () => {
        gsap.to(letters, { opacity: 0, duration: 0.8, ease: "power2.in" });
      },
      onComplete: () => {
        setIsComplete(true);
        onComplete();
      }
    });

    // Text reappears
    tl.to(letters, {
      opacity: 1,
      duration: 1.5,
      ease: "power1.out"
    }, "-=0.2");

  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div
      ref={introRef}
      className="fixed inset-0 bg-background flex items-center justify-center z-[9999]"
    >
      <svg className="w-[90%] max-w-[900px]" viewBox="0 0 1200 300">
        <g transform="translate(600,150)" textAnchor="middle">
          <text className="letter" dx="-140" dy="-10">D</text>
          <text className="letter" dx="-110" dy="-10">A</text>
          <text className="letter" dx="-80" dy="-10">R</text>
          <text className="letter" dx="-50" dy="-10">E</text>

          <text className="letter" dx="-10" dy="-10">I</text>
          <text className="letter" dx="10" dy="-10">S</text>

          <text className="letter" dx="50" dy="-10">T</text>
          <text className="letter" dx="85" dy="-10">O</text>

          <text className="letter" dx="125" dy="-10">D</text>
          <text className="letter" dx="155" dy="-10">O</text>

          <line className="slash-left" x1="0" y1="-20" x2="-15" y2="0" stroke="currentColor" strokeWidth="3"/>
          <line className="slash-right" x1="0" y1="-20" x2="15" y2="-40" stroke="currentColor" strokeWidth="3"/>
        </g>
      </svg>
    </div>
  );
};

export default IntroAnimation;