import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'C#', 'C/C++', 'RESTful APIs']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PL/SQL']
    },
    {
      title: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Pandas', 'MS Office', 'AWS (basic)', 'Azure (basic)']
    }
  ];

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
                    className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill}
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