import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import {Card} from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      specialization: 'Artificial Intelligence and Machine Learning (IBM)',
      institution: 'Chandigarh University',
      location: 'Gharuan, Mohali, Punjab',
      duration: '2022 - Present',
      cgpa: '8.08',
      lastSem: '8.30',
      icon: '🎓'
    },
    {
      degree: '12th (CBSE)',
      institution: 'Kendriya Vidyalaya, 3BRD',
      location: 'Chandigarh',
      duration: '2020 - 2021',
      percentage: '86.17%',
      icon: '📚'
    },
    {
      degree: '10th (CBSE)',
      institution: 'Kendriya Vidyalaya, 3BRD',
      location: 'Chandigarh',
      duration: '2018 - 2019',
      percentage: '89.8%',
      icon: '📖'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#0d0d12]/30">
       <div className="max-w-7xl">
    <div className="mb-12 text-left flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-cyan-400 text-xs font-medium tracking-wide">EDUCATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Building a strong foundation in AI and computer science
          </p>
        </div>

      

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="p-6 h-full flex flex-col">

                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-3 flex-1">

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>

                    {edu.specialization && (
                      <p className="text-cyan-400 font-medium mb-2 text-sm">
                        {edu.specialization}
                      </p>
                    )}

                    <p className="text-sm text-gray-300">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-gray-500">
                      {edu.location}
                    </p>
                  </div>

                  {/* DATE */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs">{edu.duration}</span>
                  </div>

                  {/* ✅ RESULT BOX (ALIGNED FIX) */}
                  <div className="mt-auto">

                    {edu.cgpa && (
                      <div className="h-12 px-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-col">
                        <span className="text-xs text-cyan-400 font-semibold">
                          CGPA: {edu.cgpa}
                        </span>
                        <span className="text-xs text-gray-500">
                          Last Sem: {edu.lastSem}
                        </span>
                      </div>
                    )}

                    {edu.percentage && (
                      <div className="h-12 px-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <span className="text-xs text-cyan-400 font-semibold">
                          {edu.percentage}
                        </span>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;