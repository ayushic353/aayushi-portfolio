import useReveal from "../hooks/useReveal";

const HIGHLIGHTS = [
  { label: "Education", value: "VIT - Computer Science" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "Domain", value: "Data Analytics & Applied AI" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 md:gap-16">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent mb-3">ABOUT</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Engineering-first, <br className="hidden sm:block" />product-minded.
          </h2>
        </div>

        <div>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            I'm a final year Computer Science Engineering student at Vellore Institute of
            Technology (2023–2027), building toward full-stack, AI/ML engineering and
            data engineering roles. My work spans production-grade 
            React and Node.js applications, RESTful API design, and applied NLP
            including retrieval-augmented generation systems and fine-tuned
            language models for real classification problems.
          </p>
          <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed">
            Across three internships I've shipped authentication flows,
            real-time inventory dashboards, and REST APIs used in production,
            while working within GitLab feature-branch workflows and
            cross-functional teams. I care about code that's easy to review,
            systems that fail predictably, and models that are evaluated
            honestly.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border-soft pt-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="font-mono text-[11px] tracking-widest text-ink-faint uppercase">
                  {h.label}
                </dt>
                <dd className="mt-1.5 text-ink text-sm sm:text-base font-medium">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
