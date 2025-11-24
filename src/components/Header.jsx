import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 border-b border-white/10 transition-all backdrop-blur-sm duration-300">
      <nav className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#hero">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase hover:text-white/60 transition-colors">
              SOERA SARKAUT
            </h1>
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#projects"
              className="text-white/80 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors duration-300"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden h-10 w-10 flex flex-col gap-1 justify-center items-center"
            onClick={() => setShowMenu(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 font-black bg-white"></span>
            <span className="w-6 h-0.5 font-black bg-white"></span>
            <span className="w-6 h-0.5 font-black bg-white"></span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="md:hidden tracking-wider uppercase text-white flex flex-col gap-6 py-4 px-6 border-t border-white/10"
        >
          <motion.a
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeIn" }}
            href="#projects"
            className="w-fit text-3xl font-black hover:text-white/80"
            onClick={() => setShowMenu(false)}
          >
            Work
          </motion.a>
          <motion.a
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeIn" }}
            href="#about"
            className="w-fit text-3xl font-black hover:text-white/80"
            onClick={() => setShowMenu(false)}
          >
            About
          </motion.a>
          <motion.a
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeIn" }}
            href="#contact"
            className="w-fit text-3xl font-black text-left hover:text-white/80"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </motion.a>
        </div>
      )}
    </header>
  );
}

export default Header;
