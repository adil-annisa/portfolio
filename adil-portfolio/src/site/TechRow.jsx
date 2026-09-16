import icons from "./techIcons.json";

export default function TechRow({ names }) {
  if (!names?.length) return null;
  return (
    <div className="tech-row">
      {names.map((name) => (
        <span className="tech-item" key={name}>
          <span
            className="tech-icon"
            aria-hidden="true"
            style={{
              maskImage: `url(/media/tech/${icons[name]}.svg)`,
              WebkitMaskImage: `url(/media/tech/${icons[name]}.svg)`,
            }}
          />
          <span>
            {name === "React" && names.length === 2 ? "React Native" : name}
          </span>
        </span>
      ))}
    </div>
  );
}
