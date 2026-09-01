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
  SiKubernetes
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
    case "react":
      return <SiReact className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
    case "nextjs":
    case "next":
      return <SiNextdotjs className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
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
    default:
      return <RiCodeSSlashLine className="text-lg text-white/70 group-hover:text-accent transition-colors" aria-hidden="true" />;
  }
};

const TechMarquee: React.FC<TechMarqueeProps> = ({ data }) => {
  const reversedData = [...data].reverse();

  return (
    <section className="w-full py-10 bg-primary/90 overflow-hidden relative border-y border-white/10">
      {/* Left/Right Edge Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Track 1 (Left to Right) */}
        <div className="flex w-max">
          <div className="flex items-center gap-3.5 pr-3.5 animate-marquee [animation-duration:30s]">
            {data.map((item, idx) => (
              <div
                key={`top-${item.name}-${idx}`}
                className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group cursor-default shrink-0 shadow-sm"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {getTechVectorIcon(item.name)}
                </div>
                <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-3.5 pr-3.5 animate-marquee [animation-duration:30s]"
            aria-hidden="true"
          >
            {data.map((item, idx) => (
              <div
                key={`top-dup-${item.name}-${idx}`}
                className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group cursor-default shrink-0 shadow-sm"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {getTechVectorIcon(item.name)}
                </div>
                <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2 (Right to Left) */}
        <div className="flex w-max">
          <div className="flex items-center gap-3.5 pr-3.5 animate-marquee [animation-duration:30s] [animation-direction:reverse]">
            {reversedData.map((item, idx) => (
              <div
                key={`bottom-${item.name}-${idx}`}
                className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group cursor-default shrink-0 shadow-sm"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {getTechVectorIcon(item.name)}
                </div>
                <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-3.5 pr-3.5 animate-marquee [animation-duration:30s] [animation-direction:reverse]"
            aria-hidden="true"
          >
            {reversedData.map((item, idx) => (
              <div
                key={`bottom-dup-${item.name}-${idx}`}
                className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group cursor-default shrink-0 shadow-sm"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {getTechVectorIcon(item.name)}
                </div>
                <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium transition-colors">
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