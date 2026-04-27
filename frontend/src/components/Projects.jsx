import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      
        title: 'EyeClick: Hands-Free Computer Control Using Eye Tracking',
        description: 'A computer vision-based system that enables hands-free mouse control using eye movements and blinks, built with MediaPipe, OpenCV, and Python for real-time interaction.',
        image: 'https://recfaces.com/wp-content/uploads/2020/12/snimok-ekrana-2020-12-03-150858-830x500.png',
        tags: ['Computer Vision', 'OpenCV', 'MediaPipe', 'Python', 'Eye Tracking'],
        github: 'https://github.com/Diya68/Eye_Click',
        year: '2026'
      
    },
    {
      title: 'SkyGuard: AI-Based Military Aircraft Detection',
      description: 'AI-based military aircraft detection system using YOLOv8 for real-time object detection.',
      image: 'https://images.unsplash.com/photo-1665501154026-41e5b5ea1a61',
      tags: ['YOLOv8', 'Computer Vision', 'Deep Learning'],
      github: 'https://github.com/Diya68/SkyGuard-AI-Based-Military-Aircraft-Detection',
      year: '2026'
    },
    {
      title: 'PneumoGAN: Pneumonia Detection with GAN',
      description: 'GAN-augmented CNN pipeline for pneumonia detection using chest X-rays.',
      image: 'https://images.unsplash.com/photo-1758086193161-9cda6e8c5089',
      tags: ['GAN', 'Medical AI', 'CNN'],
      github: 'https://github.com/Diya68/PneumoGAN-Pneumonia-Detection-with-GAN-Augmented-Deep-Learning',
      year: '2025'
    },
    {
      title: 'Latent Force Models for Multimorbidity',
      description: 'Gaussian Process-based model for predicting multimorbidity in RA patients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['Gaussian', 'Healthcare AI'],
      github: 'https://github.com/SanskrutiDhal/Latent-Force-Models-for-Multimorbidity-Analysis',
      year: '2025'
    },
    {
      title: 'BlissBuddy: AI Mental Health Assistant',
      description: 'Mental health analysis using ML, sentiment analysis, and chatbot interaction.',
      image: 'https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0',
      tags: ['NLP', 'Chatbot'],
      github: 'https://github.com/Harshrj1/AI-for-Mental-Health',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-left mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          <span className="text-cyan-400 text-xs font-medium tracking-wide">
            PROJECTS
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            Work
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl">
          Real-world AI solutions addressing healthcare, security, and wellness challenges
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {projects.map((project, index) => (
            <Card 
              key={index}
              className="min-w-[320px] max-w-[320px] flex-shrink-0 
                         group bg-[#12151a]/50 backdrop-blur-sm 
                         border-cyan-500/10 hover:border-cyan-500/30 
                         transition-all duration-300 overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12151a] via-[#12151a]/50 to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/90">
                  <span className="text-xs font-semibold text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ✅ FIXED BUTTONS */}
                <div className="flex items-center gap-3 pt-3">

                  {/* GitHub Button */}
                  <Button
                    asChild
                    className="flex items-center justify-center gap-2 
                               h-10 px-4 flex-1 
                               bg-cyan-500 text-white rounded-lg 
                               transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>

                  {/* External Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="flex items-center justify-center 
                               h-10 w-10 
                               border-cyan-500/30 text-cyan-400 
                               rounded-lg transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>

                </div>
              </div>

            </Card>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Projects;
