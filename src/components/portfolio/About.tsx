type AboutProps = {
  splitLayout?: boolean;
};

const About = ({ splitLayout = false }: AboutProps) => {
  const skills = [
    {
      name: "ML",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="24" r="4"></circle>
          <circle cx="24" cy="12" r="4"></circle>
          <circle cx="36" cy="24" r="4"></circle>
          <circle cx="24" cy="36" r="4"></circle>
          <line x1="15" y1="22" x2="21" y2="14"></line>
          <line x1="27" y1="14" x2="33" y2="22"></line>
          <line x1="33" y1="26" x2="27" y2="34"></line>
          <line x1="15" y1="26" x2="21" y2="34"></line>
        </svg>
      ),
    },
    {
      name: "DL",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="8" rx="2"></rect>
          <rect x="12" y="22" width="24" height="8" rx="2"></rect>
          <rect x="16" y="34" width="16" height="8" rx="2"></rect>
        </svg>
      ),
    },
    {
      name: "Computer Vision",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 24s7-10 20-10 20 10 20 10-7 10-20 10S4 24 4 24z"></path>
          <circle cx="24" cy="24" r="5"></circle>
        </svg>
      ),
    },
    {
      name: "NLP",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 10h32v20H20l-8 8v-8H8z"></path>
          <line x1="16" y1="18" x2="32" y2="18"></line>
          <line x1="16" y1="24" x2="28" y2="24"></line>
        </svg>
      ),
    },
    {
      name: "Fullstack",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 10,24 16,30"></polyline>
          <polyline points="32,18 38,24 32,30"></polyline>
          <line x1="22" y1="34" x2="26" y2="14"></line>
          <rect x="14" y="36" width="20" height="8" rx="2"></rect>
        </svg>
      ),
    },
  ];

  const sectionClass = splitLayout
    ? "w-full"
    : "min-h-screen flex items-center justify-center bg-background py-20";
  const containerClass = splitLayout ? "w-full" : "max-w-7xl w-full px-6 md:px-10";
  const skillsClass = splitLayout
    ? "flex justify-start gap-6 md:gap-10 mb-12 flex-wrap"
    : "flex justify-center gap-8 md:gap-16 mb-24 flex-wrap";
  const textGridClass = splitLayout
    ? "grid grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8";
  const introTextClass = splitLayout
    ? "text-foreground reveal-left"
    : "text-foreground md:text-right reveal-left";

  return (
    <section id="about" className={sectionClass}>
      <div className={containerClass}>
        {/* Skills Icons */}
        <div className={skillsClass}>
          {skills.map((skill, index) => {
            const hoverAnimations = [
              "icon-hover-float",
              "icon-hover-pulse",
              "icon-hover-wiggle",
              "icon-hover-float",
              "icon-hover-pulse",
            ];
            return (
              <div
                key={skill.name}
                className={`reveal stagger-${index + 1} flex flex-col items-center group cursor-pointer`}
              >
                <div className={`icon-glow mb-4 text-foreground ${hoverAnimations[index]}`}>{skill.icon}</div>
                <span className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-all duration-300 animated-underline">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Three Column Text */}
        <div className={textGridClass}>
          {/* Column 1 */}
          <div className={introTextClass}>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              Hello, I'm Sattar - an ML & AI Engineer in progress.
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              I focus on building machine learning, deep learning, and diffusion-based systems, working across
              computer vision, NLP, and retrieval-augmented generation (RAG) architectures, with a growing interest
              in agentic and generative AI systems.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-muted-foreground reveal">
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">My Journey</h4>
            <p className="text-base leading-relaxed">
              I've always been curious about how things work - taking apart gadgets, opening devices I probably
              shouldn't have, watching physics videos, and exploring strange ideas about the universe. I'm naturally
              drawn to understanding the "why" behind systems.
            </p>
            <p className="text-base leading-relaxed mt-4">
              That curiosity led me to computer science - a field that blends logic, mathematics, creativity, and
              structured problem-solving. It's where I feel most aligned today, especially while working on ML/DL
              systems and building intelligent, scalable products.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-muted-foreground reveal-right">
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">What Drives Me</h4>
            <p className="text-base leading-relaxed">
              Curiosity is my primary driver - the constant need to learn deeper, think more critically, and go
              beyond surface-level understanding. I enjoy refining my skills as much as acquiring new ones, because
              every improvement expands what I can build.
            </p>
            <p className="text-base leading-relaxed mt-4">
              Equally important is the desire to create long-term impact - to build meaningful systems, grow steadily,
              and justify the trust placed in me by the people who support and believe in my journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
