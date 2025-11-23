import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Code2, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  techStack?: string[];
  description?: string; // Added optional description
  githubUrl?: string;   // Added optional github url
  liveUrl?: string;     // Added optional live url
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                title="Close"
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 bg-neutral-900/80 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors border border-neutral-700"
              >
                <X size={20} />
              </button>

              {/* Image Section (Left/Top) */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-neutral-950/50" />
              </div>

              {/* Content Section (Right/Bottom) */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto bg-neutral-950">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-green-500 mb-2">
                    <Terminal size={16} />
                    <span className="text-xs font-mono">Project Details</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-semibold text-neutral-300 mb-2 flex items-center gap-2">
                    <Code2 size={16} className="text-green-500" />
                    Description
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                    {project.description || "No detailed description available for this project yet. This is a placeholder text to show where the project details would go."}
                  </p>
                </div>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-300 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-900">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-black font-medium py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
