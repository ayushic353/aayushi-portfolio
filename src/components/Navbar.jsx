import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-display font-semibold tracking-tight text-ink text-lg"
        >
          AAYUSHI
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/ayushic353"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <GithubIcon size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://linkedin.com/in/ayushicharde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <LinkedinIcon size={18} strokeWidth={1.75} />
          </a>
          <a
            href="/Aayushi-Charde-Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium border border-border rounded-full px-4 py-1.5 text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <FileDown size={14} strokeWidth={2} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-5 pb-6 pt-2 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-ink-muted hover:text-ink border-b border-border-soft text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-4">
            <a href="https://github.com/ayushic353" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-muted hover:text-ink">
              <GithubIcon size={19} strokeWidth={1.75} />
            </a>
            <a href="https://linkedin.com/in/ayushicharde" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-muted hover:text-ink">
              <LinkedinIcon size={19} strokeWidth={1.75} />
            </a>
            <a
              href="/Aayushi-Charde-Resume.pdf"
              download
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium border border-border rounded-full px-4 py-1.5 text-ink"
            >
              <FileDown size={14} strokeWidth={2} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
