import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Tilt3D from "../Tilt3D";
import Circles from "../Circles";
import { RiAwardLine, RiExternalLinkLine } from "react-icons/ri";
import { contentEn as content } from "../../src/data";
const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="min-h-screen py-24 relative z-20 w-full pb-32">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        {/* Title */}
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.15 }}
          exit="hidden"
          className="h2 text-center mb-16"
        >
          {content.certifications.title}
        </motion.h2>
        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {content.certifications.items.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", 0.1 * (idx % 4))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="h-full"
            >
              <Tilt3D className="h-full">
                <div className="liquid-glass p-6 rounded-2xl border border-white/10 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(241,48,36,0.15)] transition-all duration-300 flex flex-col justify-between h-full group text-left  relative overflow-hidden">
                  {/* Glow orb in card */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    {/* Badge Icon */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                      <RiAwardLine className="text-xl" />
                    </div>
                    {/* Title */}
                    <h4 className="font-bold text-white text-base mb-2 group-hover:text-accent transition duration-300 line-clamp-2">
                      {cert.title}
                    </h4>
                    {/* Issuer */}
                    <p className="text-sm text-white/60 mb-1">
                      {cert.issuer}
                    </p>
                  </div>
                  {/* Date and Verify Link */}
                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="text-xs text-white/40 font-mono">
                      {cert.date}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-semibold text-accent hover:text-white flex items-center gap-x-1 transition duration-300 group/link"
                    >
                      <span>{content.certifications.verifyLabel}</span>
                      <RiExternalLinkLine className="text-xs transform group-hover/link:translate-x-0.5  transition duration-300" />
                    </a>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
