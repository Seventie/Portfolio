const TechStack = () => {
  const technologies = [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "ML", icon: "custom-ml" },
    { name: "Deep Learning", icon: "devicon-tensorflow-original" },
    { name: "PyTorch", icon: "devicon-pytorch-original" },
    { name: "CV", icon: "devicon-opencv-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
  ];

  return (
    <section id="techstack" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-4xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Tech Stack</h2>
          <div className="w-32 h-[2px] bg-foreground mx-auto"></div>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 md:gap-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
              <div className="icon-glow text-foreground mb-3">
                {tech.icon === "custom-ml" ? (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 18c3-6 6-9 9-9s6 3 9 9" strokeLinecap="round" />
                    <circle cx="3" cy="18" r="1.5" />
                    <circle cx="12" cy="9" r="1.5" />
                    <circle cx="21" cy="18" r="1.5" />
                  </svg>
                ) : (
                  <i className={`${tech.icon} text-5xl`}></i>
                )}
              </div>
              <p className="text-sm md:text-lg text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DevIcons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </section>
  );
};

export default TechStack;