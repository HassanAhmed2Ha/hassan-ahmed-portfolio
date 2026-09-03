import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../Circles";
import { RiAwardLine, RiArrowRightUpLine, RiShieldCheckLine } from "react-icons/ri";
import { contentEn as content } from "../../src/data";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 relative z-20 w-full">
      <Circles />
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        
        {/* Title */}
        <div className="text-center flex w-full flex-col items-center mb-10">
          <motion.h2
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
            exit="hidden"
            className="h2 text-center"
          >
            Validated Competence & <span className="font-serif italic font-normal text-accent">Certifications</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
            exit="hidden"
            className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed text-center font-sans font-normal"
          >
            Formally accredited specializations in Deep Learning, Bioinformatics, Cheminformatics, and Data Engineering.
          </motion.p>
        </div>

        {/* Open Verified Credential Registry */}
        <div className="max-w-5xl mx-auto border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {content.certifications.items.map((cert, idx) => {
              const certNum = String(idx + 1).padStart(2, "0");
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.03 * (idx % 4))}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0, margin: "120px 0px 0px 0px" }}
                  className="py-6 md:py-8 border-b border-white/10 flex items-start justify-between gap-4 group relative"
                >
                  {/* Left: Index + Title + Issuer */}
                  <div className="flex items-start gap-4 flex-1">
                    <span className="font-mono text-xs font-bold tracking-widest text-accent/80 pt-1 shrink-0">
                      {certNum}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-serif italic font-normal text-lg md:text-xl text-white group-hover:text-amber-200 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center gap-x-2.5 flex-wrap text-xs font-mono text-white/50">
                        <span className="text-white/80 font-medium">{cert.issuer}</span>
                        <span className="text-white/20">•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Verification Action Link */}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="shrink-0 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 text-white/60 group-hover:text-accent transition-all duration-200"
                      title={`Verify ${cert.title} credential from ${cert.issuer}`}
                      aria-label={`Verify ${cert.title} credential from ${cert.issuer}`}
                    >
                      <RiArrowRightUpLine className="text-base" aria-hidden="true" />
                      <span className="sr-only">Verify {cert.title}</span>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
