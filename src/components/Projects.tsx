import { Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    title: 'ZERO – Local AI Desktop Assistant',
    category: 'AI / Desktop',
    description:
      'Built a local AI assistant with offline LLM inference using Ollama. Integrated document-based RAG, voice interaction, and AI model routing. Implemented restricted Windows automation and local API services for offline-first AI workflows.',
    tech: ['Python', 'PySide6', 'Ollama', 'FastAPI', 'RAG'],
    github: 'https://github.com/Shadab-2604/ZERO',
  },
  {
    title: 'PixelTalk – Real-Time Communication Platform',
    category: 'Full-Stack / Mobile',
    description:
      'Developed real-time messaging and group communication features with JWT authentication and Socket.IO event handling. Built a mobile client with secure token storage and call signaling for encrypted peer-to-peer communication.',
    tech: ['Next.js', 'React Native', 'TypeScript', 'Socket.IO'],
    github: 'https://github.com/Shadab-2604/PixelTalk',
  },
  {
    title: 'EnvHunter – GitHub Security Auditor',
    category: 'Security Tool',
    description:
      'Developed a security tool to detect exposed .env files in GitHub repositories and commit history. Implemented exposure classification and resumable security scans with automated CSV, JSON, and HTML audit reports for security teams.',
    tech: ['Python', 'GitHub API', 'SQLite', 'Pytest'],
    github: 'https://github.com/Shadab-2604/envhunter',
  },
];

const Projects = () => (
  <section id="projects" className="section bg-[var(--bg-primary)] reveal">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="section-head">
        <span className="kicker">// what i&apos;ve built</span>
        <h2 className="mb-4">Featured Projects</h2>
        <hr className="rule" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <article key={project.title} className="card p-6 flex flex-col h-full">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--text-tertiary)]">
                0{i + 1}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                {project.category}
              </span>
            </div>

            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="tag text-xs px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border)]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
              >
                <Github className="w-3.5 h-3.5" />
                View Source
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
