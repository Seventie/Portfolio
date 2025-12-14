import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Get in Touch
          </h2>
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Let's Work Together
          </h3>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-foreground transition-colors font-body"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border focus:border-foreground transition-colors font-body"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-foreground transition-colors font-body"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border focus:border-foreground transition-colors font-body resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-body text-sm tracking-wider uppercase py-6"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-lg text-foreground mb-4">
                Direct Contact
              </h4>
              <a
                href="mailto:your@email.com"
                className="font-body text-muted-foreground hover:text-foreground transition-colors block mb-8"
              >
                your@email.com
              </a>

              <h4 className="font-display text-lg text-foreground mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <p className="font-body text-xs text-muted-foreground mt-8">
              Based in Your City, available for remote work worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;