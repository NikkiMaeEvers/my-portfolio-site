"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Resume from "@/components/Resume";


export default function Home() {
  return (
    <div>
      
      <section id="hero" className="relative overflow-hidden h-screen">
        {/* Particles are only in the hero section */}
        <ParticlesBackground />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-base-200">
        <div className="relative z-10">
          <About/>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-base-100">
        <Resume />
      </section>

      {/* Education Section */}
      <section id="Education" className="py-20 bg-base-200">
        <Education />
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 bg-base-200">
        {/* <Projects /> */}
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-20 bg-base-200">
        {/* <Contact /> */}
      </section>

      
      
    </div>
  );
}


