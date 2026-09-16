import SystemView from "./SystemView";
import { TextLink } from "./primitives";
function Chapter({ id, label, title, children }) {
  return (
    <section id={id} className="case-chapter">
      <div className="chapter-heading">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className="chapter-body">{children}</div>
    </section>
  );
}
export default function HelmCaseStudy() {
  return (
    <>
      <section className="case-hero">
        <TextLink href="/#projects">Back to selected work</TextLink>
        <p className="eyebrow">Product engineering / Backend / Applied AI</p>
        <h1>
          Helm<span className="accent">PM</span>
        </h1>
        <p className="case-lead">
          The context to understand.
          <br />
          The tools to move forward.
        </p>
        <p className="case-intro">
          A multi-tenant project workspace that brings tickets, documents,
          meetings, and code together—then makes that context searchable and
          actionable.
        </p>
        <div className="case-facts">
          <div>
            <span>My role</span>
            <strong>Backend, retrieval & agents</strong>
          </div>
          <div>
            <span>Built for</span>
            <strong>Product teams</strong>
          </div>
          <div>
            <span>In use</span>
            <strong>Several teams · thousands of tickets</strong>
          </div>
        </div>
        <div className="link-row">
          <TextLink href="https://www.helmpm.app/" external>
            Open Helm
          </TextLink>
          <TextLink href="#architecture">Explore the architecture</TextLink>
        </div>
      </section>
      <figure className="case-product">
        <img
          src="/media/helm-product.png"
          width="1400"
          height="933"
          alt="Actual Helm product board showing project tickets across workflow states"
          fetchPriority="high"
        />
        <figcaption>
          The workspace brings project artifacts into a shared product surface.
          Actual product capture.
        </figcaption>
      </figure>
      <nav className="case-nav" aria-label="Case study contents">
        <a href="#problem">The problem</a>
        <a href="#architecture">Architecture</a>
        <a href="#retrieval">Retrieval</a>
        <a href="#agents">Agents</a>
        <a href="#decisions">Decisions</a>
      </nav>
      <Chapter
        id="problem"
        label="The problem"
        title="The work is connected. The context isn’t."
      >
        <p>
          A ticket describes what needs to happen. A meeting explains why. A
          document contains the decision, and a pull request contains the
          implementation. Teams lose time rebuilding that context across tools
          before they can make progress.
        </p>
        <p>
          Helm brings those artifacts into one workspace. Product teams can
          organize sprints, manage tickets, keep documents and meetings close to
          the work, and ask questions across connected context.
        </p>
        <h3>My part of the system</h3>
        <p>
          I built the backend, retrieval layer, and agent architecture, working
          with a team on the broader product. My focus was the path from
          workspace data to relevant context, and from context to useful
          actions.
        </p>
      </Chapter>
      <section id="architecture" className="case-system section">
        <p className="eyebrow">The architecture</p>
        <h2>One product. Several connected layers.</h2>
        <p className="case-intro">
          Start with what a team sees. Then look inside to explore the services,
          retrieval, and agents behind it.
        </p>
        <SystemView />
      </section>
      <Chapter
        id="backend"
        label="Backend & data"
        title="A workspace is the foundation."
      >
        <p>
          Python and FastAPI support the product services. gRPC and Protocol
          Buffers define service contracts, while PostgreSQL stores the
          relationships between workspaces, tickets, documents, and other
          project records. Redis supports fast access and background
          coordination.
        </p>
        <div className="architecture-strip">
          <span>Product interface</span>
          <span>FastAPI / gRPC</span>
          <span>PostgreSQL / Redis</span>
        </div>
        <h3>Context has a place and a source</h3>
        <p>
          Project records and retrieved content belong to a workspace. Keeping
          source identity, relationships, and workspace scope with the content
          makes it possible to recover the original artifact instead of
          returning an isolated snippet.
        </p>
        <p>
          The data layer serves two different needs: dependable product records
          and a searchable representation of their content. Indexing connects
          those views without making the search index the source of truth for
          the product.
        </p>
      </Chapter>
      <Chapter
        id="retrieval"
        label="Information retrieval"
        title="Finding something similar isn’t enough."
      >
        <p>
          A question about a project might use different words from its
          documents. A request for a particular ticket might require an exact
          identifier. The retrieval system needs to handle both.
        </p>
        <ol className="retrieval-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Retrieve for meaning and exact terms</h3>
              <p>
                Dense retrieval finds semantic relationships. BM25 retrieves
                lexical matches. Each produces a candidate set with a different
                strength.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Fuse the rankings</h3>
              <p>
                Reciprocal Rank Fusion combines candidate rankings without
                treating a vector similarity score and a lexical score as
                equivalent measurements.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Rerank the shortlist</h3>
              <p>
                A cross-encoder evaluates the query and candidate passage
                together. Applying it to a shortlist concentrates that extra
                computation where it can improve the final context.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Ground the response</h3>
              <p>
                Selected context is passed to the assistant with its source
                information. The answer can stay connected to the project
                artifacts behind it.
              </p>
            </div>
          </li>
        </ol>
        <details>
          <summary>
            Why the extra ranking stage? <span aria-hidden="true">+</span>
          </summary>
          <div className="details-content">
            <p>
              Candidate retrieval favors coverage and speed. Reranking favors
              relevance within a smaller set. Separating those jobs gives each
              stage a clear purpose, with an explicit latency and computation
              tradeoff.
            </p>
          </div>
        </details>
      </Chapter>
      <Chapter
        id="freshness"
        label="Indexing & evaluation"
        title="Useful context has to stay useful."
      >
        <h3>Update what changed</h3>
        <p>
          Project content changes constantly. Incremental indexing refreshes
          changed artifacts rather than rebuilding the entire workspace index.
          Content hashes help identify changes and avoid unnecessary embedding
          work.
        </p>
        <h3>Measure retrieval separately from task completion</h3>
        <div className="evaluation-grid">
          <div>
            <strong>Recall@K</strong>
            <p>Did the relevant information make it into the retrieved set?</p>
          </div>
          <div>
            <strong>NDCG</strong>
            <p>Did the most useful results appear near the top?</p>
          </div>
          <div>
            <strong>Task success</strong>
            <p>Did the agent complete the requested workflow?</p>
          </div>
          <div>
            <strong>Tool-use accuracy</strong>
            <p>Did it choose and use the appropriate tools?</p>
          </div>
        </div>
        <p>
          These checks answer different questions. A fluent response is not
          proof of a good retrieval result, and a correct tool selection is not
          proof that the whole task succeeded.
        </p>
      </Chapter>
      <Chapter
        id="agents"
        label="Agent architecture"
        title="Context is a starting point. Action is the next step."
      >
        <p>
          Google ADK coordinates planning, retrieval, and execution, with MCP
          connecting tool capabilities. The system spans 35+ tools across
          workspace data and integrations such as GitHub, Slack, and Notion.
        </p>
        <div className="agent-flow">
          <div>
            <span>Plan</span>
            <p>Break a request into the work it requires.</p>
          </div>
          <div>
            <span>Retrieve</span>
            <p>Gather the project context that informs it.</p>
          </div>
          <div>
            <span>Execute</span>
            <p>Use tools to create or update artifacts.</p>
          </div>
        </div>
        <h3>A concrete workflow</h3>
        <blockquote>
          “Summarize the sprint and turn the meeting’s follow-ups into tickets.”
        </blockquote>
        <p>
          The system gathers sprint and meeting context, identifies the
          follow-ups, and uses project tools to create the corresponding
          artifacts. The same architecture supports workspace questions, ticket
          updates, meeting summaries, and connected-tool workflows.
        </p>
        <p className="diagram-caption">
          Illustrative workflow showing the intended interaction, not a recorded
          production trace.
        </p>
      </Chapter>
      <Chapter
        id="decisions"
        label="Decisions & tradeoffs"
        title="The interesting work is between the boxes."
      >
        <div className="decision">
          <h3>Coverage versus precision</h3>
          <p>
            Hybrid retrieval widens the candidate pool. Reranking narrows it.
            The cost is more work per query, so the boundary between those
            stages matters.
          </p>
        </div>
        <div className="decision">
          <h3>Freshness versus indexing cost</h3>
          <p>
            Incremental updates reduce repeated work, but require a reliable way
            to detect changes and handle stale or deleted content.
          </p>
        </div>
        <div className="decision">
          <h3>Tool breadth versus predictable behavior</h3>
          <p>
            More integrations make the assistant useful in more situations. They
            also create more opportunities for the wrong action, which makes
            task and tool-use evaluation important.
          </p>
        </div>
        <div className="decision">
          <h3>Product simplicity versus system complexity</h3>
          <p>
            The user should be able to ask a straightforward question. The
            architecture carries the complexity of finding context, interpreting
            it, and connecting the right action.
          </p>
        </div>
      </Chapter>
      <Chapter
        id="results"
        label="Where it landed"
        title="Project context, put to work."
      >
        <p>
          Helm brings several product teams and thousands of tickets into a
          shared workspace. Its product, retrieval, and agent layers connect
          information that would otherwise remain spread across tools.
        </p>
        <p>
          The central lesson: retrieval is part of the product. Its freshness,
          scope, and relevance determine how useful everything built on top of
          it can be.
        </p>
        <div className="link-row">
          <TextLink href="https://www.helmpm.app/" external>
            Explore Helm
          </TextLink>
          <TextLink href="/#projects">More selected work</TextLink>
        </div>
      </Chapter>
    </>
  );
}
