# Stripe source audit and portfolio adaptation

## Source boundary
Reviewed the live stripe.com homepage on September 15, 2026, its public HTML, five linked CSS bundles, and its compiled homepage JavaScript. The complete authoring repository is not public or supplied. This is a React/Vite adaptation informed by those browser-delivered assets, not a claim to possess or transplant Stripe's full source tree. No Stripe illustrations, logos, fonts, screenshots, backend code, or proprietary product copy were copied into the portfolio.

## Observed implementation
- The published site uses Next.js routes and split JavaScript/CSS bundles. The homepage has a separate page chunk and lazy graphical components.
- HDS design tokens define a 1264px maximum content frame, page/content gutters, 12-column desktop layout, and 640px / 940px responsive thresholds.
- Source spacing uses a core scale including 56px, 64px, and 96px section spacing. Content frames use quiet side borders, with section backgrounds carrying distinct product contexts.
- Type uses the site-specific sohne-var family, lightweight large headings, tight but moderate tracking, and subdued secondary headline text. The adaptation retains the already licensed, self-hosted Instrument Sans as an editable substitute.
- Hero: substantial text spanning the grid, primary/secondary compact actions, and a full-bleed animated color ribbon. The bundle contains WebGL/canvas rendering and requestAnimationFrame. The adaptation uses an original lower-complexity Canvas 2D ribbon with clipped bounds, capped pixel density, pause, offscreen suspension, and a static reduced-motion path.
- Navigation: 76px desktop header, compact links, grouped actions, and mobile menu treatment. The adaptation adds button-driven mobile navigation, Escape handling, focus return, and closure on navigation.
- Product modules: rounded 12px containers, balanced copy/artwork proportions, varied module sizes, light tinted illustration surfaces, and expandable information. Images receive deliberate crops and soft offset shadows.
- Interaction feedback: short easing-based hover transitions, arrow movement, clear focus treatment, and reduced-motion overrides. No scroll hijacking.

## Section mapping
- Stripe hero + color ribbon → Adil's compact introduction, graduation, actions, original ribbon, and portrait.
- Stripe client strip → text links to Adil's four experience entries; no third-party logos imported.
- Modular solution presentation → Experience and varied project modules.
- Large product module → Helm screenshot, product explanation, expandable backend/retrieval/agent contributions.
- Supporting product modules → RoomSync, Amanah, InReach; compact editorial entries for Counterclaim and BounceBack; grouped An-Nisa systems.
- Contrasting technical/scale section → Research, with user-supplied dataset scale and methodological context.
- Supporting information columns → Technical areas.
- Conversion footer → Contact, email, LinkedIn, GitHub, resume, and coffee-chat invitation.

## Implementation and review
Retained React/Vite, existing data models, native project disclosures, resume and research assets, and the existing standalone Helm URL. Replaced the previous sidebar and scroll-latte visual system. No new dependency was required.

The local review applied Impeccable typeset/layout/distill/polish principles without overriding the source direction. The source-derived framing, colors and module proportions remain primary. The mechanical Impeccable detector reported no findings. Browser checks at 1440/1280/768/390/320px showed no overflow, broken images, or JavaScript errors. Axe reported no violations on homepage or standalone Helm page. Verified six-section order, anchors, mobile menu/Escape/navigation closure, project expansion, animation pause, reduced motion, and keyboard skip link. These are bounded automated and visual checks, not a complete manual accessibility certification.
