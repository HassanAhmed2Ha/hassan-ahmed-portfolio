import React from "react";
import { motion } from "framer-motion";
import Bulb from "../Bulb";
import Circles from "../Circles";
import ProjectShowcase from "../ProjectShowcase";
import { fadeIn } from "../../variants";
import { contentEn as content } from "../../src/data";
const Work: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-20 relative z-20 w-full">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        <div className="flex flex-col gap-y-8 items-center">
          {/* Text Top Column */}
          <div className="text-center flex w-full flex-col items-center mb-6">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="h2"
            >
              Featured Research & <span className="font-serif italic font-normal text-accent">Applied Engineering</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="max-w-[750px] mx-auto text-white/70 text-sm md:text-base leading-relaxed text-center font-sans font-normal"
            >
              {content.projects.description}
            </motion.p>
          </div>
          {/* Dynamic Showcase Track Column */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="w-full"
          >
            <ProjectShowcase 
              projects={content.projects.items} 
              labels={content.projects.labels} 
            />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </section>
  );
};
export default Work;
