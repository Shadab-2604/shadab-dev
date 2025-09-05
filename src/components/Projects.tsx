import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ComingSoon from './Comingsoon';

const projects = [
  {
    title: 'AgentX – Agent Management System',
    description: 'Built an admin panel to manage agents and tasks. Integrated CSV/XLS upload via Cloudinary with auto task assignment. Designed a scalable backend and responsive UI for efficient workflows.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Shadab-2604/AgentX',
    demo: 'https://agentx-demo.vercel.app/',
    demoReady: false
  },
  {
    title: 'Full-Stack Blog Platform',
    description: 'Developed a blogging platform with admin panel for post creation & management. Added authentication and role-based access control. Built RESTful APIs with optimized database queries.',
    tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB'],
    github: 'https://github.com/Shadab-2604/Blog',
    demo: 'https://blog-iota-ten-88.vercel.app/',
    demoReady: true
  },
  {
    title: 'Sitarabucks - Fullstack Cafe Website',
    description: 'Dynamic PHP and MySQL-based online coffee shop simulation.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/Shadab-2604/Sitarabucks-PHP',
    demo: 'https://aquibk500.infinityfreeapp.com/Sitarabucks/index.php',
    demoReady: true
  }
];

const Projects = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                {project.demoReady ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                ) : (
                  <button
                    onClick={() => setShowComingSoon(true)}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ComingSoon 
        isOpen={showComingSoon} 
        onClose={() => setShowComingSoon(false)} 
      />
    </section>
  );
};

export default Projects;