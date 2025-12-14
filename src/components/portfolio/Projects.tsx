import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string;
  repoUrl: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Efficient 3D Molecular Similarity & Property Prediction Engine",
      category: "Research Project",
      description: "Working with Dr. T. Ramraj on formulating a mathematically rigorous framework for 3D molecular similarity using full geometric structure. Investigating limitations in existing 2D and 3D kernel methods and designing a scalable, higher-fidelity 3D representation to reduce future computational complexity.",
      technologies: "Computational Chemistry, 3D Geometry, Kernel Methods",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 2,
      title: "HASYv2 Handwritten Math Symbol Classification",
      category: "Computer Vision",
      description: "Built a PyTorch CNN for the HASYv2 dataset with full preprocessing, augmentation, and model optimization. Experimented with BatchNorm, adaptive pooling, and multi-layer fully connected architectures to improve accuracy. Achieved top performance and won a university-level Machine Learning competition.",
      technologies: "PyTorch, CNN, Image Processing",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 3,
      title: "Reversal Point Detection in US Equities",
      category: "Financial ML",
      description: "Developed a financial time-series model to detect market reversal points using engineered cross-ticker and temporal features. Handled imbalance and applied time-aware ensemble validation to separate true reversals from market noise. Produced a robust signal extraction pipeline capable of filtering volatile market behavior.",
      technologies: "PyTorch, LSTM, RNN, Feature Engineering, Time-Series Modeling",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 4,
      title: "Brain Tumor Detection Using MRI Images",
      category: "Medical AI",
      description: "Extracted dense feature vectors and trained ML classifiers for MRI tumor pattern recognition. Fine-tuned AlexNet, GoogLeNet, and VGG architectures for tumor classification. Achieved strong performance with deep transfer learning on MRI datasets.",
      technologies: "Computer Vision, Transfer Learning, Deep Learning",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 5,
      title: "Biomedical Knowledge System",
      category: "NLP & RAG",
      description: "Developed a biomedical NER and query understanding pipeline using Transformer models. Integrated into a RAG-based web system for generating context-aware medical insights. Built custom biomedical NLP model achieving high entity recognition accuracy.",
      technologies: "NLP, RAG, Transformers, Named Entity Recognition",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 6,
      title: "MindHaven",
      category: "Healthcare Platform",
      description: "Built a privacy-first mental-health platform using LLMs, agentic workflows, and RAG with anonymized user identities. Implemented crisis detection, safe response generation, and personalized emotional assistance with alerts for clinicians and guardians. Developed clinician-facing summaries with consent-based access control and strong privacy, encryption, and PII protection.",
      technologies: "LLMs, RAG, Full-Stack, Privacy Engineering",
      repoUrl: "https://github.com/seventie",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center bg-background py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">Projects</h2>
        <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
      </div>

      <div className="w-full">
        {!selectedProject ? (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl px-6 md:px-10 mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-8 md:p-10 text-center cursor-pointer border-b border-border hover:-translate-y-1 transition-all duration-300`}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground leading-tight">{project.title}</h3>
                <p
                  className={`text-primary text-sm mt-2 transition-all duration-300 ${
                    hoveredId === project.id ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  {project.category}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Project Detail View */
          <div className="w-full max-w-4xl px-6 md:px-10 mt-10 mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">{selectedProject.title}</h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">{selectedProject.category}</p>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-left">{selectedProject.description}</p>
            
            <div className="mb-10 text-left">
              <p className="text-sm text-foreground font-semibold mb-2">Technologies:</p>
              <p className="text-sm text-muted-foreground">{selectedProject.technologies}</p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-8 py-3 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-all border border-border"
              >
                Back to Projects
              </button>
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-foreground text-background rounded-xl font-semibold hover:bg-foreground/90 transition-all"
              >
                View Repository
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;