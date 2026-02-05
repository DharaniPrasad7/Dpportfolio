import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  FileDown,
  MapPin,
} from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "dharaniprasadsrinivasan@gmail.com",
      href: "mailto:dharaniprasadsrinivasan@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/dharani-prasad/",
      href: "https://www.linkedin.com/in/dharani-prasad/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/DharaniPrasad7",
      href: "https://github.com/DharaniPrasad7",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-emerald-500 font-semibold">
            Get In Touch
          </span>
          <h2 className="mt-4 mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Open to opportunities in Software Engineering, AI
            Solutions Architecture, and Product Engineering
            roles.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={
                  contact.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 transition-all hover:shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white border border-slate-200 rounded-xl mb-4 group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-all">
                  <Icon className="w-6 h-6 text-slate-700 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h4 className="mb-1 text-gray-800">
                  {contact.label}
                </h4>
                <p className="text-sm text-slate-600">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 p-12 text-center text-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />

          <div className="relative">
            <h3 className="text-white mb-4">
              Ready to Connect?
            </h3>
            <p className="text-emerald-50 mb-8 max-w-xl mx-auto">
              I'm actively seeking new challenges where I can
              leverage my expertise in software development and
              AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:dharaniprasadsrinivasan@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all hover:scale-105"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 mt-8 text-emerald-100">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Coimbatore, India</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} Dharani Prasad.
              Crafted with precision.
            </p>
            <div className="flex gap-6">
              <a
                href="#home"
                className="hover:text-gray-800 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-800 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-gray-800 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-gray-800 transition-colors"
              >
                Work
              </a>
            </div>
          </div>
        </div>

        {/* Update Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400"></p>
        </div>
      </div>
    </section>
  );
}