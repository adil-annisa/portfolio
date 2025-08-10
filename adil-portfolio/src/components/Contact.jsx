import { FaLinkedin, FaGithub } from "react-icons/fa";
const EMAIL = "you@example.com"; // replace with your email
const LINKEDIN = "https://www.linkedin.com/in/adil-waheed0/";
const GITHUB = "https://github.com/adilW-2005/";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <h2 id="contact-title" className="section-title"><span className="title-gradient">Let’s build something</span></h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form
          className="card p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
              `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
            )}`;
          }}
        >
          <label className="block">
            <span className="block text-sm text-white/70">Name</span>
            <input name="name" required className="input mt-1" />
          </label>
          <label className="block">
            <span className="block text-sm text-white/70">Email</span>
            <input name="email" type="email" required className="input mt-1" />
          </label>
          <label className="block">
            <span className="block text-sm text-white/70">Message</span>
            <textarea name="message" rows={5} required className="input mt-1" />
          </label>
          <button className="btn-gradient rounded-xl px-5 py-3 font-medium">Send</button>
        </form>
        <aside className="card p-6 space-y-4">
          <div>
            <p className="text-slate-700">Prefer email?</p>
            <a className="text-orange-600 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="flex gap-4">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700"><FaLinkedin aria-hidden /> <span>LinkedIn</span></a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700"><FaGithub aria-hidden /> <span>GitHub</span></a>
          </div>
        </aside>
      </div>
      <div className="section-divider" />
    </section>
  );
} 