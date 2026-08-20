import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink">Aayushi Charde</p>
          <p className="text-ink-faint text-sm mt-0.5">Computer Science Engineer</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/ayushic353" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-muted hover:text-ink transition-colors">
            <GithubIcon size={17} strokeWidth={1.75} />
          </a>
          <a href="https://linkedin.com/in/ayushicharde" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-muted hover:text-ink transition-colors">
            <LinkedinIcon size={17} strokeWidth={1.75} />
          </a>
          <a href="mailto:aayushicharde@gmail.com" aria-label="Send an email" className="text-ink-muted hover:text-ink transition-colors">
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>

        <p className="text-ink-faint text-xs font-mono">© 2026 Aayushi Charde</p>
      </div>
    </footer>
  );
}
