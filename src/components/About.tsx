import { Shield, Code2, Lock, Database } from 'lucide-react';

const CARDS = [
  {
    Icon: Shield,
    title: 'Application Security',
    description: 'Vulnerability assessment, security operations, and secure software development practices.',
  },
  {
    Icon: Code2,
    title: 'Full Stack Development',
    description: 'MERN stack applications with secure authentication, role-based access, and RESTful APIs.',
  },
  {
    Icon: Lock,
    title: 'Security Testing & QA',
    description: 'Software testing, quality assurance, and penetration testing across web applications.',
  },
  {
    Icon: Database,
    title: 'Database Systems',
    description: 'MongoDB, MySQL, and SQLite with security-hardened configurations and optimized queries.',
  },
];

const TAGS = ['Cybersecurity', 'MERN Stack', 'Penetration Testing', 'Quality Assurance'];

const About = () => (
  <section id="about" className="section bg-[var(--bg-secondary)] reveal">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="section-head">
        <span className="kicker">// who am i</span>
        <h2 className="mb-4">About Me</h2>
        <hr className="rule" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-6">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-5 leading-relaxed">
            Cybersecurity Engineer experienced in security operations, software
            testing, and quality assurance, with skills in vulnerability
            assessment and Full-Stack MERN development. Focused on application
            security, reliable systems, and secure software development.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Completed BCA at Sahyog College, Thane, India (2022–2025) with a GPA
            of 8.8/10. Currently serving as Head of the Testing Department,
            overseeing testing activities while contributing across cybersecurity,
            software quality, and MERN Stack development.
          </p>

          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CARDS.map(({ Icon, title, description }) => (
              <div key={title} className="card p-5 bg-[var(--bg-elevated)]">
                <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] flex items-center justify-center mb-3.5">
                  <Icon className="w-4 h-4 text-[var(--text-primary)]" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-1.5">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-tertiary)] leading-relaxed mb-0">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
