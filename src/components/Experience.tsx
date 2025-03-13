import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    title: "Generative AI Intern",
    company: "TCR Innovation",
    period: "Oct 2024 - Dec 2024", // Extracted from resume
    description: "Utilized Pandas for data preprocessing, optimization, and feature engineering to support AI model development.",
    achievements: [
      "Developed an intelligent chatbot system", // New achievement
      "Implemented natural language processing features", // New achievement
      "Collaborated with cross-functional teams" // New achievement
    ]
  },

  {
    title: "Alegria Web-weaving Hackathon (1st Rank)",
    company: "Alegria",
    period: "", // No period in resume
    description: "Developed 'Radio Rewind,' a retro music streaming website in 6 hours.",
    achievements: [
      "Showcased skills in web development, teamwork, and creative problem-solving"
    ]
  },
  {
    title: "Fastest Coder First | Hackathon",
    company: "Microsoft",
    period: "", // No period in resume
    description: "Led a team of 3 to develop a functional command-line weather tool in Python.",
    achievements: [
      "Utilized weather API and demonstrated ability to work under pressure"
    ]
  },
  {
    title: "CodeBug 2K25 | 24-Hour Hackathon (1st Runner-Up)",
    company: "Sahyog College Of IT and Management Studies",
    period: "", // No period in resume (assumed "2025" from event name but left blank per instructions)
    description: "Built WebRoom, a platform for study material sharing, project collaboration, and video calls.",
    achievements: [
      "Developed a responsive web app in 24 hours",
      "Showcased full-stack development, teamwork, and problem-solving"
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