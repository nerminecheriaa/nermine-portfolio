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
          An AI-powered system that transforms handwritten student feedback
          into structured insights using Vision-Language Models, automated
          expectation extraction, and sentiment classification.
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
            href="#demo"
            className="project-button secondary"
          >
            View demo ↓
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
      <section className="project-section">

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
              The extracted information is then analyzed to identify
              individual student expectations and classify them by category
              and sentiment.
            </p>

          </div>

        </div>

      </section>


      {/* AI Pipeline */}
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
                A handwritten student feedback form is uploaded through
                the application.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>02</span>

            <div>
              <h3>Vision Analysis</h3>

              <p>
                Gemini Vision processes the handwritten document and
                interprets its visual and textual content.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>03</span>

            <div>
              <h3>Transcription</h3>

              <p>
                The handwritten responses are converted into digital text
                for downstream processing.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>04</span>

            <div>
              <h3>Expectation Extraction</h3>

              <p>
                Individual student expectations are identified and
                separated from the original response.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>05</span>

            <div>
              <h3>Category Classification</h3>

              <p>
                Each expectation is assigned to a predefined category such
                as Learning, Career, Networking, or Technical Skills.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>06</span>

            <div>
              <h3>Sentiment Classification</h3>

              <p>
                Expectations are classified as Positive or Negative based
                on what the student wants, expects, dislikes, or wants to
                avoid.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* Demo / Visuals */}
      <section id="demo" className="project-section">

        <div className="section-number">
          03 — PROJECT DEMO
        </div>

        <h2 className="section-title">
          From handwritten input
          <span> to AI-generated results.</span>
        </h2>

        <p className="section-intro">
          The application provides an interactive workflow where a handwritten
          feedback form can be uploaded, transcribed, analyzed, and converted
          into structured results.
        </p>

        <div className="demo-placeholder">

          <div className="demo-placeholder-inner">

            <span>PROJECT SCREENSHOTS</span>

            <p>
              Add application screenshots here
            </p>

          </div>

        </div>

      </section>


      {/* Classification */}
      <section className="project-section">

        <div className="section-number">
          04 — CLASSIFICATION
        </div>

        <h2 className="section-title">
          Understanding what students
          <span> expect.</span>
        </h2>

        <p className="section-intro">
          Each extracted expectation is classified according to both its
          thematic category and its sentiment.
        </p>

        <div className="metrics">

          <div className="metric">
            <span>CATEGORY</span>

            <h3>Learning</h3>

            <p>
              Expectations related to learning opportunities, knowledge,
              and educational development.
            </p>
          </div>


          <div className="metric">
            <span>CATEGORY</span>

            <h3>Networking</h3>

            <p>
              Expectations related to meeting people, building connections,
              and professional networking.
            </p>
          </div>


          <div className="metric">
            <span>CATEGORY</span>

            <h3>Career</h3>

            <p>
              Expectations related to career development and professional
              opportunities.
            </p>
          </div>


          <div className="metric">
            <span>CATEGORY</span>

            <h3>Technical Skills</h3>

            <p>
              Expectations related to developing technical knowledge and
              practical skills.
            </p>
          </div>


          <div className="metric">
            <span>CATEGORY</span>

            <h3>Events & Conferences</h3>

            <p>
              Expectations related to events, conferences, and professional
              activities.
            </p>
          </div>


          <div className="metric">
            <span>CATEGORY</span>

            <h3>Other</h3>

            <p>
              Expectations that do not fall into the predefined categories.
            </p>
          </div>

        </div>

      </section>


      {/* Sentiment */}
      <section className="project-section">

        <div className="section-grid">

          <h2>
            Positive or
            <span> negative?</span>
          </h2>

          <div className="section-content">

            <p>
              In addition to thematic classification, the system determines
              the sentiment associated with each expectation.
            </p>

            <p>
              <strong>Positive</strong> represents what the student wants,
              expects, or would like to achieve.
            </p>

            <p>
              <strong>Negative</strong> represents what the student explicitly
              does not want, dislikes, or wants to avoid.
            </p>

          </div>

        </div>

      </section>


      {/* Technical Architecture */}
      <section className="project-section">

        <div className="section-number">
          05 — TECHNICAL ARCHITECTURE
        </div>

        <div className="section-grid">

          <h2>
            A VLM-based
            <span> document pipeline.</span>
          </h2>

          <div className="section-content">

            <p>
              The system uses Gemini Vision to interpret handwritten documents
              and extract their textual content.
            </p>

            <p>
              The extracted text is then processed by the classification
              pipeline to identify individual expectations and determine
              their category and sentiment.
            </p>

            <p>
              The backend exposes the processing pipeline through an API,
              while the interface allows users to analyze individual
              documents interactively.
            </p>

            <p>
              A batch processing pipeline is also available for analyzing
              multiple documents and generating structured outputs.
            </p>

          </div>

        </div>

      </section>

       {/* Project Demo */}
<section className="project-section">

  <div className="section-number">
    03 — PROJECT DEMO
  </div>

  <h2 className="section-title">
    From document
    <span> to insights.</span>
  </h2>

  <div className="project-gallery">

    <div className="gallery-item">
      <img
        src="/projects/handwritten-feedback/upload.png"
        alt="Handwritten feedback upload interface"
      />
      <p>01 — Upload a handwritten document</p>
    </div>

    <div className="gallery-item">
      <img
        src="/projects/handwritten-feedback/analysis.png"
        alt="Handwritten feedback analysis"
      />
      <p>02 — Transcription and expectation classification</p>
    </div>

    <div className="gallery-item">
      <img
        src="/projects/handwritten-feedback/results.png"
        alt="Handwritten feedback analysis results"
      />
      <p>03 — Structured analysis results</p>
    </div>

  </div>

</section>

      {/* Features */}
      <section className="project-section">

        <div className="section-number">
          06 — FEATURES
        </div>

        <h2 className="section-title">
          Built for both
          <span> interactive and batch analysis.</span>
        </h2>

        <div className="metrics">

          <div className="metric">

            <span>INTERACTIVE ANALYSIS</span>

            <h3>Single Document</h3>

            <p>
              Upload a handwritten feedback form and obtain its transcription,
              extracted expectations, and classification results.
            </p>

          </div>


          <div className="metric">

            <span>BATCH PROCESSING</span>

            <h3>Multiple Documents</h3>

            <p>
              Process multiple handwritten forms automatically through the
              batch pipeline and generate structured outputs.
            </p>

          </div>

        </div>

      </section>


      {/* Technology */}
      <section className="project-section">

        <div className="section-number">
          07 — TECHNOLOGY
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