"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/src/components/ui/Spotlight";
import { PortfolioSection } from "@/src/components/PortfolioSection";
import projects from "@/src/data/ProjectData.json";

export default function Home() {
  const companies = [
    { name: "ClickUp" },
    { name: "Dropbox" },
    { name: "Paychex" },
    { name: "Elastic" },
    { name: "Stripe" },
  ];

  const webProjects = projects.filter(p => p.category === "Web Development");
  const graphicProjects = projects.filter(p => p.category === "Graphic Design");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-green-600 font-mono font-thin pt-24 sm:pt-32 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="h-full w-full dark:bg-neutral-900 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative">
          {/* Left Content */}
          <div className="md:w-1/2 w-full text-center md:text-left z-10 flex flex-col justify-center items-center md:items-start min-h-[calc(100vh-128px)] sm:min-h-[calc(100vh-160px)]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Web Developer & Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-400 mb-6 sm:mb-8 max-w-md text-sm sm:text-base mx-auto md:mx-0"
            >
              A passionate web developer and a graphic designer with a focus on
              creating modern and performant web applications and designs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-4 mb-10 sm:mb-12 md:mb-16"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors text-sm sm:text-base w-fit shadow-[0_0_20px_rgba(22,163,74,0.5)]">
                Let&apos;s get started
              </button>
              <button className="border border-green-600 hover:bg-green-600/10 text-green-600 px-6 py-3 rounded-lg transition-colors text-sm sm:text-base w-fit">
                View Work
              </button>
            </motion.div>

            {/* Worked With Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <p className="text-neutral-500 text-xs sm:text-sm whitespace-nowrap">
                Worked with:
              </p>
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap opacity-50">
                {companies.map((company) => (
                  <span key={company.name} className="text-sm">{company.name}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Angled Image */}
          <div className="hidden md:block md:w-1/2 h-96 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0 [perspective:1000px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
              animate={{ opacity: 1, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full bg-black"
            >
              <Image
                src="/assessts/images/My-DP-1.png"
                alt="Profile"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="mt-32 space-y-32">
          <PortfolioSection title="Web Development" projects={webProjects} id="web-development" />
          <PortfolioSection title="Graphic Design" projects={graphicProjects} id="graphic-design" />
        </div>
      </div>
    </main>
  );
}

