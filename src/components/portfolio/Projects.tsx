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
      title: "LFW Face Generation & Latent Space Editing",
      category: "Generative CV",
      description:
        "Trained generative models on the Labeled Faces in the Wild (LFW) dataset for photorealistic face synthesis, and explored latent space structure through interpolation and attribute-driven latent vector editing. Implemented latent space traversal techniques to manipulate facial attributes while analyzing disentanglement and latent manifold geometry.",
      technologies: "AutoEncoders, VAE, Latent Interpolation, PyTorch, Computer Vision",
      repoUrl: "https://github.com/Seventie/LFW",
    },
    {
      id: 2,
      title: "Image Matching Challenge 2022",
      category: "Computer Vision",
      description:
        "Built a cumulative feature matching pipeline for fundamental matrix estimation using classical detectors (SIFT, ORB, AKAZE), BF/FLANN matchers, and robust estimation via RANSAC, LMEDS, and USAC MAGSAC++. Integrated LoFTR with confidence filtering and MAGSAC++, achieving stronger mAA compared to classical-only pipelines.",
      technologies: "SIFT, ORB, LoFTR, RANSAC, MAGSAC++, Kornia, SfM",
      repoUrl: "https://github.com/Seventie/Image-Matching-Challenge",
    },
    {
      id: 3,
      title: "MediAssist: Biomedical QA System",
      category: "NLP / RAG",
      description:
        "Developed a biomedical QA system using BioBERT/PubMedBERT for NER, spaCy for entity extraction, and Neo4j knowledge graphs from medical literature. Built a hybrid retrieval stack using TF-IDF/BM25 and FAISS semantic search to drive a RAG pipeline for context-grounded medical responses.",
      technologies: "BioBERT, PubMedBERT, RAG, FAISS, Neo4j, spaCy, BM25",
      repoUrl: "https://github.com/Seventie/MedAssistant---Your-Doorstep-Doctor-",
    },
    {
      id: 4,
      title: "Brain Tumor Detection Using MRI",
      category: "Medical AI",
      description:
        "Implemented a binary MRI tumor classification pipeline using traditional CV features (SIFT, HOG, edge detection) with SVM, Random Forest, and XGBoost for baseline benchmarking. Fine-tuned AlexNet, VGG, GoogLeNet, and ResNet through transfer learning, delivering clear gains over hand-crafted feature methods.",
      technologies: "Transfer Learning, CNN, SIFT, HOG, SVM, ResNet, VGG",
      repoUrl: "https://github.com/Seventie/BrainTumor-Classification---Computer-Vision",
    },
    {
      id: 5,
      title: "NYSE Stock Forecasting",
      category: "Time-Series",
      description:
        "Built an end-to-end stacked two-layer LSTM forecasting pipeline on NYSE data with sliding-window sequence construction, MinMax normalization, and OHLCV feature engineering for next-day close prediction. Conducted interactive EDA and exported production-ready model artifacts including checkpoints, scalers, and configuration metadata.",
      technologies: "LSTM, TensorFlow/Keras, Plotly, MinMaxScaler, Time-Series",
      repoUrl: "https://github.com/Seventie/New-York-Stock-Prediction---LSTM-",
    },
    {
      id: 6,
      title: "Contradictory, My Dear Watson - NLI",
      category: "NLP",
      description:
        "Applied multilingual Natural Language Inference on the Contradictory My Dear Watson dataset with tokenization, encoding, and sequence formatting workflows across 15+ languages. Fine-tuned XLM-RoBERTa for three-class entailment classification and benchmarked performance against baseline ML approaches.",
      technologies: "XLM-RoBERTa, NLP, NLI, Tokenization, Transformers",
      repoUrl: "https://github.com/Seventie/Contradictory-My-Dear-Watson",
    },
    {
      id: 7,
      title: "HASYv2 Handwritten Math Symbol Classification",
      category: "Computer Vision",
      description:
        "Built a PyTorch CNN from scratch to classify 369 handwritten math symbol classes from HASYv2, with custom preprocessing, augmentation, BatchNorm, and adaptive pooling. Won first place in a 6-hour university competition by rapidly iterating architecture and hyperparameters, achieving 84% accuracy.",
      technologies: "PyTorch, CNN, BatchNorm, Data Augmentation",
      repoUrl: "https://github.com/Seventie/HASYv2-Hand-Digit-Recognition",
    },
    {
      id: 8,
      title: "MindHaven: Anonymous Mental Health Platform",
      category: "LLMs / Privacy Engineering",
      description:
        "Designed a privacy-first mental health platform with anonymous journaling, AI counseling, and peer support communities using end-to-end encryption and secure authentication. Integrated RAG-based LLM workflows with crisis detection, safe response generation, and context-aware therapeutic assistance.",
      technologies: "RAG, LLMs, E2E Encryption, Full-Stack, Privacy Engineering",
      repoUrl: "https://github.com/Seventie/Mind-Haven---Aurova",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center bg-background py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 gradient-text">Projects</h2>
        <div className="w-32 h-[1px] bg-foreground/30 mx-auto"></div>
      </div>

      <div className="w-full">
        {!selectedProject ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl px-6 md:px-10 mx-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-8 md:p-10 text-center cursor-pointer border-b border-border hover:-translate-y-2 transition-all duration-400 glow-card rounded-lg hover:bg-card/50 hover:shadow-lg dark:hover:shadow-black/20"
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <h3 className="text-xl md:text-2xl font-light mb-2 text-foreground leading-tight">{project.title}</h3>
                  <p
                    className={`text-muted-foreground text-sm mt-2 transition-all duration-300 ${
                      hoveredId === project.id ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
                    }`}
                  >
                    {project.category}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="https://github.com/Seventie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-foreground/30 transition-all duration-300 group"
              >
                <span>View More on GitHub</span>
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
          </>
        ) : (
          <div className="w-full max-w-4xl px-6 md:px-10 mt-10 mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">{selectedProject.title}</h3>
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-6">
                {selectedProject.category}
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-left">
              {selectedProject.description}
            </p>

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
