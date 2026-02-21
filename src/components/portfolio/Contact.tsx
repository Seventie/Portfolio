import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-6xl w-full px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 gradient-text">Contact</h2>
          <div className="w-32 h-[1px] bg-foreground/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE - Contact Info & Social */}
          <div className="space-y-12 reveal-left">
            {/* Email */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">Email Me</h3>
              <a
                href="mailto:shaik.abdus.sattar@outlook.com"
                className="text-lg md:text-xl font-light text-foreground hover:text-muted-foreground transition-opacity inline-block border-b border-border hover:border-foreground pb-1"
              >
                shaik.abdus.sattar@outlook.com
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary">Connect With Me</h3>
              <div className="flex gap-8">
                {/* GitHub */}
                <a href="https://github.com/seventie" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-14 h-14 flex items-center justify-center transition-all duration-400 group-hover:scale-125 group-hover:-translate-y-1">
                    <svg className="w-9 h-9 text-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/seventie" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-14 h-14 flex items-center justify-center transition-all duration-400 group-hover:scale-125 group-hover:-translate-y-1">
                    <svg className="w-9 h-9 text-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </div>
                </a>

                {/* Discord */}
                <a href="https://discord.com/users/shaik.abdus.sattar" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-14 h-14 flex items-center justify-center transition-all duration-400 group-hover:scale-125 group-hover:-translate-y-1">
                    <svg className="w-9 h-9 text-foreground group-hover:text-primary transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.369a19.91 19.91 0 00-4.885-1.515.07.07 0 00-.074.035c-.21.375-.444.864-.608 1.248a18.27 18.27 0 00-5.438 0 12.64 12.64 0 00-.617-1.248.067.067 0 00-.073-.035 19.9 19.9 0 00-4.885 1.515.062.062 0 00-.028.024C.533 9.056-.32 13.579.099 18.057a.078.078 0 00.031.053 19.934 19.934 0 006.02 3.03.07.07 0 00.076-.025c.464-.63.875-1.295 1.226-1.994a.07.07 0 00-.038-.098 13.2 13.2 0 01-1.872-.899.07.07 0 01-.007-.117c.126-.094.253-.192.373-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.074.01c.12.099.247.198.373.291a.07.07 0 01-.006.117c-.597.35-1.22.645-1.873.899a.07.07 0 00-.037.098c.36.699.77 1.365 1.225 1.994a.07.07 0 00.076.025 19.9 19.9 0 006.02-3.03.07.07 0 00.03-.052c.5-5.177-.838-9.674-3.548-13.664a.061.061 0 00-.028-.024zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.947 2.419-2.157 2.419z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Availability</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Currently available for freelance projects, internships, and collaboration opportunities. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border reveal-right glow-card">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2 text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2 text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-light mb-2 text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2 text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-400 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-black/10 flex items-center justify-center gap-2 disabled:opacity-50 magnetic-hover"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-20 text-muted-foreground reveal">
          <p className="text-sm">Let's build something amazing together</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;