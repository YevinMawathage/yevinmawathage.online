"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React", url: "https://reactjs.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "Next.js", url: "https://nextjs.org/", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "HTML5", url: "https://www.w3.org/html/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS3", url: "https://www.w3schools.com/css/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Bootstrap", url: "https://getbootstrap.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" },
        { name: "AWS", url: "https://aws.amazon.com", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Firebase", url: "https://firebase.google.com/", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "MongoDB", url: "https://www.mongodb.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "MySQL", url: "https://www.mysql.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
        { name: "Redis", url: "https://redis.io", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" },
        { name: "SQLite", url: "https://www.sqlite.org/", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
        { name: "Jest", url: "https://jestjs.io", icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" },
        { name: "Postman", url: "https://postman.com", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", url: "https://www.figma.com/", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
        { name: "Photoshop", url: "https://www.photoshop.com/en", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png" },
        { name: "Illustrator", url: "https://www.adobe.com/in/products/illustrator.html", icon: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" },
        { name: "Lightroom", url: "https://www.adobe.com/products/photoshop-lightroom.html", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/640px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" },
        { name: "Blender", url: "https://www.blender.org/", icon: "https://download.blender.org/branding/community/blender_community_badge_white.svg" },
      ]
    },
    {
      title: "Video Editing",
      skills: [
        { name: "Premiere Pro", url: "https://www.adobe.com/products/premiere.html", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Adobe_Premiere_Pro_CC_2026_icon.svg/640px-Adobe_Premiere_Pro_CC_2026_icon.svg.png" },
        { name: "After Effects", url: "https://www.adobe.com/products/aftereffects.html", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png?20210519030120" },
        { name: "CapCut", url: "https://www.capcut.com/", icon: "https://images.seeklogo.com/logo-png/43/2/capcut-logo-png_seeklogo-437025.png" },
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", url: "https://www.python.org", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "C#", url: "https://www.w3schools.com/cs/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "Git", url: "https://git-scm.com/", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "Docker", url: "https://www.docker.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
        { name: "Linux", url: "https://www.linux.org/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
        { name: "Bash", url: "https://www.gnu.org/software/bash/", icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
        { name: "VS Code", url: "https://code.visualstudio.com/", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
        { name: "Arduino", url: "https://www.arduino.cc/", icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
        { name: "Matlab", url: "https://www.mathworks.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
        { name: "OpenCV", url: "https://opencv.org/", icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
        { name: "Qt", url: "https://www.qt.io/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" },
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
            <div className="mt-10 space-y-8">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xl text-white font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {category.skills.map((skill, index) => (
                      <motion.a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-3 rounded-xl hover:from-white/20 hover:to-white/10 transition-all flex items-center justify-center"
                        title={skill.name}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={skill.icon} alt={skill.name} width="40" height="40" className="w-10 h-10 object-contain" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
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
