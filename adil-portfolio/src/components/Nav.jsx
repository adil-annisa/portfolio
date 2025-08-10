import { useEffect, useMemo, useState } from "react";

const NAME = "Adil Waheed";
const LINKEDIN = "https://www.linkedin.com/in/adil-waheed0/";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const sectionIds = useMemo(() => ["home", "about", "skills", "projects", "experience", "education", "achievements", "contact"], []);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let topEntry = null;
        for (const entry of entries) {
          if (!topEntry || entry.intersectionRatio > topEntry.intersectionRatio) {
            if (entry.isIntersecting) topEntry = entry;
          }
        }
        if (topEntry?.target?.id) {
          setActive(`#${topEntry.target.id}`);
        }
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: [0.2, 0.4, 0.6, 0.8, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-orange-500 text-slate-900 px-3 py-2 rounded">Skip to content</a>
      <nav className="fixed top-6 left-0 right-0 z-40 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between gap-6 py-3">
            <a href="#home" className="font-semibold tracking-tight text-[#BF5700] hover:text-orange-700">{NAME}</a>
            <div className="hidden md:flex items-center gap-4">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-slate-700 hover:text-orange-600 px-2 py-1 nav-link ${isActive ? "active text-[#BF5700]" : ""}`}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-lg bg-orange-500/10 border border-orange-300 text-orange-600 px-3 py-1.5">
              Connect
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
} 