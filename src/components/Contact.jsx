import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal relative rounded-3xl border border-border bg-surface/50 px-6 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
        <div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-accent-soft) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <p className="relative font-mono text-xs tracking-widest text-accent mb-4">CONTACT</p>
        <h2 className="relative font-display text-3xl sm:text-5xl font-semibold text-ink tracking-tight text-balance">
          Let's build something useful.
        </h2>
        <p className="relative mt-4 text-ink-muted text-base sm:text-lg max-w-md mx-auto">
          Open to software engineering and AI/ML roles, internships, and
          interesting collaborations.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:aayushicharde@gmail.com"
            className="inline-flex items-center gap-2 bg-ink text-bg font-medium text-sm px-6 py-3 rounded-full hover:bg-accent transition-colors"
          >
            <Mail size={15} strokeWidth={2} />
            Get in touch
          </a>
        </div>

        <div className="relative mt-10 flex items-center justify-center gap-6 font-mono text-xs text-ink-faint">
          <a href="mailto:aayushicharde@gmail.com" className="hover:text-ink transition-colors flex items-center gap-1.5">
            <Mail size={13} /> aayushicharde@gmail.com
          </a>
          <a href="https://github.com/ayushic353" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors flex items-center gap-1.5">
            <GithubIcon size={13} /> ayushic353
          </a>
          <a href="https://linkedin.com/in/ayushicharde" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors flex items-center gap-1.5">
            <LinkedinIcon size={13} /> ayushicharde
          </a>
        </div>
      </div>
    </section>
  );
}
