'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '../components/theme-provider'

const heroImage = '/images/56eed05e-d4a1-44ce-88df-08f81bb3e992.jpg'
const resumeUrl = 'https://blobs.vusercontent.net/blob/CV%20-PyyoAn7Sa7ctzamf9cPf69qWkvHFDZ.pdf'
const banhopsImage = '/images/efd058de-c977-466b-a846-86e670bf30fc.jpg'
const teamImage = '/images/WhatsApp Image 2025-09-23 at 1.50.50 PM (1).jpeg'
const ciscoImage = '/Certifications/previews/introduction-to-cybersecurity.png'
const awsImage = '/images/image.png'
const awsBankingPdf = '/Certifications/Secure_Banking_System_on_AWS.pdf'

const links = {
  linkedin: 'https://www.linkedin.com/in/mostafa-ibrahem-tolba',
  github: 'https://github.com/AboodHany/banhops1-main',
  banhops: 'https://banhops1-main.vercel.app',
}

const certificates = [
  { date: 'Jul 2025', title: 'Red Hat System Administration II (RH134)', org: 'National Telecommunication Institute (NTI)', provider: 'Red Hat Training and Certification 2025', href: "/Certifications/'Certificate of Attendance (RH134-9.3).pdf", image: '/Certifications/previews/rh134.png' },
  { date: 'Jul 2025', title: 'Red Hat System Administration I (RH124)', org: 'National Telecommunication Institute (NTI)', provider: 'Red Hat Training and Certification', href: "/Certifications/'Certificate of Attendance (RH124-9.3).pdf", image: '/Certifications/previews/rh124.png' },
  { date: 'Oct 2025', title: 'Python Programming Basics', org: 'ITI Platform — Mahara-Tech', duration: '1 Hour, 38 Minutes', href: '/Certifications/python_Certificate_mahara tech.pdf', image: '/Certifications/previews/python.png' },
  { date: 'Jul 2025', title: 'Linux Red Hat Administration', org: 'National Telecommunication Institute (NTI) — ITIDA', duration: '120 Hours · Score: 100%', href: '/Certifications/Linux Red hat Administration.pdf', image: '/Certifications/previews/linux.png' },
  { date: 'Jun 2025', title: 'Malware Analysis Fundamentals', org: 'ITI Platform – Mahara-Tech', duration: '5 Hours, 20 Minutes', href: '/Certifications/Malware Analysis.pdf', image: '/Certifications/previews/malware.png' },
  { date: 'Feb 2025', title: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', href: '/Certifications/certificate_Introduction to Cybersecurity.pdf', image: ciscoImage },
  { date: 'Feb 2025', title: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', href: '/Certifications/I2CS__1_.png', image: '/Certifications/I2CS__1_.png' },
  { date: 'Sep 2026', title: 'AWS Academy Cloud Foundations', org: 'Amazon Web Services (AWS)', href: '#', image: awsImage },
  { date: 'Feb 2024', title: 'Cyber Security Bootcamp', org: 'Google Developer Student Clubs – Benha University', duration: '36 Hours', href: '/Certifications/BootcampGDSCBenha.pdf', image: '/Certifications/previews/gdsc.png' },
]

const projects = [
  { title: 'BanHops', role: 'Full-Stack Developer & Project Lead', text: 'A smart transportation application designed to help users find, compare, and navigate routes across Benha. The system provides route options based on travel time, cost, and transportation type, with Google Maps integration and an AI chatbot for intelligent route assistance.', image: banhopsImage, action: 'VISIT SITE', href: links.banhops, tech: ['Flutter', 'Spring Boot', 'Firebase', 'Figma', 'AI Chatbot'] },
  { title: 'Secure Banking System on AWS', role: 'Cloud Security Project — DEPI', text: 'A secure banking simulation built on AWS with a custom VPC, public subnet, least-privilege Security Groups, an EC2 web server running Apache and PHP, and an isolated RDS MySQL database. The application displays relational user and account data dynamically from the database.', image: awsImage, imageFit: 'contain', action: 'VIEW PDF', href: awsBankingPdf, tech: ['AWS', 'EC2', 'RDS', 'VPC', 'Security Groups', 'MySQL', 'PHP', 'Linux'] },
  { title: 'Brute-Force Attack Simulation', role: 'Cybersecurity Lab — Team Project', text: 'An educational cybersecurity simulation performed in an isolated Kali Linux lab environment to demonstrate how weak passwords are vulnerable to automated password-guessing attacks against a test login page (vulnweb), using Hydra and the rockyou.txt wordlist. Worked in a 6-member team on attack setup, request analysis, and documenting mitigation strategies.', image: teamImage, action: 'VISIT SITE', href: '/Certifications/Hydra.pdf', tech: ['Kali Linux', 'Hydra', 'rockyou.txt', 'Web Login Testing'] },
]

const tech = [
  { label: 'Python', icon: '🐍' },
  { label: 'C++', icon: '💻' },
  { label: 'Bash', icon: '⌨️' },
  { label: 'Kali Linux', icon: '🛠️' },
  { label: 'RHEL', icon: '🐧' },
  { label: 'AWS', icon: '☁️' },
  { label: 'IAM', icon: '🔑' },
  { label: 'VPC', icon: '🌐' },
  { label: 'EC2', icon: '🖥️' },
  { label: 'RDS', icon: '🗄️' },
  { label: 'Security Groups', icon: '🚧' },
  { label: 'Nmap', icon: '🔎' },
  { label: 'Wireshark', icon: '📡' },
  { label: 'Hydra', icon: '🧪' },
  { label: 'John the Ripper', icon: '🔐' },
  { label: 'Scapy', icon: '🧬' },
  { label: 'Cryptography', icon: '🔒' },
  { label: 'CCNA', icon: '🧭' },
  { label: 'Vulnerability Scanning', icon: '🛡️' },
  { label: 'MySQL', icon: '🗃️' },
  { label: 'PHP', icon: '🐘' },
  { label: 'Flutter', icon: '📱' },
  { label: 'Figma', icon: '🎨' },
  { label: 'Git', icon: '🧩' },
  { label: 'GitHub', icon: '🐙' },
]

const services = [
  {
    icon: '☁',
    title: 'Cloud Security & AWS Auditing',
    text: 'Setting up secure AWS environments — IAM policies, VPC design, and EC2/RDS Security Group configuration — plus basic cloud security audits.',
  },
  {
    icon: '🐧',
    title: 'Linux Server Administration',
    text: 'RHEL and Kali Linux setup, hardening, and Bash automation for reliable, secure systems.',
  },
  {
    icon: '🔍',
    title: 'Vulnerability Assessment',
    text: 'Scanning and reporting on network and web application vulnerabilities using tools like Nmap, in authorized lab or test environments.',
  },
  {
    icon: '📱',
    title: 'Full-Stack App Development',
    text: 'Building cross-platform apps with Flutter, integrated with backend services — as demonstrated in BanHops, my graduation project.',
  },
]

const trainings = [
  {
    date: 'Jul 2026 — Present',
    title: 'AWS Security Cloud Computing',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Egypt',
    bullets: [
      'Working through AWS Cloud Foundations training covering cloud computing fundamentals, AWS global infrastructure, billing, security, and networking.',
      'Currently advancing into AWS Cloud Security Foundations with hands-on labs on IAM, VPC, EC2, and Security Groups.',
    ],
    pills: ['IAM', 'VPC', 'EC2', 'Security Groups', 'Cloud Foundations'],
  },
  {
    date: 'Sep 2 – Sep 27, 2025',
    title: 'Cybersecurity Superhero Academy',
    org: 'National Telecommunication Institute (NTI)',
    location: 'Egypt — University Students Category',
    bullets: [
      'Practical security simulations and ethical hacking foundations: network security, threat actors & frameworks, vulnerability assessment, and web app vulnerability scanning.',
      'Covered WordPress hardening, penetration testing basics, cloud security auditing, log analysis, and threat hunting.',
      'Trained on security awareness tools including GoPhish and Canva for phishing simulations.',
      'Final project: worked in a 6-member team on a brute-force attack simulation using Hydra in an authorized, isolated Kali Linux lab.',
    ],
    pills: ['Vulnerability Assessment', 'Threat Hunting', 'Log Analysis', 'Cloud Security Auditing'],
  },
  {
    date: 'Jun 29 – Jul 24, 2025',
    title: 'Linux Red Hat Administration Training',
    badge: '100%',
    org: 'National Telecommunication Institute (NTI) / ITIDA',
    location: 'Egypt',
    bullets: [
      '120-hour intensive program — 90 hours of technical training (RH124 + RH134) covering system administration, storage, networking, and security.',
      '30 hours of soft-skills development including communication, teamwork, and time management.',
      'Final score: 100%.',
    ],
    pills: ['RH124', 'RH134', 'Linux Administration'],
  },
  {
    date: 'Feb 4 – Feb 8, 2024',
    title: 'Cybersecurity Bootcamp',
    badge: 'Top 10',
    org: 'Google Developer Student Clubs (GDSC), Benha University',
    location: 'Egypt — with CyberCohesion',
    bullets: [
      '36-hour hands-on bootcamp covering Linux fundamentals, networking basics, and password cracking with John the Ripper.',
      'Packet crafting and analysis with Scapy, web vulnerabilities (XSS, SQL Injection), and cryptography (GPG, RSA, OpenSSL).',
      'Concluded with a security-focused CTF-style competition — ranked in the Top 10 out of the full cohort.',
    ],
    pills: ['John the Ripper', 'Scapy', 'XSS', 'SQLi', 'Cryptography'],
  },
  {
    date: 'Feb 16, 2024',
    title: 'Cybersecurity Technical Volunteer',
    org: 'AI Competition for Kids',
    location: 'Egypt',
    bullets: [
      'Volunteered as a technical mentor for children in an AI-based competition, helping them develop and present project ideas.',
    ],
    pills: ['Mentoring'],
  },
]

export default function Page() {
  const { theme, toggleTheme } = useTheme()
  const [lightbox, setLightbox] = useState<string | null>(null)
  const dark = theme === 'dark'

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll('.reveal'))

    if (prefersReduced) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={dark ? 'portfolio dark' : 'portfolio'}>
      <header className="topbar">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#top">MT</a>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#certifications">Certifications</a>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {dark ? '☀' : '☾'}
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="container">

        {/* INTRO */}
        <section className="intro-section reveal">

          <div className="intro-identity">
            <button
              className="portrait-button"
              onClick={() => setLightbox(heroImage)}
              aria-label="View Mostafa portrait"
            >
              <img src={heroImage} alt="Mostafa Tolba" />
            </button>

            <div className="intro-info">
              <div className="name-row">
                <h1>Mostafa Tolba</h1>
                <span className="verified">✓</span>
              </div>

              <div className="socials">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=mostafaibrahem511@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  ✉
                </a>
              </div>
            </div>
          </div>

          <h2>Aspiring SOC Analyst — Cloud Security</h2>

          <p className="bio">
           I’m an Information Systems graduate building toward a career in
           cybersecurity, with hands-on training in Linux, network security,
           web security, and penetration testing fundamentals — through NTI
           Cybersecurity programs, Red Hat System Administration, Malware
           Analysis, and CCNA. I’m currently expanding into Cloud Security
           through AWS training, while bringing a strong development
           background from BanHops, my graduation project.
          </p>

          <a
            className="resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Resume <span>↗</span>
          </a>
        </section>

        {/* FEATURED PROJECT */}
        <section id="featured" className="featured-project reveal">
          <div className="featured-media">
            <video
              className="featured-video"
              src="/videos/project-video.mp4"
              style={{
                height: 'auto',
                minHeight: 0,
                aspectRatio: 'auto',
                objectFit: 'contain',
              }}
              muted
              loop
              playsInline
              controls
              onMouseEnter={(event) => event.currentTarget.play()}
              aria-label="BanHops project video"
            />
          </div>

          <div className="featured-details">
            <p className="label">EDUCATION</p>

            <h2>BanHops — Smart Transportation Guidance App</h2>

            <p>
              A smart transportation application designed to help users find,
              compare, and navigate routes across Benha. The system provides
              route options based on travel time, cost, and transportation type,
              with Google Maps integration and an AI chatbot for intelligent route
              assistance.
            </p>

            <p className="project-description">
              <strong>Full-Stack Developer &amp; Project Lead:</strong> Developed
              the application as a university graduation project using Flutter,
              Spring Boot, Firebase, Figma, and AI technologies.
            </p>

            <div className="pills">
              <span>Figma</span>
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Google Maps</span>
              <span>AI Chatbot</span>
              <span>Spring Boot</span>
            </div>

            <a
              className="arrow-link"
              href={links.banhops}
              target="_blank"
              rel="noreferrer"
            >
              View project <span>↗</span>
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="content-section reveal">
          <div className="section-title">
            <p className="label">experience &amp; training</p>
          </div>

          <div className="timeline">
            {trainings.map((t) => (
              <article className="timeline-item" key={t.title}>
                <div className="timeline-dot" />

                <p className="timeline-date">{t.date}</p>

                <h3 className="timeline-title">
                  {t.title}
                  {t.badge && <span className="timeline-badge">{t.badge}</span>}
                </h3>

                <p className="timeline-org"><strong>{t.org}</strong></p>
                <p className="timeline-location">{t.location}</p>

                <ul className="timeline-bullets">
                  {t.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="pills" style={{ marginTop: 14, marginBottom: 0 }}>
                  {t.pills.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section projects-section reveal">
          <div className="section-title">
            <p className="label">Projects</p>

            <a href="#projects">
              Explore <b>{projects.length}</b> Projects <span>↗</span>
            </a>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-container">
                  <a
                    className={`project-image ${project.imageFit ?? ''}`}
                    href={project.href}
                    target={project.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel={project.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  >
                    <img src={project.image} alt={project.title} />
                  </a>
                </div>

                <div className="project-copy">
                  <a
                    className="project-title"
                    href={project.href}
                    target={project.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel={project.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  >
                    {project.title}
                  </a>

                  <p className="project-role">{project.role}</p>
                  <p className="project-text">{project.text}</p>

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-icon">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    className="project-action"
                    href={project.href}
                    target={project.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel={project.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  >
                    {project.action} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section id="technologies" className="content-section tech-section reveal">
          <div className="section-title">
            <p className="label">Technologies</p>

            <a href="/technologies">
              View All <span>↗</span>
            </a>
          </div>

          <div className="tech-marquee">
            {[tech.slice(0, 8), tech.slice(8, 16), tech.slice(16)].map(
              (row, rowIndex) => (
                <div
                  className={`tech-track tech-track-${rowIndex}`}
                  key={rowIndex}
                >
                  {[...row, ...row].map((item, index) => (
                    <span key={`${item.label}-${index}`}>
                      <span className="tech-marquee-icon" aria-hidden="true">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              )
            )}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="content-section services-section reveal">
          <div className="section-title">
            <p className="label">Services</p>
          </div>

          <p className="services-intro">What I can help with, based on hands-on training and real projects.</p>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="content-section certifications-section reveal"
        >
          <div className="section-title">
            <p className="label">Certifications</p>

            <a href="/certifications">
              View All <span>↗</span>
            </a>
          </div>

          <div className="cert-list">
            {certificates.filter((cert) => cert.title === 'Linux Red Hat Administration').map((cert) => (
              <article className="certification" key={cert.title}>
                <p className="cert-date">{cert.date}</p>

                <div className="cert-copy">
                  <h3>{cert.title}</h3>
                  <p>{cert.org}</p>
                  {cert.provider && <p>{cert.provider}</p>}
                  {cert.duration && <p>{cert.duration}</p>}

                  <a
                    className="cert-image-button"
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="content-section education-section reveal">
          <div className="section-title">
            <p className="label">Education</p>
          </div>

          <article className="education-row">
            <p className="cert-date">2022 - 2026</p>

            <div>
              <h3>Bachelor of Science in Information Systems</h3>
              <p>Faculty of Computers and Artificial Intelligence</p>
              <p>Benha University</p>
              <p>Egypt</p>
            </div>
          </article>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact reveal">
          <p className="label">Let&apos;s work together.</p>

          <div className="contact-grid">
            <p>
              Open to internships, collaborative software projects, and
              opportunities in development, cybersecurity, and backend systems.
            </p>

            <div className="contact-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mostafaibrahem511@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <small>EMAIL</small>
                <strong>mostafaibrahem511@gmail.com</strong>
                <span>›</span>
              </a>

              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <small>CONNECT</small>
                <strong>LinkedIn profile</strong>
                <span>›</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <a className="back-top" href="#top" aria-label="Back to top">
        ⌃
      </a>

      {lightbox && (
        <button
          className="lightbox"
          onClick={() => setLightbox(null)}
          aria-label="Close image"
        >
          <img src={lightbox} alt="Expanded portfolio image" />
        </button>
      )}
    </div>
  )
}