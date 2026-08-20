import useReveal from "../hooks/useReveal";

const EDUCATION = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science",
    dates: "2023 – 2027",
    detail: "CGPA: 7.11",
    location: "Vellore, Tamil Nadu",
  },
  {
    school: "St. Paul Jr. College",
    degree: "Class XII — MSBSHSE",
    dates: "2019 – 2021",
    detail: "93.17%",
    location: "Nagpur, Maharashtra",
  },
];

const CERTIFICATIONS = [
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte, via Forage",
  },
  {
    name: "Python Programming with Tkinter & Database",
    issuer: "Task CompuSys, Pune — Grade: A+",
  },
];

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" ref={ref} className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="reveal grid md:grid-cols-2 gap-14 md:gap-10">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent mb-3">EDUCATION</p>
          <div className="space-y-6">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="border border-border-soft rounded-xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-ink">{ed.school}</h3>
                  <span className="font-mono text-[11px] text-ink-faint">{ed.dates}</span>
                </div>
                <p className="text-ink-muted text-sm mt-1">{ed.degree}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-ink-faint">{ed.location}</span>
                  <span className="font-mono text-xs text-accent">{ed.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-accent mb-3">CERTIFICATIONS</p>
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="border border-border-soft rounded-xl p-5">
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink">{cert.name}</h3>
                <p className="text-ink-muted text-sm mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
