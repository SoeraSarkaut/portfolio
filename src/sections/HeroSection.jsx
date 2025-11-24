import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen max-w-screen text-white text-center py-20 pt-42"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-black mb-4 tracking-tighter"
      >
        <span className="block">SOERA</span>
        <span className="block text-white/80">SARKAUT</span>
      </motion.h1>
      <p className="text-xl md:text-3xl text-white/80 font-light h-12 mb-14">
        <Typewriter
          words={[
            "Software developer",
            "Fullstack engineer",
            "Biker",
            "Innovator",
            "Gamer",
            "Problem solver",
            "Cat owner",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
      <motion.a
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        href="#projects"
        className="px-8 py-3 font-medium border border-white/50 uppercase hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
      >
        View my work
      </motion.a>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-30 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="scroll-indicator w-px h-3 bg-white/60 absolute opacity-0"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;