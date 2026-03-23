import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-16">

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-cyan-500/20 rounded-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-teal-500/20 rounded-2xl animate-float"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl w-full mx-auto h-full">

        <div className="grid md:grid-cols-2 gap-12 items-center h-full">

          {/* LEFT SIDE */}
          <div className="space-y-8 animate-fadeIn text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-xs font-medium tracking-wide">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Data Scientist &
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-typing leading-[1.3] inline-block">
                  AI Engineer
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Transforming complex data into intelligent solutions using cutting-edge AI and machine learning technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                View Projects
              </Button>

              <Button
                onClick={() => scrollToSection('footer')}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Diya68" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-all">
                <Github className="w-5 h-5 text-cyan-400" />
              </a>

              <a href="https://linkedin.com/in/diya24" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>

              <a href="mailto:diyaa6428@gmail.com"
                className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-all">
                <Mail className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          

   <div className="flex items-center justify-center h-full animate-fadeIn" style={{ animationDelay: '0.2s' }}>

  <div className="relative w-80 h-80">

    {/* Glow (ONLY OUTSIDE) */}
    <div className="absolute -inset-6 bg-cyan-500/30 rounded-full blur-3xl"></div>

    {/* Clean Ring (NO COLOR FILL) */}
    <div className="absolute inset-0 rounded-full border-4 border-cyan-500/40"></div>

    {/* IMAGE */}
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <img 
        src={profilePhoto}
        alt="Diya"
        className="relative w-80 h-80 rounded-full border-4 border-cyan-400 object-cover"
      />
    </div>

  </div>

</div>
            {/* Decorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-cyan-500/30 rounded-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-teal-500/30 rounded-3xl" />
          </div>

        </div>

        {/* Scroll */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
    
    </section>
  );
};

export default Hero;