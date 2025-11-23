"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
    "Framer Motion", "Graphic Design", "Video Editing", "UI/UX Design"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-zinc-800">
               {/* Placeholder for a real image, using a gradient or a generic placeholder for now if no specific image is available */}
               <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">
                  <Image 
                    src="/assessts/images/My-DP-1.png" 
                    alt="Yevin Mawathage" 
                    fill
                    className="object-cover"
                  />
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600/20 rounded-full blur-2xl"></div>
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-600/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-green-600">Me</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hello! I&apos;m Yevin Mawathage, a passionate Web Developer and Graphic Designer based in Sri Lanka. 
                I specialize in building modern, responsive, and user-friendly web applications that solve real-world problems.
              </p>
              <p>
                With a keen eye for design and a strong technical background, I bridge the gap between aesthetics and functionality. 
                Whether it&apos;s crafting a unique brand identity or developing a complex web platform, I bring creativity and precision to every project.
              </p>
              <p>
                When I&apos;m not coding or designing, you can find me exploring new technologies, editing videos, or capturing moments through my camera lens.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-10">
              <h3 className="text-xl text-white font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm border border-zinc-700 hover:border-green-600 hover:text-green-500 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
