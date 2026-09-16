// Activated only in production builds on the portfolio's public domains.
// VITE_GA_MEASUREMENT_ID is a public identifier, never an API credential.
const measurementId =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-7EMX9K198S";
const productionHosts = new Set([
  "adilwaheedportfolio.com",
  "www.adilwaheedportfolio.com",
]);
let initialized = false;

export function initializeAnalytics() {
  if (
    initialized ||
    !import.meta.env.PROD ||
    !productionHosts.has(window.location.hostname) ||
    !/^G-[A-Z0-9]+$/.test(measurementId || "")
  )
    return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Delegate so lazy-loaded pages and nested SVG icons work too.
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const url = new URL(link.href, window.location.href);
    let action;
    if (url.protocol === "mailto:") action = "email_click";
    else if (/\.pdf$/i.test(url.pathname)) action = "resume_click";
    if (action === "resume_click" && !/resume/i.test(url.pathname)) {
      action = "research_document_click";
    }
    if (!action && url.hostname === "github.com") action = "github_click";
    if (!action && /(^|\.)linkedin\.com$/.test(url.hostname))
      action = "linkedin_click";
    if (!action && link.closest(".entry-link")) action = "project_link_click";
    if (!action) return;
    gtag("event", action, {
      entry_id: link.closest(".portfolio-entry")?.id || "profile",
      // Exclude email addresses, query strings, and fragments from custom events.
      destination:
        url.protocol === "mailto:" ? "email" : url.hostname + url.pathname,
    });
  });
  document.addEventListener(
    "toggle",
    (event) => {
      const detail = event.target;
      if (!detail.matches?.("details.entry-topic") || !detail.open) return;
      const summary = detail.querySelector("summary");
      const topic = Array.from(summary?.childNodes || [])
        .filter((node) => node.nodeType === 3)
        .map((node) => node.textContent)
        .join("")
        .trim();
      gtag("event", "detail_open", {
        entry_id: detail.closest(".portfolio-entry")?.id,
        topic,
      });
    },
    true,
  );
}
