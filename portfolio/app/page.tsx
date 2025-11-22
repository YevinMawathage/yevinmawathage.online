"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const companies = [
    { name: "ClickUp" },
    { name: "Dropbox" },
    { name: "Paychex" },
    { name: "Elastic" },
    { name: "Stripe" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-green-600 font-mono font-thin pt-24 sm:pt-32">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative">
          {/* Left Content */}
          <div className="md:w-1/2 w-full text-center md:text-left z-10 flex flex-col items-center justify-center min-h-[calc(100vh-128px)] sm:min-h-[calc(100vh-160px)]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors text-sm sm:text-base w-fit">
                Let's get started
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
          <div className="hidden md:block md:w-1/2 h-96 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0">
            <motion.div
              initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
              animate={{ opacity: 1, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full bg-black"
            >
              <Image
                src="/assessts/images/My-DP.png"
                alt="Profile"
                fill
                className="object-contain object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}