import skills from "../data/skills";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal mb-14">
        <p className="font-mono text-xs tracking-widest text-accent mb-3">SKILLS</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
          Tools I build with.
        </h2>
      </div>

      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-soft rounded-2xl overflow-hidden border border-border-soft">
        {skills.map((group) => (
          <div key={group.category} className="bg-bg p-6 sm:p-7">
            <h3 className="font-mono text-[11px] tracking-widest text-ink-faint uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-ink-muted border border-border-soft rounded-full px-3 py-1.5 hover:border-accent hover:text-ink transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
