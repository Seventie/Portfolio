import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

interface HeaderProps {
  visible: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header = ({ visible, isDark, onToggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  if (!visible) return null;

  return (
    <>
      {/* Navigation Menu - Desktop */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 bg-background/90 backdrop-blur-md border-b border-border/30 transition-all duration-300 ${scrolled ? 'shadow-sm dark:shadow-black/10' : ''}`}>
        <div className="h-full flex items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/60 hover:text-foreground text-base lg:text-lg font-light relative py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-foreground/50 after:transition-all after:duration-300 hover:after:w-full hidden md:block"
            >
              {item.label}
            </a>
          ))}
          <div className="hidden md:block">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-6 right-6 z-[100] flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-[90] flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground text-2xl font-light hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;