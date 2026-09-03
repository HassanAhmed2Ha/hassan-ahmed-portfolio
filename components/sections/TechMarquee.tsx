import React from "react";
import { TechLogo } from "../../src/types";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiGithub,
  SiJavascript,
  SiScikitlearn,
  SiKubernetes,
  SiNumpy,
  SiPandas,
  SiTailwindcss,
  SiRedis,
  SiGraphql,
  SiCplusplus,
  SiOpenai
} from "react-icons/si";
import { RiCodeSSlashLine } from "react-icons/ri";

interface TechMarqueeProps {
  data: TechLogo[];
}

const getTechVectorIcon = (name: string) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "");
  
  switch (normalized) {
    case "python":
    case "py":
      return <SiPython className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "pytorch":
      return <SiPytorch className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "tensorflow":
      return <SiTensorflow className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "scikitlearn":
      return <SiScikitlearn className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "numpy":
      return <SiNumpy className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "pandas":
      return <SiPandas className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "fastapi":
      return <SiFastapi className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "docker":
      return <SiDocker className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "kubernetes":
    case "kbernetes":
      return <SiKubernetes className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "postgresql":
    case "postgres":
      return <SiPostgresql className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "mongodb":
      return <SiMongodb className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "redis":
      return <SiRedis className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "graphql":
      return <SiGraphql className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "react":
      return <SiReact className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "nextjs":
    case "next":
      return <SiNextdotjs className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "tailwindcss":
    case "tailwind":
      return <SiTailwindcss className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "typescript":
    case "ts":
      return <SiTypescript className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "javascript":
    case "js":
      return <SiJavascript className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "nodejs":
    case "node":
      return <SiNodedotjs className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "express":
      return <SiExpress className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "githubactions":
      return <SiGithubactions className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "linux":
      return <SiLinux className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "git":
      return <SiGit className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "github":
      return <SiGithub className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "cplusplus":
    case "cpp":
    case "c":
      return <SiCplusplus className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "openai":
      return <SiOpenai className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    default:
      return <RiCodeSSlashLine className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
  }
};

const TechMarquee: React.FC<TechMarqueeProps> = ({ data }) => {
  const reversedData = [...data].reverse();

  // Double each dataset so each half is 30 items (~4000px wide), ensuring zero blank space on any screen
  const track1Data = [...data, ...data];
  const track2Data = [...reversedData, ...reversedData];

  const renderBadge = (item: TechLogo, key: string) => (
    <div
      key={key}
      className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent hover:bg-accent/[0.12] hover:shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:scale-[1.03] transition-all duration-200 group cursor-pointer shrink-0 shadow-sm transform-gpu"
    >
      <div className="flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] transition-all duration-200">
        {getTechVectorIcon(item.name)}
      </div>
      <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-colors duration-200">
        {item.name}
      </span>
    </div>
  );

  return (
    <section className="w-full py-10 bg-primary/90 overflow-hidden relative border-y border-white/10">
      {/* Left/Right Edge Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Track 1 (Moves Left) - Symmetrical & Seamless */}
        <div className="flex w-max animate-marquee-left select-none">
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0">
            {track1Data.map((item, idx) => renderBadge(item, `t1-a-${item.name}-${idx}`))}
          </div>
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0" aria-hidden="true">
            {track1Data.map((item, idx) => renderBadge(item, `t1-b-${item.name}-${idx}`))}
          </div>
        </div>

        {/* Track 2 (Moves Right) - Perfectly Synchronized Speed & Timing */}
        <div className="flex w-max animate-marquee-right select-none">
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0">
            {track2Data.map((item, idx) => renderBadge(item, `t2-a-${item.name}-${idx}`))}
          </div>
          <div className="flex items-center gap-3.5 pr-3.5 shrink-0" aria-hidden="true">
            {track2Data.map((item, idx) => renderBadge(item, `t2-b-${item.name}-${idx}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;