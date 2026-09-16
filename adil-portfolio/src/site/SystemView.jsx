import { useId, useState } from "react";
import { layers } from "./data";

/** One explicit interaction connects the product surface to its underlying system. */
export default function SystemView({ initialInside = false }) {
  const [inside, setInside] = useState(initialInside);
  const [active, setActive] = useState(0);
  const id = useId();
  const layer = layers[active];
  return (
    <div className={`system-view ${inside ? "is-inside" : ""}`}>
      <div className="system-toolbar">
        <span className="system-name">
          <span className="helm-mark">h</span> Helm{" "}
          <span className="muted">/ under the surface</span>
        </span>
        <div className="view-toggle" aria-label="Helm view">
          <button
            aria-pressed={!inside}
            aria-controls={id}
            onClick={() => setInside(false)}
          >
            Product view
          </button>
          <button
            aria-pressed={inside}
            aria-controls={id}
            onClick={() => setInside(true)}
          >
            <span aria-hidden="true">◇</span> Look inside
          </button>
        </div>
      </div>
      <div id={id} className="system-stage">
        {!inside ? (
          <figure className="product-frame">
            <img
              src="/media/helm-product.png"
              width="1400"
              height="933"
              alt="Helm’s project board showing tickets organized by status, with connected workspace navigation"
              loading="lazy"
            />
            <figcaption>
              <span>One workspace for the context behind the work.</span>
              <span className="mono">Actual product capture</span>
            </figcaption>
          </figure>
        ) : (
          <div className="cutaway">
            <div className="layer-list" aria-label="Explore system layers">
              {layers.map((item, index) => (
                <button
                  key={item.id}
                  className={`layer ${active === index ? "selected" : ""}`}
                  aria-pressed={active === index}
                  aria-controls={`${id}-description`}
                  onClick={() => setActive(index)}
                >
                  <span className="layer-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.short}</small>
                  </span>
                  <span className="layer-dot" aria-hidden="true" />
                </button>
              ))}
            </div>
            <div
              className="layer-detail"
              id={`${id}-description`}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="layer-art" aria-hidden="true">
                <svg viewBox="0 0 320 180">
                  <path
                    className="diagram-line"
                    d="M30 30h80l50 60 50-60h80M30 150h80l50-60 50 60h80M0 90h320"
                  />
                  {[30, 90, 150].map((y, i) => (
                    <g key={y}>
                      <rect
                        x="18"
                        y={y - 9}
                        width="38"
                        height="18"
                        rx="4"
                        className={active % 3 === i ? "node active" : "node"}
                      />
                      <rect
                        x="264"
                        y={y - 9}
                        width="38"
                        height="18"
                        rx="4"
                        className="node"
                      />
                    </g>
                  ))}
                  <rect
                    x="130"
                    y="60"
                    width="60"
                    height="60"
                    rx="12"
                    className="node active"
                  />
                  <path
                    d="m147 90 9 9 18-18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="eyebrow">
                Layer {String(active + 1).padStart(2, "0")}
              </p>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
              <div className="technical-labels">
                {layer.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="diagram-caption">
                Architecture illustration · Select a layer to explore
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
