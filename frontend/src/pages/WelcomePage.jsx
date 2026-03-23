import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Brain, Cpu, Binary } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation'; // ✅ added

const WelcomePage = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d0d12] via-[#12151a] to-[#0d0d12] overflow-hidden">
      
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-sm opacity-40 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Floating Icons */}
      <div className="absolute top-24 left-16 animate-float" style={{ animationDuration: '6s' }}>
        <Brain className="w-12 h-12 text-cyan-500/20" />
      </div>

      <div className="absolute top-32 right-24 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
        <Cpu className="w-10 h-10 text-teal-400/20" />
      </div>

      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
        <Binary className="w-14 h-14 text-cyan-400/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fadeIn">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">WELCOME</span>
          </div>

          {/* Name with Typing Animation */}
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              <TypeAnimation
                sequence={[
                  "Diya",
                  2000,
                  "Developer",
                  2000,
                  "AI Engineer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems that solve real-world problems using AI.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-500" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-400 italic max-w-2xl mx-auto">
            <span className="text-cyan-400 text-3xl">"</span>
            Artificial Intelligence is the new electricity.
            <span className="text-cyan-400 text-3xl">"</span>
          </blockquote>
          <p className="text-sm text-gray-500 -mt-4">— Andrew Ng</p>

          {/* Button */}
          <div className="pt-8">
            <Button
              onClick={() => navigate('/portfolio')}
              className="group relative px-8 py-6 text-lg font-medium bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="0" cy="200" r="150" stroke="#06b6d4" strokeWidth="1" fill="none" />
          <circle cx="0" cy="200" r="100" stroke="#14b8a6" strokeWidth="1" fill="none" />
          <circle cx="0" cy="200" r="50" stroke="#06b6d4" strokeWidth="1" fill="none" />
        </svg>
      </div>

    </div>
  );
};

export default WelcomePage;