const NAME = "Adil Waheed";
const TAGLINE = "CS @ UT Austin — shipping human‑centered full‑stack & ML products";
const SUMMARY = "I turn abstract ideas into shipped products—React/Next on the front, Flask/Django/SQL on the back, and AI where it helps. Entrepreneurial, research‑minded, and biased toward action.";
const GITHUB = "https://github.com/adilW-2005/";

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 min-h-[calc(100svh-80px)] flex items-center relative z-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 w-full relative top-4 md:top-6 lg:top-8">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {NAME}
              <span className="block text-orange-500">{TAGLINE}</span>
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-4 py-1.5 text-sm text-slate-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Available for internships and collabs
            </span>
            <p className="max-w-2xl text-slate-700 text-lg">{SUMMARY}</p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-slate-900"
              >
                View projects
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-3 font-medium text-slate-900"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:flex-shrink-0 self-start md:self-center">
            <img
              src="/placeholders/avatar.png"
              alt="Adil Waheed headshot"
              className="h-40 w-40 md:h-[12rem] md:w-[12rem] lg:h-[16rem] lg:w-[16rem] rounded-full ring-2 ring-orange-200 object-cover shadow-md"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 