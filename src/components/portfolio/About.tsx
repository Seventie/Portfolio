const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-12 text-foreground">
          Hello, I'm <span className="italic">Your Name</span>,{" "}
          <span className="text-muted-foreground">
            a passionate developer & designer based in Your City – I create digital experiences with precision and creativity.
          </span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
          <p>
            With years of hands-on experience, I've developed a deep understanding of both the technical and creative aspects of building modern web applications. My approach combines clean code architecture with intuitive user experiences.
          </p>
          <p>
            I believe in crafting solutions that not only meet technical requirements but also deliver meaningful value to users. Whether it's a complex enterprise application or an elegant portfolio, I bring the same level of dedication and attention to detail to every project.
          </p>
          <p>
            My workflow is built on modern development practices, including component-driven architecture, responsive design principles, and continuous integration. I stay current with the latest technologies while maintaining a focus on fundamentals that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;