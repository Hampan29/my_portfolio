import { useEffect, useState } from 'react'
import './App.css'
import { portfolio } from './data/portfolio'

const navItems = portfolio.nav

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')

    if (savedTheme) {
      return savedTheme
    }

    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'))

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-10% 0px -25% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="page-shell">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <button
            type="button"
            className="brand"
            onClick={() => scrollToSection('home')}
            aria-label="Go to home section"
          >
            {portfolio.name}
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="site-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <div id="site-menu" className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <main className="container main-content">
        <section id="home" className="hero-section section-spacing">
          <div className="hero-copy reveal">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>{portfolio.name}</h1>
            <h2>{portfolio.role}</h2>
            <p className="lead">{portfolio.introduction}</p>

            <div className="cta-row">
              <button type="button" className="button primary" onClick={() => scrollToSection('projects')}>
                View My Projects
              </button>
              <button type="button" className="button secondary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>

            <div className="resume-row">
              <a
                className="text-link"
                href={portfolio.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              <a href={portfolio.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={portfolio.x} target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="status-badge">Available for learning & projects</div>
            <div className="mini-panel">
              <span className="mini-label">Location</span>
              <strong>{portfolio.location}</strong>
            </div>
            <div className="mini-panel">
              <span className="mini-label">Current focus</span>
              <strong>Programming, DSA, Web Development</strong>
            </div>
            <ul className="focus-list">
              <li>Problem solving</li>
              <li>Web development</li>
              <li>Database concepts</li>
              <li>Software development</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">About Me</p>
            <h3>Building a strong foundation in computer science and software development.</h3>
          </div>

          <div className="about-grid reveal">
            <div className="about-card">
              <p>{portfolio.about}</p>
            </div>

            <div className="about-card">
              <ul className="check-list">
                <li>Currently pursuing B.Tech in Computer Science Engineering</li>
                <li>Interested in programming, software development, and problem solving</li>
                <li>Learning through projects, practice, and continuous improvement</li>
                <li>Focused on becoming a capable and confident software developer</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Education</p>
            <h3>Academic background</h3>
          </div>

          <div className="education-card reveal">
            {portfolio.education.map((item) => (
              <div key={item.degree} className="education-item">
                <div className="edu-badge">2nd Year</div>
                <h4>{item.degree}</h4>
                <p className="edu-college">{item.college}</p>
                <p className="edu-period">{item.period}</p>
                <p className="edu-status">{item.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Skills</p>
            <h3>Core technologies and learning areas</h3>
          </div>

          <div className="skills-grid reveal">
            {Object.entries(portfolio.skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h4>{category}</h4>
                <ul>
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Projects</p>
            <h3>Selected work and learning projects</h3>
          </div>

          <div className="projects-grid reveal">
            {portfolio.projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className={project.visual} aria-label={`${project.name} preview`}>
                  <span>{project.badge}</span>
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <ul className="feature-list compact">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Currently Learning</p>
            <h3>Tech skills and concepts I am actively improving.</h3>
          </div>

          <div className="learning-layout reveal">
            <div className="learning-card">
              <ul className="learning-list">
                {portfolio.learning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="learning-card">
              <h4>Problem Solving / Programming</h4>
              <ul className="learning-list">
                {portfolio.problemSolving.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="achievements" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Certifications / Achievements</p>
            <h3>Academic and technical milestones</h3>
          </div>

          <div className="empty-state reveal">
            <p>{portfolio.achievementsLabel}</p>
          </div>
        </section>

        <section id="contact" className="section-spacing">
          <div className="section-heading reveal">
            <p className="section-tag">Contact</p>
            <h3>Let&apos;s connect and build something meaningful.</h3>
          </div>

          <div className="contact-grid reveal">
            <div className="contact-card">
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href={portfolio.contact.emailHref}>{portfolio.email}</a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a href={portfolio.contact.githubHref} target="_blank" rel="noreferrer">
                    {portfolio.github}
                  </a>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href={portfolio.contact.linkedinHref} target="_blank" rel="noreferrer">
                    {portfolio.linkedin}
                  </a>
                </li>
                <li>
                  <span>X</span>
                  <a href={portfolio.contact.xHref} target="_blank" rel="noreferrer">
                    {portfolio.x}
                  </a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${portfolio.phone}`}>{portfolio.phone}</a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Write your message here" />
              </label>
              <button type="submit" className="button primary button-full">
                Send Message
              </button>
              <p className="form-note">{portfolio.contact.note}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-name">{portfolio.name}</p>
            <p className="footer-role">{portfolio.role}</p>
          </div>

          <div className="footer-links">
            <a href={portfolio.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolio.x} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={portfolio.contact.emailHref}>{portfolio.email}</a>
          </div>

          <p className="copyright">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
