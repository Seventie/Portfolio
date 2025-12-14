import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  repoUrl: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      category: "Machine Learning Project",
      description: "A comprehensive machine learning project that implements state-of-the-art algorithms for data analysis and prediction. Built with Python, TensorFlow, and scikit-learn.",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 2,
      title: "Project Two",
      category: "Web App Development",
      description: "Full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 3,
      title: "Project Three",
      category: "Cloud / DevOps Tool",
      description: "DevOps automation tool for CI/CD pipelines. Integrates with Docker, Kubernetes, and AWS for seamless deployment workflows.",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 4,
      title: "Project Four",
      category: "Neural Network Project",
      description: "Deep learning project implementing custom neural network architectures for image classification and object detection using PyTorch.",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 5,
      title: "Project Five",
      category: "Data Visualization",
      description: "Interactive data visualization dashboard built with D3.js and React. Displays complex datasets in intuitive, interactive charts and graphs.",
      repoUrl: "https://github.com/seventie",
    },
    {
      id: 6,
      title: "Project Six",
      category: "System Design Build",
      description: "Distributed system design project implementing microservices architecture with event-driven communication and horizontal scaling.",
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

      {!selectedProject ? (
        /* Projects Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl px-6 md:px-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 md:p-10 text-center cursor-pointer border-b border-border hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <h3 className="text-2xl md:text-3xl font-light mb-2 text-foreground">{project.title}</h3>
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
        <div className="w-full max-w-4xl px-6 md:px-10 mt-10 text-center">
          <h3 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">{selectedProject.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{selectedProject.description}</p>

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
    </section>
  );
};

export default Projects;