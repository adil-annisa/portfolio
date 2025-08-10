const schools = [
  {
    school: "The University of Texas at Austin",
    degree: "B.S. in Computer Science",
    period: "Deferred start until Spring; Expected May 2028",
    details: [
      "Relevant: Data Structures, Algorithms, Machine Learning (self‑study)",
      "Activities: Muslim Professional Society, hackathons, personal tech projects",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <h2 id="education-title" className="section-title"><span className="title-gradient">Education</span></h2>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {schools.map((ed, idx) => (
          <article key={idx} className="card hover-card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">{ed.degree}</h3>
            <p className="text-slate-700 text-sm sm:text-base">{ed.school}</p>
            <p className="text-slate-600 text-xs sm:text-sm">{ed.period}</p>
            <ul className="mt-2 sm:mt-3 list-disc pl-5 text-slate-700 space-y-1 text-sm sm:text-base">
              {ed.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
} 