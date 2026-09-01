import React from "react";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { contentEn } from "../src/data";

const PublicationGrid: React.FC = () => {
  const { publications } = contentEn;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-6 relative">
      {/* Ambient background soft glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      {/* Monumental Philosophical Statement */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-serif italic text-white leading-[1.35] tracking-tight font-normal max-w-4xl relative z-10"
      >
        &ldquo;{publications.quote}&rdquo;
      </motion.blockquote>

      {/* Explanatory Synthesis Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm md:text-base text-white/70 font-sans leading-relaxed max-w-2xl mt-8 font-normal relative z-10"
      >
        {publications.subtext}
      </motion.p>

      {/* Early Access Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 relative z-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href={publications.ctaLink}
          className="inline-flex items-center gap-x-2 px-6 py-3 rounded-full bg-accent hover:bg-amber-400 text-primary text-xs font-mono font-bold shadow-[0_0_25px_rgba(251,191,36,0.3)] hover:scale-105 transition-all duration-200"
        >
          <RiMailSendLine className="text-base" />
          <span>{publications.ctaText}</span>
        </a>
      </motion.div>
    </div>
  );
};

export default PublicationGrid;
