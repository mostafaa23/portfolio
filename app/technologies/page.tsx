'use client'

import { useTheme } from '../../components/theme-provider'

const technologyGroups = [
  {
    title: 'Cybersecurity',
    items: [
      { label: 'Nmap', icon: '🔎' },
      { label: 'Wireshark', icon: '📡' },
      { label: 'Hydra', icon: '🧪' },
      { label: 'John the Ripper', icon: '🔐' },
      { label: 'Scapy', icon: '🧬' },
      { label: 'Vulnerability Scanning', icon: '🛡️' },
      { label: 'Penetration Testing Basics', icon: '⚔️' },
      { label: 'Malware Analysis', icon: '🦠' },
    ],
  },
  {
    title: 'Cloud Security (AWS)',
    items: [
      { label: 'AWS', icon: '☁️' },
      { label: 'IAM', icon: '🔑' },
      { label: 'VPC', icon: '🌐' },
      { label: 'EC2', icon: '🖥️' },
      { label: 'RDS', icon: '🗄️' },
      { label: 'Security Groups', icon: '🚧' },
      { label: 'Cloud Security Auditing', icon: '✅' },
    ],
  },
  {
    title: 'Networking',
    items: [
      { label: 'CCNA', icon: '🧭' },
      { label: 'TCP/IP Fundamentals', icon: '📶' },
    ],
  },
  {
    title: 'Linux & Systems',
    items: [
      { label: 'RHEL', icon: '🐧' },
      { label: 'Kali Linux', icon: '🛠️' },
      { label: 'Bash', icon: '⌨️' },
      { label: 'Linux Administration', icon: '⚙️' },
    ],
  },
  {
    title: 'Programming',
    items: [
      { label: 'Python', icon: '🐍' },
      { label: 'C++', icon: '💻' },
      { label: 'Flutter', icon: '📱' },
    ],
  },
  {
    title: 'Backend & Database',
    items: [
      { label: 'PHP', icon: '🐘' },
      { label: 'MySQL', icon: '🗃️' },
    ],
  },
  {
    title: 'Design & Tools',
    items: [
      { label: 'Figma', icon: '🎨' },
      { label: 'Git', icon: '🧩' },
      { label: 'GitHub', icon: '🐙' },
    ],
  },
]

export default function TechnologiesPage() {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <div className={dark ? 'portfolio tech-page dark' : 'portfolio tech-page'}>
      <header className="topbar">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="/#top">MT</a>

          <div className="nav-links">
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/#certifications">Certifications</a>

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

      <main className="container tech-main">
        <a className="tech-back" href="/#top">‹&nbsp; Back to Home</a>

        <h1>Full Tech Stack</h1>
        <p className="tech-intro">Comprehensive list of tools and technologies I use.</p>

        <div className="tech-groups">
          {technologyGroups.map((group) => (
            <section className="tech-group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="tech-tags">
                {group.items.map((item) => (
                  <span className="tech-tag" key={item.label}>
                    <span className="tech-icon" aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>

    </div>
  )
}
