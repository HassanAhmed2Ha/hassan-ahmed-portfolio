import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import CountUp from "react-countup";
import { contentEn as content } from "../../src/data";

const About: React.FC = () => {

  return (
    <section id="about" className="min-h-screen py-24 relative z-20 w-full text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12 relative z-10 px-4 xl:px-0">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" className="h2 mb-8">
            {content.about.title} <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)} initial="hidden" whileInView="show" className="max-w-[600px] mx-auto xl:mx-0 text-white/90 text-lg xl:text-xl font-medium mb-12">
            {content.about.tagline}
          </motion.p>

          {/* Counters (Keeping your existing counters) */}
          <motion.div variants={fadeIn("right", 0.6)} initial="hidden" whileInView="show" className="hidden md:flex gap-x-8 mb-12">
            {/* ... (الكاونترز بتاعتك) ... */}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" whileInView="show" className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.about.skillGroups.map((group, idx) => (
              <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-all">
                <h3 className="text-accent font-bold mb-3 uppercase tracking-wider text-sm">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span key={i} className="text-xs bg-primary px-3 py-1 rounded-full border border-white/10 text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;