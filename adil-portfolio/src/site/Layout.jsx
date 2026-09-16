import { useEffect, useRef, useState } from "react";
import { contact } from "./data";
import { Arrow } from "./primitives";
import ProfileIcon from "./ProfileIcon";

export function Header({ caseStudy = false }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    function close(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    const media = matchMedia("(min-width: 940px)");
    function resize() {
      if (media.matches) setOpen(false);
    }
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  const prefix = caseStudy ? "/" : "";
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d={open ? "m4 4 10 10M14 4 4 14" : "M2 5h14M2 9h14M2 13h14"}
              />
            </svg>
          </button>
          <nav
            id="primary-navigation"
            className={open ? "is-open" : ""}
            aria-label="Main navigation"
          >
            {[
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["research", "Research"],
              ["education", "Education"],
              ["technical-areas", "Technical Areas"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`${prefix}#${id}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions profile-links">
            <a href={contact.resume} target="_blank" rel="noreferrer">
              <ProfileIcon name="resume" /> Resume
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <ProfileIcon name="linkedin" /> LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <ProfileIcon name="github" /> GitHub
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
       
        <a href="#main">
          Back to top <Arrow />
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
