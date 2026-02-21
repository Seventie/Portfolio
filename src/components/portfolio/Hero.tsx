import { useState } from "react";
import ProfileImage from "@root/Profile.jpeg";
import AnimatedText from "@/components/AnimatedText";

type HeroProps = {
  splitLayout?: boolean;
};

const Hero = ({ splitLayout = false }: HeroProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div className="w-full flex flex-col items-center md:items-start justify-center gap-8">
      {/* Profile Image Container */}
      <div
        className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] cursor-pointer shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with effects */}
        <div
          className={`w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-in-out ring-2 ring-transparent ${
            isHovered ? "scale-110 ring-foreground/20 shadow-2xl dark:shadow-black/30" : "scale-100"
          }`}
        >
          <img
            src={ProfileImage}
            alt="Shaik Abdus Sattar"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "grayscale" : "grayscale-0"
            }`}
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
          <AnimatedText text="SHAIK ABDUS SATTAR" />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground tracking-wider uppercase text-shimmer">
          ML / AI Engineer
        </p>
      </div>
    </div>
  );

  if (splitLayout) {
    return (
      <section id="hero" className="w-full">
        {content}
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-6 md:px-10"
    >
      <div className="w-full max-w-7xl">{content}</div>
    </section>
  );
};

export default Hero;
