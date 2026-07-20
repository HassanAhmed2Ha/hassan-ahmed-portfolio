import { contentEn as content } from "../src/data";
import React from "react";
import { RiFileList3Line, RiExternalLinkLine, RiShieldFlashLine } from "react-icons/ri";

const PublicationGrid: React.FC = () => {
  const publications = content.publications.items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {publications.map((pub, index) => {
        const zenodoId = pub.doi.split(".").pop();
        const zenodoUrl = `https://zenodo.org/record/${zenodoId}`;
        const doiUrl = `https://doi.org/${pub.doi}`;

        return (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between h-[300px] shadow-2xl relative overflow-hidden group text-left"
          >
            {/* Background glow blob */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              {/* Header info */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {pub.meta}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-300">
                  <RiFileList3Line className="text-sm" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent transition duration-300 line-clamp-3">
                {pub.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
                {pub.description}
              </p>
            </div>

            {/* Footer and DOI Badge */}
            <div className="mt-4 space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links & DOI badge */}
              <div className="flex flex-col sm:flex-row gap-y-2 justify-between items-start sm:items-center border-t border-white/10 pt-4">
                {/* DOI tag */}
                <a
                  href={doiUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-x-1 px-2.5 py-1.5 rounded-full bg-accent/5 hover:bg-accent/10 border border-accent/20 text-accent text-[9px] font-mono transition duration-300"
                >
                  <RiShieldFlashLine />
                  <span>{content.publications.labels.doiPrefix} {pub.doi}</span>
                </a>

                {/* Zenodo redirect */}
                <a
                  href={zenodoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[10px] font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1.5 rounded-full flex items-center gap-x-1 transition duration-300 group/link"
                >
                  <span>{content.publications.labels.zenodoRecord}</span>
                  <RiExternalLinkLine className="text-xs transform group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition duration-300" />
                </a>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default PublicationGrid;
