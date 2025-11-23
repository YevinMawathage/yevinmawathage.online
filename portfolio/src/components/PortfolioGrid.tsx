import { ExternalLink } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

function ImageWithFallback({ src, alt, ...props }: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      src={error ? "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80" : src}
      onError={() => setError(true)}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs text-zinc-100 mb-3">
                {project.category}
              </span>
              <h3 className="text-xl text-zinc-100 mb-2">{project.title}</h3>
              <p className="text-zinc-300 mb-4">{project.description}</p>
            </div>
          </div>

          {/* Bottom Info (Always Visible) */}
          <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
            <span className="inline-block px-3 py-1 bg-zinc-700 text-xs text-zinc-300 mb-3">
              {project.category}
            </span>
            <h3 className="text-xl text-zinc-100">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
