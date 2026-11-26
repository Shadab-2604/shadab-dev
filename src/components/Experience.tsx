import { Calendar, Shield, Code2, Award } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Cybersecurity Engineer Intern',
    company: 'Head of Testing Department',
    period: '09/2026 – Present',
    Icon: Shield,
    achievements: [
      'Contribute across cybersecurity, software quality, and development responsibilities.',
      'Serve as Head of the Testing Department, overseeing testing activities and quality assurance.',
      'Contribute to MERN Stack development across frontend and backend tasks with security best practices.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Samatva Dynamics OPC Pvt Ltd',
    period: 'Ahmedabad, India',
    Icon: Code2,
    achievements: [
      'Contributed to FiveM (GTA V) scripting and customization for multiplayer server features.',
      'Built and maintained web applications, working across frontend and backend components.',
    ],
  },
  {
    title: 'Alegria Web-weaving Hackathon (1st Rank)',
    company: 'Panvel, India',
    period: 'Hackathon Winner',
    Icon: Award,
    achievements: [
      'Developed "Radio Rewind," a retro music streaming website in just 6 hours.',
      'Showcased skills in web development, teamwork, and creative problem-solving.',
      'Secured 1st rank among competing teams.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section bg-[var(--bg-primary)] reveal">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="section-head">
        <span className="kicker">// my journey</span>
        <h2 className="mb-4">Experience</h2>
        <hr className="rule" />
      </div>

      <div className="relative max-w-3xl">
        {EXPERIENCES.map((exp, i) => {
          const Icon = exp.Icon;
          const isLast = i === EXPERIENCES.length - 1;
          return (
            <div key={exp.title} className={`relative pl-12 ${isLast ? '' : 'pb-10'}`}>
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="absolute left-4 top-8 bottom-0 w-px bg-[var(--border)]"
                />
              )}

              <div
                aria-hidden="true"
                className="absolute left-0 top-0.5 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              </div>

              <div className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[var(--text-tertiary)] mt-0.5 mb-0">
                      {exp.company}
                    </p>
                  </div>
                  {exp.period && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono flex-shrink-0 px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                      <Calendar className="w-3 h-3 text-[var(--text-tertiary)]" />
                      {exp.period}
                    </div>
                  )}
                </div>

                <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed list-disc pl-4 marker:text-[var(--text-tertiary)]">
                  {exp.achievements.map((ach) => (
                    <li key={ach}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
