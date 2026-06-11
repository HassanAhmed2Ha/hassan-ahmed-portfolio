import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";
import Tilt3D from "../Tilt3D";
import Circles from "../Circles";
import { contentEn as content } from "../../src/data";
const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full overflow-hidden min-h-screen py-24 pb-32 z-20">
      <Circles />
      
      {/* Seamless Continuous DNA Backbone (Enhanced Bioluminescence) */}
      {/* Increased wrapper opacity from 40 to 65 for a stronger glow presence */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-[0.65] mix-blend-screen overflow-hidden w-[800px] max-w-full">

        {/* Layer 1.1: Linear Gradient Masking for smooth fade top/bottom */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-transparent to-primary/80 opacity-70"></div>
        
        {/* Unified Motion Wrapper */}
        <motion.div 
          className="relative w-full h-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* DNA Image with powerful lighting filters applied */}
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
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.15 }}
          exit="hidden"
          className="h2 text-center mb-16"
        >
          {content.experience.title}
        </motion.h2>
        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent before:left-4 md:before:left-1/2 md:before:-translate-x-1/2    ">
          {content.experience.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                variants={fadeIn(isEven ? "right" : "left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-between w-full group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2     -translate-x-1/2  flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-primary group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                </div>
                {/* Content Block */}
                <div
                  className={`w-full md:w-[45%] flex flex-col relative pl-12 md:pl-0    ${
                    isEven
                      ? "md:mr-auto md:ml-0 md:items-end text-left md:text-right    "
                      : "md:ml-auto md:mr-0 md:items-start text-left md:text-left    "
                  }`}
                >
                  <Tilt3D className="w-full">
                    <div className="liquid-glass p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 shadow-2xl text-left  relative overflow-hidden">
                      {/* corner background glow blobs */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 blur-2xl rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/5 blur-2xl rounded-full" />
                      {/* Header info */}
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-y-2 mb-4 border-b border-white/10 pb-3">
                        <div>
                          <h3 className="font-bold text-lg text-white group-hover:text-accent transition duration-300">
                            {item.role}
                          </h3>
                          <p className="text-sm text-accent font-medium mt-1">
                            {item.company}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full self-start sm:self-center">
                          {item.period}
                        </span>
                      </div>
                      {/* Details list */}
                      <ul className="space-y-2 text-sm text-white/60 list-none pl-0">
                        {item.description.map((point, i) => (
                          <li key={i} className="relative pl-5  ">
                            {/* custom bullet dot */}
                            <span className="absolute left-0   top-2 w-1.5 h-1.5 bg-accent rounded-full opacity-70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tilt3D>
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
