import { useEffect, useState } from "react";
import { fetchPublicRepos } from "../utils/fetchGitHub";

export default function Projects() {
  const [autoRepos, setAutoRepos] = useState([]);

  useEffect(() => {
    const username = "adilW-2005";
    if (!username) return;
    fetchPublicRepos(username).then((repos) => {
      const mapped = repos.map((r) => ({
        title: r.name,
        tagline: r.description || "Open-source project",
        tech: r.topics && r.topics.length ? r.topics : [r.language].filter(Boolean),
        description: r.description || "Repository on GitHub",
        links: { github: r.url, demo: r.homepage },
        images: ["/placeholders/project-default.png", "/placeholders/project-2.png"],
        highlights: [
          r.stars ? `${r.stars}★ stars` : "",
          r.forks ? `${r.forks} forks` : "",
        ].filter(Boolean),
      }));
      setAutoRepos(mapped);
    });
  }, []);

  const curated = [
    {
      title: "RoomSync App",
      tagline: "Shared living made simple",
      tech: ["React Native", "Flask", "PostgreSQL", "SQLAlchemy"],
      description:
        "Roommate management platform with chore tracking (recurrence), expense settlement, food inventory, shared calendars/events, and group profiles.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-4.png"],
      highlights: [
        "Modular group‑based data isolation",
        "Auth, dashboard summaries, interactive chore/event views",
      ],
    },
    {
      title: "Fast Food Finder",
      tagline: "Healthiest and cheapest meals nearby",
      tech: ["Flask", "React", "APIs", "Maps"],
      description:
        "Backend‑first service that surfaces budget‑friendly meals by macros, price, and location with a clean three‑column UI and nutrition dashboard.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-2.png"],
      highlights: ["Designed for speed and clarity"],
    },
    {
      title: "Group Chat Trivia Game",
      tagline: "Real and fake chat messages as the game",
      tech: ["React Native", "Flask", "SQL"],
      description:
        "Multiplayer game with modes like Who Said It?, Finish the Text, and Which One is Real? using real/fake chat messages for replayable fun.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-3.png"],
      highlights: ["Real‑time gameplay logic and randomization"],
    },
    {
      title: "InReach AI",
      tagline: "AI‑powered outreach for students & job seekers",
      tech: ["React", "Flask", "OpenAI", "Gmail API"],
      description:
        "Generates personalized outreach emails from resumes and intent, integrates with Gmail for authenticated sending, and supports contact scraping.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-3.png"],
      highlights: ["Scalable backend and clean UI"],
    },
    {
      title: "Hurricane Helene Impact Analysis",
      tagline: "Geospatial outages, economics, and sentiment",
      tech: ["Python", "Pandas", "GIS"],
      description:
        "Combined outage data across 140+ counties, economic reports, and YouTube sentiment to analyze restoration timelines and economic losses.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-1.png"],
      highlights: ["Built visualizations for patterns in severity and sentiment"],
    },
    {
      title: "Soil Moisture Prediction",
      tagline: "Deep learning for time‑series forecasting",
      tech: ["Python", "TensorFlow/Keras", "Transformers"],
      description:
        "Forecasted soil moisture using multi‑head LSTMs, CNNs, and Transformers on 300K+ time‑series points; ran imputation and feature engineering experiments.",
      links: { github: "", demo: "" },
      images: ["/placeholders/project-default.png", "/placeholders/project-2.png"],
      highlights: ["Benchmarking and visualization for drought prediction use‑cases"],
    },
  ];

  const all = curated.concat(autoRepos);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <h2 id="projects-title" className="section-title"><span className="title-gradient">Projects</span></h2>
      <div className="grid md:grid-cols-2 gap-6">
        {all.map((p) => (
          <article key={p.title} className="card hover-card overflow-hidden">
            <div className="aspect-[16/9] bg-white/5 overflow-hidden">
              <img className="h-full w-full object-cover" src={p.images?.[0] || "/placeholders/project-default.png"} alt={`${p.title} screenshot`} />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex gap-2">
                  {p.links?.github && (
                    <a className="text-orange-600" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {p.links?.demo && (
                    <a className="text-orange-600" href={p.links.demo} target="_blank" rel="noreferrer">Live</a>
                  )}
                </div>
              </div>
              <p className="text-slate-700">{p.description}</p>
              {p.tech?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              )}
              {p.images?.length > 1 && (
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {p.images.slice(1).map((img, i) => (
                    <img key={i} src={img} alt="Project gallery" className="h-20 w-full object-cover rounded-lg opacity-95 hover:opacity-100 transition" />
                  ))}
                </div>
              )}
              {p.highlights?.length > 0 && (
                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
} 