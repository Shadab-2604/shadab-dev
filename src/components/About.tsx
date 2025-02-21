import React from 'react';
import { Code2, Server, Shield, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate software developer specializing in backend development, API design, and full-stack applications. With a strong foundation in cybersecurity and AI, I create secure and scalable solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in tech has led me through various exciting projects, from building intelligent chatbots to developing robust APIs. I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Backend Development',
                description: 'Building robust and scalable server-side solutions'
              },
              {
                icon: <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Full Stack Projects',
                description: 'Creating end-to-end web applications'
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Cybersecurity',
                description: 'Implementing secure coding practices'
              },
              {
                icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'API Development',
                description: 'Designing RESTful and efficient APIs'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                {item.icon}
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;