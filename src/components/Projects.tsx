import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'ZERO – Local AI Desktop Assistant',
    description:
      'Built a local AI assistant with offline LLM inference using Ollama. Integrated document-based RAG, voice interaction, and AI model routing. Implemented restricted Windows automation and local API services for offline-first AI workflows.',
    tech: ['Python', 'PySide6', 'Ollama', 'FastAPI', 'RAG'],
    github: 'https://github.com/Shadab-2604/ZERO',
  },
  {
    title: 'PixelTalk – Real-Time Communication Platform',
    description:
      'Developed real-time messaging and group communication features with JWT authentication and Socket.IO event handling. Built a mobile client with secure token storage and call signaling for encrypted peer-to-peer communication.',
    tech: ['Next.js', 'React Native', 'TypeScript', 'Socket.IO'],
    github: 'https://github.com/Shadab-2604/PixelTalk',
  },
  {
    title: 'EnvHunter – GitHub Security Auditor',
    description:
      'Developed a security tool to detect exposed .env files in GitHub repositories and commit history. Implemented exposure classification and resumable security scans with automated CSV, JSON, and HTML audit reports for security teams.',
    tech: ['Python', 'GitHub API', 'SQLite', 'Pytest'],
    github: 'https://github.com/Shadab-2604/envhunter',
  },
];

const Projects = () => (
  <section id="projects" className="section bg-[var(--bg-primary)] reveal">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="section-head mb-10">
        <span className="kicker">// what i've built</span>
        <h2 className="mb-4">Featured Projects</h2>
        <hr className="rule" />
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {PROJECTS.map((project, i) => (
          <div key={i} className="md:col-span-4">
            <div className="card p-6 rounded-lg h-full">
              <div className="mb-5 h-px bg-[var(--border)]" />

              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, j) => (
                  <span key={j} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors underline underline-offset-4"
              >
                <Github className="w-3 h-3" />
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
