"use client";

import { motion } from "framer-motion";
import { ArrowUp, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email, "Message:", message);
    // Reset form
    setEmail("");
    setMessage("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20 md:px-12 lg:px-24 border-t border-neutral-800 overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[13vw] font-bold whitespace-nowrap select-none"
          style={{ lineHeight: 1 }}
        >
          LET&apos;S TALK
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neutral-500 mb-4 tracking-wider text-xs sm:text-sm">
              HAVE A PROJECT IN MIND?
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="text-xs sm:text-sm tracking-wider">BACK TO TOP</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <ArrowUp size={16} className="sm:w-5 sm:h-5" />
            </div>
          </motion.button>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="relative">
                <label htmlFor="email" className="block text-xs text-green-500 mb-2 font-mono">
                  EMAIL_ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-green-600 outline-none py-3 sm:py-4 text-white placeholder:text-neutral-600 transition-colors text-sm sm:text-base"
                />
              </div>
              <div className="relative">
                <label htmlFor="name" className="block text-xs text-green-500 mb-2 font-mono">
                  FULL_NAME
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-green-600 outline-none py-3 sm:py-4 text-white placeholder:text-neutral-600 transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-xs text-green-500 mb-2 font-mono">
                PROJECT_DETAILS
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I'm looking to build a web application that..."
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-neutral-800 focus:border-green-600 outline-none py-3 sm:py-4 text-white placeholder:text-neutral-600 transition-colors resize-none text-sm sm:text-base"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-colors group text-sm sm:text-base"
            >
              <span>Send Message</span>
              <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links & Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="https://github.com/yevinmawathage"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neutral-800 hover:border-green-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wider transition-colors hover:text-green-600 flex items-center gap-2 justify-center sm:justify-start"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yevin-mawathage"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neutral-800 hover:border-green-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wider transition-colors hover:text-green-600 flex items-center gap-2 justify-center sm:justify-start"
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neutral-800 hover:border-green-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wider transition-colors hover:text-green-600 flex items-center gap-2 justify-center sm:justify-start"
            >
              <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>TWITTER</span>
            </a>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left sm:text-right text-xs sm:text-sm text-neutral-500"
          >
            <p>Developed by <span className="text-green-600">${'_'}Yevin.Mawathage</span></p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-800"
        >
          <p className="text-neutral-600 text-xs sm:text-sm text-center sm:text-left">© 2025 All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}