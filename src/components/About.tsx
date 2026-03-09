import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Shield, Database } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const CARDS = [
  {
    Icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side solutions with Node.js and Express.',
    color: '#00E5FF',
  },
  {
    Icon: Code2,
    title: 'Full Stack Projects',
    description: 'End-to-end MERN stack web applications.',
    color: '#7CFFB2',
  },
  {
    Icon: Shield,
    title: 'Cybersecurity',
    description: 'Security best practices and secure API design.',
    color: '#FCD34D',
  },
  {
    Icon: Database,
    title: 'API Development',
    description: 'RESTful APIs with optimised database queries.',
    color: '#FB7185',
  },
];

const TAGS = ['MERN Stack', 'Problem Solver', 'Team Leader', 'Open Source'];

const About = () => (
  <section id="about" className="py-24 bg-[var(--bg-secondary)]">
    <div className="container mx-auto px-4">
      <SectionTitle title="About Me" subtitle="who am i" />

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-5">
            Full-Stack MERN Developer with experience building web applications,
            APIs, and backend systems. Hands-on experience in hackathons,
            internships, and projects with strong problem-solving and teamwork
            skills.
          </p>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            Completed BCA at Kavikulaguru Kalidas Sanskrit University with a GPA
            of 8.8/10. President of Student Council (2024–2025). Passionate about
            creating efficient, scalable solutions with modern technologies.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium"
                style={{
                  border: '1px solid rgba(0,229,255,0.25)',
                  color: 'var(--cyan-neon)',
                  background: 'rgba(0,229,255,0.07)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {CARDS.map(({ Icon, title, description, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] dark:bg-[rgba(13,17,23,0.65)] dark:backdrop-blur-md cursor-default transition-colors duration-300"
              style={{} as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px ${color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <div
                className="mb-3 p-2 w-fit rounded-lg"
                style={{ background: `${color}14` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">
                {title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
