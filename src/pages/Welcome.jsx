import React from "react";
import HeroSection from "../sections/HeroSection";
import ProjectSection from "../sections/ProjectSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

function Welcome() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default Welcome;
