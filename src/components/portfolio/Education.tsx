const Education = () => {
  const academicJourney = [
    {
      year: "2023 - Present",
      title: "B.Tech CSE",
      institution: "Amrita Vishwa Vidyapeetham",
      description: "Paving my path into the tech verse.",
      highlight: false,
    },
    {
      year: "2021 - 2023",
      title: "Intermediate (11th & 12th)",
      institution: "Excellencia Junior College, Hyderabad",
      description: "981/1000 in State Board | 95.87 Percentile in JEE Mains | AIR 270 in AEEE",
      highlight: false,
    },
    {
      year: "2011 - 2021",
      title: "Primary & Secondary",
      institution: "Vasavi VidyaNikethan , Cumbum",
      description: "Built strong fundamentals & curiosity for tech.",
      highlight: false,
    },
  ];

  const sportsLeadership = [
    {
      year: "2025",
      title: "Head Coordinator of CSE Department",
      institution: "Gokulashtami 2025, Amrita",
      description: "Led CSE department for tech & cultural events.",
      highlight: false,
    },
    {
      year: "2025",
      title: "Western Group Music Winner",
      institution: "Amrita Vishwa Vidyapeetham",
      description: "Won first place in Western Group Music.",
      highlight: false,
    },
    {
      year: "2021 - 2023",
      title: "Music Enthusiast & Football",
      institution: "Intermediate Years",
      description: "Actively participated in music and football.",
      highlight: false,
    },
    {
      year: "2017 - 2020",
      title: "Athletics",
      institution: "School Years",
      description: "Active participant in school athletics.",
      highlight: false,
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-7xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Education & Achievements</h2>
          <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Academic Journey */}
          <div className="space-y-8 md:space-y-12 reveal-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">Academic Journey</h3>

            {academicJourney.map((item, index) => (
              <div
                key={index}
                className={`reveal stagger-${index + 1} border-l-2 border-border pl-6 relative py-4 hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 hover:shadow-md`}
              >
                <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full ${item.highlight ? 'bg-primary' : 'bg-foreground'}`}></div>
                <p className="text-sm font-light text-muted-foreground mb-2">{item.year}</p>
                <h4 className={`text-xl md:text-2xl font-semibold mb-2 ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {item.title}
                </h4>
                <p className="text-base md:text-lg text-muted-foreground mb-2">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Sports & Leadership */}
          <div className="space-y-8 md:space-y-12 reveal-right">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-accent">Sports & Leadership</h3>

            {sportsLeadership.map((item, index) => (
              <div
                key={index}
                className={`reveal stagger-${index + 1} border-l-2 border-accent/30 pl-6 relative py-4 hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 hover:shadow-md`}
              >
                <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full ${item.highlight ? 'bg-accent' : 'bg-foreground'}`}></div>
                <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                <h4 className={`text-xl md:text-2xl font-semibold mb-2 ${item.highlight ? 'text-accent' : 'text-foreground'}`}>
                  {item.title}
                </h4>
                <p className="text-base md:text-lg text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;