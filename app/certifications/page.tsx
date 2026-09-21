'use client'

import { useTheme } from '../../components/theme-provider'

const certificates = [
  {
    date: 'Feb 2025',
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    href: '/Certifications/certificate_Introduction to Cybersecurity.pdf',
    image: '/Certifications/previews/introduction-to-cybersecurity.png',
  },
  {
    date: 'Feb 2025',
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    href: '/Certifications/I2CS__1_.png',
    image: '/Certifications/I2CS__1_.png',
  },
  {
    date: 'Jul 2025',
    title: 'Red Hat System Administration II (RH134)',
    org: 'National Telecommunication Institute (NTI)',
    provider: 'Red Hat Training and Certification 2025',
    href: "/Certifications/'Certificate of Attendance (RH134-9.3).pdf",
    image: '/Certifications/previews/rh134.png',
  },
  {
    date: 'Jul 2025',
    title: 'Red Hat System Administration I (RH124)',
    org: 'National Telecommunication Institute (NTI)',
    provider: 'Red Hat Training and Certification',
    href: "/Certifications/'Certificate of Attendance (RH124-9.3).pdf",
    image: '/Certifications/previews/rh124.png',
  },
  {
    date: 'Oct 2025',
    title: 'Python Programming Basics',
    org: 'ITI Platform — Mahara-Tech',
    duration: '1 Hour, 38 Minutes',
    href: '/Certifications/python_Certificate_mahara tech.pdf',
    image: '/Certifications/previews/python.png',
  },
  {
    date: 'Jul 2025',
    title: 'Linux Red Hat Administration',
    org: 'National Telecommunication Institute (NTI) — ITIDA',
    duration: '120 Hours · Score: 100%',
    href: '/Certifications/Linux Red hat Administration.pdf',
    image: '/Certifications/previews/linux.png',
  },
  {
    date: 'Jun 2025',
    title: 'Malware Analysis Fundamentals',
    org: 'ITI Platform – Mahara-Tech',
    duration: '5 Hours, 20 Minutes',
    href: '/Certifications/Malware Analysis.pdf',
    image: '/Certifications/previews/malware.png',
  },
  {
    date: 'Sep 2026',
    title: 'AWS Academy Cloud Foundations',
    org: 'Amazon Web Services (AWS)',
    href: '#',
    image: '/Certifications/unnamed.png',
  },
  {
    date: 'Feb 2024',
    title: 'Cyber Security Bootcamp',
    org: 'Google Developer Student Clubs – Benha University',
    duration: '36 Hours',
    href: '/Certifications/BootcampGDSCBenha.pdf',
    image: '/Certifications/previews/gdsc.png',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function CertificationsPage() {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <div className={dark ? 'portfolio cert-page dark' : 'portfolio cert-page'}>
      <header className="topbar">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="/#top">MT</a>

          <div className="nav-links">
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/technologies">Technologies</a>

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

      <main className="container cert-main">
        <a className="cert-back" href="/#top">‹&nbsp; Back to Home</a>

        <h1>Certifications</h1>
        <p className="cert-intro">
          Professional credentials and specialized training in cybersecurity,
          cloud security, Linux, and software development.
        </p>

        <div className="cert-list">
          {certificates.map((cert, index) => (
            <article className="certification" key={`${cert.title}-${cert.date}-${index}`}>
              <p className="cert-date">{cert.date}</p>

              <div className="cert-copy">
                <h3>{cert.title}</h3>
                <p>{cert.org}</p>
                {cert.provider && <p>{cert.provider}</p>}
                {cert.duration && <p>{cert.duration}</p>}
                <a
                  className="cert-image-button"
                  href={cert.href}
                  target={cert.href === '#' ? undefined : '_blank'}
                  rel={cert.href === '#' ? undefined : 'noreferrer'}
                >
                  <img src={cert.image} alt={`${cert.title} certificate`} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
