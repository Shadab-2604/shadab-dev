import React from 'react';
import {
  Shield, Zap, Code2, Server, Database, Globe, FileCode, Layers,
  Terminal, Network, GitBranch, Github, FileText, Cloud, Braces, Table2, Palette,
} from 'lucide-react';

type LucideIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const SKILL_ICONS: Record<string, LucideIcon> = {
  Cybersecurity: Shield,
  Pentesting: Zap,
  'React.js': Code2,
  'Next.js': Globe,
  'Tailwind CSS': Palette,
  HTML: FileCode,
  JavaScript: Zap,
  TypeScript: Braces,
  'Node.js': Server,
  'Express.js': Layers,
  MongoDB: Database,
  MySQL: Table2,
  SQLite: Table2,
  Git: GitBranch,
  GitHub: Github,
  'Google Workspace': Globe,
  Python: Terminal,
  FastAPI: Layers,
  RAG: Code2,
  PySide6: FileText,
  'Socket.IO': Network,
  'React Native': Code2,
  Ollama: Cloud,
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
    spanFull: true,
  },
];

const Skills = () => (
  <section id="skills" className="section bg-[var(--bg-secondary)] reveal">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="section-head">
        <span className="kicker">// tech stack</span>
        <h2 className="mb-4">Skills &amp; Expertise</h2>
        <hr className="rule" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className={`card p-6 bg-[var(--bg-elevated)] ${cat.spanFull ? 'md:col-span-2' : ''}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-0.5 h-6 rounded-full bg-[var(--text-primary)] opacity-70" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                  {cat.title}
                </h3>
                <p className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider mb-0">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const Icon = SKILL_ICONS[skill] ?? Code2;
                return (
                  <span key={skill} className="tag">
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 text-[var(--text-tertiary)]" />
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
