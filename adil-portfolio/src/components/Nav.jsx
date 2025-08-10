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
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <div>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-orange-500 text-slate-900 px-3 py-2 rounded">Skip to content</a>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-6xl mx-auto px-4" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
          <div className="flex items-center justify-between gap-6 py-3">
            <a href="#home" className="font-semibold tracking-tight text-[#BF5700] hover:text-orange-700">{NAME}</a>
            <button aria-label="Open menu" className="md:hidden rounded-lg border border-orange-200 p-2 text-orange-700" onClick={() => setOpen((v) => !v)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
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
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hidden md:inline-flex rounded-lg bg-orange-500/10 border border-orange-300 text-orange-600 px-3 py-1.5">
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <>
          <button aria-label="Close menu" className="fixed inset-0 z-30 bg-black/20" onClick={() => setOpen(false)} />
          <div className="fixed top-[56px] left-0 right-0 z-40 md:hidden">
            <div className="mx-4 rounded-xl border border-orange-200 bg-white shadow-lg overflow-hidden">
              <div className="flex flex-col p-2">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      className={`rounded-lg px-3 py-2 text-slate-800 ${isActive ? 'bg-orange-50 text-[#BF5700]' : 'hover:bg-orange-50'}`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  );
                })}
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 text-orange-700 hover:bg-orange-50">Connect</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 