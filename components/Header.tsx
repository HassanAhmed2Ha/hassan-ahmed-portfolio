import React from "react";
import Link from "next/link";
import Socials from "./Socials";
import { contentEn as content } from "../src/data";

const Header: React.FC = () => {

  return (
    <header className="absolute z-30 w-full flex items-center px-8 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-6 md:py-8">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-wide hover:text-accent transition duration-300 select-none">
            <span className="font-sora font-semibold text-white tracking-wide">{content.header.logoPart1}</span>
            <span className="font-sora font-medium text-white">{content.header.logoPart2}</span>
            <span className="text-accent">.</span>
          </Link>

          {/* Socials */}
          <div className="flex items-center gap-x-6">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
