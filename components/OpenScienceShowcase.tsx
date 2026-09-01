import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiFileCopyLine, 
  RiCheckLine, 
  RiFlashlightLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiAddLine,
  RiSubtractLine,
  RiShieldCheckLine,
  RiSparklingLine,
  RiDatabase2Line
} from "react-icons/ri";
import { contentEn } from "../src/data";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 1000, 
  className = "" 
}) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const cleanStr = value.replace(/,/g, '');
    const match = cleanStr.match(/([-+]?[0-9]*\.?[0-9]+)/);
    
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[0]);
    const prefix = cleanStr.slice(0, match.index);
    const suffix = cleanStr.slice((match.index || 0) + match[0].length);
    const decimalPlaces = match[0].includes('.') ? match[0].split('.')[1].length : 0;
    const hasCommas = value.includes(',');

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = targetNum * ease;

      const formattedNum = hasCommas 
        ? Math.round(current).toLocaleString() 
        : current.toFixed(decimalPlaces);

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
};

const OpenScienceShowcase: React.FC = () => {
  const { openScience } = contentEn;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCitation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(openScience.bibtexCitation);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto border-t border-white/10">
      <motion.div
        layout="position"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="py-8 md:py-12 border-b border-white/10 relative group transition-colors duration-300"
      >
        {/* Ambient Hover Backlight Glow */}
        <AnimatePresence>
          {(isHovered || isExpanded) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute -top-10 left-1/4 w-[500px] h-[350px] rounded-full blur-[110px] pointer-events-none -z-10 bg-amber-500/10"
            />
          )}
        </AnimatePresence>

        {/* Animated Hover Laser Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered || isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 origin-left pointer-events-none"
        />

        {/* Main Horizon Row Header */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-start justify-between gap-6 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
        >
          {/* Left Column: Number + Title + Subtitle */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 flex-1">
            
            {/* Number with floating motion */}
            <motion.span 
              animate={{ 
                color: isExpanded ? "#fbbf24" : isHovered ? "#fbbf24" : "#ffffff60",
                x: isHovered ? 4 : 0
              }}
              transition={{ duration: 0.2 }}
              className="font-mono text-base md:text-lg font-bold tracking-widest shrink-0"
            >
              {openScience.itemNumber}
            </motion.span>

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-x-3 flex-wrap">
                <motion.h3 
                  animate={{
                    x: isHovered ? 6 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl lg:text-[44px] font-serif italic font-normal tracking-tight transition-all duration-300 ${
                    isExpanded 
                      ? "text-accent drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]" 
                      : "text-white group-hover:text-amber-200"
                  }`}
                >
                  {openScience.title}
                </motion.h3>
              </div>

              {/* Domain Subtitle & Status */}
              <div className="flex items-center gap-x-3 flex-wrap text-xs md:text-sm font-mono text-white/50">
                <span className="text-white/80 font-medium">{openScience.subtitle}</span>
                <span className="text-white/20">•</span>
                <span className="text-amber-400 font-semibold">{openScience.repoId}</span>
                <span className="text-white/20">•</span>
                <span className="inline-flex items-center gap-x-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{openScience.status}</span>
                </span>
              </div>

              {/* Hover Floating Peek Capsule (Desktop) */}
              <AnimatePresence>
                {isHovered && !isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="hidden md:inline-flex items-center gap-x-2.5 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-xl mt-2 text-xs font-mono shadow-lg"
                  >
                    <RiSparklingLine className="text-sm text-accent" />
                    <span className="text-white/90">{openScience.peekCapsule}</span>
                    <span className="text-white/40 font-sans text-[11px] flex items-center gap-x-1">
                      Click to expand <RiArrowRightLine />
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Interactive Circular Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`w-11 h-11 md:w-12 md:h-12 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
              isExpanded 
                ? "border-accent bg-accent/10 text-accent shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
                : "border-white/20 text-white/70 group-hover:border-accent group-hover:text-accent"
            }`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="flex items-center justify-center"
            >
              <RiAddLine className="text-xl md:text-2xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Expandable Content Area (Exact Project Showcase Physics) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.45, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="overflow-hidden"
            >
              <motion.div 
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.05
                    }
                  }
                }}
                className="pt-8 md:pt-10 pl-0 md:pl-14 space-y-8"
              >
                {/* 1. Concise Description Narrative */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl font-normal"
                >
                  {openScience.description}
                </motion.p>

                {/* 2. Bold Architectural Stat Telemetry (Cardless & Open) */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="py-5 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
                >
                  {openScience.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col space-y-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                        {metric.label}
                      </span>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight text-accent drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                        <AnimatedCounter value={metric.value} />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* 3. Core Architecture Breakthroughs */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="space-y-4 pt-1"
                >
                  <p className="text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-x-2 text-accent">
                    <RiFlashlightLine className="text-base" />
                    <span>Core Dataset Architecture & Curation Breakthroughs</span>
                  </p>
                  
                  <div className="space-y-3 max-w-4xl">
                    {openScience.highlights.map((highlight, hIdx) => (
                      <motion.div 
                        key={hIdx}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-x-3.5 text-white/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                        <span className="text-sm md:text-base leading-relaxed font-normal">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* 4. Tech Stack Stream */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-xs font-mono text-white/50"
                >
                  <span className="text-white/35 uppercase tracking-wider font-semibold">Stack:</span>
                  {openScience.tags.map((tag, tIdx) => (
                    <span key={tag} className="flex items-center gap-x-3">
                      <span className="text-white/85 hover:text-accent transition-colors font-medium">
                        {tag}
                      </span>
                      {tIdx < openScience.tags.length - 1 && <span className="text-white/20">/</span>}
                    </span>
                  ))}
                </motion.div>

                {/* 5. Kinetic Direct Action Links */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="flex flex-wrap items-center gap-6 pt-4"
                >
                  {/* Hugging Face Link */}
                  <motion.a
                    href={openScience.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-flex items-center gap-x-2 px-6 py-3 rounded-xl bg-accent text-primary font-bold text-sm shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition-all font-sans"
                  >
                    <RiDatabase2Line className="text-lg" />
                    <span>Explore on Hugging Face</span>
                    <RiArrowRightUpLine className="text-lg" />
                  </motion.a>

                  {/* Copy BibTeX Citation */}
                  <motion.button
                    onClick={handleCopyCitation}
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`inline-flex items-center gap-x-2 px-5 py-3 rounded-xl text-sm font-sans font-medium border backdrop-blur-md transition-all ${
                      isCopied
                        ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                        : "bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border-white/15 hover:border-white/30"
                    }`}
                  >
                    {isCopied ? <RiCheckLine className="text-lg text-emerald-400" /> : <RiFileCopyLine className="text-lg" />}
                    <span>{isCopied ? "Citation Copied" : "Copy BibTeX Citation"}</span>
                  </motion.button>

                  {/* Curator ORCID Pill */}
                  <motion.a
                    href={openScience.orcidUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-flex items-center gap-x-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-sans font-medium border border-white/15 hover:border-white/30 backdrop-blur-md transition-all"
                  >
                    <RiShieldCheckLine className="text-accent text-lg" />
                    <span>ORCID Profile</span>
                    <RiArrowRightUpLine className="text-sm opacity-60" />
                  </motion.a>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OpenScienceShowcase;
