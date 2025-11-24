import React from "react";
import { motion } from "framer-motion";

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactSection() {

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-18 border-t sm:border-0 border-white/20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase">
          GET IN TOUCH
        </h2>
        <p className="text-white/80 md:text-xl text-center font-light pt-2">
          Ready to bring your idea to life?
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-11/12 md:w-4/5 lg:w-4/6 mt-16 space-y-12"
      >
        <p className="text-white/70 text-center text-lg md:text-xl font-light max-w-2xl mx-auto">
          Choose your preferred way to connect — I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:230752@student.glu.nl"
            className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50"
            aria-label="Email"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-white/10 rounded-full group-hover:bg-red-500/20 transition-all duration-300">
                <SiGmail className="text-4xl text-red-500" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                <p className="text-white/60 text-sm">Drop me a line</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
          </a>

          <a
            href="https://discord.com/users/YOUR_DISCORD_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5865F2]/20 hover:border-[#5865F2]/50"
            aria-label="Discord"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-white/10 rounded-full group-hover:bg-[#5865F2]/20 transition-all duration-300">
                <FaDiscord className="text-4xl text-[#5865F2]" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-2">Discord</h3>
                <p className="text-white/60 text-sm">Let's chat</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/0 to-[#5865F2]/0 group-hover:from-[#5865F2]/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
          </a>

          <a
            href="https://github.com/230752"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 hover:border-white/50"
            aria-label="GitHub"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                <FaGithub className="text-4xl text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-2">GitHub</h3>
                <p className="text-white/60 text-sm">View my code</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:border-[#0A66C2]/50"
            aria-label="LinkedIn"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-white/10 rounded-full group-hover:bg-[#0A66C2]/20 transition-all duration-300">
                <FaLinkedin className="text-4xl text-[#0A66C2]" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-2">LinkedIn</h3>
                <p className="text-white/60 text-sm">Connect professionally</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/0 group-hover:from-[#0A66C2]/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
