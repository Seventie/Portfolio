const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Your University",
      year: "2020 - 2022",
      description: "Specialized in Software Engineering and Distributed Systems",
    },
    {
      degree: "Bachelor of Technology",
      institution: "Your College",
      year: "2016 - 2020",
      description: "Major in Computer Science with honors",
    },
  ];

  const achievements = [
    { title: "Best Developer Award", organization: "Tech Conference 2023", description: "Recognized for outstanding contributions" },
    { title: "Open Source Contributor", organization: "Major Framework", description: "Top 100 contributors worldwide" },
    { title: "Hackathon Winner", organization: "National Hackathon 2022", description: "First place in innovation category" },
    { title: "Certified Cloud Architect", organization: "AWS", description: "Professional level certification" },
  ];

  const certifications = [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
    { name: "Google Cloud Professional", issuer: "Google" },
    { name: "Meta Frontend Developer", issuer: "Meta" },
    { name: "MongoDB Developer", issuer: "MongoDB Inc." },
  ];

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Background
          </h2>
          <h3 className="font-display text-3xl md:text-4xl text-foreground">
            Education & Achievements
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h4 className="font-display text-xl mb-8 text-foreground border-b border-border pb-4">
              Education
            </h4>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="group">
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    {edu.year}
                  </p>
                  <h5 className="font-display text-lg text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
                    {edu.degree}
                  </h5>
                  <p className="font-body text-sm text-muted-foreground italic mb-2">
                    {edu.institution}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-display text-xl mb-8 text-foreground border-b border-border pb-4">
              Achievements
            </h4>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group flex gap-4">
                  <div className="w-1 bg-foreground/20 group-hover:bg-foreground transition-colors flex-shrink-0" />
                  <div>
                    <h5 className="font-display text-base text-foreground mb-1">
                      {achievement.title}
                    </h5>
                    <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                      {achievement.organization}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h4 className="font-display text-xl mb-8 text-foreground border-b border-border pb-4">
            Certifications
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group p-6 bg-card border border-border hover:border-foreground transition-colors">
                <h5 className="font-display text-sm text-foreground mb-2">
                  {cert.name}
                </h5>
                <p className="font-body text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;