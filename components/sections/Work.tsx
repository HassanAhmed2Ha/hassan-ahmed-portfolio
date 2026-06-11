import React from "react";
import { motion } from "framer-motion";
import Bulb from "../Bulb";
import Circles from "../Circles";
import WorkGrid from "../WorkGrid";
import { fadeIn } from "../../variants";
import { contentEn as content } from "../../src/data";
const Work: React.FC = () => {
  return (
    <section id="work" className="min-h-screen py-24 relative z-20 w-full pb-32 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        <div className="flex flex-col gap-y-12 items-center">
          {/* Text Top Column */}
          <div className="text-center flex w-full flex-col mb-8">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="h2"
            >
              {content.projects.title} <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="max-w-[800px] mx-auto text-white/60 text-sm md:text-base leading-relaxed text-center"
            >
              {content.projects.description}
            </motion.p>
          </div>
          {/* Grid Bottom Column */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="w-full"
          >
            <WorkGrid />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </section>
  );
};
export default Work;
