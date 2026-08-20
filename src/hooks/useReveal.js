import { useEffect, useRef } from "react";

// Adds an "in-view" class to children carrying the .reveal class
// once they scroll into the viewport. Respects prefers-reduced-motion
// implicitly since the CSS transition is disabled in that case.
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.classList.contains("reveal")
      ? [root, ...root.querySelectorAll(".reveal")]
      : [...root.querySelectorAll(".reveal")];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
