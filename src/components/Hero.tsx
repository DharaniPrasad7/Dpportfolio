import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100 via-green-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 via-gray-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-700">Available for opportunities</span>
              </div>
              
              <h1 className="text-balance">
                Software Engineer &
                <span className="block text-emerald-500">AI Solutions Architect</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-xl">
                Building innovative healthcare solutions with 3+ years of experience in 
                product engineering, AI integration, and scalable web applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-emerald-500 transition-all"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-gray-800 rounded-full hover:border-gray-800 transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-slate-500">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/dharani-prasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-emerald-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/DharaniPrasad7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-emerald-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:dharaniprasadsrinivasan@gmail.com"
                  className="p-2 text-slate-600 hover:text-emerald-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-400 to-green-400 rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-slate-400 to-gray-400 rounded-3xl opacity-20 blur-2xl" />
              
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <ImageWithFallback
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">3+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Years</p>
                    <p className="text-xs text-slate-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}