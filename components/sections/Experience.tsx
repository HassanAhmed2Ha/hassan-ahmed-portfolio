import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import { contentEn as content } from "../../src/data";
import { RiBriefcaseLine, RiBuilding4Line, RiCalendarLine, RiMapPinLine } from "react-icons/ri";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full overflow-hidden py-16 md:py-20 z-20">
      <Circles />
      
      {/* Seamless Continuous DNA Backbone */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-[0.45] mix-blend-screen overflow-hidden w-[800px] max-w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-transparent to-primary opacity-80" />
        <motion.div 
          className="relative w-full h-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image 
            src="/tall_dna.png"
            alt="Full Genomic Spine" 
            fill 
            className="object-cover object-top saturate-200 contrast-125 brightness-110 hue-rotate-[-5deg]" 
            priority 
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        {/* Title */}
        <div className="text-center flex w-full flex-col items-center mb-10">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="h2 text-center"
          >
            Trajectory & <span className="font-serif italic font-normal text-accent">Career Milestones</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed text-center font-sans font-normal"
          >
            Applied research roles, software engineering initiatives, and computational leadership milestones.
          </motion.p>
        </div>

        {/* Editorial Career Horizon Stream (Cardless & Always Open) */}
        <div className="max-w-5xl mx-auto border-t border-white/10">
          {content.experience.items.map((item, idx) => {
            const expNum = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={idx}
                variants={fadeIn("up", 0.15 * idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="py-8 md:py-10 border-b border-white/10 relative group transition-colors duration-300"
              >
                {/* Ambient Backlight on Hover */}
                <div className="pointer-events-none absolute -top-8 left-1/4 w-96 h-64 bg-accent/5 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Horizon Header: Number + Role + Org + Period */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 mb-6">
                  
                  {/* Left: Monogram Index & Role Title */}
                  <div className="flex items-baseline gap-4 md:gap-6 flex-1">
                    <span className="font-mono text-base md:text-lg font-bold tracking-widest text-accent shrink-0">
                      {expNum}
                    </span>
                    
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-[34px] font-serif italic font-normal tracking-tight text-white group-hover:text-amber-200 group-hover:drop-shadow-[0_0_14px_rgba(251,191,36,0.35)] transition-all duration-300">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center gap-x-3 flex-wrap text-xs md:text-sm font-mono text-white/60">
                        <span className="text-white/90 font-medium flex items-center gap-x-1.5">
                          <RiBuilding4Line className="text-accent text-sm" />
                          <span>{item.company}</span>
                        </span>
                        {item.location && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="flex items-center gap-x-1">
                              <RiMapPinLine className="text-white/40" />
                              <span>{item.location}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Period Pill Badge */}
                  <div className="shrink-0 self-start md:self-baseline">
                    <span className="inline-flex items-center gap-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80 group-hover:border-accent/30 transition-colors">
                      <RiCalendarLine className="text-accent" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                {/* Always-Open Milestone Breakthroughs */}
                <div className="pl-0 md:pl-12 space-y-3 pt-2">
                  <ul className="space-y-2.5">
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-x-3.5 text-sm md:text-base text-white/75 font-sans leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-accent shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
