import { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";

export function Portfolio() {
  const categories = ["All", "Graphic Design", "Video Editing", "Web Development", "Other"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzY1MDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete brand identity package with logo, colors, and typography",
    },
    {
      id: 2,
      title: "Corporate Video",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1543336472-fcf478c443db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzZXR1cHxlbnwxfHx8fDE3NjM2MzY5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional video production with motion graphics and color grading",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzNjcxNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Full-stack e-commerce solution with modern design",
    },
    {
      id: 4,
      title: "Abstract Art Series",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1723283126735-f24688fcfcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzYzNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Collection of abstract digital artworks",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MzYxMTI4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Responsive portfolio site with smooth animations",
    },
    {
      id: 6,
      title: "Product Photography",
      category: "Other",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzY1MDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional product photography and retouching",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-zinc-100">My Work</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Explore my portfolio of creative projects across different disciplines
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-zinc-950"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <PortfolioGrid projects={filteredProjects} />
      </div>
    </section>
  );
}
