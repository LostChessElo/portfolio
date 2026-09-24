
export const routes = {
  "/": {
    title: "Luke Ferley — Portfolio",
    favicon: "/images/favicon.png",
    showVideo: true,
    html: `

  <div class="title-wrap">
    <img class="title" src="images/title.png" alt="Luke Ferley — Software Engineer" />
    <span class="splash" id="splash"></span>
  </div>

  <div class="menu-stack">
    <a class="btn-wrap" href="/projects">
      <img class="btn" src="images/std-btn.jpg" alt=""  />
      <span class="btn-text">Projects</span>
    </a>
    <a class="btn-wrap" href="/experience">
      <img class="btn" src="images/std-btn.jpg" alt="" />
      <span class="btn-text">Experience</span>
    </a>
    <a class="btn-wrap" href="/certifications">
      <img class="btn" src="images/std-btn.jpg" alt="" />
      <span class="btn-text">Certifications</span>
    </a>
  </div>

<div class="split-row">
  <a class="icon-btn icon-left" href="https://www.linkedin.com/in/luke-ferley" target="_blank" rel="noopener noreferrer">
    <img src="images/linkedin-btn.jpg" alt="LinkedIn" style="width: 100%; height: auto; display: block;" />
  </a>

  <div class="menu-split">
    <a class="btn-wrap" href="/about">
      <img class="btn" src="images/options-btn.jpg" alt="" />
      <span class="btn-text">About Me</span>
    </a>
  <a class="btn-wrap" href="/assets/Luke_Ferley_CV_2026.pdf" target="_blank" rel="noopener noreferrer">
    <img class="half-btn" src="images/options-btn.jpg" alt="" />
    <span class="btn-text">View Resume</span>
  </a>
  </div>

  <a class="icon-btn icon-right" href="https://github.com/LostChessElo" target="_blank" rel="noopener noreferrer">
    <img src="images/github-btn.jpg" alt="GitHub" style="width: 100%; height: auto; display: block;" />
  </a>
</div>

  <span class="corner-text corner-text--left">Minecraft Portfolio 1.0.0</span>
  <span class="corner-text corner-text--right">LostChessElo — All Rights Reserved</span>
    `,
  },

  "/about": {
    title: "About Me — Luke Ferley",
    favicon: "/images/notebookfavicon.png",
    showVideo: true,
    html: `
      <div class="about-page">

        <a class="btn-wrap back-btn" href="/">
          <img class="btn" src="/images/options-btn.jpg" alt="" />
          <span class="btn-text">&lt; Back</span>
        </a>

        <div class="player-screen">
          <section class="player-profile mc-panel">
            <div class="slot-label">PLAYER PROFILE</div>
            <div class="profile-frame">
              <img src="/images/luke-ferley-profile.jpg" alt="Luke Ferley" />
            </div>
            <div class="player-name">LUKE FERLEY</div>

            <ul class="contact-list">
              <li>
                <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z"/></svg>
                <span>lukeferley6@gmail.com</span>
              </li>
              <li>
                <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"/></svg>
                <span>+27 82 659 3111</span>
              </li>
              <li>
                <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                <span>Johannesburg South, 2091</span>
              </li>
            </ul>
          </section>

          <section class="player-info">
            <div class="mc-panel">
              <div class="slot-label">PLAYER INFO</div>
              <h1>Luke Ferley</h1>
              <p class="lead">Final-year Software Engineering student with experience building backend applications using Java, Spring Boot, Python, and AWS. Maintains an 83.4% academic average while mentoring peers in structured problem-solving.</p>
              <p>Passionate about clean code, Agile development, and Test-Driven Development, with a strong interest in building reliable, scalable software in collaborative engineering teams.</p>
            </div>

            <div class="mc-panel education-panel">
              <div class="slot-label">EDUCATION</div>
              <h2>WeThinkCode</h2>
              <p>Occupational Certificate in Software Engineering</p>
              <p>83.4% Year 1 Average · Sept. 2025 – Expected Dec. 2026</p>
            </div>

            <div class="player-actions">
              <a class="btn-wrap" href="/contact">
                <img class="half-btn" src="/images/options-btn.jpg" alt="" />
                <span class="btn-text">Contact Me</span>
              </a>
            </div>
          </section>
        </div>

        <section class="skills-section">
          <div class="section-heading">
            <span class="slot-label">INVENTORY</span>
            <h2>TECHNICAL SKILLS</h2>
          </div>
          <div class="skill-grid">
            <div class="skill-slot mc-panel">
              <h3>Languages</h3>
              <ul class="mc-list">
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div class="skill-slot mc-panel">
              <h3>Backend & Cloud</h3>
              <ul class="mc-list">
                <li>Spring Boot</li>
                <li>AWS Lambda</li>
                <li>API Gateway</li>
                <li>DynamoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div class="skill-slot mc-panel">
              <h3>Developer Tools</h3>
              <ul class="mc-list">
                <li>Git</li>
                <li>GitHub Actions</li>
                <li>Docker</li>
                <li>Postman</li>
              </ul>
            </div>
            <div class="skill-slot mc-panel">
              <h3>Practices</h3>
              <ul class="mc-list">
                <li>REST APIs</li>
                <li>CI/CD</li>
                <li>Unit &amp; Integration Testing</li>
                <li>Agile Development</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    `,
  },

  "/projects": {
    title: "Projects — Luke Ferley",
    favicon: "/images/pickaxefavicon.webp",
    showVideo: true,
    html: `
      <a class="btn-wrap back-btn" href="/">
        <img class="btn" src="/images/options-btn.jpg" alt="" />
        <span class="btn-text">&lt; Back</span>
      </a>

      <div class="world-select-panel">
        <div class="world-select-bg"></div>
        <div class="world-count-bg"></div>
        <img class="world-select-border" src="/images/mc-border.png" alt="" />
        <span class="world-count-number">4</span>

        <span class="world-list-title">Worlds</span>

        <div class="world-list">
          <a class="world-entry" href="https://github.com/LostChessElo/habit-tracker" target="_blank" rel="noopener noreferrer">
            <img src="/images/world-btn.png" alt="" />
            <span class="world-entry-title">Habit-Tracker API</span>
            <span class="world-entry-sub">Java · Spring Boot · PostgreSQL</span>
          </a>

          <a class="world-entry" href="https://github.com/LostChessElo/serverless-crud-API" target="_blank" rel="noopener noreferrer">
            <img src="/images/world-btn.png" alt="" />
            <span class="world-entry-title">Serverless Notes API</span>
            <span class="world-entry-sub">Boto3 · AWS Lambda · DynamoDB</span>
          </a>

          <a class="world-entry" href="https://github.com/LostChessElo/spam-detection" target="_blank" rel="noopener noreferrer">
            <img src="/images/world-btn.png" alt="" />
            <span class="world-entry-title">Spam Classifier</span>
            <span class="world-entry-sub">Python · NumPy · Pandas</span>
          </a>

          <a class="world-entry" href="https://github.com/LostChessElo" target="_blank" rel="noopener noreferrer">
            <img src="/images/world-btn.png" alt="" />
            <span class="world-entry-title">Brownfields Development</span>
            <span class="world-entry-sub">Java · Javalin · JDBC</span>
          </a>
        </div>
      </div>
    `,
  },

  "/experience": {
    title: "Experience — Luke Ferley",
    favicon: "/images/expfavicon.webp",
    showVideo: true,
    html: `
      <a class="btn-wrap back-btn" href="/">
        <img class="btn" src="/images/options-btn.jpg" alt="" />
        <span class="btn-text">&lt; Back</span>
      </a>

      <div class="world-select-panel">
        <div class="world-select-bg"></div>
        <div class="world-count-bg"></div>
        <img class="world-select-border" src="/images/mc-border.png" alt="" />
        <span class="world-count-number">0</span>
      </div>
    `,
  },

  "/certifications": {
    title: "Certifications — Luke Ferley",
    favicon: "/images/paperfavicon.webp",
    showVideo: true,
    html: `
      <a class="btn-wrap back-btn" href="/">
        <img class="btn" src="/images/options-btn.jpg" alt="" />
        <span class="btn-text">&lt; Back</span>
      </a>

      <div class="world-select-panel">
        <div class="world-select-bg"></div>
        <div class="world-count-bg"></div>
        <img class="world-select-border" src="/images/mc-border.png" alt="" />
        <span class="world-count-number">0</span>
      </div>
    `,
  },

  "/contact": {
    title: "Contact Me — Luke Ferley",
    favicon: "/images/favicon.png",
    showVideo: true,
    html: `
      <a class="btn-wrap back-btn" href="/about">
        <img class="btn" src="/images/options-btn.jpg" alt="" />
        <span class="btn-text">&lt; Back</span>
      </a>

      <div class="about-page">
        <section class="mc-panel contact-page">
          <div class="slot-label">SEND MESSAGE</div>
          <h1>Contact Me</h1>

          <form class="contact-form" id="contact-form" action="https://formspree.io/f/xzepaqwo" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>

            <button type="submit" class="btn-wrap send-btn">
              <img class="half-btn" src="/images/options-btn.jpg" alt="" />
              <span class="btn-text">Send</span>
            </button>

            <p id="contact-status" class="contact-status" hidden></p>
          </form>
        </section>
      </div>
    `,
  },
};


export const notFoundRoute = {
  title: "Not Found — Luke Ferley",
  favicon: "/images/favicon.png",
  showVideo: true,
  html: `
    <div class="title-wrap">
      <img class="title" src="/images/title.png" alt="Luke Ferley — Software Engineer" />
    </div>
    <div class="menu-stack">
      <a class="btn-wrap" href="/">
        <img class="btn" src="/images/std-btn.jpg" alt="" />
        <span class="btn-text">Back to Home</span>
      </a>
    </div>
  `,
};
