import React from "react";
import { motion } from "framer-motion";

// Icon import
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaCat } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-18 mt-16 md:mt-12 border-t sm:border-0 border-white/20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase text-center">
          About me
        </h2>
        <p className="text-white/80 md:text-xl text-center pt-4">
          Developer crafting digital experiences with modern technologies.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-14">
        <div className="pt-3">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white/80"
          >
            I am a student at Grafisch Lyceum Utrecht with 2 years of experience
            in web development. Passionate about crafting modern digital
            experiences, I enjoy working with a wide range of technologies to
            build responsive, visually engaging, and user-friendly products. I
            love turning ideas into interactive solutions and continuously
            expanding my skill set. In the future, I want to learn how to design
            websites better from scratch and also dive deeper into more advanced
            backend development.
          </motion.p>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="grid grid-cols-2 gap-4 pt-16"
          >
            <div className="border border-white/10 bg-white/5 text-center py-4 rounded-lg transition duration-500 hover:scale-105">
              <p className="text-white text-2xl font-bold">2+</p>
              <p className="text-white/60 text-sm">Years of Experience</p>
            </div>
            <div className="border border-white/10 bg-white/5 text-center py-4 rounded-lg transition duration-500 hover:scale-105">
              <p className="text-white text-2xl font-bold">15K+</p>
              <p className="text-white/60 text-sm">Lines of Code</p>
            </div>
            <div className="border border-white/10 bg-white/5 text-center py-4 rounded-lg transition duration-500 hover:scale-105">
              <p className="text-white text-2xl font-bold">20+</p>
              <p className="text-white/60 text-sm">Completed Projects</p>
            </div>
            <div className="border border-white/10 bg-white/5 text-center py-4 rounded-lg transition duration-500 hover:scale-105">
              <p className="text-white text-2xl font-bold">10+</p>
              <p className="text-white/60 text-sm">Group Projects</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-white text-3xl font-semibold">Tech-Stack</p>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-5 pt-6">
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaReact className="text-cyan-400 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaHtml5 className="text-orange-500 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaCss3 className="text-blue-600 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaPhp className="text-indigo-500 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <RiTailwindCssFill className="text-cyan-300 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaBootstrap className="text-purple-600 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaLaravel className="text-red-600 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <RiSvelteFill className="text-orange-400 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <IoLogoJavascript className="text-yellow-400 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <FaNode className="text-green-600 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <SiVite className="text-yellow-400 text-4xl" />
            </div>
            <div className="bg-white/5 rounded-xl flex justify-center items-center py-5 transition duration-100 hover:scale-105">
              <PiFileSqlLight className="text-white text-4xl" />
            </div>
          </div>
        </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="pt-4"
          >
            <p className="text-white text-2xl font-semibold">Beyond code</p>
            <div className="grid grid-cols-2 gap-4 pt-5">
              <div className="flex flex-col justify-center items-center gap-2 border border-white/10 bg-white/5 py-4 px-2 rounded-lg transition duration-500 hover:scale-105">
                <FaMotorcycle className="text-white text-3xl" />
                <p className="text-white/80 text-center">
                  I love riding motorcycles in my free time.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 border border-white/10 bg-white/5 py-4 px-2 rounded-lg transition duration-500 hover:scale-105">
                <IoLogoGameControllerA className="text-white text-3xl" />
                <p className="text-white/80 text-center">
                  I also love gaming
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 border border-white/10 bg-white/5 py-4 px-2 rounded-lg transition duration-500 hover:scale-105">
                <FaCat className="text-white text-3xl" />
                <p className="text-white/80 text-center">
                  Petting and annoying my cats is also fun.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 border border-white/10 bg-white/5 py-4 px-2 rounded-lg transition duration-500 hover:scale-105">
                <FaTv className="text-white text-3xl" />
                <p className="text-white/80 text-center">
                  I like to watch youtube, movies and anime aswell.
                </p>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
