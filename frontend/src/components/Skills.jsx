import React from 'react';
import { Code, Wrench, Users } from 'lucide-react';
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: ['Python', 'C++', 'MySQL', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Scikit-learn', 'Data Visualization', 'Data Preprocessing', 'Git']
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Power BI', 'Excel', 'VS Code', 'Google Colab', 'Origin Pro', 'n8n']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Collaboration', 'Leadership', 'Decision Making', 'Critical Thinking', 'Active Listening', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d12]/30">
      
      {/* ✅ FIX: Proper container + left align */}
      <div className="max-w-7xl mx-auto text-left">

        {/* HEADER */}
        <div className="mb-12 flex flex-col items-start">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-medium">SKILLS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Expertise &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Abilities
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl">
            A comprehensive toolkit for building intelligent AI solutions
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="p-6 space-y-5">

                  {/* HEADER */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400">
                      {category.title}
                    </h3>
                  </div>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-2 text-sm font-medium bg-cyan-500/10 text-gray-300 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </Card>
            );
          })}
        </div>

        {/* LANGUAGES */}
        <div className="mt-8">
          <Card className="bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-white mb-4">Languages</h3>

              <div className="flex gap-4">
                <div className="flex-1 p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                  <div className="text-base font-semibold text-cyan-400">English</div>
                  <div className="text-xs text-gray-400">Professional</div>
                </div>

                <div className="flex-1 p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                  <div className="text-base font-semibold text-cyan-400">Hindi</div>
                  <div className="text-xs text-gray-400">Native</div>
                </div>
              </div>

            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Skills;