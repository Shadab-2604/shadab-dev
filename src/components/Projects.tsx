import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import SectionTitle from './ui/SectionTitle';
import ComingSoon from './ComingSoon';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  demoReady: boolean;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: 'AgentX – Agent Management System',
    description:
      'Built an admin panel to manage agents and tasks. Integrated CSV/XLS upload via Cloudinary with auto task assignment. Designed a scalable backend and responsive UI for efficient workflows.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Shadab-2604/AgentX',
    demo: 'https://agentx-demo.vercel.app/',
    demoReady: false,
    accent: '#00E5FF',
  },
  {
    title: 'Full-Stack Blog Platform',
    description:
      'Developed a blogging platform with admin panel for post creation & management. Added authentication and role-based access control. Built RESTful APIs with optimized database queries.',
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
    github: 'https://github.com/Shadab-2604/Blog',
    demo: 'https://blog-iota-ten-88.vercel.app/',
    demoReady: true,
    accent: '#7CFFB2',
  },
  {
    title: 'Sitarabucks – Fullstack Cafe Website',
    description:
      'Dynamic PHP and MySQL-based online coffee shop simulation featuring product listings, cart functionality, and a complete admin panel.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Shadab-2604/Sitarabucks-PHP',
    demo: 'https://aquibk500.infinityfreeapp.com/Sitarabucks/index.php',
    demoReady: true,
    accent: '#FCD34D',
  },
];

const Projects = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Projects" subtitle="what i've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="h-full"
            >
              <TiltCard className="h-full" intensity={6}>
                <div
                  className="h-full rounded-2xl border border-[var(--border-color)] p-6 flex flex-col cursor-default transition-all duration-300"
                  style={{ background: 'var(--bg-secondary)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${project.accent}30`;
                    el.style.boxShadow = `0 0 30px ${project.accent}0e, 0 8px 30px rgba(0,0,0,0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                  }}
                >
                  {/* Accent top bar */}
                  <div
                    className="h-0.5 w-12 rounded-full mb-5"
                    style={{ background: project.accent }}
                  />

                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-full"
                        style={{
                          background: `${project.accent}12`,
                          color: project.accent,
                          border: `1px solid ${project.accent}28`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-cyan-neon transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    {project.demoReady ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-cyan-neon transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        onClick={() => setShowComingSoon(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-cyan-neon transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ComingSoon isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </section>
  );
};

export default Projects;
