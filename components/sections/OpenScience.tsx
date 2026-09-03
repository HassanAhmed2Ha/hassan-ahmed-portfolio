import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import OpenScienceShowcase from "../OpenScienceShowcase";
import { contentEn } from "../../src/data";

const OpenScience: React.FC = () => {
  const { openScience } = contentEn;

  return (
    <section id="open-science" className="py-16 md:py-20 relative z-20 w-full">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        <div className="flex flex-col gap-y-8 items-center">
          {/* Section Header */}
          <div className="text-center flex w-full flex-col items-center mb-6">
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show" 
              viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
              exit="hidden"
              className="h2"
            >
              Open Science & <span className="font-serif italic font-normal text-accent">Data-Centric Infrastructure</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show" 
              viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
              exit="hidden"
              className="max-w-[750px] mx-auto text-white/70 text-sm md:text-base leading-relaxed text-center font-sans font-normal"
            >
              {openScience.sectionSubtitle}
            </motion.p>
          </div>

          {/* Interactive Open Science Showcase */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
            exit="hidden"
            className="w-full"
          >
            <OpenScienceShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenScience;
