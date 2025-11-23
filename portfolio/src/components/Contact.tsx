import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-zinc-100">Get In Touch</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-100 focus:border-zinc-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-100 focus:border-zinc-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-100 focus:border-zinc-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
