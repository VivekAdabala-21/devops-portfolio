import React, { useState } from 'react';

const skills = [
  {
    group: 'Strong hands-on knowledge',
    level: 'Deep',
    items: ['AWS EC2', 'Linux', 'Git', 'GitHub', 'Jenkins', 'Docker', 'Docker Compose', 'Kubernetes', 'Networking', 'CI/CD'],
  },
  {
    group: 'Working knowledge',
    level: 'Medium',
    items: ['Argo CD', 'SonarQube', 'Terraform'],
  },
  {
    group: 'Basic understanding',
    level: 'Foundational',
    items: ['AWS EKS', 'AWS ECR', 'Monitoring Tools', 'JUnit', 'Trivy', 'Ansible', 'Helm Charts'],
  },
];

const projects = [
  {
    number: '01',
    name: 'Hospital Management System',
    type: 'END-TO-END DEVOPS DEPLOYMENT',
    status: 'Phase 1 & 2 completed',
    featured: true,
    description:
      'Implemented a deployment workflow for a Spring Boot hospital management application, progressing from Docker Compose-based deployment to Kubernetes orchestration.',
    stack: [
      'AWS EC2',
      'Ubuntu',
      'GitHub',
      'Maven',
      'Jenkins',
      'Docker',
      'Docker Compose',
      'MySQL 8.4',
      'Kubernetes',
      'Shell scripting',
    ],
    phases: [
      {
        title: 'Phase 1 — Jenkins CI/CD with Docker Compose',
        points: [
          'Containerized the Spring Boot application and MySQL database.',
          'Configured Docker Compose to run the application and database services.',
          'Configured Jenkins on AWS EC2 and integrated source checkout from GitHub.',
          'Automated Maven packaging and Docker image creation through a Jenkins pipeline.',
          'Used Jenkins credentials for the database password; generated the .env file during deployment and removed it afterward.',
          'Deployed with Docker Compose on EC2 and verified the running application.',
          'Jenkins Build #8 passed the pipeline stages, including deployment verification.',
        ],
      },
      {
        title: 'Phase 2 — Kubernetes deployment',
        points: [
          'Moved the application deployment to Kubernetes.',
          'Configured Kubernetes Deployments and Services.',
          'Used kubectl to apply and inspect Kubernetes resources and validate the deployment.',
        ],
      },
    ],
    repo: 'https://github.com/VivekAdabala-21/Hospital-Management-System',
    repoLabel: 'View GitHub repository',
  },
  {
    number: '02',
    name: 'Spring Boot CI/CD Pipeline',
    type: 'JENKINS & DOCKER HANDS-ON',
    status: 'Hands-on implementation',
    featured: false,
    description:
      'Worked through a Java 11 and Maven Spring Boot pipeline, building a Docker image and running the application in a container.',
    stack: ['Java 11', 'Spring Boot', 'Maven', 'Jenkins', 'Docker', 'Dockerfile'],
    phases: [
      {
        title: 'Implementation highlights',
        points: [
          'Cloned and configured the Spring Boot Maven project.',
          'Reviewed the pom.xml and Dockerfile configuration.',
          'Built the Docker image ultimate-cicd-pipeline:v1.',
          'Ran the application in a Docker container with port mapping 8010:8080.',
          'Worked with Jenkins pipeline configuration for build automation.',
        ],
      },
    ],
    repo: '',
    repoLabel: '',
  },
];

const workflow = [
  { step: '01', title: 'Source', detail: 'GitHub repository', icon: '⌘' },
  { step: '02', title: 'Build', detail: 'Jenkins + Maven', icon: '⚙' },
  { step: '03', title: 'Package', detail: 'Docker image', icon: '▣' },
  { step: '04', title: 'Deploy', detail: 'Docker Compose / Kubernetes', icon: '◈' },
  { step: '05', title: 'Verify', detail: 'Deployment checks', icon: '✓' },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          vivek<span>.devops</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Skills', 'Workflow', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#projects" onClick={closeMenu}>
            View projects <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" /> DEVOPS ENGINEER · OPEN TO OPPORTUNITIES
            </div>
            <p className="eyebrow">HELLO, I'M VIVEK</p>
            <h1>
              Building. Deploying.
              <br />
              <span>Automating applications.</span>
            </h1>
            <p className="hero-description">
              DevOps-focused engineer and 2025 Electronics and Communication
              Engineering graduate. I have hands-on experience building CI/CD
              workflows, containerizing Spring Boot applications, deploying
              with Docker Compose, and working with Kubernetes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <Arrow />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://github.com/VivekAdabala-21"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
              <span className="social-note">
                LinkedIn and email details can be added before publishing.
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="DevOps deployment terminal">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="terminal-card">
              <div className="terminal-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>deployment-pipeline.sh</span>
                <b>•••</b>
              </div>
              <div className="terminal-body">
                <p><span className="terminal-muted">01</span> <span className="terminal-purple">git</span> checkout main</p>
                <p><span className="terminal-muted">02</span> <span className="terminal-purple">mvn</span> clean package</p>
                <p><span className="terminal-muted">03</span> <span className="terminal-purple">docker</span> build -t hospital-app .</p>
                <p><span className="terminal-muted">04</span> <span className="terminal-purple">docker</span> compose up -d</p>
                <p><span className="terminal-muted">05</span> <span className="terminal-purple">kubectl</span> get deployments</p>
                <div className="terminal-success"><span>✓</span> build and deployment workflow</div>
                <div className="terminal-cursor" />
              </div>
            </div>
            <div className="floating-chip chip-cloud"><span>☁</span> AWS EC2</div>
            <div className="floating-chip chip-container"><span>▣</span> Docker · Kubernetes</div>
            <div className="hero-orb"><span>V</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              From application code
              <br />
              <span>to deployment.</span>
            </h2>
          </div>
          <div className="about-content">
            <p className="large-copy">
              I enjoy understanding how applications are built, packaged,
              deployed and operated.
            </p>
            <p className="muted-copy">
              I completed my B.Tech in Electronics and Communication
              Engineering in 2025. My hands-on work combines Java and Spring
              Boot fundamentals with Linux, AWS EC2, Jenkins, Docker and
              Kubernetes. My main project is an end-to-end DevOps deployment
              of a Hospital Management System, where I implemented a Jenkins
              CI/CD pipeline and then worked on Kubernetes deployment.
            </p>
            <div className="about-facts">
              <div><strong>2025</strong><span>Graduation year</span></div>
              <div><strong>02</strong><span>DevOps projects</span></div>
              <div><strong>CI/CD</strong><span>Hands-on focus</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TECHNICAL TOOLKIT</p>
            <h2>Tools I've worked with<span>.</span></h2>
            <p className="section-intro">
              Grouped by practical use. Kubernetes is listed as implemented;
              tools in the final card are areas I'm continuing to explore.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.group}>
                <div className="skill-card-top">
                  <span className="skill-index">0{index + 1}</span>
                  <span className="skill-symbol">{['☁', '⚙', '⌁'][index]}</span>
                </div>
                <div className="skill-card-heading">
                  <h3>{group.group}</h3>
                  <span className={`skill-level ${group.level === 'Beginner' ? 'learning' : group.level === 'Medium' ? 'intermediate' : ''}`}>
                    {group.level}
                  </span>
                </div>
                <div className="tag-list">
                  {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap workflow-section" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">03 / DELIVERY WORKFLOW</p>
            <h2>Code to deployment<span>.</span></h2>
            <p className="section-intro">
              A simplified view of the workflow practiced across my projects.
              The deployment target depends on the project phase.
            </p>
          </div>
          <div className="workflow-track">
            {workflow.map((item, index) => (
              <React.Fragment key={item.step}>
                <article className="workflow-card">
                  <span className="workflow-icon">{item.icon}</span>
                  <span className="workflow-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
                {index < workflow.length - 1 && <span className="workflow-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="workflow-note">
            Phase 1 used Docker Compose for deployment. Phase 2 used Kubernetes
            Deployments and Services.
          </p>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">04 / SELECTED PROJECTS</p>
              <h2>Built and implemented<span>.</span></h2>
              <p className="section-intro">
                Practical work focused on CI/CD, containerization and
                application deployment.
              </p>
            </div>
            <span className="project-count">02 DEVOPS PROJECTS</span>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span className="status status-complete">{project.status}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.phases.map((phase) => (
                    <div className="project-phase" key={phase.title}>
                      <h4>{phase.title}</h4>
                      <ul>
                        {phase.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                  <div className="tag-list project-tags">
                    {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  {project.repo && (
                    <div className="project-link">
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        {project.repoLabel} <Arrow diagonal />
                      </a>
                    </div>
                  )}
                </div>
                <div className="project-art" aria-hidden="true">
                  <div className="art-grid" />
                  <div className="art-stack">
                    <span>GIT</span><i>↓</i><span>CI/CD</span><i>↓</i><span>DEPLOY</span>
                  </div>
                  <span className="art-glow" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap learning-section">
          <div className="learning-box">
            <div>
              <p className="eyebrow">CONTINUOUS IMPROVEMENT</p>
              <h2>
                Learn the tools.
                <br />
                <span>Understand the systems.</span>
              </h2>
            </div>
            <div className="learning-right">
              <p>
                I'm continuing to strengthen my cloud and automation
                fundamentals through hands-on practice, troubleshooting and
                documenting what I build.
              </p>
              <div className="learning-steps">
                <span><i /> AWS and Linux fundamentals</span>
                <span><i /> CI/CD pipeline improvements</span>
                <span><i /> Kubernetes practice</span>
                <span><i /> Infrastructure as Code fundamentals</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>
            Let's build and
            <br />
            deploy something<span>.</span>
          </h2>
          <p className="contact-copy">
            I'm interested in entry-level DevOps opportunities and
            opportunities to contribute to cloud, CI/CD and deployment work.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:adabalavivek887@gmail.com"
            >
              Email me <Arrow diagonal />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/VivekAdabala-21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/vivek-adabala"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
          </div>
          <p className="contact-email">
            <a href="mailto:adabalavivek887@gmail.com">adabalavivek887@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">vivek<span>.devops</span></a>
        <span>DevOps · Cloud · CI/CD · Automation</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
