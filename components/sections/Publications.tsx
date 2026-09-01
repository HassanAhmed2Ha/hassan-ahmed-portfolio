import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../Bulb";
import Circles from "../Circles";
import PublicationGrid from "../PublicationGrid";
import { contentEn as content } from "../../src/data";

const Publications: React.FC = () => {
  const { publications } = content;

  return (
    <section id="publications" className="min-h-screen py-24 relative z-20 w-full pb-32 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        <div className="flex flex-col gap-y-12 items-center">
          {/* Text Top Column */}
          <div className="text-center flex w-full flex-col items-center mb-8">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="h2"
            >
              Peer-Reviewed Science & <span className="font-serif italic font-normal text-accent">Preprint Archive</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              exit="hidden"
              className="max-w-[750px] mx-auto text-white/70 text-sm md:text-base leading-relaxed text-center font-sans font-normal"
            >
              {publications.sectionSubtitle}
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
            <PublicationGrid />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </section>
  );
};
export default Publications;
