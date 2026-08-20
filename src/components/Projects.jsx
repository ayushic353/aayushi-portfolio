import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import projects from "../data/projects";
import useReveal from "../hooks/useReveal";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const isPlaceholder = project.github === "YOUR_GITHUB_URL_HERE";

  return (
    <article className="reveal group relative rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 transition-colors hover:border-ink-faint/40">
      <div className="flex items-start justify-between gap-6 mb-4">
        <div>
          <span className="font-mono text-xs text-accent tracking-widest">{project.id}</span>
          <h3 className="font-display text-2xl sm:text-[28px] font-semibold text-ink mt-1 tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="text-ink-muted text-sm sm:text-base leading-relaxed max-w-2xl">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border-soft text-ink-faint"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.metrics?.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 mt-7 pt-7 border-t border-border-soft">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-xl sm:text-2xl font-semibold text-ink">{m.value}</p>
              <p className="font-mono text-[11px] text-ink-faint tracking-wide mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {project.caseStudy && open && (
        <div className="mt-7 pt-7 border-t border-border-soft">
          <p className="font-mono text-[11px] tracking-widest text-ink-faint mb-3">ARCHITECTURE</p>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.caseStudy.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-ink bg-surface-2 border border-border-soft rounded-full px-3 py-1">
                  {step}
                </span>
                {i < project.caseStudy.flow.length - 1 && (
                  <span className="text-ink-faint text-xs" aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-ink-muted text-sm leading-relaxed">{project.caseStudy.notes}</p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 mt-7">
        <a
          href={isPlaceholder ? undefined : project.github}
          target={isPlaceholder ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-disabled={isPlaceholder}
          title={isPlaceholder ? "Add your repository URL in src/data/projects.js" : undefined}
          className={`inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-4 py-2 transition-colors ${
            isPlaceholder
              ? "text-ink-faint cursor-not-allowed"
              : "text-ink hover:border-accent hover:text-accent"
          }`}
          onClick={(e) => isPlaceholder && e.preventDefault()}
        >
          <GithubIcon size={15} strokeWidth={2} />
          {isPlaceholder ? "Add GitHub URL" : "GitHub"}
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-4 py-2 text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <ExternalLink size={15} strokeWidth={2} />
            Live Demo
          </a>
        )}

        {project.caseStudy && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors ml-auto"
          >
            {open ? "Hide case study" : "View case study"}
            <ChevronDown size={15} strokeWidth={2} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal mb-14">
        <p className="font-mono text-xs tracking-widest text-accent mb-3">PROJECTS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
          Selected work.
        </h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
