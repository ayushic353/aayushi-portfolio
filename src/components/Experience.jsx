import { MapPin } from "lucide-react";
import experience from "../data/experience";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal mb-14">
        <p className="font-mono text-xs tracking-widest text-accent mb-3">EXPERIENCE</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
          Where I've worked.
        </h2>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

        <div className="space-y-12">
          {experience.map((job) => (
            <article key={job.company} className="reveal relative sm:pl-12">
              <span
                className="hidden sm:block absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-3">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                  {job.role}
                  <span className="text-ink-muted font-normal"> - {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{job.dates}</span>
              </div>

              <p className="flex items-center gap-1.5 text-sm text-ink-faint mb-4">
                <MapPin size={13} strokeWidth={2} />
                {job.location}
              </p>

              <ul className="space-y-2.5">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-ink-muted text-sm sm:text-base leading-relaxed">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-ink-faint shrink-0" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border-soft text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
