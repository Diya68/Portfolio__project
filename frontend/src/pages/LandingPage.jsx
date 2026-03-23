import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Network } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import { getStatus } from '../lib/api';
const LandingPage = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);
  const [data, setData] = useState([]);

 useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));

    setParticles(newParticles);
  }, []);

  useEffect(() => {
  getStatus().then((res) => {
    console.log("Backend Data:", res);
    setData(res);
  });
}, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f1116] to-[#0a0a0f] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {particles.slice(0, 15).map((particle, i) => {
          const nextParticle = particles[(i + 1) % 15];
          return (
            <line
              key={`line-${i}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle.x}%`}
              y2={`${nextParticle.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Floating AI Icons */}
      <div className="absolute top-20 left-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <Network className="w-8 h-8 text-cyan-500 opacity-30" />
      </div>
      <div className="absolute top-40 right-32 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <Zap className="w-6 h-6 text-teal-400 opacity-30" />
      </div>
      <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
        <Sparkles className="w-7 h-7 text-cyan-400 opacity-30" />
      </div>
      <div className="absolute bottom-40 right-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <Network className="w-9 h-9 text-teal-500 opacity-30" />
      </div>

      {/* Center Content - Photo Only */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div 
          className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          onClick={() => navigate('/welcome')}
        >
          <div className="relative">
            {/* Glowing Ring Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
            
            {/* Photo Container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all duration-500" />
              <img 
                src={profilePhoto}
                alt="Diya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hover Instruction */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-cyan-400 text-sm font-medium whitespace-nowrap">Click to enter</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Circuit Lines */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 50 L 30 50 L 40 40 L 60 40 L 70 50 L 100 50" stroke="#06b6d4" strokeWidth="0.5" fill="none" />
          <path d="M 50 0 L 50 30 L 60 40 L 60 60 L 50 70 L 50 100" stroke="#14b8a6" strokeWidth="0.5" fill="none" />
          <circle cx="30" cy="50" r="2" fill="#06b6d4" />
          <circle cx="70" cy="50" r="2" fill="#14b8a6" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0 50 L 30 50 L 40 40 L 60 40 L 70 50 L 100 50" stroke="#06b6d4" strokeWidth="0.5" fill="none" />
          <path d="M 50 0 L 50 30 L 60 40 L 60 60 L 50 70 L 50 100" stroke="#14b8a6" strokeWidth="0.5" fill="none" />
          <circle cx="30" cy="50" r="2" fill="#06b6d4" />
          <circle cx="70" cy="50" r="2" fill="#14b8a6" />
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;