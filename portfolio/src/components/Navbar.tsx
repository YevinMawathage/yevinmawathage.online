"use client";

import { useState } from 'react';
import Link from 'next/link';

// Placeholder Social Icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.636 4.212 3.803 4.653-.7.193-1.448.223-2.203.084.623 1.895 2.435 3.277 4.58 3.315-1.798 1.403-4.062 2.238-6.516 2.238-.423 0-.84-.025-1.254-.074 2.323 1.493 5.078 2.365 8.04 2.365 9.642 0 14.912-7.997 14.912-14.912l-.007-.678c1.023-.734 1.908-1.655 2.613-2.704z"></path>
    </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { href: "https://github.com/yevinmawathage", icon: GithubIcon },
    { href: "https://www.linkedin.com/in/yevin-mawathage", icon: LinkedinIcon },
    { href: "https://twitter.com", icon: TwitterIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md shadow-sm font-thin border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" className="text-xl md:text-2xl text-green-600">
              YevinMawathge  
            </Link>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex items-center justify-center md:space-x-2 lg:space-x-4">
            <Link href="/work" className="text-xs sm:text-sm lg:text-base text-green-600 hover:text-green-700 transition-colors duration-300">
              Recent.Work
            </Link>
            <Link href="/about" className="text-xs sm:text-sm lg:text-base text-green-600 hover:text-green-700 transition-colors duration-300">
              AboutMe
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm lg:text-base bg-gray-800 text-green-600 px-3 lg:px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
              Get In Touch
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700" title={`Visit ${social.href.includes('github') ? 'GitHub' : social.href.includes('linkedin') ? 'LinkedIn' : 'Twitter'} profile`}>
                <social.icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-green-700 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              {...{ 'aria-expanded': isOpen }}
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link href="/work" className="text-green-600 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Recent Work</Link>
            <Link href="/about" className="text-green-600 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">About Me</Link>
            <Link href="/contact" className="bg-gray-800 text-green-600 block px-3 py-2 rounded-md text-base font-medium">Get In Touch</Link>
            <div className="border-t border-neutral-800 my-2"></div>
            <div className="flex justify-center space-x-4 pt-2">
                {socialLinks.map((social) => (
                    <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700" title={`Visit ${social.href.includes('github') ? 'GitHub' : social.href.includes('linkedin') ? 'LinkedIn' : 'Twitter'} profile`}>
                        <social.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
