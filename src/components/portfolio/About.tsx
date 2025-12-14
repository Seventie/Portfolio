const About = () => {
  const skills = [
    {
      name: "Machine Learning",
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
      name: "Cloud / DevOps",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 30h-2a6 6 0 010-12h1a9 9 0 0117-3 7 7 0 013 13h-2"></path>
          <circle cx="24" cy="30" r="3"></circle>
          <line x1="24" y1="33" x2="24" y2="42"></line>
          <circle cx="24" cy="45" r="1"></circle>
        </svg>
      ),
    },
    {
      name: "Full-Stack",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="10" rx="2"></rect>
          <rect x="8" y="22" width="32" height="10" rx="2"></rect>
          <rect x="8" y="34" width="32" height="10" rx="2"></rect>
        </svg>
      ),
    },
    {
      name: "DSA",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="10" r="3"></circle>
          <circle cx="14" cy="24" r="3"></circle>
          <circle cx="34" cy="24" r="3"></circle>
          <circle cx="24" cy="38" r="3"></circle>
          <line x1="24" y1="13" x2="14" y2="22"></line>
          <line x1="24" y1="13" x2="34" y2="22"></line>
          <line x1="24" y1="35" x2="14" y2="26"></line>
          <line x1="24" y1="35" x2="34" y2="26"></line>
        </svg>
      ),
    },
    {
      name: "Leadership",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="12" r="4"></circle>
          <circle cx="14" cy="28" r="3"></circle>
          <circle cx="34" cy="28" r="3"></circle>
          <line x1="24" y1="16" x2="14" y2="25"></line>
          <line x1="24" y1="16" x2="34" y2="25"></line>
          <line x1="14" y1="31" x2="34" y2="31"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-7xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Meet Me</h2>
          <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center gap-8 md:gap-16 mb-24 flex-wrap">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`reveal stagger-${index + 1} flex flex-col items-center group cursor-pointer`}
            >
              <div className="icon-glow mb-4 text-foreground">
                {skill.icon}
              </div>
              <span className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Three Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 */}
          <div className="text-foreground md:text-right reveal-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              Hello, I'm Sattar, an ML & AI Engineer in the making — working with deep learning, computer vision, NLP, and generative AI while exploring agentic systems, RAG architectures, and research-driven approaches to build intelligent, impactful solutions.
            </h3>
          </div>

          {/* Column 2 */}
          <div className="text-muted-foreground reveal">
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">My Journey</h4>
            <p className="text-base leading-relaxed">
              I grew up fascinated by how things work — breaking gadgets, opening stuff I wasn't supposed to open, exploring physics videos, and diving into weird facts about the universe. I like figuring out the "why" behind things. That naturally pushed me toward computer science. It's the perfect mix of logic, math, creativity, and problem-solving — and it's where I feel most at home now, especially with ML and AI.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-muted-foreground reveal-right">
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">What Drives Me</h4>
            <p className="text-base leading-relaxed">
              I'm driven by curiosity — the constant urge to understand more, explore deeper, and push beyond what I already know. Learning new skills and refining the ones I have is something I genuinely enjoy, because every step forward opens up new possibilities. A big part of my motivation also comes from wanting to build a stronger future for myself and for the people who invest their trust in me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;