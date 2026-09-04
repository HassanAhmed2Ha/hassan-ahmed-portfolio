import React, { useEffect, useState } from "react";

const ScrollProgress: React.FC = () => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const doc = document.documentElement;
          const total = doc.scrollHeight - window.innerHeight;
          if (total > 0) {
            setScale(Math.min(1, Math.max(0, window.scrollY / total)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none origin-left">
      {/* Background Track Line (Ultra Subtle) */}
      <div className="absolute inset-0 bg-white/[0.04]" />
      
      {/* Glowing Kinetic Scroll Progress Line */}
      <div
        style={{
          transform: `scaleX(${scale})`,
          transformOrigin: "left",
          willChange: "transform",
        }}
        className="w-full h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 origin-left shadow-[0_0_12px_rgba(251,191,36,0.65)] transition-transform duration-75 ease-out"
      />
    </div>
  );
};

export default ScrollProgress;
