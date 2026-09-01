import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none origin-left">
      {/* Background Track Line (Ultra Subtle) */}
      <div className="absolute inset-0 bg-white/[0.04]" />
      
      {/* Glowing Kinetic Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 origin-left shadow-[0_0_12px_rgba(251,191,36,0.65)]"
      />
    </div>
  );
};

export default ScrollProgress;
