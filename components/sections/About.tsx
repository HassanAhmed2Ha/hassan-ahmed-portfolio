import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import CountUp from "react-countup";
import { contentEn as content } from "../../src/data";

const About: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -1000, y: -1000 });
  };

  return (
    <section id="about" className="min-h-screen py-24 relative z-20 w-full text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center gap-y-8 relative z-10 px-4 xl:px-0">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center">
          <motion.h2 variants={fadeIn("down", 0.2)} initial="hidden" whileInView="show" className="h2 mb-4 text-center">
            {content.about.title} <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeIn("down", 0.4)} initial="hidden" whileInView="show" className="max-w-3xl mx-auto text-center text-white/90 text-xl xl:text-2xl font-medium leading-relaxed">
            {content.about.tagline}
          </motion.p>
        </div>

        {/* Skills Bento Grid */}
        <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" className="w-full max-w-6xl mx-auto">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group/grid rounded-2xl"
          >
            {/* Mouse-Tracking Spotlight */}
            <div 
              className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300 opacity-0 group-hover/grid:opacity-100 rounded-2xl"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.15), transparent 40%)`
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {content.about.skillGroups.map((group, idx) => (
                <div 
                  key={idx} 
                  className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col justify-start group/card overflow-hidden"
                >
                  <h3 className="text-accent font-bold mb-4 uppercase tracking-wider text-sm">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/10 hover:-translate-y-0.5 transition-all duration-300 text-white/80 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;