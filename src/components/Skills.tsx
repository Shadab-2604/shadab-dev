import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python.svg' },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'HTML', icon: 'html.svg' },
      { name: 'CSS', icon: 'css.svg' },
      { name: 'SQL', icon: 'sql.svg' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: 'nodejs.svg' },
      { name: 'Express.js', icon: 'express.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Pandas', icon: 'pandas.svg' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'git.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Redis', icon: 'redis.svg' },
      { name: 'Docker', icon: 'docker.svg' }
    ]
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'API Design', icon: 'api.svg' },
      { name: 'Cybersecurity', icon: 'security.svg' },
      { name: 'AI/ML', icon: 'ai.svg' },
      { name: 'System Design', icon: 'system.svg' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {/* You'll need to add the actual icons here */}
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;