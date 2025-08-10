const achievements = [
  { title: "Admission to UT Austin CS", description: "Earned admission to the Computer Science program at UT Austin." },
  { title: "97.9% model improvement", description: "Deep learning models that significantly outperformed baselines for soil moisture forecasting." },
  { title: "3,000+ monthly visitors", description: "Built and maintain a public website with AI support for a nonprofit." },
  { title: "50%+ staff time saved", description: "Automations that reduced time on cost tracking and reporting." },
  { title: "Community leadership", description: "Recognition for leadership in volunteer work and positive client/peer feedback." },
];

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="section">
      <h2 id="achievements-title" className="section-title"><span className="title-gradient">Awards & Achievements</span></h2>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((a, idx) => (
          <article key={idx} className="card hover-card p-6">
            <h3 className="text-lg font-semibold text-[#BF5700]">{a.title}</h3>
            <p className="text-slate-700 mt-2">{a.description}</p>
          </article>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
} 