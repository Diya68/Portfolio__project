import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, BookOpen, Briefcase, Award, Mail } from 'lucide-react';
import { Button } from "./ui/button";
import logo from '../assets/logo.png'; // your image

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Education', id: 'education', icon: BookOpen },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Award },
    { name: 'Contact', id: 'footer', icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-cyan-500/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >

      <div className="w-full px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          

  {/* D Icon */}
  <div className="flex items-center gap-3 cursor-pointer group">

  {/* D Icon */}
  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-300">
    <span className="text-white font-bold text-lg">D</span>
  </div>

  {/* CLEAN IMAGE LOGO */}
  <img 
    src={logo}
    alt="Diya"
    className="h-12 w-auto object-contain 
           filter brightness-0 invert 
           mix-blend-screen 
           animate-logo
           transition-all duration-300 
           group-hover:scale-110"
  />

</div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* ================= CTA ================= */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('footer')}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Get in Touch
            </Button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* ================= MOBILE NAV ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cyan-500/10 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}

              <Button
                onClick={() => scrollToSection('footer')}
                className="mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-lg"
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;