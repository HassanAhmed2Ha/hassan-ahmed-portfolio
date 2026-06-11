import React, { useState, useEffect } from "react";

// icons
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiAcademicCap,
  HiViewColumns,
  HiDocumentText,
  HiEnvelope,
} from "react-icons/hi2";

const Nav: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Translated names based on current language
  const navData = [
    { name: "Home", path: "#home", id: "home", Icon: HiHome },
    { name: "About", path: "#about", id: "about", Icon: HiUser },
    { name: "Experience", path: "#experience", id: "experience", Icon: HiBriefcase },
    { name: "Certifications", path: "#certifications", id: "certifications", Icon: HiAcademicCap },
    { name: "Projects", path: "#work", id: "work", Icon: HiViewColumns },
    { name: "Publications", path: "#publications", id: "publications", Icon: HiDocumentText },
    { name: "Contact", path: "#contact", id: "contact", Icon: HiEnvelope },
  ];

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 xl:bottom-auto mt-auto xl:right-4   z-50 xl:top-[50%] xl:-translate-y-1/2 w-full xl:w-16 xl:max-w-md">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <a
            className={`${
              activeSection === link.id && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 cursor-pointer`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0    hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold whitespace-nowrap">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2     "
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
