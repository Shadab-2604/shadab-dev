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
              Full-Stack MERN Developer with experience building web applications, APIs, and backend systems. Hands-on experience in hackathons, internships, and projects with strong problem-solving and teamwork skills.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Completed BCA at Kavikulaguru Kalidas Sanskrit University with a GPA of 8.8/10. President of Student Council (2024-2025). Passionate about creating efficient, scalable solutions with modern technologies</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Backend Development',
                description: 'Building robust server-side solutions'
              },
              {
                icon: <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Full Stack Projects',
                description: 'MERN stack applications'
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'Cybersecurity',
                description: 'Security best practices'
              },
              {
                icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                title: 'API Development',
                description: 'RESTful API design'
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