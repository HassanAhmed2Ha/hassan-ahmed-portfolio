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
  data?: TechLogo[];
}

const getTechVectorIcon = (name: string) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "");

  switch (normalized) {
    case "python":
    case "py":
      return <SiPython className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "pytorch":
      return <SiPytorch className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "tensorflow":
      return <SiTensorflow className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "scikitlearn":
      return <SiScikitlearn className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "numpy":
      return <SiNumpy className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "pandas":
      return <SiPandas className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "fastapi":
      return <SiFastapi className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "docker":
      return <SiDocker className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "kubernetes":
    case "kbernetes":
      return <SiKubernetes className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "postgresql":
    case "postgres":
      return <SiPostgresql className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "mongodb":
      return <SiMongodb className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "redis":
      return <SiRedis className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "graphql":
      return <SiGraphql className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "react":
      return <SiReact className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "nextjs":
    case "next":
      return <SiNextdotjs className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "tailwindcss":
    case "tailwind":
      return <SiTailwindcss className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "typescript":
    case "ts":
      return <SiTypescript className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "javascript":
    case "js":
      return <SiJavascript className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "nodejs":
    case "node":
      return <SiNodedotjs className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "express":
      return <SiExpress className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "githubactions":
      return <SiGithubactions className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "linux":
      return <SiLinux className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "git":
      return <SiGit className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "github":
      return <SiGithub className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "cplusplus":
    case "cpp":
    case "c":
      return <SiCplusplus className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    case "openai":
      return <SiOpenai className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
    default:
      return <RiCodeSSlashLine className="text-lg text-white/70 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />;
  }
};

// Track 1: AI, Deep Learning & Scientific Computing
const defaultTrack1: TechLogo[] = [
  { name: "Python", logoUrl: "" },
  { name: "PyTorch", logoUrl: "" },
  { name: "TensorFlow", logoUrl: "" },
  { name: "Scikit-Learn", logoUrl: "" },
  { name: "NumPy", logoUrl: "" },
  { name: "Pandas", logoUrl: "" },
  { name: "FastAPI", logoUrl: "" },
  { name: "OpenAI", logoUrl: "" },
  { name: "Linux", logoUrl: "" },
  { name: "Docker", logoUrl: "" },
  { name: "C++", logoUrl: "" },
  { name: "Kubernetes", logoUrl: "" },
];

// Track 2: Full-Stack Engineering, Distributed Systems & DevOps
const defaultTrack2: TechLogo[] = [
  { name: "Next.js", logoUrl: "" },
  { name: "TypeScript", logoUrl: "" },
  { name: "React", logoUrl: "" },
  { name: "JavaScript", logoUrl: "" },
  { name: "Tailwind CSS", logoUrl: "" },
  { name: "PostgreSQL", logoUrl: "" },
  { name: "Redis", logoUrl: "" },
  { name: "MongoDB", logoUrl: "" },
  { name: "NodeJS", logoUrl: "" },
  { name: "Express", logoUrl: "" },
  { name: "GraphQL", logoUrl: "" },
  { name: "Git", logoUrl: "" },
  { name: "GitHub Actions", logoUrl: "" },
];

const TechBadge: React.FC<{ item: TechLogo }> = ({ item }) => (
  <div className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/80 hover:bg-accent/[0.12] hover:shadow-[0_0_22px_rgba(251,191,36,0.35)] transition-all duration-300 group cursor-pointer shrink-0">
    <div className="flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] transition-all duration-300">
      {getTechVectorIcon(item.name)}
    </div>
    <span className="text-white/80 group-hover:text-accent font-mono text-xs font-medium group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-colors duration-300">
      {item.name}
    </span>
  </div>
);

interface MarqueeTrackProps {
  items: TechLogo[];
  direction: "left" | "right";
}

const MarqueeTrack: React.FC<MarqueeTrackProps> = ({ items, direction }) => {
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex overflow-hidden select-none w-full">
      <div className={`flex w-max shrink-0 items-center ${animClass}`}>
        {Array.from({ length: 4 }).map((_, blockIdx) => (
          <div
            key={blockIdx}
            className="flex shrink-0 items-center gap-4 pr-4"
            aria-hidden={blockIdx > 0}
          >
            {items.map((item, idx) => (
              <TechBadge key={`b${blockIdx}-${item.name}-${idx}`} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee: React.FC<TechMarqueeProps> = ({ data }) => {
  // Curated dual tracks: AI & Systems for Track 1, Full-Stack & DevOps for Track 2
  const track1Items = defaultTrack1;
  const track2Items = defaultTrack2;

  return (
    <section className="w-full py-12 bg-primary/95 overflow-hidden relative border-y border-white/10">
      {/* Subtle Section Header */}
      <div className="flex items-center justify-center gap-2.5 mb-7">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/60 font-semibold">
          Ecosystem & Technical Architecture
        </span>
      </div>

      {/* Left/Right Edge Feathering Masks */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      {/* Marquee Tracks Container */}
      <div
        className="flex flex-col gap-4 relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1: AI, Deep Learning & High-Performance Systems (Moves Left) */}
        <MarqueeTrack items={track1Items} direction="left" />

        {/* Row 2: Full-Stack Engineering, Distributed Systems & DevOps (Moves Right) */}
        <MarqueeTrack items={track2Items} direction="right" />
      </div>
    </section>
  );
};

export default TechMarquee;