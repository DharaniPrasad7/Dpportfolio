import React from 'react';

const skillsData = [
  {
    category: 'Programming & Development',
    skills: ['C++', 'Python', 'Qt/QML']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Javascript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs', 'Lamda']
  },
  {
    category: 'Database',
    skills: ['DynamoDB','Amazon RDS', 'MongoDB']
  },
  {
    category: 'AI/ML',
    skills: ['Generative AI', 'Agent Workflow Automation', 'Model Integration', 'Prompt Engineering']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Microservices', 'CI/CD',]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-emerald-500 font-semibold">Technical Expertise</span>
          <h2 className="mt-4">Skills & Technologies</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-50 rounded-3xl border-2 border-slate-100 hover:border-emerald-200 transition-all hover:shadow-lg"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-bl-3xl rounded-tr-3xl" />
              
              <div className="relative">
                <h3 className="mb-4 text-gray-800">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
          </p>
        </div>
      </div>
    </section>
  );
}