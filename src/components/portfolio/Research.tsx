const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Clinically-Informed Deep Learning for Radiotherapy QA Prediction",
      duration: "2025 - Present",
      role: "Research Assistant",
      advisors: "Dr. Amit Agarwal (Amrita Vishwa Vidyapeetham), Dr. Rose Kamal (Imperial College London)",
      institution: "Amrita Vishwa Vidyapeetham",
      githubUrl: "",
      points: [
        "Developing clinically-informed CNN and hybrid deep learning models to predict pre-treatment Gamma passing rates from dose maps and Treatment Plan Complexity Metrics to support automated radiotherapy quality assurance.",
        "Designing clinically weighted loss functions and structured experimentation pipelines to improve robustness, interpretability, and evaluation consistency in treatment planning workflows.",
      ],
    },
    {
      id: 2,
      title: "Machine Learning for Treatment Outcome Modeling in Cervical Cancer",
      duration: "2025 - Present",
      role: "Research Assistant",
      advisors:
        "Dr. Amit Agarwal (Amrita Vishwa Vidyapeetham), Dr. Ajay Sasidharan (Amrita Hospitals, Kochi), Dr. Sruthi K (Amrita Hospitals, Kochi)",
      institution: "Amrita Vishwa Vidyapeetham",
      githubUrl: "",
      points: [
        "Building ML models on multimodal clinical and pathological datasets to predict treatment outcomes and support data-driven radiotherapy decision-making.",
        "Preprocessing, feature engineering, and survival analysis workflows to ensure reproducibility and structured evaluation across patient cohorts.",
      ],
    },
    {
      id: 3,
      title: "Efficient 3D Molecular Graph Kernels for Molecular Property Prediction",
      duration: "2026 - Present",
      role: "Research Assistant",
      advisors: "Dr. T. Ramraj (Amrita Vishwa Vidyapeetham)",
      institution: "Amrita Vishwa Vidyapeetham",
      githubUrl: "",
      points: [
        "Developing computationally efficient 3D graph kernel frameworks incorporating bond lengths, bond angles, and torsional features to improve molecular similarity modeling and property prediction.",
        "Investigating scalable 2D-to-3D structural kernel strategies and optimization techniques to reduce computational complexity while preserving spatial expressiveness on large-scale molecular datasets.",
      ],
    },
  ];

  return (
    <section id="research" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-6xl w-full px-6 md:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 gradient-text">Research</h2>
          <div className="w-32 h-[1px] bg-foreground/30 mx-auto"></div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="group border-l-2 border-border hover:border-primary pl-8 transition-all duration-400 hover:bg-card/30 rounded-r-lg py-4 hover:shadow-lg dark:hover:shadow-primary/5"
            >
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-light tracking-wider uppercase">{project.duration}</p>
              </div>

              <div className="mb-4 space-y-1">
                <p className="text-base text-foreground">
                  <span className="font-semibold">{project.role}</span> | {project.institution}
                </p>
                <p className="text-sm text-muted-foreground">Advisors: {project.advisors}</p>
              </div>

              <ul className="space-y-3">
                {project.points.map((point, index) => (
                  <li key={index} className="flex items-start text-base text-muted-foreground leading-relaxed">
                    <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground italic">
            Contributing to cutting-edge medical and computational research with strong ML foundations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
