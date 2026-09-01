import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import About from "../components/sections/About";
import TechMarquee from "../components/sections/TechMarquee";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Work from "../components/sections/Work";
import Publications from "../components/sections/Publications";
import OpenScience from "../components/sections/OpenScience";
import Contact from "../components/sections/Contact";
import { contentEn as content } from "../src/data";
const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);
  useEffect(() => {
    if (index >= words.length) return;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);
  return (
    <span className="text-accent inline-block font-serif italic font-normal" dir="auto">
      {words[index].substring(0, subIndex)}
      <span
        className={`inline-block w-[3px] h-[0.9em] mx-1 bg-accent align-middle transition-opacity ${blink ? "opacity-100" : "opacity-0"
          }`}
      />
    </span>
  );
};
const Home: React.FC = () => {
  return (
    <main className="w-full flex flex-col">
      <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden w-full bg-primary pt-24 pb-16 xl:py-0">
        {/* Layer 1: Background Explosion — fire-gold, Hero-only, no global bleed */}
        <div className="absolute inset-0 z-0 bg-explosion bg-cover bg-center bg-no-repeat mix-blend-screen opacity-60 saturate-150 brightness-110 translate-z-0" />
        
        {/* Layer 1.5: Massive Floating DNA Hologram (Organic Movement) */}
        <motion.div
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 10, -10, 0],
            rotate: [0, 2, -2, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="hidden md:block absolute inset-0 z-0 pointer-events-none mix-blend-color-dodge opacity-60 transition-all duration-300 animate-pulse-gold-fast"
          style={{
            maskImage: 'radial-gradient(ellipse at 30% 50%, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 40%, transparent 75%)'
          }}
        >
          <Image
            src="/nano-dna.png"
            alt="DNA Hologram"
            fill
            className="object-cover object-[30%_50%] scale-110 grayscale invert-[0.10] sepia brightness-110 saturate-200"
            priority
          />
        </motion.div>
        
        {/* Layer 2: Particles Container */}
        <div className="hidden md:block absolute inset-0 z-1 pointer-events-none">
          <ParticlesContainer />
        </div>

        {/* Layer 3: Avatar Container */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden xl:block absolute bottom-0 right-[5%] xl:right-[8%] w-[450px] h-[600px] z-30 pointer-events-none"
        >
          <Avatar width={737} height={678} applyMask={true} />
        </motion.div>

        {/* Layer 4: Text Container (Foreground) */}
        <div className="relative z-20 w-full xl:max-w-3xl flex flex-col justify-center text-center xl:text-left container px-4 xl:px-0 xl:pl-12">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="h1 mb-4 xl:mb-5 text-3xl sm:text-4xl md:text-5xl xl:text-[50px] xl:leading-[1.18] tracking-tight text-white font-heading"
          >
            {content.hero.titleLine1} <br />
            <span className="font-serif italic font-normal text-accent drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]">
              <Typewriter words={content.hero.role} />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="max-w-sm sm:max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-6 xl:mb-8 text-base sm:text-lg xl:text-xl text-white/95 font-sans font-medium leading-relaxed"
          >
            {content.hero.description}
          </motion.p>

          {/* Projects Button */}
          <div className="flex justify-center xl:hidden relative z-20 mt-2">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="hidden xl:flex z-20 relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>

        {/* ── Seamless Bottom Atmospheric Gradient Bleed to About ── */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-primary/60 to-primary pointer-events-none z-10" />

        {/* ── Kinetic Continuity Nexus Beacon ── */}
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-accent/70 uppercase">Discover</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1.5px] h-6 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"
          />
        </motion.div>
      </section>
      <About />
      <TechMarquee data={content.techStackMarquee} />
      <Experience />
      <Certifications />
      <Work />
      <OpenScience />
      <Publications />
      <Contact />
    </main>
  );
};
export default Home;
