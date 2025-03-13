import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Summarizer',
    description: 'A tool that shortens lengthy content into key points, quick, simple, and efficient!',
    image: 'summarizer.png',
    tech: ['Python', 'HTML/CSS', 'Gemini-API'],
    github: 'https://github.com/Shadab-2604/Summarizer',
    demo: 'https://summarizer-brown.vercel.app/'
  },
  {
    title: 'Weather API',
    description: 'A custom weather API integrating with a third party service and implementing caching for performance.',
    image: 'weather.jpg',
    tech: ['Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Shadab-2604/Backend-PR/tree/main/Beginner/weather-api',
    demo: 'weather-api-bnr2.onrender.com'
  },
  {
    title: 'Sitarabucks - Fullstack Cafe Website',
    description: 'Dynamic PHP and MySQL-based online coffee shop simulation.',
    image: 'sitarabucks.png',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'javascript', 'tailwindcss'],
    github: 'https://github.com/Shadab-2604/Sitarabucks-PHP',
    demo: 'https://aquibk500.infinityfreeapp.com/Sitarabucks/index.php'
  }
];


const Projects = () => {
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
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;