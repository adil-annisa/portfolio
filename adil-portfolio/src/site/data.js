export const contact = {
  email: "adil2waheed@gmail.com",
  github: "https://github.com/adilW-2005",
  linkedin: "https://www.linkedin.com/in/adil-waheed0/",
  resume: "/Adil-Waheed-Resume.pdf",
};

export const projects = [
  {
    id: "charitystack",
    name: "CharityStack",
    label: "Payments / Product engineering",
    headline: "A donation starts with a tap.",
    description:
      "In-person fundraising, with the mobile experience and payment infrastructure working together. I owned the application and the backend flow behind it.",
    tech: "Stripe Terminal · Go · Cloud Functions · Pub/Sub",
    metric: "$50M+",
    metricLabel: "in platform contributions",
    detail:
      "I connected card-present payment collection to backend processing, with explicit confirmation, cancellation, and failure handling. The engineering challenge was keeping the donor experience simple while maintaining a dependable payment lifecycle.",
    flow: ["Collect", "Process", "Confirm"],
    type: "payment",
  },
  {
    id: "annisa",
    name: "An-Nisa",
    label: "Operational software / Community",
    headline: "Less paperwork. More people helped.",
    description:
      "A connected suite for food pantry visits, education, payments, and volunteer coordination. I turned staff workflows into software they could use every day.",
    tech: "React · Django / Flask · PostgreSQL",
    metric: "50%",
    metricLabel: "less manual administrative work",
    detail:
      "The suite supports client intake and qualification, inventory batches, visit records, reporting, and volunteer follow-ups. A public website and retrieval assistant make services easier to find, with 3,000+ monthly website visitors.",
    flow: ["Intake", "Coordinate", "Report"],
    type: "operations",
  },
  {
    id: "roomsync",
    name: "RoomSync",
    label: "Mobile / Real-time systems",
    headline: "Shared living, in sync.",
    description:
      "A mobile home for roommate expenses, chores, events, marketplace listings, messaging, and group voting. I built the app and backend, including real-time coordination and location-aware features.",
    tech: "Flutter / Dart · Node.js · Firestore · WebSockets · Google Maps",
    detail:
      "Household data connects expenses, chores, events, and group decisions. WebSockets carry messaging and live coordination; Google Maps supports location and nearby places. Shared state keeps household members coordinated across devices.",
    flow: ["One household", "Shared state", "Live updates"],
    type: "mobile",
  },
  {
    id: "amanah",
    name: "Amanah",
    label: "Policy systems / Hackathon",
    headline: "Purpose-built spending controls.",
    description:
      "Grant spending with rules built into the payment decision. I contributed the policy engine and backend integration for restricted cards, approvals, and reporting.",
    tech: "TypeScript · PostgreSQL · Stripe Issuing",
    detail:
      "A deterministic decision engine evaluates merchant rules, card limits, grant balances, and approval thresholds. Webhook verification and database transactions connect those decisions to Stripe Issuing. Built with a team as a hackathon prototype.",
    flow: ["Request", "Evaluate policy", "Approve or route"],
    type: "policy",
  },
];

export const experience = [
  {
    company: "Goldman Sachs",
    role: "Software Engineering Intern",
    dates: "Jun — Aug 2026",
    title: "Moving a financial platform. Preserving its correctness.",
    summary:
      "Backend and data architecture for a collateral platform supporting $70B+ in assets. I built incremental data synchronization and helped migrate four Java/Spring Boot services and 40+ APIs through production cutover.",
    detail:
      "The migration spanned four Java/Spring Boot services, 40+ REST APIs, and three databases, moving from Kubernetes to AWS ECS with Docker and AWS CDK. I separated transactional and analytical workloads across Aurora, DocumentDB, and DuckDB, and built incremental synchronization with schema validation, checkpoints, and audit logging.",
    context:
      "The work centered on keeping data correct while changing where services and databases ran. Schema validation checked incoming records, checkpoints tracked synchronization progress, and audit logging made the migration traceable. Separating transactional and analytical workloads helped reduce compute and infrastructure costs.",
    impact: "89% lower analytical compute · 79% lower infrastructure cost",
    tech: "Java / Spring Boot / AWS / Data architecture",
  },
  {
    company: "CharityStack",
    role: "Software Engineer",
    dates: "Sep 2025 — Apr 2026",
    title: "From the donor’s first tap to the payment backend.",
    summary:
      "I owned an in-person donation application and the infrastructure behind it, connecting a mobile product to event-driven payment processing.",
    detail:
      "Stripe Terminal powers the card-present workflow. Go services, Google Cloud Functions, and Pub/Sub support backend processing. The work connected product design, payment state, deployment, and failure handling on a platform supporting $50M+ in contributions.",
    context:
      "My ownership covered the mobile donation experience through production deployment. I connected payment collection with backend processing and explicit confirmation, cancellation, and failure handling, keeping the donor-facing flow aligned with the payment lifecycle.",
    impact:
      "Payment infrastructure on a platform supporting $50M+ in contributions",
    tech: "Mobile / Go / GCP / Stripe Terminal",
  },
  {
    company: "An-Nisa Hope Center",
    role: "Software Engineering Intern",
    dates: "May — Aug 2025",
    title: "Software that gives a nonprofit its time back.",
    summary:
      "I built tools for food pantry operations, education, payments, volunteers, and reporting—replacing manual work with repeatable, connected workflows.",
    detail:
      "Client intake, inventory, visit tracking, and volunteer follow-ups formed the operational core. A public site and retrieval assistant helped people discover services. The focus was useful software for staff and the community, with approximately 50% less manual administrative work.",
    context:
      "The work started with everyday staff needs: recording pantry visits, keeping track of inventory, coordinating programs, and following up with volunteers. I translated those tasks into connected applications. The retrieval assistant supported access to information, while operational software remained the core of the work.",
    impact: "50% less manual administration · 3,000+ monthly website visitors",
    tech: "Web applications / PostgreSQL / Workflow design",
  },
  {
    company: "UT Austin",
    role: "Machine Learning Intern · Soil Moisture Forecasting",
    dates: "May 2025 — Present",
    title: "Learning from years of environmental measurements.",
    summary:
      "I contributed preprocessing, missing-data handling, and temporal features for soil moisture forecasting across multiple sensor stations.",
    detail:
      "I experimented with LSTM, CNN, and Transformer models on multi-year time series, comparing forecasts with baselines and evaluating how models generalize across stations.",
    context:
      "Before comparing models, I worked on making multi-year sensor records usable: handling missing measurements, preparing inputs, and engineering temporal features. Baseline comparisons and cross-station evaluation helped examine whether a model learned patterns that transferred beyond one station.",
    impact: "300K+ time-series measurements",
    tech: "Python / Time-series modeling / Cross-station evaluation",
  },
];

export const layers = [
  {
    id: "sources",
    title: "Connected sources",
    short: "Tickets, docs, meetings & code",
    description:
      "Bring project context together from workspace records, GitHub, Slack, and Notion. Preserve where information came from so answers can point back to their sources.",
    tags: ["Workspace", "GitHub", "Slack", "Notion"],
  },
  {
    id: "backend",
    title: "Backend & data",
    short: "A shared workspace foundation",
    description:
      "FastAPI exposes product services, with gRPC and Protocol Buffers defining service contracts. PostgreSQL stores workspace records; Redis supports fast access and background coordination.",
    tags: ["FastAPI", "gRPC", "PostgreSQL", "Redis"],
  },
  {
    id: "retrieval",
    title: "Find the candidates",
    short: "Meaning meets exact language",
    description:
      "Dense retrieval finds conceptually related context. BM25 preserves exact terms such as ticket identifiers and project names. Together, they cover different ways people ask questions.",
    tags: ["Dense retrieval", "BM25"],
  },
  {
    id: "ranking",
    title: "Fuse, then rerank",
    short: "Turn two lists into useful context",
    description:
      "Reciprocal Rank Fusion combines ranked candidates without assuming their scores are comparable. A cross-encoder then scores query–passage pairs to refine the final context.",
    tags: ["Rank fusion", "Cross-encoder"],
  },
  {
    id: "agents",
    title: "Ground answers. Take action.",
    short: "Context becomes useful work",
    description:
      "Planning, retrieval, and execution agents use grounded context to answer questions and work across 35+ tools. Google ADK and MCP connect the orchestration to workspace and external actions.",
    tags: ["Google ADK", "MCP", "35+ tools"],
  },
  {
    id: "evaluation",
    title: "Keep it fresh. Check the result.",
    short: "Indexing & evaluation",
    description:
      "Incremental indexing refreshes changed content. Recall@K and NDCG assess retrieval quality; task-success and tool-use checks assess whether the agent actually completed the requested work.",
    tags: ["Incremental indexing", "Recall@K", "NDCG"],
  },
];
