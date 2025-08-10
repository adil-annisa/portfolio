const roles = [
  {
    role: "Software Engineer Intern",
    company: "An‑Nisa Hope Center",
    start: "May 2025",
    end: "Present",
    location: "Houston, TX",
    bullets: [
      "Built and maintain a public‑facing website reaching 3,000+ monthly visitors to improve access to support services.",
      "Designed internal tools to automate staff workflows and reporting, reducing time spent by over 50%.",
      "Integrated an AI‑powered chat system to assist with navigation, FAQs, and intake support.",
    ],
  },
  {
    role: "Machine Learning Intern — Soil Moisture Forecasting",
    company: "The University of Texas at Austin",
    start: "May 2025",
    end: "Present",
    location: "Remote",
    bullets: [
      "Designed and trained deep learning models (Multi‑head LSTM, CNN, Transformers) on 300K+ time‑series points from Texas weather stations.",
      "Engineered features and handled missing data through imputation experiments with performance benchmarking.",
      "Visualized trends and model outputs to explore applications in drought prediction and sustainable agriculture.",
    ],
  },
  {
    role: "Build Team Member",
    company: "Convergent",
    start: "Jan 2025",
    end: "May 2025",
    location: "Austin, TX",
    bullets: [
      "Collaborated with a cross‑functional team to build a platform supporting socially isolated individuals.",
      "Implemented features for accountability, task management, and social reintegration using React.",
    ],
  },
  {
    role: "Undergraduate Researcher — Hurricane Helene Impact",
    company: "Bureau of Economic Geology, UT Austin",
    start: "Sep 2024",
    end: "May 2025",
    location: "Austin, TX",
    bullets: [
      "Led analysis across 140+ counties; collaborated with state/local officials on power outage data.",
      "Built a PyTorch sentiment classifier (90%+ accuracy) using 8,000+ YouTube transcripts/comments.",
      "Developed geospatial/time‑series visualizations to expose outage severity and sentiment trends.",
    ],
  },
  {
    role: "Sales Associate",
    company: "Nordstrom",
    bullets: [
      "Provided personalized service in a fast‑paced retail environment; built strong communication and problem‑solving skills.",
    ],
  },
  {
    role: "Team Member",
    company: "Target",
    bullets: [
      "Managed tasks under tight schedules; learned teamwork and operational efficiency in a large retail setting.",
    ],
  },
  {
    role: "Volunteer",
    company: "An‑Nisa Houston",
    bullets: [
      "Assisted in community support programs; contributed to research and outreach projects, including methane emissions vs. poverty analysis in Texas using Python.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <h2 id="experience-title" className="section-title"><span className="title-gradient">Experience</span></h2>
      <div className="timeline space-y-4 sm:space-y-6">
        {roles.map((job, idx) => (
          <article key={idx} className="timeline-item card hover-card p-4 sm:p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-semibold">{job.role} — {job.company}</h3>
              {(() => {
                const range = [job.start, job.end].filter(Boolean).join(" – ");
                const parts = [job.location, range].filter(Boolean);
                return parts.length ? (
                  <span className="text-slate-600 text-xs sm:text-sm">{parts.join(" • ")}</span>
                ) : null;
              })()}
            </header>
            <ul className="mt-2 sm:mt-3 list-disc pl-5 text-slate-700 space-y-1 text-sm sm:text-base">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
} 