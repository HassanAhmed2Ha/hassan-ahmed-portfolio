import { contentEn as content } from "../src/data";
import React from "react";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

const WorkGrid: React.FC = () => {
  const projects = content.projects.items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between h-[300px] shadow-2xl relative overflow-hidden group text-left"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div>
            {/* Project Category Tag */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent uppercase tracking-widest border border-accent/20">
                {project.type}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags & Action Buttons */}
          <div className="mt-4 space-y-4">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link CTAs */}
            <div className="flex items-center gap-x-3 pt-4 border-t border-white/10">
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-medium text-white/70 hover:text-white flex items-center gap-x-1 transition duration-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5"
                >
                  <RiGithubLine className="text-sm" />
                  <span>{content.projects.labels.code}</span>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-medium text-accent hover:text-white flex items-center gap-x-1 transition duration-300 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-full border border-accent/20"
                >
                  <RiExternalLinkLine className="text-sm" />
                  <span>{content.projects.labels.demo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkGrid;
