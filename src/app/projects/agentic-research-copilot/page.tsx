import Link from "next/link";

export default function AgenticRagPage() {
  return (
    <main className="project-page">

      {/* Navigation */}
      <nav className="project-nav">
        <Link href="/" className="project-logo">
          NC<span>.</span>
        </Link>

        <Link href="/" className="back-link">
          ← Back to portfolio
        </Link>
      </nav>


      {/* Hero */}
      <section className="project-hero">

        <p className="project-label">
          PERSONAL PROJECT · AUGUST 2026
        </p>

        <h1>
          Agentic Research
          <span> Copilot</span>
        </h1>

        <p className="project-tagline">
          Corrective RAG with Multi-Agent Verification
        </p>

        <p className="project-description">
          An agentic research assistant designed to improve the reliability
          of Retrieval-Augmented Generation systems through relevance
          grading, query rewriting, web search fallback, and multi-agent
          verification.
        </p>

        <div className="project-buttons">

          <a
            href="https://github.com/nerminecheriaa/Agentic-Research-Copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button primary"
          >
            View GitHub ↗
          </a>

          <a
            href="#overview"
            className="project-button secondary"
          >
            Explore project ↓
          </a>

        </div>

      </section>


      {/* Project information */}
      <section className="project-info">

        <div>
          <span>ROLE</span>
          <strong>AI Engineer / Developer</strong>
        </div>

        <div>
          <span>TYPE</span>
          <strong>Personal Project</strong>
        </div>

        <div>
          <span>FOCUS</span>
          <strong>Agentic AI · RAG</strong>
        </div>

        <div>
          <span>STATUS</span>
          <strong>Deployed</strong>
        </div>

      </section>


      {/* Overview */}
      <section id="overview" className="project-section">

        <div className="section-number">
          01 — OVERVIEW
        </div>

        <div className="section-grid">

          <h2>
            Building a RAG system
            <span> that can correct itself.</span>
          </h2>

          <div className="section-content">

            <p>
              Traditional RAG systems can generate unreliable answers when
              the retrieved documents are incomplete, irrelevant, or
              insufficient to answer a user&apos;s question.
            </p>

            <p>
              This project explores an agentic approach where the system
              evaluates the quality of retrieved context and dynamically
              decides how to proceed.
            </p>

            <p>
              Depending on the retrieval quality, the agent can answer
              directly, rewrite the query, or fall back to web search before
              generating the final response.
            </p>

          </div>

        </div>

      </section>
{/* Project Highlights */}
<section className="project-section">

  <div className="section-number">
    02 — PROJECT HIGHLIGHTS
  </div>

  <div className="highlights-grid">

    <div className="highlight-card">
      <span className="highlight-number">01</span>

      <h3>Self-Correcting RAG</h3>

      <p>
        The system evaluates retrieved documents and dynamically decides
        whether to answer, rewrite the query, or perform a web search.
      </p>
    </div>

    <div className="highlight-card">
      <span className="highlight-number">02</span>

      <h3>Multi-Agent Verification</h3>

      <p>
        A generator and critic agent work together to verify the quality
        and reliability of the final response.
      </p>
    </div>

    <div className="highlight-card">
      <span className="highlight-number">03</span>

      <h3>RAG Evaluation</h3>

      <p>
        RAGAS is used to evaluate faithfulness and context precision
        across the retrieval and generation pipeline.
      </p>
    </div>

    <div className="highlight-card">
      <span className="highlight-number">04</span>

      <h3>Real-Time Interaction</h3>

      <p>
        The frontend provides a streaming interface that allows users
        to interact with the research agent in real time.
      </p>
    </div>

  </div>

</section>

      {/* Architecture */}
      <section className="project-section">

        <div className="section-number">
          02 — SYSTEM WORKFLOW
        </div>

        <h2 className="section-title">
          From query to
          <span> verified answer.</span>
        </h2>

        <div className="workflow">

          <div className="workflow-step">
            <span>01</span>

            <div>
              <h3>User Query</h3>
              <p>
                The user submits a research question to the system.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>02</span>

            <div>
              <h3>Document Retrieval</h3>
              <p>
                Relevant information is retrieved from the vector database.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>03</span>

            <div>
              <h3>Relevance Grading</h3>
              <p>
                An LLM-based grader evaluates whether the retrieved context
                is relevant to the query.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>04</span>

            <div>
              <h3>Query Rewriting</h3>
              <p>
                If the retrieved context is insufficient, the system
                reformulates the query.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>05</span>

            <div>
              <h3>Web Search Fallback</h3>
              <p>
                The agent can use web search when the internal knowledge
                source is insufficient.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>06</span>

            <div>
              <h3>Generator–Critic Verification</h3>
              <p>
                A critic agent evaluates the generated answer before the
                final response is returned.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* Technical architecture */}
      <section className="project-section">

        <div className="section-number">
          03 — TECHNICAL ARCHITECTURE
        </div>

        <div className="section-grid">

          <h2>
            An agentic layer
            <span> around RAG.</span>
          </h2>

          <div className="section-content">

            <p>
              LangGraph orchestrates the workflow as a stateful graph where
              each node performs a specific operation and conditional edges
              determine the next step.
            </p>

            <p>
              Qdrant is used as the vector database for semantic retrieval,
              while RAGAS provides evaluation metrics for assessing the
              quality of generated answers and retrieved context.
            </p>

            <p>
              The frontend provides a real-time streaming interface for
              interacting with the research agent.
            </p>

          </div>

        </div>

      </section>


      {/* Evaluation */}
      <section className="project-section">

        <div className="section-number">
          04 — EVALUATION
        </div>

        <h2 className="section-title">
          Evaluating RAG
          <span> quality.</span>
        </h2>

        <p className="section-intro">
          The system uses RAGAS to evaluate the quality and reliability
          of the RAG pipeline.
        </p>

        <div className="metrics">

          <div className="metric">
            <span>METRIC</span>

            <h3>Faithfulness</h3>

            <p>
              Measures whether generated answers are grounded in the
              retrieved context.
            </p>
          </div>


          <div className="metric">
            <span>METRIC</span>

            <h3>Context Precision</h3>

            <p>
              Measures how relevant the retrieved context is for answering
              the user&apos;s question.
            </p>
          </div>

        </div>

      </section>


      {/* Technology stack */}
      <section className="project-section">

        <div className="section-number">
          05 — TECHNOLOGY
        </div>

        <h2 className="section-title">
          Built with
          <span> modern AI tooling.</span>
        </h2>

        <div className="technology-grid">

          <div>
            <span>AGENT FRAMEWORK</span>
            <strong>LangGraph</strong>
          </div>

          <div>
            <span>VECTOR DATABASE</span>
            <strong>Qdrant</strong>
          </div>

          <div>
            <span>EVALUATION</span>
            <strong>RAGAS</strong>
          </div>

          <div>
            <span>FRONTEND</span>
            <strong>Next.js</strong>
          </div>

          <div>
            <span>CONTAINERIZATION</span>
            <strong>Docker</strong>
          </div>

          <div>
            <span>CI / CD</span>
            <strong>GitHub Actions</strong>
          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="project-end">

        <p className="project-label">
          PROJECT REPOSITORY
        </p>

        <h2>
          Explore the
          <span> implementation.</span>
        </h2>

        <a
          href="https://github.com/nerminecheriaa/Agentic-Research-Copilot"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button primary"
        >
          View GitHub ↗
        </a>

      </section>


      {/* Footer */}
      <footer className="project-footer">

        <span>
          © 2026 Nermine Cheriaa
        </span>

        <div>
          <a
            href="https://github.com/nerminecheriaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/nermine-cheriaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </footer>

    </main>
  );
}