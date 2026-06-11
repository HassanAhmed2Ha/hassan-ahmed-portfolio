import React from "react";
import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const OrcidIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.631 7.178c.676 0 1.222.547 1.222 1.222 0 .675-.546 1.221-1.222 1.221-.674 0-1.22-.546-1.22-1.221 0-.675.546-1.222 1.22-1.222zm1.884 9.897h-3.768v-8.15h3.768v8.15zm8.905-.724c-.382.744-1.027 1.284-1.802 1.509-.64.185-1.594.185-1.956.185h-2.804v-8.15h2.956c1.29 0 2.225.048 2.89.57.84.661 1.223 1.688 1.223 2.822 0 1.341-.53 2.404-1.507 3.064zm-1.898-4.576c-.524-.22-1.309-.234-2.031-.234h-1.082v5.337h1.018c.957 0 1.488-.047 1.932-.381.564-.424.81-1.127.81-2.288 0-1.277-.289-2.029-.647-2.434z"/>
  </svg>
);

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hassan-ahmed2007",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/HassanAhmed2Ha",
    Icon: RiGithubLine,
  },
  {
    name: "Orcid",
    link: "https://orcid.org/0009-0005-0306-0898",
    Icon: OrcidIcon,
  },
];

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-3 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
        >
          {typeof social.Icon === "function" ? (
            <social.Icon />
          ) : (
            social.Icon
          )}
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
