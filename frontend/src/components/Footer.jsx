import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from "./ui/button";
import Diya_Resume from "../assets/Diya__Resume.pdf";  // ✅ correct import

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="relative py-20 px-6 bg-[#0d0d12]/50 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-white font-bold text-2xl">Diya</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Data Scientist & AI Engineer passionate about transforming complex data into intelligent solutions using cutting-edge AI and machine learning technologies.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/Diya68" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-cyan-400" />
              </a>

              <a href="https://linkedin.com/in/diya24" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-400">About</button></li>
              <li><button onClick={() => scrollToSection('education')} className="text-gray-400 hover:text-cyan-400">Education</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-cyan-400">Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-cyan-400">Skills</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:diyaa6428@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">diyaa6428@gmail.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+918847437046" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+91 88474 37046</span>
                </a>
              </li>

              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Chandigarh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="w-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* LEFT TEXT */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's Work Together
              </h3>
              <p className="text-gray-400">
                Open to exciting opportunities in AI and data science
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              {/* Contact */}
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <a href="mailto:diyaa6428@gmail.com">Contact Me</a>
              </Button>

              {/* Resume */}
              <Button
                asChild
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <a href={Diya_Resume} download="Diya__Resume.pdf">
                  Download Resume
                </a>
              </Button>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cyan-500/10">
          <p className="text-gray-500 text-sm text-left">
            © 2026 Diya. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;