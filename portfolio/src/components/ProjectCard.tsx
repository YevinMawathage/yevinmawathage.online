import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  techStack?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-[85vw] sm:w-80 md:w-96 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl overflow-hidden border border-neutral-800 hover:border-green-600/50 group relative"
    >
      {/* Tech Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Image Container */}
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-neutral-800">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Category Badge with Terminal Style */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <div className="bg-neutral-950/90 backdrop-blur-sm border border-green-600/50 px-2 sm:px-3 py-1 rounded flex items-center gap-1.5 sm:gap-2">
            <span className="text-green-500 text-xs">$</span>
            <span className="text-green-400 text-xs font-mono">{project.category}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-neutral-950/90 backdrop-blur-sm border border-neutral-700 hover:border-green-600 p-1.5 sm:p-2 rounded-lg transition-colors"
            aria-label="View Live Demo"
          >
            <ExternalLink size={14} className="sm:w-4 sm:h-4 text-green-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-neutral-950/90 backdrop-blur-sm border border-neutral-700 hover:border-green-600 p-1.5 sm:p-2 rounded-lg transition-colors"
            aria-label="View Source Code"
          >
            <Github size={14} className="sm:w-4 sm:h-4 text-green-500" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 relative">
        {/* Project Title with Code Icon */}
        <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="mt-0.5 sm:mt-1">
            <Code2 size={18} className="sm:w-5 sm:h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 sm:mb-2 leading-tight text-base sm:text-lg">{project.title}</h3>
            <p className="text-xs text-neutral-500 font-mono">./project-{project.id}</p>
          </div>
        </div>

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-800/50 border border-neutral-700 text-green-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs font-mono hover:border-green-600/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* View Details Button - Terminal Style */}
        <motion.button
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="w-full bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-green-600 text-green-500 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-between group/button font-mono text-xs sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="text-green-600">{'>'}</span>
            <span>view_details</span>
          </span>
          <span className="opacity-0 group-hover/button:opacity-100 transition-opacity">_</span>
        </motion.button>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-green-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}