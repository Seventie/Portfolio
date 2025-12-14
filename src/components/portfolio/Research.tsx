const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Radiotherapy QA Enhancement for Hepatosis Patients (Liver Cancer)",
      duration: "2025 – Present",
      role: "Research Assistant",
      advisors: "Dr. Amit Agarwal, Dr. Rose Kamal",
      institution: "Amrita Vishwa Vidyapeetham",
      points: [
        "Building multimodal ML/DL system predicting Gamma Passing Rates on fluence and dose maps",
        "Developing image-only, data-only, and fusion models for comprehensive quality assurance",
        "Innovating custom loss functions for clinical risk sensitivity to improve patient safety outcomes"
      ]
    },
    {
      id: 2,
      title: "Cervical Cancer Research – Gamma Rate Analysis & Predictive Modeling",
      duration: "2025 – Present",
      role: "Research Assistant",
      advisors: "Dr. Amit Agarwal, Dr. Sruthi K, Dr. Ajay Sasidharan",
      institution: "Amrita Vishwa Vidyapeetham",
      points: [
        "Developing ML/DL models on multimodal clinical/pathological data for treatment outcome prediction",
        "Implementing automated data extraction, preprocessing, and feature engineering for survival analysis",
        "Building predictive models to optimize treatment strategies using advanced machine learning techniques"
      ]
    }
  ];

  return (
    <section id="research" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-6xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Research</h2>
          <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
        </div>

        {/* Research Projects */}
        <div className="space-y-12 md:space-y-16">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="group border-l-2 border-border hover:border-primary pl-8 transition-all duration-300"
            >
              {/* Title and Duration */}
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light tracking-wider uppercase">
                  {project.duration}
                </p>
              </div>

              {/* Role and Institution */}
              <div className="mb-4 space-y-1">
                <p className="text-base text-foreground">
                  <span className="font-semibold">{project.role}</span> | {project.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  Advisors: {project.advisors}
                </p>
              </div>

              {/* Research Points */}
              <ul className="space-y-3">
                {project.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start text-base text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground italic">
            Contributing to cutting-edge medical AI research for improved patient outcomes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;