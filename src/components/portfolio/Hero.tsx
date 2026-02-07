import { useState } from "react";
import ProfileImage from "../../../Profile.jpeg";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Profile Image Container */}
      <div 
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-pointer mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with effects */}
        <div className={`w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-in-out ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          <img
            src= {ProfileImage}
            alt="Shaik Abdus Sattar"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'grayscale' : 'grayscale-0'
            }`}
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
          SHAIK ABDUS SATTAR
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground tracking-wider uppercase">
          ML / AI Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
