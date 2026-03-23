import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card } from "./ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Analytics and Visualization',
      provider: 'Forage',
      link: '#'
    },
    {
      title: 'Become an OCI Generative AI Professional',
      provider: 'Oracle University',
      link: '#'
    },
    {
      title: 'Python for Data Science, AI & Development',
      provider: 'Coursera',
      link: '#'
    },
    {
      title: 'Introduction to Generative AI for Data Analysis',
      provider: 'Coursera',
      link: '#'
    },
    {
      title: 'SQL: A Practical Introduction for Querying Databases',
      provider: 'Coursera',
      link: '#'
    },
    {
      title: 'AI-Powered System',
      provider: 'Coursera',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-32 px-8 md:px-16">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto text-left">

        {/* HEADER */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">
              CERTIFICATIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Certifications
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl">
            Continuous learning and skill development in AI and data science
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="p-6">

                {/* ✅ LEFT ALIGN FIX */}
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.provider}</p>
                  </div>

                  {/* LINK */}
                  <button 
                    className="w-8 h-8 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-200 shrink-0 group-hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </button>

                </div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;