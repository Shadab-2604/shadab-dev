import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Server, Database, Globe, Zap, FileCode, Layers,
  Terminal, Cpu, Network, GitBranch, Github, BarChart2,
  FileText, Cloud, Braces, Table2, ScrollText, Palette,
} from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const SKILL_ICONS: Record<string, LucideIcon> = {
  'React.js': Code2,
  'Next.js': Globe,
  'Tailwind CSS': Palette,
  'HTML': FileCode,
  'JavaScript': Zap,
  'TypeScript': Braces,
  'Node.js': Server,
  'Express.js': Layers,
  'PHP': Terminal,
  'Python': Terminal,
  'C#': Braces,
  'C/C++': Cpu,
  'RESTful APIs': Network,
  'MongoDB': Database,
  'MySQL': Table2,
  'PL/SQL': ScrollText,
  'Git': GitBranch,
  'GitHub': Github,
  'Pandas': BarChart2,
  'MS Office': FileText,
  'Google Workspace': Globe,
  'AWS': Cloud,
  'Azure': Cloud,
};

const CATEGORIES = [
  {
    title: 'Frontend',
    subtitle: 'what users see',
    color: '#00E5FF',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    subtitle: 'server-side magic',
    color: '#7CFFB2',
    skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'C#', 'C/C++', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    subtitle: 'data management',
    color: '#FCD34D',
    skills: ['MongoDB', 'MySQL', 'PL/SQL'],
  },
  {
    title: 'Tools & Cloud',
    subtitle: 'dev ecosystem',
    color: '#FB7185',
    skills: ['Git', 'GitHub', 'Pandas', 'MS Office', 'Google Workspace', 'AWS', 'Azure'],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-[var(--bg-secondary)]">
    <div className="container mx-auto px-4">
      <SectionTitle title="Skills & Expertise" subtitle="tech stack" />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: ci * 0.1, duration: 0.6 }}
            className="rounded-2xl border border-[var(--border-color)] p-6"
            style={{ background: 'var(--bg-primary)' }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1.5 h-8 rounded-full flex-shrink-0"
                style={{ background: cat.color }}
              />
              <div>
                <h3 className="font-bold text-[var(--text-primary)] leading-tight">{cat.title}</h3>
                <p className="font-mono text-[11px] text-[var(--text-secondary)]">{cat.subtitle}</p>
              </div>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => {
                const Icon = SKILL_ICONS[skill] ?? Code2;
                return (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0.82 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.045, duration: 0.3 }}
                    whileHover={{ scale: 1.07, y: -2, transition: { duration: 0.18 } }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium cursor-default transition-colors duration-200"
                    style={{
                      borderColor: `${cat.color}22`,
                      background: `${cat.color}08`,
                      color: 'var(--text-primary)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${cat.color}55`;
                      el.style.background = `${cat.color}14`;
                      el.style.boxShadow = `0 0 12px ${cat.color}1a`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${cat.color}22`;
                      el.style.background = `${cat.color}08`;
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cat.color }} />
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
