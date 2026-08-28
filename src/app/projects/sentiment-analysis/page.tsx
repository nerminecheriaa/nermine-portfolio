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
          End-to-End NLP Classification with Fine-Tuned DistilBERT
        </p>

        <p className="project-description">
          An end-to-end sentiment analysis system built around a fine-tuned
          DistilBERT model, exposed through a production-ready FastAPI REST API
          and containerized with Docker.
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
            href="https://huggingface.co/nermine22/distilbert-sentiment-imdb"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button secondary"
          >
            View Model ↗
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
          <span>DOMAIN</span>
          <strong>NLP · Sentiment Analysis</strong>
        </div>

        <div>
          <span>DEPLOYMENT</span>
          <strong>Docker · Hugging Face</strong>
        </div>

      </section>


      {/* Overview */}
      <section className="project-section">

        <div className="section-number">
          01 — OVERVIEW
        </div>

        <div className="section-grid">

          <h2>
            From raw text
            <span> to sentiment.</span>
          </h2>

          <div className="section-content">

            <p>
              The goal of this project was to build a complete NLP pipeline
              capable of automatically classifying text according to its
              sentiment.
            </p>

            <p>
              A DistilBERT transformer model was fine-tuned on the IMDB
              sentiment dataset to distinguish between positive and negative
              reviews.
            </p>

            <p>
              The trained model was then integrated into a FastAPI backend,
              providing REST endpoints for both individual predictions and
              batch CSV inference.
            </p>

          </div>

        </div>

      </section>


      {/* Pipeline */}
      <section className="project-section">

        <div className="section-number">
          02 — ML PIPELINE
        </div>

        <h2 className="section-title">
          A complete
          <span> NLP pipeline.</span>
        </h2>

        <div className="workflow">

          <div className="workflow-step">
            <span>01</span>

            <div>
              <h3>Input Text</h3>
              <p>
                A text review is submitted to the sentiment analysis system.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>02</span>

            <div>
              <h3>Tokenization</h3>
              <p>
                The input text is transformed into model-compatible tokens
                using the DistilBERT tokenizer.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>03</span>

            <div>
              <h3>Fine-Tuned DistilBERT</h3>
              <p>
                The fine-tuned transformer analyzes the semantic information
                contained in the input.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>04</span>

            <div>
              <h3>Classification</h3>
              <p>
                The model predicts whether the input expresses a positive or
                negative sentiment.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>05</span>

            <div>
              <h3>REST API</h3>
              <p>
                FastAPI exposes the trained model through simple REST
                endpoints.
              </p>
            </div>
          </div>


          <div className="workflow-step">
            <span>06</span>

            <div>
              <h3>Deployment</h3>
              <p>
                The application is containerized with Docker and deployed on
                Hugging Face Spaces.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* Model performance */}
      <section className="project-section">

        <div className="section-number">
          03 — MODEL PERFORMANCE
        </div>

        <h2 className="section-title">
          Measuring
          <span> model performance.</span>
        </h2>

        <p className="section-intro">
          The fine-tuned DistilBERT model was evaluated on the IMDB dataset
          using standard classification metrics.
        </p>

        <div className="metrics">

          <div className="metric">
            <span>ACCURACY</span>

            <h3>89.4%</h3>

            <p>
              Overall proportion of correctly classified sentiment examples.
            </p>
          </div>


          <div className="metric">
            <span>F1 SCORE</span>

            <h3>89.6%</h3>

            <p>
              Balanced measure combining precision and recall for sentiment
              classification.
            </p>
          </div>


          <div className="metric">
            <span>DATASET</span>

            <h3>IMDB</h3>

            <p>
              Sentiment classification dataset used for fine-tuning and
              evaluation.
            </p>
          </div>


          <div className="metric">
            <span>TRAINING SIZE</span>

            <h3>3K Samples</h3>

            <p>
              A subset of approximately 3,000 IMDB examples was used for the
              project.
            </p>
          </div>

        </div>

      </section>


      {/* API */}
      <section className="project-section">

        <div className="section-number">
          04 — API
        </div>

        <h2 className="section-title">
          Designed as a
          <span> usable service.</span>
        </h2>

        <p className="section-intro">
          The trained model is exposed through a FastAPI REST interface
          supporting both single-text and batch inference.
        </p>

        <div className="technology-grid">

          <div>
            <span>METHOD</span>
            <strong>GET</strong>

            <p className="api-description">
              Health check endpoint used to verify that the service is running.
            </p>
          </div>


          <div>
            <span>ENDPOINT</span>
            <strong>/health</strong>

            <p className="api-description">
              Returns the current status of the API.
            </p>
          </div>


          <div>
            <span>METHOD</span>
            <strong>POST</strong>

            <p className="api-description">
              Submit a single text for sentiment prediction.
            </p>
          </div>


          <div>
            <span>ENDPOINT</span>
            <strong>/predict</strong>

            <p className="api-description">
              Performs sentiment inference on a single text input.
            </p>
          </div>


          <div>
            <span>METHOD</span>
            <strong>POST</strong>

            <p className="api-description">
              Upload a CSV file containing multiple text samples.
            </p>
          </div>


          <div>
            <span>ENDPOINT</span>
            <strong>/predict-batch</strong>

            <p className="api-description">
              Runs batch sentiment prediction and returns the results.
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
          <span> modern ML tooling.</span>
        </h2>

        <div className="technology-grid">

          <div>
            <span>MODEL</span>
            <strong>DistilBERT</strong>
          </div>

          <div>
            <span>DATASET</span>
            <strong>IMDB</strong>
          </div>

          <div>
            <span>API</span>
            <strong>FastAPI + Uvicorn</strong>
          </div>

          <div>
            <span>CONTAINERIZATION</span>
            <strong>Docker</strong>
          </div>

          <div>
            <span>DEPLOYMENT</span>
            <strong>Hugging Face Spaces</strong>
          </div>

          <div>
            <span>MODEL HOSTING</span>
            <strong>Hugging Face</strong>
          </div>

        </div>

      </section>


      {/* Architecture / Takeaway */}
      <section className="project-section">

        <div className="section-number">
          06 — ENGINEERING TAKEAWAYS
        </div>

        <div className="section-grid">

          <h2>
            Beyond the
            <span> model.</span>
          </h2>

          <div className="section-content">

            <p>
              This project focuses not only on model fine-tuning, but on the
              complete path from an NLP model to a usable AI service.
            </p>

            <p>
              It combines transformer fine-tuning, API development,
              containerization, and cloud deployment into a single end-to-end
              workflow.
            </p>

            <p>
              The result is a reusable sentiment analysis service that can
              process both individual inputs and larger batches of text.
            </p>

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

          <a
            href="https://huggingface.co/nermine22/distilbert-sentiment-imdb"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button secondary"
          >
            View Model ↗
          </a>

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