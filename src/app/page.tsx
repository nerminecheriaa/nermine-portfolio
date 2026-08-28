import Link from "next/link";

const projects = [
  {
    title: "Agentic Research Copilot",
    category: "Agentic AI",
    description:
      "Self-correcting research assistant using Corrective RAG, multi-agent verification, and automated evaluation.",
    technologies: ["LangGraph", "Qdrant", "RAGAS", "Next.js"],
    href: "/projects/agentic-research-copilot",
  },
  {
    title: "Handwritten Student Feedback Analysis",
    category: "VLM / Document AI",
    description:
      "VLM-powered system for transcribing handwritten student feedback, extracting expectations, and classifying them by category and sentiment.",
    technologies: ["Gemini Vision", "VLM", "FastAPI"],
    href: "/projects/handwritten-feedback",
  },
  {
    title: "Sentiment Analysis API",
    category: "NLP / Machine Learning",
    description:
      "End-to-end sentiment analysis system using a fine-tuned DistilBERT model exposed through a FastAPI REST API.",
    technologies: ["DistilBERT", "FastAPI", "Docker"],
    href: "/projects/sentiment-analysis",
  },
];

const skills = {
  "Generative AI": ["RAG", "LangGraph", "LLMs", "Mistral AI", "Gemini", "RAGAS"],
  "Machine Learning": ["PyTorch", "Scikit-learn", "XGBoost", "NLP"],
  Backend: ["FastAPI", "Spring Boot", "REST APIs"],
  "Data & Vector DB": ["SQL", "MongoDB", "Qdrant"],
  "DevOps & Tools": ["Docker", "Git", "GitHub Actions", "Hugging Face"],
  Programming: ["Python", "Java", "C/C++"],
};

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <Link href="/" className="logo">
          NC<span>.</span>
        </Link>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/cv/Nermine_Cheriaa_Cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv"
        >
          Resume ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">NERMINE CHERIAA • AI ENGINEERING STUDENT</p>

          <h1>
            Building intelligent systems
            <br />
            with <span>Generative AI.</span>
          </h1>

          <p className="hero-description">
            Engineering student specializing in Generative AI and Agentic
            Systems, building end-to-end applications with RAG, LLMs, VLMs,
            and modern AI engineering practices.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects <span>↓</span>
            </a>

            <a
              href="https://github.com/nerminecheriaa"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>
          </div>

          <div className="availability">
            <span className="status-dot"></span>
            Open to 2027 End-of-Study Internship opportunities
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-card">
            <div className="card-top">
              <span>01</span>
              <span>AI / ML</span>
            </div>

            <div className="terminal">
              <p>
                <span className="green">const</span> focus = [
              </p>
              <p className="indent">&quot;Generative AI&quot;,</p>
              <p className="indent">&quot;Agentic Systems&quot;,</p>
              <p className="indent">&quot;RAG&quot;,</p>
              <p className="indent">&quot;Machine Learning&quot;</p>
              <p>];</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-label">01 — ABOUT</div>

        <div className="about-grid">
          <div>
            <h2>
              Turning AI concepts into
              <span> working systems.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I&apos;m an AI engineering student at INSAT with a strong focus
              on Generative AI and Agentic Systems.
            </p>

            <p>
              I enjoy building end-to-end AI applications, from LLM and VLM
              integration to retrieval, evaluation, APIs, and deployment.
            </p>

            <p>
              My goal is to build reliable AI systems that combine intelligent
              reasoning with practical software engineering.
            </p>

            <div className="about-info">
              <div>
                <span>Education</span>
                <strong>INSAT</strong>
              </div>

              <div>
                <span>Graduation</span>
                <strong>2027</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>GenAI / Agentic AI</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-header">
          <div className="section-label">02 — SELECTED PROJECTS</div>

          <p>
            A selection of AI systems I&apos;ve designed, developed, and
            deployed.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              href={project.href}
              key={project.title}
              className={`project-card ${
                index === 0 ? "project-featured" : ""
              }`}
            >
              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-label">03 — EXPERIENCE</div>

        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-date">Jul 2026 — Aug 2026</div>

            <div className="experience-main">
              <h3>Generative AI Engineer Intern</h3>
              <p className="company">Talan — Tunis</p>

              <p>
                Worked on SANTAID, an AI-powered health insurance and fraud
                detection platform.
              </p>

              <div className="experience-tags">
                <span>RAG</span>
                <span>Mistral AI</span>
                <span>Machine Learning</span>
                <span>Knowledge Graph</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Jun 2025 — Aug 2025</div>

            <div className="experience-main">
              <h3>AI Intern</h3>
              <p className="company">Hydatis — Tunis</p>

              <p>
                Developed AI-driven conversational solutions within a smart
                security platform and integrated them with APIs and databases.
              </p>

              <div className="experience-tags">
                <span>NLP</span>
                <span>Conversational AI</span>
                <span>APIs</span>
                <span>Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-label">04 — TECHNICAL SKILLS</div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>

              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <div className="section-label">05 — EDUCATION</div>

        <div className="education-item">
          <div>
            <h3>
              Engineering Degree in Computer Networks and Telecommunications
            </h3>

            <p>
              National Institute of Applied Sciences and Technology — INSAT
            </p>
          </div>

          <div className="education-date">
            2022 — 2027
          </div>
        </div>

        <div className="education-item">
          <div>
            <h3>Baccalaureate in Computer Science</h3>

            <p>Highest Honors — 18.04 / 20</p>
          </div>

          <div className="education-date">2022</div>
        </div>
      </section>

      {/* Languages */}
      <section className="section languages-section">
        <div className="section-label">06 — LANGUAGES</div>

        <div className="languages">
          <div>
            <strong>Arabic</strong>
            <span>Native</span>
          </div>

          <div>
            <strong>French</strong>
            <span>Fluent</span>
          </div>

          <div>
            <strong>English</strong>
            <span>Professional (B2)</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Let&apos;s build something
          <span> intelligent.</span>
        </h2>

        <p>
          I&apos;m currently looking for a 2027 End-of-Study Internship in
          AI/ML, Generative AI, or Agentic Systems.
        </p>

        <a
          href="mailto:nermine.cheriaa@insat.ucar.tn"
          className="primary-button"
        >
          nermine.cheriaa@insat.ucar.tn ↗
        </a>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Nermine Cheriaa</span>

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