import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    title: "GenAI, Data Science & ML Intern",
    company: "TCR Innovation | Navi Mumbai",
    period: "Oct 2024 - Dec 2024",
    achievements: [
      "Built preprocessing pipelines with Pandas to improve data quality.",
      "Applied feature engineering to optimize model performance.",
      "Collaborated with a 3-member team on ML models and validation workflows."
    ]
  },
  {
    title: "Alegria Web-weaving Hackathon – 1st Place",
    company: "Alegria | Panvel",
    period: "Sep 2023",
    achievements: [
      "Developed Radio Rewind, a retro music streaming site, in just 6 hours.",
      "Showcased web development, teamwork, and rapid problem-solving.",
      "Achieved 1st rank among competing teams."
    ]
  },
  {
    title: "Fastest Coder First",
    company: "Microsoft",
    period: "",
    achievements: [
      "Led a team of 3 to develop a functional command-line weather tool in Python.",
      "Utilized weather API and demonstrated ability to work under pressure."
    ]
  },
  {
    title: "CodeBug 2K25 (1st Runner-Up)",
    company: "Sahyog College",
    period: "",
    achievements: [
      "Built WebRoom, a platform for study material sharing, project collaboration, and video calls.",
      "Developed a responsive web app in 24 hours showcasing full-stack development skills."
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
                  <span className="mr-4">{exp.company}</span>
                  {exp.period && (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </>
                  )}
                </div>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start"
                    >
                      <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
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