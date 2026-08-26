import Link from "next/link";

export default function HandwrittenFeedbackPage() {
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
          PERSONAL PROJECT · JULY 2026
        </p>

        <h1>
          Handwritten Student
          <span> Feedback Analysis</span>
        </h1>

        <p className="project-tagline">
          VLM-Powered Document Analysis
        </p>

        <p className="project-description">
          An AI-powered document analysis pipeline that transforms
          handwritten student feedback into structured, classified data
          using Vision-Language Models.
        </p>

        <div className="project-buttons">

          <a
            href="https://github.com/nerminecheriaa/handwritten-feedback-ai.git"
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
          <strong>VLM · Document AI</strong>
        </div>

        <div>
          <span>STATUS</span>
          <strong>Completed</strong>
        </div>

      </section>

      {/* Overview */}
      <section id="overview" className="project-section">

        <div className="section-number">
          01 — OVERVIEW
        </div>

        <div className="section-grid">

          <h2>
            Turning handwritten feedback into
            <span> structured insights.</span>
          </h2>

          <div className="section-content">

            <p>
              Student feedback was collected through handwritten forms,
              making manual transcription and analysis time-consuming and
              difficult to scale.
            </p>

            <p>
              This project uses a Vision-Language Model to directly process
              handwritten documents and transform their content into
              structured textual data.
            </p>

            <p>
              The resulting feedback is then analyzed and classified
              according to predefined categories and sentiment.
            </p>

          </div>

        </div>

      </section>

      {/* Pipeline */}
      <section className="project-section">

        <div className="section-number">
          02 — AI PIPELINE
        </div>

        <h2 className="section-title">
          From handwritten document
          <span> to structured analysis.</span>
        </h2>

        <div className="workflow">

          <div className="workflow-step">
            <span>01</span>

            <div>
              <h3>Document Upload</h3>

              <p>
                The user uploads a handwritten student feedback form
                through the application interface.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>02</span>

            <div>
              <h3>Vision Analysis</h3>

              <p>
                Gemini Vision analyzes the handwritten document and
                extracts its textual content.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>03</span>

            <div>
              <h3>Transcription</h3>

              <p>
                The handwritten responses are converted into structured
                text that can be processed by downstream components.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>04</span>

            <div>
              <h3>Expectation Extraction</h3>

              <p>
                Individual student expectations are identified and
                separated from the original document.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>05</span>

            <div>
              <h3>Classification</h3>

              <p>
                Extracted expectations are classified according to their
                category and sentiment.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>06</span>

            <div>
              <h3>Structured Output</h3>

              <p>
                The system produces structured results that can be used
                for further analysis or reporting.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Architecture */}
      <section className="project-section">

        <div className="section-number">
          03 — TECHNICAL ARCHITECTURE
        </div>

        <div className="section-grid">

          <h2>
            A VLM-based
            <span> document pipeline.</span>
          </h2>

          <div className="section-content">

            <p>
              Instead of relying exclusively on traditional OCR engines,
              the system uses Gemini Vision to interpret handwritten
              documents and extract their content.
            </p>

            <p>
              The extracted information is then processed by the
              classification pipeline to identify student expectations
              and determine their sentiment.
            </p>

            <p>
              The backend exposes the processing pipeline through an API,
              while the interface allows users to upload individual
              documents and inspect the resulting analysis.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="project-section">

        <div className="section-number">
          04 — FEATURES
        </div>

        <h2 className="section-title">
          Designed for both
          <span> interactive and batch analysis.</span>
        </h2>

        <div className="metrics">

          <div className="metric">

            <span>INTERACTIVE ANALYSIS</span>

            <h3>Single Document</h3>

            <p>
              Upload a handwritten feedback form and immediately obtain
              its transcription and classification results.
            </p>

          </div>

          <div className="metric">

            <span>BATCH PROCESSING</span>

            <h3>Multiple Documents</h3>

            <p>
              Process several handwritten forms automatically through the
              batch pipeline and generate structured outputs.
            </p>

          </div>

        </div>

      </section>

      {/* Technology */}
      <section className="project-section">

        <div className="section-number">
          05 — TECHNOLOGY
        </div>

        <h2 className="section-title">
          Built with
          <span> modern AI tools.</span>
        </h2>

        <div className="technology-grid">

          <div>
            <span>VISION MODEL</span>
            <strong>Gemini Vision</strong>
          </div>

          <div>
            <span>AI APPROACH</span>
            <strong>Vision-Language Model</strong>
          </div>

          <div>
            <span>BACKEND</span>
            <strong>FastAPI</strong>
          </div>

          <div>
            <span>PROCESSING</span>
            <strong>Python</strong>
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

        <div className="project-buttons">

          <a
            href="https://github.com/nerminecheriaa/handwritten-feedback-ai.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button primary"
          >
            View GitHub ↗
          </a>

          <Link
            href="/"
            className="project-button secondary"
          >
            Back to portfolio
          </Link>

        </div>

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