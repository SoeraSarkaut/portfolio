import React from "react";
import { motion } from "framer-motion";

// Image import
import projectImg1 from "../assets/images/project1.png";
import projectImg2 from "../assets/images/project2.png";
import projectImg3 from "../assets/images/project3.png";
import projectImg4 from "../assets/images/project4.png";

// Icon import
import { FaGithub } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-black border-t sm:border-0 border-white/20"
    >
      <div className="container flex flex-col gap-16 items-center mx-auto px-6 p-14 md:py-32">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white text-center uppercase text-4xl md:text-6xl font-black">
            Selected Works
          </h2>
          <p className="pt-6 text-white/60 md:text-xl max-w-2xl text-center">
            A showcase of projects that demonstrate my passion for creating
            digital experiences
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-7xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[480px] h-full px-6 py-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-2xl transition duration-800 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-500/25 hover:to-purple-500/25"
          >
            <div className="flex flex-row justify-between items-start pb-5 min-h-[80px] max-h-[80px]">
              <div className="flex flex-row items-center gap-4">
                <span className="text-3xl">🧑‍💻</span>
                <div>
                  <h3 className="text-white lg:text-xl xl:text-2xl font-bold tracking-wider">
                    Portfolio
                  </h3>
                  <p className="text-white/50 font-medium text-xs md:text-sm">
                    Web development
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-2 pt-2">
                <p className="bg-green-500/20 text-green-400 font-medium text-xs rounded-3xl px-3 py-1 h-fit">
                  Live
                </p>
                <p className="text-xs py-1 font-medium text-white/30">2025</p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <img
                className="rounded-xl w-full h-60 object-cover"
                src={projectImg1}
                alt=""
              />
            </div>
            <p className="text-white/70 text-sm flex-1 pb-5">
              Developed a full-stack portfolio platform featuring dynamic
              project showcases, smooth animations, a responsive layout, and
              interactive UI elements. Built with a custom backend to manage and
              display projects, focusing on performance, visual design, and
              cross-device compatibility.
            </p>
            <div className="flex flex-row justify-between items-center pt-4 border-t border-white/10">
              <div className="flex flex-row flex-wrap max-w-1/2 md:max-w-1/2 gap-1 text-white">
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-2 lg:px-3 py-1 hover:bg-white/10">
                  React
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1  hover:bg-white/10">
                  Tailwind CSS
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  Vite
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  SQL
                </span>
              </div>
              <a
                href="https://github.com/230752/portfolio.git"
                target="_blank"
                className="flex flex-row gap-2 bg-white/7 text-white/70 px-2 py-2 rounded-xl border border-white/10 transition duration-300 hover:bg-white/20"
              >
                <span className="text-white text-xs lg:text-sm">My Repo</span>
                <FaGithub className="text-lg lg:text-xl text-white" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[480px] h-full px-6 py-6 bg-gradient-to-bl from-green-500/20 to-teal-500/15 border border-white/20 rounded-2xl transition duration-800 hover:-translate-y-2 hover:bg-gradient-to-bl hover:from-green-500/25 hover:to-teal-500/20"
          >
            <div className="flex flex-row justify-between items-start pb-5 min-h-[80px] max-h-[80px]">
              <div className="flex flex-row items-center gap-4">
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className="text-white lg:text-xl xl:text-2xl font-bold tracking-wider">
                    Team Website
                  </h3>
                  <p className="text-white/50 font-medium text-xs md:text-sm">
                    AI Full-Stack
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-2 pt-2">
                <p className="bg-yellow-500/20 text-yellow-400 font-medium text-xs rounded-3xl px-3 py-1 h-fit">
                  Experiment
                </p>
                <p className="text-xs py-1 font-medium text-white/30">2025</p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <img
                className="rounded-xl w-full h-60 object-cover"
                src={projectImg2}
                alt=""
              />
            </div>
            <p className="text-white/70 text-sm flex-1 pb-5">
              Developed a full-stack website for a gaming team using AI-powered
              tools, integrating front-end, back-end, CMS, and database systems.
              Implemented a dynamic UI, real-time data updates, content
              management capabilities, and backend infrastructure to support
              player stats, media content, and community engagement.
            </p>
            <div className="flex flex-row justify-between items-center pt-4 border-t border-white/10">
              <div className="flex flex-row flex-wrap max-w-1/2 md:max-w-1/2 gap-1 text-white">
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-2 lg:px-3 py-1 hover:bg-white/10">
                  React
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1  hover:bg-white/10">
                  Tailwind CSS
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  Vite
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  Supabase
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  SQL
                </span>
              </div>
              <a
                href="https://github.com/230752/ai-julia-project.git"
                target="_blank"
                className="flex flex-row gap-2 bg-white/7 text-white/70 px-2 py-2 rounded-xl border border-white/10 transition duration-300 hover:bg-white/20"
              >
                <span className="text-white text-sm">My Repo</span>
                <FaGithub className="text-xl text-white" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[480px] h-full px-6 py-6 bg-gradient-to-tr from-red-500/20 to-orange-500/20 border border-white/20 rounded-2xl transition duration-800 hover:-translate-y-2 hover:bg-gradient-to-tr hover:from-red-500/25 hover:to-orange-500/25"
          >
            <div className="flex flex-row justify-between items-start pb-5 min-h-[80px] max-h-[80px]">
              <div className="flex flex-row items-center gap-4">
                <span className="text-3xl">📽️</span>
                <div>
                  <h3 className="text-white lg:text-xl xl:text-2xl font-bold tracking-wider">
                    AnnexBios Maarssen
                  </h3>
                  <p className="text-white/50 font-medium text-xs md:text-sm">
                    Web development
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-2 pt-2">
                <p className="bg-yellow-500/20 text-yellow-400 font-medium text-xs rounded-3xl px-3 py-1 h-fit">
                  School
                </p>
                <p className="text-xs py-1 font-medium text-white/30">2024</p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <img
                className="rounded-xl w-full h-60 object-cover"
                src={projectImg3}
                alt=""
              />
            </div>
            <p className="text-white/70 text-sm flex-1 pb-5">
              For a fictional school assignment called AnnexBios Maarssen, I
              designed and built the entire front-end for the website. The
              project features a modern UI, responsive layout, movie listings,
              ticket booking flows, and interactive elements, all focused on
              user experience and accessibility.
            </p>
            <div className="flex flex-row justify-between items-center pt-4 border-t border-white/10">
              <div className="flex flex-row flex-wrap max-w-1/2 md:max-w-1/2 gap-1 text-white">
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-2 lg:px-3 py-1 hover:bg-white/10">
                  HTML
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1  hover:bg-white/10">
                  CSS
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  PHP
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  SQL
                </span>
              </div>
              <a
                href="https://github.com/230752/AnnexBios-Maarssen.git"
                target="_blank"
                className="flex flex-row gap-2 bg-white/7 text-white/70 px-2 py-2 rounded-xl border border-white/10 transition duration-300 hover:bg-white/20"
              >
                <span className="text-white text-sm">My Repo</span>
                <FaGithub className="text-xl text-white" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[480px] h-full px-6 py-6 bg-gradient-to-bl from-pink-500/20 to-fuchsia-500/20 border border-white/20 rounded-2xl transition duration-800 hover:-translate-y-2 hover:bg-gradient-to-bl hover:from-pink-500/25 hover:to-fuchsia-500/25"
          >
            <div className="flex flex-row justify-between items-start pb-5 min-h-[80px] max-h-[80px]">
              <div className="flex flex-row items-center gap-4">
                <span className="text-3xl">🛍️</span>
                <div>
                  <h3 className="text-white lg:text-xl xl:text-2xl font-bold tracking-wider">
                    Webshop
                  </h3>
                  <p className="text-white/50 font-medium text-xs md:text-sm">
                    Design
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-2 pt-2">
                <p className="bg-yellow-500/20 text-yellow-400 font-medium text-xs rounded-3xl px-3 py-1 h-fit">
                  School
                </p>
                <p className="text-xs py-1 font-medium text-white/30">2024</p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <img
                className="rounded-xl w-full h-60 object-cover"
                src={projectImg4}
                alt=""
              />
            </div>
            <p className="text-white/70 text-sm flex-1 pb-5">
              For this project, I cloned a key website for Steam games,
              recreating the front-end design and user experience. The site
              features product listings, shopping cart functionality, and a
              modern, responsive UI inspired by popular game key marketplaces.
            </p>
            <div className="flex flex-row justify-between items-center pt-4 border-t border-white/10">
              <div className="flex flex-row flex-wrap max-w-1/2 md:max-w-1/2 gap-1 text-white">
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-2 lg:px-3 py-1 hover:bg-white/10">
                  HTML
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1  hover:bg-white/10">
                  CSS
                </span>
                <span className="text-xs lg:text-sm bg-white/5 text-white/70 font-medium rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                  PHP
                </span>
              </div>
              <a
                href="https://github.com/GLU-CSD/eindopdrachten-webshop-overzicht-bestelformulier-230752.git"
                target="_blank"
                className="flex flex-row gap-2 bg-white/7 px-2 py-2 rounded-xl border border-white/10 transition duration-300 hover:bg-white/20"
              >
                <span className="text-white text-sm">My Repo</span>
                <FaGithub className="text-xl text-white" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          target="blank"
          href="https://github.com/230752?tab=repositories"
          className="flex flex-row justify-center items-center gap-2 text-lg font-semibold px-14 py-4 rounded-xl bg-white duration-500 hover:scale-105"
        >
          <LuGithub />
          View All Projects
        </motion.a>
      </div>
    </section>
  );
}

export default ProjectSection;
