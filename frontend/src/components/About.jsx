import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl">
        
        <div className="mb-12 text-left">
  
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
    <span className="text-cyan-400 text-xs font-medium tracking-wide">
      ABOUT ME
    </span>
  </div>

  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Turning Data Into{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
      Intelligence
    </span>
  </h2>

</div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Main Description */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-[#12151a]/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              
              <p className="text-base text-gray-300 leading-relaxed mb-3">
                Entry-level Data Scientist proficient in{" "}
                <span className="text-cyan-400 font-semibold">
                  Python, SQL, TensorFlow, and Scikit-learn
                </span>
                , with hands-on experience developing end-to-end ML and AI-driven applications.
              </p>

              <p className="text-base text-gray-300 leading-relaxed mb-3">
                Strong analytical and problem-solving abilities with a solid foundation in data preprocessing, feature engineering, and model development.
              </p>

              <p className="text-base text-gray-300 leading-relaxed">
                Skilled at transforming complex data into meaningful insights and contributing effectively to AI product workflows.
              </p>

            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-1">3+</div>
                <div className="text-sm text-gray-300">Years of Study</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-1">4+</div>
                <div className="text-sm text-gray-300">AI/ML Projects</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-1">1</div>
                <div className="text-sm text-gray-300">Patent Filed</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-1">6+</div>
                <div className="text-sm text-gray-300">Certifications</div>
              </div>

            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-[#12151a]/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300">
              
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>

              <div className="space-y-4">
                
                <a 
                  href="mailto:diyaa6428@gmail.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-sm break-all">diyaa6428@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+918847437046"
                  className="flex items-start gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="text-sm">+91 88474 37046</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-sm">Chandigarh</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;