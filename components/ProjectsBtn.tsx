import React from "react";
import Link from "next/link";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";

const ProjectsBtn: React.FC = () => {
  
  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="javascript:void(0)"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="relative w-[150px] h-[150px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow w-[110px] h-[115px] md:w-[141px] md:h-[148px] pointer-events-none select-none"
        >
          <path
            id="circlePath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            fill="none"
          />
          <text
            className="font-sora text-[11.5px] font-semibold uppercase fill-accent tracking-[2.5px]"
          >
            <textPath href="#circlePath" startOffset="0%">
              MY RESEARCH • BIOCOMPUTING LAB • 
            </textPath>
          </text>
        </svg>

        
          <HiArrowRight
            className="absolute text-3xl md:text-4xl group-hover:translate-x-2 transition-all duration-300 text-accent"
            aria-hidden
          />
        
      </a>
    </div>
  );
};

export default ProjectsBtn;
