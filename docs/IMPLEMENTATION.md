# Open Systems portfolio

## Run

From `adil-portfolio`: `npm install`, then `npm run dev`.
`npm run lint` checks the active application. `npm run build` produces `dist/`.
Deploy that directory using any static host. Both `/` and `/work/helm/` have HTML entry points, unique metadata, and a canonical URL.

## Owners

- `src/site/data.js`: contact information, projects, experience, diagram layers.
- `src/site/Home.jsx`: homepage composition.
- `src/site/HelmCaseStudy.jsx`: dedicated technical narrative (lazy-loaded).
- `src/site/SystemView.jsx`: product/architecture switch and selectable layers.
- `src/site/ProjectVisual.jsx`: clearly labeled workflow illustrations.
- `src/site/Layout.jsx`, `primitives.jsx`: shared navigation, footer, links, typography.
- `src/index.css`: design tokens and responsive styles. See root DESIGN.md.
- `site-public/`: the only copied public directory. Old `public/` assets and inactive `src/components/` are preserved, not served or bundled. The legacy Tailwind configuration is inactive and excluded from lint along with those preserved components.

## Content provenance

The latest user brief explicitly supersedes the earlier audit's uncertainty for this exercise: Helm's specified gRPC, BM25, cross-encoder, ADK/MCP, evaluations, several teams, thousands of tickets, and 35+ tools are treated as supplied facts. No evaluation scores were invented. Other professional metrics are user-supplied. This implementation does not independently validate production metrics or newer source versions.

- Helm image: frame at approximately two seconds in the user-owned `AI PM/cursor-for-pm/homepage.MOV`. Actual product screenshot, not generated UI.
- Headshot: existing portfolio avatar (JPEG source).
- Research PDF: user-owned `Hurricane_Helene_Poster_Updated.pdf`.
- Resume: supplied `Adil_Waheed_Resume_Updated_2028.pdf`.
- Social image: screenshot of this implemented homepage.
- Fonts: Google Fonts, Instrument Sans variable TTF and IBM Plex Mono TTF; OFL license files included.
- Other product visuals: source-native illustrations, explicitly labeled. They are not screenshots or transaction records.

## Verification

- Production build and active-code lint pass.
- Chromium rendering at 1440, 1280, 768, 390, 320px: no horizontal overflow or failed images after lazy assets load.
- Axe scan: zero violations on homepage architecture view and loaded Helm case study.
- No page JavaScript errors observed.
- Keyboard: first Tab reaches skip link; Enter focuses main.
- Reduced motion: selected layer transform is none and transitions are zero-duration.
- Both system-view controls and all six layer selections exercised.
- Screenshots recorded in `/tmp/adil-portfolio-qa/` for desktop, mobile, hero, and diagram states.
- No production deployment performed. Automated accessibility checks do not replace manual assistive-technology testing; Safari and Firefox have not been tested.

The requested independent reviewer could not run because its usage limit was reached. The main agent performed the review and browser verification. The installed browser runtime had no connected browser; isolated headless system Chrome was used. A bundled Chromium download failed due to low disk space, without blocking use of installed Chrome.

## Orbital visual refinement

The hero now uses an original projected particle planet in Canvas 2D, with depth shading, cyan/violet points, orbiting satellites, and pointer tilt. It has pause/resume, respects reduced motion, and suspends rendering offscreen or in hidden tabs. No dependency was added. Project illustration surfaces now carry richer green, copper, blue, and violet colors, with bounded hover feedback.

## Recruiting restructure

Homepage order: Hero → Experience → Projects → Research → About / Technical Areas → Contact. Four experience entries and seven projects are present. Helm is a featured project with inline technical explanations; the dedicated homepage deep dive was removed. The prior case-study URL remains accessible for existing links, with corrected return anchors. The current user brief is the source for Flutter/Firestore RoomSync, Angular InReach, and React Native/Firebase BounceBack content; these supersede earlier implementation-audit stack descriptions. Soil moisture dates and 300K+ measurement scale come from existing portfolio content. No unsupported forecast-performance claim or unavailable research link was added.

Checked at 320, 390, 768, 1280, and 1440px: no overflow, missing images, or browser errors. Automated accessibility checks passed on homepage and existing Helm route. Section order, four roles, seven projects, navigation anchors, and expandable engineering notes were checked in the browser. Independent design and implementation reviews prompted visible impact metrics and larger mobile navigation targets.

## Editorial visual redesign

Replaced the dark orbital visual system with a light ink/olive editorial design. The homepage retains six sections, four experience entries, seven projects, and two research entries. Removed the unreferenced planet and decorative project-illustration modules. Replaced those illustrations with labeled system flows; real Helm screenshots remain the main product imagery. Rebuilt the stylesheet rather than accumulating another homepage override layer, while retaining and styling the existing detailed Helm route. Browser theme color and favicon now match the new system.

Impeccable passes: typeset established distinct name/section/record/body/metadata roles; layout tightened experience and differentiated project density; distill removed ornamental labels and the animated centerpiece; quieter removed glow and saturated panels; polish aligned rules, captions, links and mobile targets; animate limited motion to feedback and native disclosures. The Impeccable detector returned no findings. Desktop/mobile browser checks completed before the user's instruction to skip further browser inspection: no overflow at 320/390/768/1280/1440px, no broken images, no browser errors, and no automated accessibility violations on either route. Final changes use code checks only, per that instruction. An attempted independent visual review hit an agent usage limit; the main agent performed the visual assessment.

## Dark reference-inspired direction

Adapted the visual characteristics of https://github.com/AymanMahfuz27/personal-protfolio: near-black surface, soft text, serif narrative type, and a projected particle sculpture. The new ParticleSculpture implementation uses original precomputed geometry for sphere, cube, helix, and torus forms; shape buttons morph between targets. It caps pixel ratio at 2, uses fewer particles on mobile, suspends offscreen/hidden-tab animation, and supports pause and reduced motion. No reference source code was copied into the project. Six-section recruiting structure and all project content remain unchanged. No browser inspection was run, following the user’s instruction.

## Vertical simplification
Replaced featured/medium/compact project layouts with seven sequential project entries backed by projectStories.js. Native details expose technical topics, including individual An-Nisa systems. Expanded experience context explains implementation purpose using existing supplied facts. Research and technical areas now read vertically. Moved the portrait to the hero. Kept the dark theme and compact particle visual. Build and lint passed; no browser inspection was performed per the standing user instruction.

## Closer reference layout
Reworked navigation into a fixed side rail and separate external-link header. Narrowed the content column, matched the reference’s serif heading treatment and near-black palette, and moved the particle field into a persistent desktop side region. An IntersectionObserver maps active sections to sphere, cube, ring, or helix; pause and reduced-motion handling remain. Mobile keeps a compact sculpture at the top and accessible horizontal navigation. No further browser inspection was performed, per the standing instruction.

## WorkSignal animation
Applied Impeccable animate guidance: a single authored motion visual now reflects the portfolio's backend, retrieval, and forecasting work. WorkSignal replaces ParticleSculpture. Section changes update the conceptual flow and caption. Small record packets follow convergence/divergence routes; retrieval suppresses weaker output lanes; research uses sensor points and an animated waveform. No dependency added. Canvas pixel ratio is capped at 2, RAF stops when hidden/offscreen/paused, and reduced motion preserves a static explanatory visual. No browser inspection performed, honoring the user's standing instruction.

## LayeredChip scroll sequence
Replaced WorkSignal with an SVG chip whose transforms and trace clipping follow actual section positions. Five physical layers separate as the reader progresses, with circuit-like seam connections and a scroll-progress line. The last chapter rejoins the layers; reaching the page bottom guarantees completion even with a short Contact section. ResizeObserver updates mapping when expanded content changes section heights. Rendering is event-driven and settles after interpolation, cancels while hidden/frozen, and uses static layer geometry for reduced motion. Lint and production build passed. Browser inspection remains skipped per the user's standing preference.

## ScrollLatte
Replaced LayeredChip with ScrollLatte, a dependency-free SVG recipe driven by section progress: espresso fill/pour, milk fill/pour, falling sugar cubes, heart-shaped latte art, and final steam. Geometry updates reverse with scrolling. Unique clip IDs use React useId. Freeze, reduced-motion static rendering, hidden-tab cancellation, and layout-change tracking are retained. The contact CTA opens the existing LinkedIn profile, with email and resume links still available. Lint and production build passed. Browser inspection remains skipped as requested.

## Stripe-style portfolio adaptation (current)
Rebuilt the main presentation from the supplied adaptation brief and the live Stripe source audit. See STRIPE-ADAPTATION.md for the authoritative current mapping and review results; this supersedes the prior dark/sidebar/latte descriptions above. Home, Layout, and index.css now implement the light framed-grid system, original animated ribbon, mobile navigation, varied project modules, and dark research section. SignalRibbon replaces the unreferenced ScrollLatte component. Existing project content, data provenance, links, and standalone Helm route are preserved. Homepage metadata, favicon, and social preview were updated.

## White palette and persistent ribbon

Moved SignalRibbon from Hero to App, expanded it to the full viewport, and separated the fixed pause control from its decorative background layer. Removed the palette selector and palette-dependent renderer. Updated typography colors, section surfaces, project image treatment, borders, buttons, and Research to white with violet/peach undertones.

Validated desktop and mobile screenshots, fixed canvas bounds after scrolling, continued animation at Research, pause stability, reduced-motion behavior, Helm route, and horizontal overflow at 768/390/320px. Axe reported no violations on the homepage, with no browser runtime errors. Lint and production build passed.


## Midnight palette update
Updated surfaces, navigation, project panels, research, and ribbon brightness. Desktop/mobile screenshots inspected; homepage axe scan, overflow at 768/390/320px, persistent animation, pause, reduced motion, Helm route, lint, and build passed.

## Editorial content and blue palette

Imported all 13 supplied entries and 69 detail subsections into portfolioContent.json. ExpandableEntry provides shared native keyboard/touch disclosure behavior, visible summaries and keywords, structured prose, and a bottom minimize button that restores focus. Replaced mixed project grids/diagrams with vertical entries. Simplified the hero and navigation; removed the wordmark, Built across strip, and long About treatment. Confirmed graduation year 2028 with the user.

Validated section order, all entries collapsed initially, working anchors, keyboard opening, bottom collapse/focus restoration, reduced motion, mobile navigation, and no horizontal overflow at 1024/768/390/320px. Browser screenshots inspected at desktop/mobile; fixed inherited label rotation and mobile navigation divider. Lint and production build pass. The in-app browser was unavailable; used cached Playwright with system Chrome, without installing dependencies.

## Right-hand topics, education, and logos

Replaced one large disclosure per entry with 69 independently expandable topic disclosures. Desktop uses overview left and topics right; tablet/mobile stacks them. Added logo marks, a compact education section, and an email-led contact heading. Verified keyboard opening, independent state, minimize/focus return, reduced motion, all logo loads, and no overflow at 1024/940/768/390/320px. Inspected desktop/mobile screenshots. Lint and production build passed. Logo provenance is in LOGO-SOURCES.md.

## Technology icon rows

Added 28 local SVG technology assets, grouped Technical Areas rows, and curated per-entry subsets (maximum four). Sources: Simple Icons, Devicon for Java/AWS, and Google's official legacy pack for Firestore. Verified all assets return 200, all 28 Technical Areas labels render, and per-entry maximum is four. Desktop screenshot inspected; responsive overflow checks through 320px, disclosure keyboard/focus behavior, reduced motion, lint and build passed. Student Living retains the existing local house logo with a closer CSS crop; the flat screenshot variant has not been substituted.
