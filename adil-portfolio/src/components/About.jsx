const NAME = "Adil Waheed";
const EMAIL = "you@example.com"; // replace with your email

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <h2 id="about-title" className="section-title"><span className="title-gradient">About Adil</span></h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
        <div className="md:col-span-2">
          <div className="prose max-w-none text-slate-700 prose-p:my-3 sm:prose-p:my-4">
            <p className="text-base sm:text-lg">
              I’m {NAME}, an 18‑year‑old CS student at UT Austin who loves building impactful, creative, and technically challenging products.
              I turn abstract ideas into real software—fast.
            </p>
            <p className="text-base sm:text-lg">
              I’ve shipped full‑stack apps end‑to‑end: a roommate platform with chore recurrence and expense settlement,
              a backend‑first fast‑food finder with nutrition filters and maps, a group‑chat trivia game, and an AI outreach tool
              that personalizes emails using resumes and intent. I also explore research and data—analyzing Hurricane Helene’s impact
              with geospatial and sentiment data, and forecasting soil moisture using deep learning.
            </p>
            <p className="text-base sm:text-lg">
              I’m comfortable across the stack—React/React Native, Flask/Django/SQL, and modern APIs—and I enjoy experimenting with ML
              (LSTM/CNN/Transformers). I’m entrepreneurial, curious, and biased toward action—whether that’s prototyping an AI coffee shop
              management concept or selling tiramisu locally.
            </p>
          </div>
        </div>
        <aside className="card hover-card p-4 sm:p-6" aria-label="Quick facts">
          <ul className="space-y-2 sm:space-y-3 text-slate-700 text-sm sm:text-base">
            <li><strong>Based in:</strong> Austin, TX</li>
            <li><strong>Open to:</strong> internships, research, and freelance</li>
            <li><strong>Contact:</strong> <a className="text-orange-600 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
        </aside>
      </div>
      <div className="section-divider" />
    </section>
  );
} 