import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  techStack?: string[];
}

interface PortfolioSectionProps {
  title: string;
  projects: Project[];
  id: string;
}

export function PortfolioSection({ title, projects, id }: PortfolioSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const displayProjects = useMemo(() => {
    if (projects.length === 0) return [];
    
    // Duplicate projects to create an "infinite" scroll effect
    // Ensure we have enough items to fill wide screens and allow scrolling
    let repeated = [...projects];
    while (repeated.length < 12) {
      repeated = [...repeated, ...projects];
    }
    // Add extra copies for good measure
    repeated = [...repeated, ...projects, ...projects];
    return repeated;
  }, [projects]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={id} className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 flex flex-col items-center justify-center w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4 text-white font-bold">{title}</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-green-600 rounded-full" 
        />
      </motion.div>

      {/* Single Scrollable Row */}
      <div className="relative group w-full max-w-[100vw]">
        {/* Left Scroll Button - Now visible on all screens */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll left"
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-green-600/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner rotating ring */}
            <motion.div
              className="absolute inset-1 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-green-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* Main button */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border-2 border-green-600 flex items-center justify-center shadow-xl shadow-green-600/30 hover:shadow-green-500/50 transition-all group/btn">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-green-600/20 blur-md group-hover/btn:bg-green-500/30 transition-all" />
              {/* Icon */}
              <ChevronLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 relative z-10 group-hover/btn:text-green-300 transition-colors" />
              {/* Corner accents */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-green-500/50" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-green-500/50" />
            </div>
          </div>
        </motion.button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-8 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button - Now visible on all screens */}
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll right"
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-green-600/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner rotating ring */}
            <motion.div
              className="absolute inset-1 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-green-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* Main button */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border-2 border-green-600 flex items-center justify-center shadow-xl shadow-green-600/30 hover:shadow-green-500/50 transition-all group/btn">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-green-600/20 blur-md group-hover/btn:bg-green-500/30 transition-all" />
              {/* Icon */}
              <ChevronRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 relative z-10 group-hover/btn:text-green-300 transition-colors" />
              {/* Corner accents */}
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-green-500/50" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-green-500/50" />
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}