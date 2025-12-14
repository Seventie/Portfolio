const TechStack = () => {
  const technologies = [
    { name: "Python", icon: "devicon-python-plain", type: "devicon" },
    { name: "C++", icon: "devicon-cplusplus-plain", type: "devicon" },
    { name: "Java", icon: "devicon-java-plain", type: "devicon" },
    { name: "MySQL", icon: "devicon-mysql-plain", type: "devicon" },
    { name: "ML", icon: "ml", type: "custom" },
    { name: "Deep Learning", icon: "devicon-tensorflow-original", type: "devicon" },
    { name: "PyTorch", icon: "devicon-pytorch-original", type: "devicon" },
    { name: "CV", icon: "devicon-opencv-plain", type: "devicon" },
    { name: "Generative AI", icon: "generative", type: "custom" },
    { name: "Agentic AI", icon: "agentic", type: "custom" },
    { name: "LLMs", icon: "llm", type: "custom" },
    { name: "LangChain", icon: "langchain", type: "custom" },
    { name: "LangGraph", icon: "langgraph", type: "custom" },
    { name: "ChromaDB", icon: "chromadb", type: "custom" },
    { name: "React", icon: "devicon-react-original", type: "devicon" },
    { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark", type: "devicon" },
    { name: "Docker", icon: "devicon-docker-plain", type: "devicon" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", type: "devicon" },
  ];

  const renderIcon = (tech: typeof technologies[0]) => {
    if (tech.type === "devicon") {
      return <i className={`${tech.icon} text-5xl`}></i>;
    }

    // Custom SVG icons
    const customIcons: Record<string, JSX.Element> = {
      ml: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 18c3-6 6-9 9-9s6 3 9 9" strokeLinecap="round" />
          <circle cx="3" cy="18" r="1.5" fill="currentColor" />
          <circle cx="12" cy="9" r="1.5" fill="currentColor" />
          <circle cx="21" cy="18" r="1.5" fill="currentColor" />
        </svg>
      ),
      generative: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22l-.394-1.433a2.25 2.25 0 00-1.423-1.423L13.25 19l1.433-.394a2.25 2.25 0 001.423-1.423L16.5 16l.394 1.183a2.25 2.25 0 001.423 1.423L19.75 19l-1.433.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      agentic: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          <circle cx="5" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="5" r="2" fill="currentColor" />
          <circle cx="12" cy="19" r="2" fill="currentColor" />
          <circle cx="19" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      llm: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.657 0-3 1.343-3 3v1H8a2 2 0 00-2 2v1a2 2 0 002 2h1v1a3 3 0 003 3 3 3 0 003-3v-1h1a2 2 0 002-2v-1a2 2 0 00-2-2h-1V6c0-1.657-1.343-3-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 9h.01M15 9h.01" />
        </svg>
      ),
      langchain: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
      langgraph: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
        </svg>
      ),
      chromadb: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    };

    return customIcons[tech.icon] || null;
  };

  return (
    <section id="techstack" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-6xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Tech Stack</h2>
          <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="text-foreground mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                {renderIcon(tech)}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;