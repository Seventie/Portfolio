const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Gemstone SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] md:w-[600px] md:h-[675px] pointer-events-none reveal-scale">
        <svg
          viewBox="0 0 200 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ filter: 'grayscale(1) opacity(0.9)' }}
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
    </section>
  );
};

export default Hero;