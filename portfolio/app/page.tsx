"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {

  const companies = [
    { name: "ClickUp", width: "w-20" },
    { name: "Dropbox", width: "w-20" },
    { name: "Paychex", width: "w-20" },
    { name: "Elastic", width: "w-20" },
    { name: "Stripe", width: "w-16" },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-green-600 font-mono font-thin pt-32 sm:pt-40 flex justify-center">
      <div className="p-8 sm:p-12 md:p-16 lg:p-24 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-2 sm:gap-2 lg:gap-4 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Yevin Mawathage
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-neutral-400 mb-6 sm:mb-8 max-w-md text-sm sm:text-base"
            >
              A passionate full-stack developer creating modern and performant web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-2 transition-colors group text-sm sm:text-base"
                >
                    My Work
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-2 transition-colors group text-sm sm:text-base"
                >
                    Contact Me
                </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-green-600 shadow-2xl shadow-green-600/20">
                <Image
                  src="/assessts/images/DP.png"
                  alt="Yevin Mawathage - Profile Picture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Worked With Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <p className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-6">Worked with</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap opacity-50">
            {companies.map((company) => (
              <div key={company.name} className={`${company.width} h-5 sm:h-6 bg-neutral-700 rounded`} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
