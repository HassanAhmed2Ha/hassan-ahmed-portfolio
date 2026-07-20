import React from "react";
import { TechLogo } from "../../src/types";

interface TechMarqueeProps {
  data: TechLogo[];
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ data }) => {
  const reversedData = [...data].reverse();

  return (
    <section className="w-full py-16 bg-primary overflow-hidden relative">
      {/* Gradient masks for fading edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-8">
        {/* Row 1 (Top) - Scrolling Left */}
        <div className="flex w-max">
          {/* First set of items */}
          <div className="flex animate-marquee [animation-duration:15s]">
            {data.map((item, idx) => (
              <div
                key={`top-${item.name}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 mx-4 rounded-2xl bg-transparent transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] hover:z-20 cursor-pointer relative"
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                  <img
                    src={item.logoUrl}
                    alt={`${item.name} logo`}
                    className={`max-w-full max-h-full object-contain ${
                      item.inverse ? "invert brightness-0" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-white/80 font-medium text-sm font-sora">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second set of items (duplicated for seamless looping) */}
          <div
            className="flex animate-marquee [animation-duration:15s]"
            aria-hidden="true"
          >
            {data.map((item, idx) => (
              <div
                key={`top-dup-${item.name}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 mx-4 rounded-2xl bg-transparent transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] hover:z-20 cursor-pointer relative"
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                  <img
                    src={item.logoUrl}
                    alt={`${item.name} logo`}
                    className={`max-w-full max-h-full object-contain ${
                      item.inverse ? "invert brightness-0" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-white/80 font-medium text-sm font-sora">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Bottom) - Scrolling Right */}
        <div className="flex w-max">
          {/* First set of reversed items */}
          <div className="flex animate-marquee [animation-duration:15s] [animation-direction:reverse]">
            {reversedData.map((item, idx) => (
              <div
                key={`bottom-${item.name}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 mx-4 rounded-2xl bg-transparent transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] hover:z-20 cursor-pointer relative"
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                  <img
                    src={item.logoUrl}
                    alt={`${item.name} logo`}
                    className={`max-w-full max-h-full object-contain ${
                      item.inverse ? "invert brightness-0" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-white/80 font-medium text-sm font-sora">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second set of reversed items (duplicated for seamless looping) */}
          <div
            className="flex animate-marquee [animation-duration:15s] [animation-direction:reverse]"
            aria-hidden="true"
          >
            {reversedData.map((item, idx) => (
              <div
                key={`bottom-dup-${item.name}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 mx-4 rounded-2xl bg-transparent transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] hover:z-20 cursor-pointer relative"
              >
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                  <img
                    src={item.logoUrl}
                    alt={`${item.name} logo`}
                    className={`max-w-full max-h-full object-contain ${
                      item.inverse ? "invert brightness-0" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-white/80 font-medium text-sm font-sora">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
