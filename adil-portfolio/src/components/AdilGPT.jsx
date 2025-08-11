import { useEffect, useMemo, useRef, useState } from "react";

const MODEL = "gpt-4o-mini";

function buildSiteContext() {
  try {
    const sections = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "achievements", label: "Achievements" },
      { id: "contact", label: "Contact" },
    ];
    const chunks = [];
    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const text = el.innerText
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 2500);
      if (text) {
        chunks.push(`[# ${label}]\n${text}`);
      }
    });
    return chunks.join("\n\n").slice(0, 12000);
  } catch {
    return "";
  }
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm md:text-base shadow-sm border ${
          isUser
            ? "bg-orange-500 text-slate-900 border-orange-400"
            : "bg-white text-slate-800 border-orange-200"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default function AdilGPT() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m AdilGPT — ask about Adil’s projects, experience, skills, or collaborations.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const textareaRef = useRef(null);

  // Capture site context on mount
  const siteContext = useMemo(() => buildSiteContext(), []);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const resize = () => {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 160) + 'px';
    };
    resize();
    const handler = () => setTimeout(resize, 0);
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, []);

  async function sendMessage(e) {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: input.trim() },
        {
          role: "assistant",
          content:
            "Missing API key. Add VITE_OPENAI_API_KEY to your .env (do not commit it). For production, use a serverless proxy to avoid exposing secrets.",
        },
      ]);
      setInput("");
      return;
    }

    const next = [...messages, { role: "user", content: input.trim() }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const systemPrompt = `You are AdilGPT, a concise, helpful assistant for Adil Waheed's portfolio website. you reflect adils personality, and are a bit sarcastic and funny.
- Be accurate and specific. Keep responses compact by default.
- Use the site context to answer questions, adilwaheedportfolio.com, and everything in this site.

[Site Context]\n${siteContext}`.slice(0, 16000);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: MODEL,
          temperature: 0.4,
          messages: [
            { role: "system", content: systemPrompt },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content?.trim() || "(No response)";
      setMessages((prev) => [...prev, { role: "assistant", content }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I ran into an error reaching OpenAI. Please try again soon.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-labelledby="adilgpt-title" className="section pt-4">
      <h2 id="adilgpt-title" className="section-title">
        <span className="title-gradient">AdilGPT</span>
      </h2>
      <div className="card p-0 overflow-hidden">
        <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-orange-100 flex items-center justify-between">
          <div className="text-slate-800 font-medium">Chat with AdilGPT</div>
        </div>
        <div ref={containerRef} className="max-h-[50svh] sm:max-h-[420px] overflow-y-auto p-2 sm:p-3 space-y-3 bg-white/70">
          {messages.map((m, i) => (
            <Message key={i} role={m.role} content={m.content} />
          ))}
        </div>
        <form onSubmit={sendMessage} className="border-t border-orange-100 p-2 sm:p-3 flex items-end gap-2 bg-white">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Adil's projects, experience, or skills..."
            className="flex-1 resize-none rounded-xl border border-orange-200 px-3 py-2 text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
            rows={2}
            enterKeyHint="send"
            autoComplete="off"
            autoCorrect="on"
            spellCheck
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-orange-500 px-4 py-2 font-medium text-slate-900 shadow-sm disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
} 