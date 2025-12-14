const Hero = () => {
  const skills = [
    "Full Stack Development",
    "UI/UX Design",
    "Cloud Architecture",
    "Problem Solving",
    "Team Leadership",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Skill Tags */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-12 px-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-4 py-2 text-xs font-body tracking-wider uppercase border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-foreground transition-all cursor-default"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* 3D Crystal/Gem Shape */}
      <div className="relative z-10 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <div className="w-64 h-80 md:w-80 md:h-96 animate-float">
          <svg
            viewBox="0 0 200 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
          >
            {/* Crystal/Gem shape */}
            <polygon
              points="100,0 180,80 160,280 40,280 20,80"
              fill="hsl(var(--foreground))"
              opacity="0.9"
            />
            <polygon
              points="100,0 180,80 100,100"
              fill="hsl(var(--foreground))"
              opacity="0.7"
            />
            <polygon
              points="100,0 20,80 100,100"
              fill="hsl(var(--foreground))"
              opacity="0.5"
            />
            <polygon
              points="100,100 180,80 160,280 100,260"
              fill="hsl(var(--foreground))"
              opacity="0.8"
            />
            <polygon
              points="100,100 20,80 40,280 100,260"
              fill="hsl(var(--foreground))"
              opacity="0.6"
            />
            <polygon
              points="100,260 40,280 160,280"
              fill="hsl(var(--foreground))"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;