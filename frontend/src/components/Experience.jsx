import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from "./ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto text-left">

        {/* HEADER */}
        <div className="mb-12 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">
              EXPERIENCE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Journey
            </span>
          </h2>
        </div>

        {/* CARD */}
        <Card className="bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
          <div className="p-8">

            {/* ✅ LEFT ALIGN FIX */}
            <div className="flex flex-col md:flex-row items-start gap-6">

              {/* ICON */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Briefcase className="w-8 h-8 text-cyan-400" />
              </div>

              {/* CONTENT */}
              <div className="flex-1 space-y-4 text-left">

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">

                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        Data Analytics & Visualization (Job Simulation)
                      </h3>

                      <p className="text-lg text-cyan-400 font-medium">
                        Accenture North America
                      </p>

                      <p className="text-sm text-gray-500">Virtual</p>
                    </div>

                    {/* DATE */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">
                        2024
                      </span>
                    </div>

                  </div>
                </div>

                {/* POINTS */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
                    <p className="text-gray-300">
                      Analyzed social media data to identify content trends and provide strategic recommendations
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
                    <p className="text-gray-300">
                      Cleaned, modeled, and visualized datasets to derive actionable insights
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
                    <p className="text-gray-300">
                      Created PowerPoint report and video presentation to communicate findings to stakeholders
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                    Data Analytics
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                    Visualization
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                    PowerPoint
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                    Social Media Analysis
                  </span>
                </div>

              </div>
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};

export default Experience;