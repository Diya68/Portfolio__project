import React from 'react';
import { FileText, Award } from 'lucide-react';
import { Card } from './ui/card';

const Patent = () => {
  return (
    <section id="patent" className="py-32 px-6 bg-[#0d0d12]/30">
      
      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto text-left">

        {/* HEADER */}
        <div className="mb-12 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-cyan-400 text-sm font-medium tracking-wide">PATENT</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovation &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Research
            </span>
          </h2>
        </div>

        {/* CARD */}
        <Card className="bg-[#12151a]/50 backdrop-blur-sm border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
          <div className="p-8">

            {/* ✅ LEFT ALIGN FIX */}
            <div className="flex flex-col md:flex-row items-start gap-8">

              {/* ICON */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Award className="w-10 h-10 text-cyan-400" />
              </div>

              {/* CONTENT */}
              <div className="flex-1 space-y-4 text-left">

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mb-3">
                      <FileText className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-medium text-green-400">Published</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      AI-Enabled Autonomous Sewer Mapping and Cleansing Device with Adjustable Orientation
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg">
                  An innovative AI-powered system designed for autonomous sewer infrastructure mapping and cleaning operations. The device features adjustable orientation capabilities for navigating complex underground networks and utilizes advanced computer vision for real-time mapping and obstacle detection.
                </p>

                {/* DETAILS */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-400">Application No:</span>
                    <span className="text-sm font-semibold text-cyan-400">202511113786</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-400">Status:</span>
                    <span className="text-sm font-semibold text-green-400">Published</span>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="grid sm:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-300">AI-Powered Navigation</span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-300">Adjustable Orientation</span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-300">Autonomous Mapping</span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-300">Cleansing Mechanism</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};

export default Patent;