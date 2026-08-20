import { Mail, ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const TICKER_ITEMS = [
  { label: "RAG_QUERY_LATENCY", value: "1.3s" },
  { label: "CI_PASS_RATE", value: "100%" },
  { label: "MODEL_PARAMS_TRAINED", value: "4.96%" },
  { label: "CLASSIFICATION_ACCURACY", value: "80.75%" },
  { label: "REST_ENDPOINTS", value: "4" },
  { label: "TEST_SUITE", value: "10/10" },
];

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent-soft) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <p className="font-mono text-xs tracking-widest text-accent mb-6 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-accent" />
            </span>
            AVAILABLE FOR SOFTWARE ENGINEERING ROLES
          </p>
        </div>

        <h1
          className="animate-fade-up font-display font-semibold text-ink text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-balance"
          style={{ animationDelay: "80ms" }}
        >
          Aayushi Charde
        </h1>

        <p
          className="animate-fade-up mt-5 font-display text-xl sm:text-2xl text-ink-muted"
          style={{ animationDelay: "150ms" }}
        >
          Computer Science Engineer
        </p>

        <p
          className="animate-fade-up mt-2 font-mono text-sm sm:text-base text-accent tracking-wide"
          style={{ animationDelay: "200ms" }}
        >
          Full-Stack Developer • AI/ML • NLP
        </p>

        <p
          className="animate-fade-up mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed text-balance"
          style={{ animationDelay: "260ms" }}
        >
          Building full-stack applications and practical AI systems with a
          focus on clean engineering, scalable backends, and intelligent
          products.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="inline-flex items-center gap-2 bg-ink text-bg font-medium text-sm px-6 py-3 rounded-full hover:bg-accent transition-colors"
          >
            View Projects
            <ArrowDown size={15} strokeWidth={2} />
          </a>
          <a
            href="/Aayushi-Charde-Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-border text-ink font-medium text-sm px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            <FileDown size={15} strokeWidth={2} />
            Download Resume
          </a>
        </div>

        <div
          className="animate-fade-up mt-8 flex items-center gap-5"
          style={{ animationDelay: "380ms" }}
        >
          <a href="https://github.com/ayushic353" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-muted hover:text-ink transition-colors">
            <GithubIcon size={19} strokeWidth={1.75} />
          </a>
          <a href="https://linkedin.com/in/ayushicharde" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-muted hover:text-ink transition-colors">
            <LinkedinIcon size={19} strokeWidth={1.75} />
          </a>
          <a href="mailto:aayushicharde@gmail.com" aria-label="Send an email" className="text-ink-muted hover:text-ink transition-colors">
            <Mail size={19} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* signature element: a live engineering-status ticker built from real project metrics */}
      <div
        className="animate-fade-up relative mt-20 border-y border-border-soft bg-surface/40 overflow-hidden"
        style={{ animationDelay: "440ms" }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-ticker py-3">
          {tickerLoop.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-6 whitespace-nowrap font-mono text-xs text-ink-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
              <span>{item.label}</span>
              <span className="text-ink-muted">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
