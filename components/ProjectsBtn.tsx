import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn: React.FC = () => {
  // Center is (100, 100) in 200x200 viewBox. Radius = 63 => Circumference = 2 * PI * 63 ≈ 395.84
  const radius = 63;
  const circumference = (2 * Math.PI * radius).toFixed(2);

  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="relative w-[155px] h-[155px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-contain bg-center bg-no-repeat group transition-transform duration-300 hover:scale-105 select-none"
        aria-label="Scroll to work section"
      >
        {/* Subtle backdrop glow */}
        <div className="absolute inset-2 rounded-full bg-accent/5 blur-md -z-10 group-hover:bg-accent/15 transition-all duration-300" />

        {/* Rotating Circular Text */}
        <svg
          viewBox="0 0 200 200"
          className="w-[140px] h-[140px] md:w-[165px] md:h-[165px] animate-spin-slow pointer-events-none select-none"
        >
          <defs>
            <path
              id="circleTextPath"
              d={`M 100, 100 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
              fill="none"
            />
          </defs>
          <text
            className="font-sora text-[13.5px] font-bold uppercase tracking-[1.5px]"
            fill="#FBBF24"
          >
            <textPath
              href="#circleTextPath"
              startOffset="0%"
              textLength={circumference}
              lengthAdjust="spacing"
            >
              • BIOCOMPUTING LAB • MY RESEARCH & WORK 
            </textPath>
          </text>
        </svg>

        {/* Center Arrow */}
        <div className="absolute flex items-center justify-center pointer-events-none">
          <HiArrowRight
            className="text-2xl md:text-3xl text-accent group-hover:translate-x-1.5 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
            aria-hidden="true"
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectsBtn;

