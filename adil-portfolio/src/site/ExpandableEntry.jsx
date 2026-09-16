import { useRef } from "react";
import { TextLink } from "./primitives";
import EntryMark from "./EntryMark";
import TechRow from "./TechRow";
import { entryTechnologies } from "./entryTechnologies";

function DetailBlock({ block }) {
  if (block.type === "keywords")
    return <p className="entry-tech">{block.items.join(" · ")}</p>;
  return <p>{block.text}</p>;
}
function DetailTopic({ entry, section }) {
  const disclosure = useRef(null);
  const summary = useRef(null);
  function collapse() {
    disclosure.current.open = false;
    summary.current.focus({ preventScroll: true });
    summary.current.scrollIntoView({ block: "nearest", behavior: "instant" });
  }
  return (
    <details ref={disclosure} className="entry-topic">
      <summary ref={summary}>
        {section.title}
        <span className="sr-only"> — {entry.title}</span>
        <svg
          className="entry-expand-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3 8h10" />
          <path className="plus-stem" d="M8 3v10" />
        </svg>
      </summary>
      <div className="topic-body">
        {section.blocks.map((block, index) => (
          <DetailBlock key={index} block={block} />
        ))}
        {entry.id === "helm" && section.title === "Product & motivation" && (
          <figure className="entry-product-image">
            <img
              src="/media/helm-product.png"
              alt="Helm project workspace with tickets grouped by status"
              width="1400"
              height="933"
              loading="lazy"
            />
            <figcaption>Helm’s project workspace.</figcaption>
          </figure>
        )}
        <button
          type="button"
          className="entry-collapse"
          onClick={collapse}
          aria-label={`Minimize ${section.title} — ${entry.title}`}
        >
          Minimize <span aria-hidden="true">↑</span>
        </button>
      </div>
    </details>
  );
}
export default function ExpandableEntry({ entry, kind }) {
  return (
    <article
      id={entry.id}
      className={`portfolio-entry entry-${kind}${entry.id === "helm" ? " entry-featured" : ""}`}
      aria-labelledby={`${entry.id}-title`}
    >
      <div className="entry-overview-column">
        <div className="entry-identity">
          <EntryMark id={entry.id} />
          <div>
            <h3 id={`${entry.id}-title`}>{entry.title}</h3>
            <p className="entry-category">{entry.category}</p>
            {entry.dates && <p className="entry-date">{entry.dates}</p>}
          </div>
        </div>
        <p className="entry-overview">{entry.overview}</p>
        <p className="entry-keywords">
          {entry.keywords
            .filter(
              (keyword) => !entryTechnologies[entry.id]?.includes(keyword),
            )
            .join(" · ")}
        </p>
        <TechRow names={entryTechnologies[entry.id]} />
        {(entry.links || (entry.link ? [entry.link] : [])).map((link) => (
          <div className="entry-link" key={link.href}>
            <TextLink href={link.href} external>
              {link.label}
            </TextLink>
          </div>
        ))}
      </div>
      <div
        className="entry-topic-list"
        role="group"
        aria-label={`${entry.title} details`}
      >
        {entry.sections.map((section) => (
          <DetailTopic key={section.title} section={section} entry={entry} />
        ))}
      </div>
    </article>
  );
}
