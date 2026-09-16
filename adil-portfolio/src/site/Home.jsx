import { contact } from "./data";
import { TextLink } from "./primitives";
import EntryMark from "./EntryMark";
import ProfileIcon from "./ProfileIcon";
import TechRow from "./TechRow";
import ExpandableEntry from "./ExpandableEntry";
import content from "./portfolioContent.json";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-content compact-hero">
        <img
          className="hero-portrait"
          src="/media/adil.jpg"
          alt="Adil Waheed"
          width="104"
          height="104"
          fetchPriority="high"
        />
        <h1 id="hero-title">Adil Waheed</h1>
        <p className="hero-education">Computer Science at UT Austin ’28</p>
        <p className="hero-description">
          Software engineering · distributed systems
          <br />
          Backend · applied AI · ML infrastructure
        </p>
      </div>
    </section>
  );
}

function EntrySection({ id, title, entries, kind }) {
  return (
    <section
      id={id}
      className={`section content-section ${id}-section`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="content-section-heading">
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      <div className="entry-list">
        {entries.map((entry) => (
          <ExpandableEntry key={entry.id} entry={entry} kind={kind} />
        ))}
      </div>
    </section>
  );
}

const technicalAreas = [
  [
    "Languages",
    ["Java", "Python", "Go", "C++", "TypeScript", "JavaScript", "Swift"],
    "",
  ],
  ["Backend & Systems", ["Spring Boot", "FastAPI", "Node.js", "Linux"], "gRPC"],
  [
    "Cloud & Infrastructure",
    ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub"],
    "ECS · Cloud Functions · AWS CDK · Pub/Sub",
  ],
  [
    "Data",
    ["PostgreSQL", "Redis", "Firestore", "MongoDB", "Firebase"],
    "Aurora · DocumentDB · DuckDB",
  ],
  [
    "Product & Integrations",
    [
      "React",
      "Angular",
      "Flutter",
      "Next.js",
      "Stripe",
      "Google Maps",
      "Gmail",
    ],
    "WebSockets · Mobile",
  ],
  [
    "Search & AI",
    [],
    "Hybrid Retrieval · BM25 · Dense Retrieval · RRF · Cross-Encoder Reranking · RAG · Google ADK · MCP · Agents · Vertex AI",
  ],
];
function TechnicalAreas() {
  return (
    <section
      id="technical-areas"
      className="section content-section technical-section"
      aria-labelledby="technical-heading"
    >
      <h2 id="technical-heading">Technical Areas</h2>
      <dl className="technical-groups">
        {technicalAreas.map(([title, technologies, keywords]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>
              <TechRow names={technologies} />
              {keywords && <p className="technical-context">{keywords}</p>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
function Education() {
  return (
    <section
      id="education"
      className="section content-section education-section"
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading">Education</h2>
      <div className="education-entry">
        <EntryMark id="ut-austin" />
        <div>
          <h3>The University of Texas at Austin</h3>
          <p>Computer Science</p>
          <p>Expected graduation · May 2028</p>
          <div className="education-coursework">
            <h4>Completed coursework</h4>
            <p>
              Object-Oriented Programming · Data Structures · Computer Architecture
              · Operating Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section
      id="contact"
      className="section content-section simple-contact"
      aria-labelledby="contact-heading"
    >
      <div>
        <h2 id="contact-heading">
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </h2>
      </div>
      <div className="contact-primary-links">
        <TextLink href={contact.linkedin} external>
          <ProfileIcon name="linkedin" /> LinkedIn
        </TextLink>
        <TextLink href={contact.github} external>
          <ProfileIcon name="github" /> GitHub
        </TextLink>
        <TextLink href={contact.resume} external>
          <ProfileIcon name="resume" /> Resume
        </TextLink>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <EntrySection
        id="experience"
        title="Experience"
        kind="experience"
        entries={content.experience}
      />
      <EntrySection
        id="projects"
        title="Projects"
        kind="project"
        entries={content.projects}
      />
      <EntrySection
        id="research"
        title="Research"
        kind="research"
        entries={content.research}
      />
      <Education />
      <TechnicalAreas />
      <Contact />
    </>
  );
}
