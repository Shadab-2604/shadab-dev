import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const EXPERIENCES = [
  {
    title: 'GenAI, Data Science & ML Intern',
    company: 'TCR Innovation | Navi Mumbai',
    period: 'Oct 2024 – Dec 2024',
    achievements: [
      'Built preprocessing pipelines with Pandas to improve data quality.',
      'Applied feature engineering to optimize model performance.',
      'Collaborated with a 3-member team on ML models and validation workflows.',
    ],
  },
  {
    title: 'Alegria Web-weaving Hackathon – 1st Place',
    company: 'Alegria | Panvel',
    period: 'Sep 2023',
    achievements: [
      'Developed Radio Rewind, a retro music streaming site, in just 6 hours.',
      'Showcased web development, teamwork, and rapid problem-solving.',
      'Achieved 1st rank among competing teams.',
    ],
  },
  {
    title: 'Fastest Coder First',
    company: 'Microsoft',
    period: '',
    achievements: [
      'Led a team of 3 to develop a functional command-line weather tool in Python.',
      'Utilized weather API and demonstrated ability to work under pressure.',
    ],
  },
  {
    title: 'CodeBug 2K25 (1st Runner-Up)',
    company: 'Sahyog College',
    period: '',
    achievements: [
      'Built WebRoom, a platform for study material sharing, project collaboration, and video calls.',
      'Developed a responsive web app in 24 hours showcasing full-stack development skills.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 bg-[var(--bg-primary)]">
    <div className="container mx-auto px-4">
      <SectionTitle title="Experience" subtitle="my journey" />

      <div className="max-w-3xl mx-auto">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-10 pb-10 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {/* Timeline connector */}
            {i !== EXPERIENCES.length - 1 && (
              <div
                className="absolute left-[9px] top-5 bottom-0 w-px"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,229,255,0.4) 0%, transparent 100%)',
                }}
              />
            )}

            {/* Timeline dot */}
            <div
              className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2 border-cyan-neon flex items-center justify-center"
              style={{
                background: 'var(--bg-primary)',
                boxShadow: '0 0 10px rgba(0,229,255,0.4)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-neon" />
            </div>

            {/* Card */}
            <div
              className="rounded-xl border border-[var(--border-color)] p-5 transition-all duration-300 cursor-default"
              style={{ background: 'var(--bg-secondary)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(0,229,255,0.22)';
                el.style.boxShadow = '0 0 20px rgba(0,229,255,0.07)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '';
                el.style.boxShadow = '';
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">{exp.company}</p>
                </div>
                {exp.period && (
                  <div
                    className="flex items-center gap-1.5 text-[11px] font-mono flex-shrink-0 px-2.5 py-1 rounded-full"
                    style={{
                      color: 'var(--cyan-neon)',
                      background: 'rgba(0,229,255,0.08)',
                      border: '1px solid rgba(0,229,255,0.2)',
                    }}
                  >
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                )}
              </div>

              <div className="space-y-2.5">
                {exp.achievements.map((ach, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <Award
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-neon"
                    />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
