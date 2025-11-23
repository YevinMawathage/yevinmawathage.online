"use client";

import { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import projectsData from "../data/ProjectData.json";

export function RecentWork() {
  const categories = ["All", "Web Development", "Graphic Design", "Video Editing", "Other"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-zinc-100 font-bold">Recent Work</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            A collection of my latest projects and creative endeavors.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-transparent text-zinc-400 border-zinc-700 hover:border-green-600 hover:text-green-600"
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
