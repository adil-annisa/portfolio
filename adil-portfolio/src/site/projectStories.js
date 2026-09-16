export const projectStories = [
  {
    id: "helm",
    name: "Helm",
    description:
      "A multi-tenant project-management platform connecting tickets, sprints, documents, meetings, code, and workflows. I built backend services, search, and agent systems so teams can find context and act on it in one workspace.",
    tech: "Python / FastAPI / PostgreSQL / Redis / Google ADK",
    sections: [
      [
        "Backend & workspace data",
        "I built Python/FastAPI services with gRPC and Protocol Buffer contracts, PostgreSQL workspace records, and Redis coordination. The platform brings together project information that would otherwise live across disconnected tools, supporting several product teams and thousands of tickets.",
      ],
      [
        "Retrieval & indexing",
        "I combined dense search with BM25 to cover both semantic questions and exact terms. Reciprocal Rank Fusion merges the candidate lists; a cross-encoder reranks the results. Incremental indexing refreshes changed content, while Recall@K and NDCG provide measures of retrieval quality.",
      ],
      [
        "Agents & evaluation",
        "I connected planning, retrieval, and execution agents through Google ADK and MCP. More than 35 tools integrate workspace actions with GitHub, Slack, and Notion. Task-success and tool-use evaluation check whether agents complete the intended work.",
      ],
    ],
    link: "https://www.helmpm.app/",
    linkLabel: "Visit Helm",
  },
  {
    id: "roomsync",
    name: "UT Student Living / RoomSync",
    description:
      "A mobile roommate-management product for expenses, chores, events, a marketplace, messaging, and group voting. I built the app and backend to keep shared household information coordinated across users.",
    tech: "Flutter / Dart / Node.js / Firestore / WebSockets / Google Maps",
    sections: [
      [
        "The product & shared state",
        "Roommates need a common view of household responsibilities and decisions. I connected expenses, chores, events, and voting to shared household data, with WebSockets supporting messaging and live coordination across mobile clients.",
      ],
      [
        "Location & mobile experience",
        "I integrated location and nearby-place features through Google Maps alongside the household workflows. The technical challenge was bringing real-time communication, shared records, and location-aware features into one mobile product.",
      ],
    ],
  },
  {
    id: "inreach",
    name: "InReach",
    description:
      "An AI-assisted outreach platform that turns a resume and target role into contact discovery, personalized messages, and email delivery. I connected the external APIs into a complete user workflow.",
    tech: "Angular / Flask / Gmail API / OAuth / Apollo",
    sections: [
      [
        "From discovery to delivery",
        "I connected Apollo contact discovery, AI-assisted message generation, and Gmail delivery through OAuth. The workflow carries a job seeker’s background and intended role from the initial input into relevant contacts and tailored outreach, rather than requiring separate tools for each step.",
      ],
    ],
    link: "https://www.inreachai.com/",
    linkLabel: "Visit InReach",
  },
  {
    id: "amanah",
    name: "Amanah",
    description:
      "A policy-first nonprofit spending prototype. I contributed the policy engine and backend integration that turn grant restrictions into explicit approval and decline decisions.",
    tech: "TypeScript / PostgreSQL / Stripe Issuing",
    sections: [
      [
        "Policy & authorization",
        "I built deterministic authorization logic around merchant rules, card limits, grant balances, and approval thresholds. Tests cover policy outcomes so spending decisions can be explained and checked.",
      ],
      [
        "Payment integration",
        "Stripe Issuing connects restricted virtual cards to the authorization flow. Webhook verification and database transactions connect payment events to grant rules, approvals, and reporting. Built with a team as a hackathon prototype.",
      ],
    ],
  },
  {
    id: "counterclaim",
    name: "Counterclaim",
    description:
      "A prototype workflow for gathering evidence and drafting insurance-denial appeals. I contributed patient uploads, chart retrieval, pipeline integration, and the interface.",
    tech: "FastAPI / Next.js / Retrieval / Agent orchestration",
    sections: [
      [
        "Evidence before drafting",
        "The staged workflow connects document extraction, patient context, guideline retrieval, and evidence gathering before generating an appeal draft for review. My work connected patient inputs and retrieved chart information to the wider pipeline and interface. This was a team-built prototype, not a deployed clinical system.",
      ],
    ],
  },
  {
    id: "bounceback",
    name: "Texas Convergent / BounceBack",
    description:
      "A mobile community product addressing social isolation. I collaborated with a cross-functional team on features for accountability and connection.",
    tech: "React Native / Firebase",
    sections: [
      [
        "Team & product contribution",
        "The product explored how mobile software could support social connection, accountability, and community participation. I contributed to mobile product development alongside the team, translating that problem into practical user-facing features.",
      ],
    ],
  },
  {
    id: "annisa-systems",
    name: "Selected An-Nisa systems",
    description:
      "Software I built for nonprofit staff and the people they serve. Each system addresses a specific operational need, from food distribution to finding information about services.",
    tech: "React / Django / Flask / PostgreSQL / Retrieval",
    sections: [
      [
        "Food Pantry",
        "Staff needed a consistent way to track who qualified for support, what they received, and what remained in stock. I built client intake and qualification, visit records, inventory with batches and expiration information, and audit history. The goal was to connect the full visit workflow and reduce manual record keeping.",
      ],
      [
        "Education Portal",
        "I built curriculum and program-management tools so education work could be organized in software. The portal gave staff a structured place to manage programs rather than treating each activity as a disconnected administrative task.",
      ],
      [
        "Payments, reporting & volunteers",
        "I built payment tracking, reporting, and volunteer workflows to support day-to-day operations. These tools connected administrative records and follow-ups, making repeatable work easier for staff to coordinate.",
      ],
      [
        "Organization-specific AI assistant",
        "I built a retrieval assistant over organization-specific information to help people find relevant services and answers. Its role was to support access to the nonprofit’s information alongside the operational systems.",
      ],
      [
        "Public website",
        "I built the public-facing site to help people discover the organization and its services. The site reaches 3,000+ monthly visitors and complements the internal tools by making the nonprofit easier to find and navigate.",
      ],
    ],
  },
];
