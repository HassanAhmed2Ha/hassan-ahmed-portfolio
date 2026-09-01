import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import { contentEn } from "../../src/data";
import { 
  RiBrainLine, 
  RiServerLine, 
  RiCloudLine,
  RiFlaskLine, 
  RiCodeSSlashLine
} from "react-icons/ri";

const getDomainIcon = (iconType: string) => {
  switch (iconType) {
    case 'brain':
      return <RiBrainLine className="text-xl text-accent" />;
    case 'server':
      return <RiServerLine className="text-xl text-accent" />;
    case 'cloud':
      return <RiCloudLine className="text-xl text-accent" />;
    case 'flask':
    default:
      return <RiFlaskLine className="text-xl text-accent" />;
  }
};

const About: React.FC = () => {
  const { about } = contentEn;
  const domains = about.competencyDomains;

  return (
    <section id="about" className="min-h-screen py-24 relative z-20 w-full">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center gap-y-12 relative z-10 px-4 xl:px-0">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-center items-center text-center max-w-4xl">
          <motion.h2 
            variants={fadeIn("down", 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            className="h2 mb-4"
          >
            Scientific Identity & <span className="font-serif italic font-normal text-accent">Core Competencies</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeIn("down", 0.3)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            className="text-lg md:text-xl text-white/90 font-sans font-medium leading-relaxed mb-4 max-w-3xl"
          >
            {about.tagline}
          </motion.p>
          
          {about.description && about.description.map((para, pIdx) => (
            <motion.p 
              key={pIdx}
              variants={fadeIn("down", 0.4)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.15 }}
              className="text-sm md:text-base text-white/70 font-sans font-normal leading-relaxed max-w-2xl"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* 4 Core Competency & Systems Pillars (Cardless Open Architecture) */}
        <div className="w-full max-w-5xl mx-auto border-t border-white/10">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              variants={fadeIn("up", 0.15 * idx)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="py-10 md:py-12 border-b border-white/10 relative group transition-colors duration-300"
            >
              {/* Ambient Hover Backlight Glow */}
              <div className="pointer-events-none absolute -top-8 left-1/3 w-96 h-64 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Pillar Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8">
                
                {/* Integrated Icon + Monogram Index + Title */}
                <div className="flex items-start md:items-center gap-4 md:gap-5 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shadow-sm">
                    {getDomainIcon(domain.iconType)}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-x-2.5 flex-wrap">
                      <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-accent">
                        {domain.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-serif italic font-normal tracking-tight text-white group-hover:text-amber-200 group-hover:drop-shadow-[0_0_14px_rgba(251,191,36,0.35)] transition-all duration-300">
                        {domain.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs md:text-sm font-mono text-white/50">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>

              </div>

              {/* Competencies Grid Stream */}
              <div className="pl-0 md:pl-16 space-y-6">
                
                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {domain.competencies.map((comp, cIdx) => (
                    <motion.div
                      key={cIdx}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.04] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all flex items-center gap-x-3 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                      <span className="text-xs md:text-sm font-sans text-white/90 leading-snug">
                        {comp}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Framework & Tool Arsenal */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 pt-2 text-xs font-mono text-white/40">
                  <span className="text-white/30 uppercase tracking-widest font-semibold flex items-center gap-x-1.5">
                    <RiCodeSSlashLine className="text-accent text-sm" />
                    <span>Primary Stack:</span>
                  </span>
                  {domain.tools.map((tool, tIdx) => (
                    <span key={tool} className="flex items-center gap-x-2.5">
                      <span className="text-white/80 hover:text-accent transition-colors font-medium">
                        {tool}
                      </span>
                      {tIdx < domain.tools.length - 1 && <span className="text-white/20">•</span>}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;