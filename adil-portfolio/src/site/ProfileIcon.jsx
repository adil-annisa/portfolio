export default function ProfileIcon({ name }) {
  if (name === "resume") return <svg className="profile-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6"/></svg>;
  return <span className="profile-icon profile-brand-icon" aria-hidden="true" style={{maskImage: `url(/media/tech/${name}.svg)`, WebkitMaskImage: `url(/media/tech/${name}.svg)`}} />;
}
