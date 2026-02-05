import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Surgical Simulation Software',
    description: 'HIPAA-compliant surgical simulation with real-time hardware and analytics',
    image: 'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyODM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Qt', 'C++', 'AWS', 'Python', 'React'],
    link: 'https://surgeonslab.com/services',
    featured: true
  },
  {
    title: 'Order Workflow Management System',
    description: 'Engineered an order progress tracking platform to streamline production updates and workflow visibility.',
    image: 'https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDI0NjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React.js', 'AWS', 'REST-API'],
    link: 'https://ihoms.surgeonslab.com/',
    featured: false
  },
  {
    title: 'Virtual Anatomical Navigation',
    description: 'Built a real-time CV-based mobile navigation for surgical instrument tracking',
    image: 'https://images.unsplash.com/photo-1770169272345-9636d5ef2681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBjbGVhbnxlbnwxfHx8fDE3NzAzMDI1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Android', 'OpenCV', 'Java'],
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-emerald-500 font-semibold">Portfolio</span>
          <h2 className="mt-4">Selected Work</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Showcasing impactful projects in healthcare software and AI solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-3xl bg-white border-2 border-slate-100 hover:border-emerald-200 transition-all hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:aspect-[2/1]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 max-w-lg">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                  <span className="text-sm">View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
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