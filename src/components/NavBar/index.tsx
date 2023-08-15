import React, { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const NavBar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full  shadow-lg flex flex-col md:flex-row justify-between items-center text-gray-light p-4 md:p-8 ${
        theme === "dark" ? "bg-gray-dark" : "bg-gray-menu"
      }`}
    >
      <div className="text-2xl md:text-3xl font-bold ml-4 font-custom tracking-wide text-center">
        <span className="text-light-orange">./QZ</span>
        <span
          className={`${
            theme === "dark" ? "text-gray-light" : "text-white-original"
          }`}
        >
          {" "}
          code
        </span>
      </div>

      <div className="flex flex-row space-x-0 md:space-x-8 mt-4 md:mt-0">
        <button
          onClick={() => scrollToSection("about-section")}
          className={`p-3  font-medium font-custom ${
            theme === "dark" ? "text-light-gray" : "text-white-original"
          }`}
        >
          About me
        </button>
        <button
          className={`p-3  font-medium font-custom ${
            theme === "dark" ? "text-light-gray" : "text-white-original"
          }`}
          onClick={() => scrollToSection("projects-section")}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("blog-section")}
          className={`p-3  font-medium font-custom ${
            theme === "dark" ? "text-light-gray" : "text-white-original"
          }`}
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("contact-section")}
          className={`p-3  font-medium font-custom ${
            theme === "dark" ? "text-light-gray" : "text-white-original"
          }`}
        >
          Contact
        </button>
        <button
          onClick={toggleTheme}
          className={`p-3 ${
            theme === "dark"
              ? "text-light-orange font-medium font-custom"
              : "text-light-orange font-medium font-custom"
          }`}
        >
          {theme === "dark" ? <IoMdMoon size={24} /> : <IoMdSunny size={24} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
