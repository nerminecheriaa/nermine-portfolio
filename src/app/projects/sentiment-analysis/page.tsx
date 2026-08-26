import Link from "next/link";

export default function SentimentAnalysisPage() {
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
          PERSONAL PROJECT · MARCH 2026
        </p>

        <h1>
          Sentiment
          <span> Analysis API</span>
        </h1>

        <p className="project-tagline">
          End-to-End NLP Classification System
        </p>

        <p className="project-description">
          An end-to-end sentiment analysis system built around a fine-tuned
          DistilBERT model, exposed through a production-ready FastAPI
          service for real-time and batch inference.
        </p>

        <div className="project-buttons">

          <a
            href="https://github.com/nerminecheriaa/sentiment-analysis-api.git"
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
          <strong>NLP · Deep Learning</strong>
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
            From raw text to
            <span> sentiment predictions.</span>
          </h2>

          <div className="section-content">

            <p>
              Sentiment analysis is a fundamental Natural Language Processing
              task used to determine whether a piece of text expresses a
              positive or negative sentiment.
            </p>

            <p>
              This project implements an end-to-end NLP pipeline based on
              DistilBERT, a lightweight Transformer architecture designed
              for efficient language understanding.
            </p>

            <p>
              The trained model is exposed through a FastAPI REST API,
              allowing applications to perform both individual and batch
              sentiment predictions.
            </p>

          </div>

        </div>

      </section>

      {/* ML Pipeline */}
      <section className="project-section">

        <div className="section-number">
          02 — MACHINE LEARNING PIPELINE
        </div>

        <h2 className="section-title">
          From dataset
          <span> to deployed model.</span>
        </h2>

        <div className="workflow">

          <div className="workflow-step">
            <span>01</span>

            <div>
              <h3>Dataset Preparation</h3>

              <p>
                A subset of the IMDB movie review dataset is prepared and
                formatted for supervised binary sentiment classification.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>02</span>

            <div>
              <h3>Text Tokenization</h3>

              <p>
                Input reviews are tokenized using the DistilBERT tokenizer
                before being passed to the neural network.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>03</span>

            <div>
              <h3>Model Fine-Tuning</h3>

              <p>
                DistilBERT is fine-tuned on the sentiment classification
                task using labeled movie reviews.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>04</span>

            <div>
              <h3>Model Evaluation</h3>

              <p>
                The trained model is evaluated using classification metrics
                including accuracy and F1-score.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>05</span>

            <div>
              <h3>API Integration</h3>

              <p>
                The trained model is integrated into a FastAPI application
                exposing REST endpoints for inference.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>06</span>

            <div>
              <h3>Deployment</h3>

              <p>
                The application is containerized with Docker and deployed
                for accessible model inference.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Model */}
      <section className="project-section">

        <div className="section-number">
          03 — MODEL
        </div>

        <div className="section-grid">

          <h2>
            Fine-tuning
            <span> DistilBERT.</span>
          </h2>

          <div className="section-content">

            <p>
              DistilBERT was selected as a lightweight alternative to larger
              Transformer architectures while maintaining strong performance
              for text classification.
            </p>

            <p>
              The model was fine-tuned specifically for binary sentiment
              classification using labeled IMDB reviews.
            </p>

            <p>
              The resulting model achieved strong performance while remaining
              lightweight enough to be integrated into an API-based
              application.
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
          Measuring
          <span> model performance.</span>
        </h2>

        <p className="section-intro">
          The model was evaluated on a 3,000-sample subset of the IMDB
          dataset using standard classification metrics.
        </p>

        <div className="metrics">

          <div className="metric">

            <span>ACCURACY</span>

            <h3>89.4%</h3>

            <p>
              Percentage of correctly classified positive and negative
              reviews.
            </p>

          </div>

          <div className="metric">

            <span>F1-SCORE</span>

            <h3>0.896</h3>

            <p>
              Harmonic mean of precision and recall for the binary
              classification task.
            </p>

          </div>

        </div>

      </section>

      {/* API */}
      <section className="project-section">

        <div className="section-number">
          05 — API & DEPLOYMENT
        </div>

        <div className="section-grid">

          <h2>
            Turning the model into a
            <span> usable service.</span>
          </h2>

          <div className="section-content">

            <p>
              The fine-tuned model is exposed through a FastAPI REST service,
              making the NLP model accessible to external applications.
            </p>

            <p>
              The API supports both individual text predictions and batch
              inference from CSV files.
            </p>

            <p>
              Docker is used to package the application and its dependencies,
              providing a reproducible deployment environment.
            </p>

          </div>

        </div>

      </section>

      {/* Technology */}
      <section className="project-section">

        <div className="section-number">
          06 — TECHNOLOGY
        </div>

        <h2 className="section-title">
          Built with
          <span> modern ML tooling.</span>
        </h2>

        <div className="technology-grid">

          <div>
            <span>MODEL</span>
            <strong>DistilBERT</strong>
          </div>

          <div>
            <span>FRAMEWORK</span>
            <strong>Hugging Face Transformers</strong>
          </div>

          <div>
            <span>BACKEND</span>
            <strong>FastAPI</strong>
          </div>

          <div>
            <span>CONTAINERIZATION</span>
            <strong>Docker</strong>
          </div>

          <div>
            <span>INTERFACE</span>
            <strong>Streamlit</strong>
          </div>

          <div>
            <span>LANGUAGE</span>
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
            href="https://github.com/nerminecheriaa/sentiment-analysis-api.git"
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