const Certifications = () => {
  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford Online",
      year: "2025",
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2025",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Skill Builder",
      year: "2025",
    },
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-6xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 gradient-text">Certifications</h2>
          <div className="w-32 h-[1px] bg-foreground/30 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`reveal stagger-${(index % 5) + 1} group p-6 md:p-8 bg-card border border-border hover:border-foreground/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/25 cursor-pointer glow-card rounded-xl`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-xs font-light text-muted-foreground tracking-wider uppercase">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://linkedin.com/in/seventie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm tracking-wider uppercase">View all on LinkedIn</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;