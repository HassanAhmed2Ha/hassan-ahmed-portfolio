import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiArrowRightUpLine, 
  RiGithubLine, 
  RiAddLine,
  RiSubtractLine,
  RiFlashlightLine,
  RiSparklingLine,
  RiArrowRightLine
} from "react-icons/ri";
import { Project } from "../src/types";

interface ProjectShowcaseProps {
  projects: Project[];
  labels: {
    code: string;
    demo: string;
  };
}

// ── Animated Number Counter with Easing ──
const AnimatedCounter: React.FC<{ value: string; className?: string }> = ({ value, className = "" }) => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    // Regex matches optional prefix (e.g. "<", "-", "+"), the number, and the suffix (e.g. "ms", "%", " kcal/mol", " Å")
    const match = value.match(/^([^0-9.-]*)([-+]?[0-9,]*\.?[0-9]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2].replace(/,/g, "");
    const targetNum = parseFloat(rawNumberStr);
    const suffix = match[3] || "";
    const hasDecimal = match[2].includes(".");
    const decimalPlaces = hasDecimal ? match[2].split(".")[1].length : 0;
    const hasCommas = match[2].includes(",");

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    const duration = 1200; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Quartic Out Easing
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

    const animId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animId);
  }, [value]);

  return <span className={className}>{displayValue}</span>;
};

const colorPalettes: Record<string, {
  accent: string;
  accentBg: string;
  accentHex: string;
  glow: string;
  textGlow: string;
  borderGlow: string;
  icon: string;
  peekDescription: string;
  btnBg: string;
  btnHoverBg: string;
  btnText: string;
  btnShadow: string;
}> = {
  emerald: {
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400",
    accentHex: "#34d399",
    glow: "rgba(52, 211, 153, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]",
    borderGlow: "from-emerald-500/60 via-emerald-400/20 to-transparent",
    icon: "🧬",
    peekDescription: "AttentiveFP Molecular GNN & In Silico Pollinator Toxicity Screening",
    btnBg: "bg-emerald-400",
    btnHoverBg: "hover:bg-emerald-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]",
  },
  cyan: {
    accent: "text-cyan-400",
    accentBg: "bg-cyan-400",
    accentHex: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]",
    borderGlow: "from-cyan-500/60 via-cyan-400/20 to-transparent",
    icon: "🛰️",
    peekDescription: "Sentinel-1/2 SAR Flood Detection & 3D Tactical HUD",
    btnBg: "bg-cyan-400",
    btnHoverBg: "hover:bg-cyan-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]",
  },
  violet: {
    accent: "text-purple-400",
    accentBg: "bg-purple-400",
    accentHex: "#c084fc",
    glow: "rgba(192, 132, 252, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]",
    borderGlow: "from-purple-500/60 via-purple-400/20 to-transparent",
    icon: "🎙️",
    peekDescription: "Air-Gapped Whisper & SVM Biometric Voice AI for ESP32 Edge IoT",
    btnBg: "bg-purple-400",
    btnHoverBg: "hover:bg-purple-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(192,132,252,0.35)] hover:shadow-[0_0_30px_rgba(192,132,252,0.6)]",
  },
  purple: {
    accent: "text-purple-400",
    accentBg: "bg-purple-400",
    accentHex: "#c084fc",
    glow: "rgba(192, 132, 252, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]",
    borderGlow: "from-purple-500/60 via-purple-400/20 to-transparent",
    icon: "🎙️",
    peekDescription: "Air-Gapped Whisper & SVM Biometric Voice AI for ESP32 Edge IoT",
    btnBg: "bg-purple-400",
    btnHoverBg: "hover:bg-purple-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(192,132,252,0.35)] hover:shadow-[0_0_30px_rgba(192,132,252,0.6)]",
  },
  amber: {
    accent: "text-amber-400",
    accentBg: "bg-amber-400",
    accentHex: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]",
    borderGlow: "from-amber-500/60 via-amber-400/20 to-transparent",
    icon: "🧠",
    peekDescription: "Clinical Breast Tumor Classification & SHAP Explainability",
    btnBg: "bg-amber-400",
    btnHoverBg: "hover:bg-amber-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]",
  },
  blue: {
    accent: "text-sky-400",
    accentBg: "bg-sky-400",
    accentHex: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.25)",
    textGlow: "drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]",
    borderGlow: "from-sky-500/60 via-sky-400/20 to-transparent",
    icon: "💻",
    peekDescription: "Open-Source Next.js & React Developer Portfolio Template",
    btnBg: "bg-sky-400",
    btnHoverBg: "hover:bg-sky-300",
    btnText: "text-slate-950",
    btnShadow: "shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]",
  },
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, labels }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col text-left relative select-none">
      
      {/* Top Horizon Line */}
      <div className="w-full h-[1px] bg-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        const isHovered = hoveredIndex === index;
        const isActive = isExpanded || isHovered;
        const projectNum = (index + 1).toString().padStart(2, "0");
        const theme = colorPalettes[project.accentColor || "amber"] || colorPalettes.amber;

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative py-8 md:py-12 border-b border-white/10 transition-colors"
          >
            {/* ── Ambient Radial Follow Glow ── */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute -top-10 left-1/4 w-[500px] h-[350px] rounded-full blur-[110px] pointer-events-none -z-10"
                  style={{ backgroundColor: theme.glow }}
                />
              )}
            </AnimatePresence>

            {/* ── Animated Hover Laser Line ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.borderGlow} origin-left pointer-events-none`}
            />

            {/* ── Main Horizon Row Header ── */}
            <div
              onClick={() => toggleProject(index)}
              className="w-full flex items-start justify-between gap-6 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
            >
              {/* Left Column: Number + Title + Subtitle */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 flex-1">
                
                {/* Number with dynamic theme color */}
                <motion.span 
                  animate={{ 
                    color: isActive ? theme.accentHex : "rgba(255, 255, 255, 0.4)",
                    x: isHovered ? 4 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-base md:text-lg font-bold tracking-widest shrink-0"
                >
                  {projectNum}
                </motion.span>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-x-3 flex-wrap">
                    <motion.h3 
                      animate={{
                        x: isHovered ? 6 : 0,
                        color: isActive ? theme.accentHex : "#ffffff"
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`text-2xl md:text-4xl lg:text-[44px] font-serif italic font-normal tracking-tight transition-all duration-300 ${
                        isActive ? theme.textGlow : ""
                      }`}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Domain Subtitle & Status */}
                  <div className="flex items-center gap-x-3 flex-wrap text-xs md:text-sm font-mono text-white/50">
                    <span className="text-white/80 font-medium">{project.type}</span>
                    <span className="text-white/20">•</span>
                    {project.status && (
                      <span className="inline-flex items-center gap-x-1.5 font-medium" style={{ color: theme.accentHex }}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.accentBg} animate-pulse`} />
                        <span>{project.status}</span>
                      </span>
                    )}
                  </div>

                  {/* ── Hover Floating Peek Capsule (Desktop) ── */}
                  <AnimatePresence>
                    {isHovered && !isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="hidden md:inline-flex items-center gap-x-2.5 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/15 backdrop-blur-xl mt-2 text-xs font-mono shadow-lg"
                      >
                        <RiSparklingLine className={`text-sm ${theme.accent}`} />
                        <span className="text-white/90">{project.peekCapsule || theme.peekDescription}</span>
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
                style={{
                  borderColor: isActive ? theme.accentHex : "rgba(255, 255, 255, 0.2)",
                  color: isActive ? theme.accentHex : "rgba(255, 255, 255, 0.7)",
                  backgroundColor: isExpanded ? `${theme.accentHex}20` : (isHovered ? `${theme.accentHex}10` : "transparent"),
                  boxShadow: isExpanded ? `0 0 15px ${theme.glow}` : (isHovered ? `0 0 10px ${theme.glow}` : "none"),
                }}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all duration-300"
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

            {/* ── Expandable Content Area (Kinetic Spring Physics) ── */}
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
                    {/* 1. Description Narrative */}
                    <motion.p 
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl font-normal"
                    >
                      {project.description}
                    </motion.p>

                    {/* 2. Bold Architectural Stat Telemetry (Cardless & Open) */}
                    {project.metrics && project.metrics.length > 0 && (
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                        className="py-5 border-y border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl"
                      >
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex flex-col space-y-1.5">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                              {metric.label}
                            </span>
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-tight ${theme.accent} ${theme.textGlow}`}>
                              <AnimatedCounter value={metric.value} />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* 2.5 Live Cinematic Demonstration (Video or GIF) */}
                    {(project.videoUrl || project.image) && (
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl my-2"
                      >
                        {/* Micro header pill */}
                        <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-b border-white/10 text-[11px] font-mono text-white/70">
                          <div className="flex items-center gap-x-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-semibold text-white/90">Live System Demonstration</span>
                          </div>
                          <span className="text-[10px] text-white/40 font-mono">Continuous Preview • Looping</span>
                        </div>

                        {/* Media Element (Video or GIF) */}
                        <div className="relative aspect-[2.1/1] w-full overflow-hidden bg-slate-950">
                          {(project.videoUrl || project.image)?.endsWith(".gif") ? (
                            <Image
                              src={project.videoUrl || project.image || ""}
                              alt={project.title}
                              fill
                              unoptimized
                              className="object-cover object-center"
                            />
                          ) : (
                            <video
                              src={project.videoUrl || project.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover object-center"
                            />
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* 3. Core Architecture Breakthroughs (Cardless Open Editorial Flow) */}
                    {project.highlights && project.highlights.length > 0 && (
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                        className="space-y-4 pt-1"
                      >
                        <p className={`text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-x-2 ${theme.accent}`}>
                          <RiFlashlightLine className="text-base" />
                          <span>Core Architecture & Engineering Breakthroughs</span>
                        </p>
                        
                        <div className="space-y-3 max-w-4xl">
                          {project.highlights.map((highlight, hIdx) => (
                            <motion.div 
                              key={hIdx}
                              whileHover={{ x: 6 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-start gap-x-3.5 text-white/80"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${theme.accentBg}`} />
                              <span className="text-sm md:text-base leading-relaxed font-normal">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* 4. Tech Stack Stream (Clean Typography Flow) */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-xs font-mono text-white/50"
                    >
                      <span className="text-white/35 uppercase tracking-wider font-semibold">Stack:</span>
                      {project.tags.map((tag, tIdx) => (
                        <span key={tag} className="flex items-center gap-x-3">
                          <span className="text-white/85 transition-colors font-medium">
                            {tag}
                          </span>
                          {tIdx < project.tags.length - 1 && <span className="text-white/20">/</span>}
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
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className={`inline-flex items-center gap-x-2 px-6 py-3 rounded-xl ${theme.btnBg} ${theme.btnHoverBg} ${theme.btnText} font-bold text-sm ${theme.btnShadow} transition-all`}
                        >
                          <span>{labels.demo} Live Sandbox</span>
                          <RiArrowRightUpLine className="text-lg" />
                        </motion.a>
                      )}

                      {project.codeLink && (
                        <motion.a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="inline-flex items-center gap-x-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white text-sm font-medium border border-white/15 hover:border-white/30 backdrop-blur-md transition-all"
                        >
                          <RiGithubLine className="text-lg" />
                          <span>{labels.code} Repository</span>
                          <RiArrowRightUpLine className="text-sm opacity-60" />
                        </motion.a>
                      )}
                    </motion.div>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectShowcase;
