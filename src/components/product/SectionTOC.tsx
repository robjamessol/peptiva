"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "Inside the molecule" },
  { id: "characterization", label: "Characterization" },
  { id: "storage", label: "Handling" },
  { id: "literature", label: "Literature" },
  { id: "faq", label: "FAQ" },
];

export function SectionTOC() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        }
      },
      { rootMargin: "-30% 0% -60% 0%" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-3">
        On this page
      </div>
      <ul className="space-y-2 border-l border-[var(--border)] pl-4">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={cn(
                "text-sm transition-colors block py-0.5",
                active === s.id
                  ? "text-[var(--brand-blurple)] font-medium"
                  : "text-[var(--brand-slate)] hover:text-[var(--brand-midnight)]",
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
