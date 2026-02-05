import React from 'react';

export function About() {
  const roles = [
    'Software Engineer 2',
    'AI Solutions Architect',
    'Product Engineer 2'
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10k+', label: 'Lines of Code' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-wider text-emerald-500 font-semibold">About Me</span>
            </div>
            
            <h2 className="text-balance">
              Creating Impact Through Code
            </h2>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-emerald-500">{stat.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a Software Engineer specializing in healthcare technology, with a strong focus 
              on building scalable web applications and integrating AI solutions. Over the past 
              3+ years, I've worked in product-based organizations, delivering innovative solutions 
              that bridge the gap between complex technical requirements and user needs.
            </p>

            {/* Role Tags */}
            <div>
              <p className="text-sm text-slate-500 mb-3">Currently seeking roles in:</p>
              <div className="flex flex-wrap gap-3">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="w-1 h-auto bg-emerald-500 rounded-full" />
                <div>
                  <h4 className="mb-1">Healthcare Focus</h4>
                  <p className="text-sm text-slate-600">
                    Specialized in building HIPAA-compliant healthcare solutions
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-auto bg-slate-600 rounded-full" />
                <div>
                  <h4 className="mb-1">Full-Stack Expertise</h4>
                  <p className="text-sm text-slate-600">
                    End-to-end development from APIs to user interfaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}