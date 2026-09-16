# Adil Waheed — Product-focused portfolio

## Authority
The current Stripe homepage is the primary visual reference. See docs/STRIPE-ADAPTATION.md for observed implementation, adaptation boundaries, and section mapping. This replaces earlier dark, sidebar, chip, and latte design directions. Content truth remains in the portfolio data and user briefs.

## Visual system
- White canvas, navy #0a2540 text, slate #526781 secondary text, purple #5840e8 actions, quiet #e2e9f1 borders. Light #f6f9fc product sections and a navy research section establish pacing.
- Self-hosted Instrument Sans; hierarchy from 40–60px hero to 30–40px section headings, 21–28px product names, 15–18px prose, and 12–14px metadata. Tracking floor -0.04em.
- 1264px outer frame with quiet side borders. 64px desktop content gutters, 40/32px laptop/tablet, 24px mobile. Major breakpoints at 940px and 640px. 88px desktop, 64px tablet, 48px mobile section padding.
- 76px navigation bar; compact primary and secondary actions; mobile menu with Escape and focus-return handling. No fixed sidebar.
- Original canvas ribbon echoes the reference's flowing color treatment without copying its illustration. Stop offscreen, when hidden, and on pause. Reduced motion uses a still ribbon. Cap pixel ratio at 1.5.
- Four clear experience records. Helm has a featured product module with the actual screenshot. RoomSync and Amanah use paired modules; InReach has a workflow treatment. Counterclaim, BounceBack, and grouped An-Nisa systems are denser editorial entries.
- Research uses a dark band with documented dataset scales. About uses a portrait and four restrained technical-area columns. Contact is simple and includes email, LinkedIn, GitHub and resume.
- Corners: 4px controls, 8px inner elements, 12px product containers. Borders express structure; soft offset shadows indicate product imagery depth. Hover arrows move 3px with short easing. Native details hold supporting technical content.

## Surface contract
Preserve Hero → Experience → Projects → Research → About / Technical Areas → Contact at every width. All core descriptions and outcomes remain visible; supporting details expand by keyboard or touch. Do not require public repositories, invent metrics, or present original UI diagrams as product screenshots.

## Centered developer stream and palette comparison
The hero now uses the fine-line developer stream from the user-supplied reference as its motion direction, not Stripe's broad homepage ribbon. A centered original parametric stream sits below the hero introduction. White (default) and Violet options are available via a compact palette switch; Violet darkens the hero and navigation only, preserving mostly light content surfaces. Purple is the unifying accent and research background. Source tracing and implementation differences are documented in docs/STREAM-ANIMATION-SOURCE.md.

## Current palette and motion — persistent white stream

Supersedes the earlier White/Violet comparison. White is the single palette, with violet ink, lavender borders, and faint peach research surfaces. No palette selector or dark research section. The paired ribbon is mounted once at the application root, fixed across the full viewport behind both the portfolio and Helm case study. Translucent white section surfaces soften the ribbon under reading content, while the hero exposes the strands more clearly. The motion control remains fixed at the lower right. Respect reduced motion, pause, and hidden tabs. Preserve existing content and project composition.


## Current direction: midnight blue and bright ribbon
Supersedes the white palette. Deep blue-purple surfaces, pale blue secondary text, violet controls, and bright violet/pink/peach strands. Preserve the existing full-viewport fixed animation, pause control, and reduced-motion support. Dark reading surfaces soften the ribbon behind content.

## Current content presentation — blue editorial stack

Homepage order: Hero, Experience, Projects, Research, Technical Areas, Contact. The hero is a portrait, name, confirmed UT Austin graduation year 2028, and short engineering focus. Header section navigation is left; Resume, LinkedIn, and GitHub are right. No wordmark or Built across strip.

Use one reusable editorial entry for the four experiences, seven projects, and two research entries. Visible summaries explain personal contributions, technology, and scale; one native disclosure reveals structured prose. Helm stays first with a stronger title and optional product capture inside its expanded details. Keep all essential information on the homepage. No bullets in expanded content; a bottom Minimize details control returns focus to the disclosure. Technical Areas are five compact keyword groups.

Surfaces shift gently between navy, slate blue, and blue-teal. Near-white body text improves reading contrast. Preserve the persistent violet/rose ribbon, its dimensions, deep tones, pause control, and reduced-motion behavior.


## Lighter blue and full-screen hero
Use a lighter steel-blue canvas with near-white reading text. The hero and header fill the initial viewport, with portrait and short intro aligned to the upper right. Remove introductory sentences under Experience, Projects, and Research headings. Keep the ribbon geometry and animation unchanged.


## Latest color reference and alignment
The supplied button reference replaces steel blue with vivid blue-violet (#573bff). Use closely related deeper section shades and pure white text. The full-screen hero introduction is at the upper left, including the portrait. Preserve the ribbon and content interactions.


## Final palette refinement: lifted midnight blue
The vivid reference-button color was too bright as a page surface. Current canvas is #142344, a modest lift from the original #0e1730 navy. Related section surfaces range from #162746 to #1c3150, with quiet blue borders. Preserve pure white text, upper-left full-screen hero, and existing ribbon tones.


## Hero alignment
The latest user preference centers the portrait, name, graduation line, and short introduction horizontally and vertically inside the full-screen hero. Preserve the midnight palette and ribbon.


## Hero alignment refinement
Anchor the introduction to the left content edge and center it vertically within the full-screen hero. Left-align the portrait and text as one group, preserving space for the ribbon to the right.

## Independent details and education

Each entry now has an overview column and a right-hand list of independently expandable topics. On narrow screens, topics follow the overview. Native details/summary provides click, touch, and keyboard interaction; hover only highlights the control. Each open topic includes a minimize control that restores focus. Preserve all 69 supplied topics.

Use real local brand assets beside company/project names, with simple topic SVGs where no verified logo is available. Education follows Research, using the UT Austin seal, Computer Science, and expected May 2028 graduation. Contact leads with the email address itself, without the coffee-chat heading.

## Background logo treatment

Replace small boxed marks with large 180px background watermarks (140px mobile). Blend monochrome logos into the navy surface, fade their lower edge, and keep text above them. Preserve recognizable shapes without adding motion or blocking input.

## Technology marks

Technical Areas displays all 28 requested technologies in grouped, labeled rows, using muted monochrome SVG masks. Experience and Projects show at most four defining technologies, with Python alone for UT research. Search concepts stay text-only. Preserve existing content keywords without duplicating exact labels from the icon row. Assets are self-hosted; provenance is in docs/TECH-ICON-SOURCES.md. The supplied category-icons.zip contains Cloud category symbols, not the Student Living app logo.
