export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function SectionHeading({ title, children }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

export function TextLink({ href, children, external = false, className = "" }) {
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <Arrow diagonal={external} />
    </a>
  );
}

export function Mark() {
  return (
    <svg
      className="brand-mark"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m3 20 8-14 8 14M7 14h9M15 10l6 14 6-14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
