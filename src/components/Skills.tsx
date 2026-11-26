import React from 'react';
import {
  Shield, Zap, Code2, Server, Database, Globe, FileCode, Layers,
  Terminal, Cpu, Network, GitBranch, Github, BarChart2,
  FileText, Cloud, Braces, Table2, Palette,
} from 'lucide-react';

type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const SKILL_ICONS: Record<string, LucideIcon> = {
  'Cybersecurity': Shield,
  'Pentesting': Zap,
  'React.js': Code2,
  'Next.js': Globe,
  'Tailwind CSS': Palette,
  'HTML': FileCode,
  'JavaScript': Zap,
  'TypeScript': Braces,
  'Node.js': Server,
  'Express.js': Layers,
  'MongoDB': Database,
  'MySQL': Table2,
  'SQLite': Table2,
  'Git': GitBranch,
  'GitHub': Github,
  'Google Workspace': Globe,
  'Python': Terminal,
  'FastAPI': Layers,
  'RAG': Code2,
  'PySide6': FileText,
  'Socket.IO': Network,
  'React Native': Code2,
  'Ollama': Cloud,
};

const CATEGORIES = [
  {
    title: 'Security',
    subtitle: 'application & infrastructure',
    skills: ['Cybersecurity', 'Pentesting', 'Git', 'GitHub'],
  },
  {
    title: 'Frontend',
    subtitle: 'what users see',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    subtitle: 'server-side',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Socket.IO', 'Ollama', 'RAG'],
  },
  {
    title: 'Databases',
    subtitle: 'data management',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    title: 'Tools & Cloud',
    subtitle: 'dev ecosystem',
    skills: ['Python', 'PySide6', 'React Native', 'Google Workspace'],
  },
];

const Skills = () => (
  <section id="skills" className="section bg-[var(--bg-secondary)] reveal">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="section-head mb-10">
        <span className="kicker">// tech stack</span>
        <h2 className="mb-4">Skills & Expertise</h2>
        <hr className="rule" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {CATEGORIES.map((cat, ci) => (
          <div key={ci} className="card p-6 rounded-lg">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-px h-5 bg-[var(--text-tertiary)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                  {cat.title}
                </h3>
                <p className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-tighter">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => {
                const Icon = SKILL_ICONS[skill] ?? Code2;
                return (
                  <span key={si} className="tag">
                    <Icon className="w-3 h-3 flex-shrink-0" />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
