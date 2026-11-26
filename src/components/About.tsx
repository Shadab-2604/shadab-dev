import React from 'react';
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
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="section-head">
        <span className="kicker">// who am i</span>
        <h2 className="mb-4">About Me</h2>
        <hr className="rule" />
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7">
          <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
            Cybersecurity Engineer experienced in security operations, software
            testing, and quality assurance, with skills in vulnerability
            assessment and Full-Stack MERN development. Focused on application
            security, reliable systems, and secure software development.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
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

        <div className="md:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CARDS.map(({ Icon, title, description }, i) => (
              <div key={i} className="card p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="w-4 h-4 text-[var(--text-tertiary)]" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
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
