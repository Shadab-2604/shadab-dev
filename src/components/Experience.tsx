import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Generative AI Intern',
    company: 'TCR Innovation',
    period: 'June 2023 - August 2023',
    description: 'Worked on developing AI-powered solutions and implementing machine learning models for various applications.',
    achievements: [
      'Developed an intelligent chatbot system',
      'Implemented natural language processing features',
      'Collaborated with cross-functional teams'
    ]
  },
  {
    title: 'Hackathon Winner',
    company: 'Tech Innovate 2023',
    period: 'March 2023',
    description: 'Led a team to victory in a 48-hour hackathon focused on creating innovative solutions for real-world problems.',
    achievements: [
      'Built a full-stack application in 48 hours',
      'Implemented real-time features',
      'Won first place among 50+ teams'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800" />

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md ml-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start"
                    >
                      <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;