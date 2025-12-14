const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SCSS"],
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
    },
    {
      name: "Tools & Others",
      technologies: ["Git", "Figma", "VS Code", "Postman", "Jira", "Linux"],
    },
  ];

  return (
    <section id="techstack" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Technologies
          </h2>
          <h3 className="font-display text-3xl md:text-4xl text-foreground">
            Tech Stack
          </h3>
        </div>

        {/* Visual Tech Stack Diagram */}
        <div className="mb-20">
          <svg
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-4xl mx-auto"
          >
            {/* Connection lines */}
            <line x1="100" y1="100" x2="250" y2="100" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="300" y1="100" x2="450" y2="100" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="500" y1="100" x2="650" y2="100" stroke="hsl(var(--border))" strokeWidth="2" />
            
            {/* Nodes */}
            <g className="hover:opacity-80 transition-opacity cursor-pointer">
              <circle cx="100" cy="100" r="40" fill="hsl(var(--foreground))" />
              <text x="100" y="105" textAnchor="middle" fill="hsl(var(--background))" fontSize="12" fontWeight="500">Frontend</text>
            </g>
            
            <g className="hover:opacity-80 transition-opacity cursor-pointer">
              <circle cx="300" cy="100" r="40" fill="hsl(var(--foreground))" />
              <text x="300" y="105" textAnchor="middle" fill="hsl(var(--background))" fontSize="12" fontWeight="500">Backend</text>
            </g>
            
            <g className="hover:opacity-80 transition-opacity cursor-pointer">
              <circle cx="500" cy="100" r="40" fill="hsl(var(--foreground))" />
              <text x="500" y="105" textAnchor="middle" fill="hsl(var(--background))" fontSize="12" fontWeight="500">Cloud</text>
            </g>
            
            <g className="hover:opacity-80 transition-opacity cursor-pointer">
              <circle cx="700" cy="100" r="40" fill="hsl(var(--foreground))" />
              <text x="700" y="105" textAnchor="middle" fill="hsl(var(--background))" fontSize="10" fontWeight="500">Deploy</text>
            </g>

            {/* Flow arrows */}
            <polygon points="245,95 255,100 245,105" fill="hsl(var(--muted-foreground))" />
            <polygon points="445,95 455,100 445,105" fill="hsl(var(--muted-foreground))" />
            <polygon points="645,95 655,100 645,105" fill="hsl(var(--muted-foreground))" />
          </svg>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <h4 className="font-display text-lg text-foreground mb-6 pb-3 border-b border-border group-hover:border-foreground transition-colors">
                {category.name}
              </h4>
              <ul className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground/30 group-hover:bg-foreground transition-colors" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;