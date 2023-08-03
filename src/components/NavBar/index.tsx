import React, { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const NavBar = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  };
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, []); // Empty dependency array to run only on component mount
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full  shadow-lg flex flex-col md:flex-row justify-between items-center text-gray-light p-4 md:p-8 ${
        theme === "dark" ? "bg-gray-dark" : "bg-white-original"
      }`}
    >
      <div className="text-2xl md:text-3xl font-bold ml-4 font-custom tracking-wide text-center">
        <span className="text-light-orange">./QZ</span>
        <span
          className={`${theme === "dark" ? "text-gray-light" : "text-gray"}`}
        >
          {" "}
          code
        </span>
      </div>

      <div className="flex flex-row space-x-0 md:space-x-8 mt-4 md:mt-0">
        <button
          onClick={() => scrollToSection("about-section")}
          className="p-3 text-light-gray font-medium font-custom"
        >
          About me
        </button>
        <button
          className="p-3 text-light-gray font-medium font-custom"
          onClick={() => scrollToSection("projects-section")}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("blog-section")}
          className="p-3 text-light-gray font-medium font-custom"
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("contact-section")}
          className="p-3 text-light-gray font-medium font-custom"
        >
          Contact
        </button>
        <button
          onClick={toggleTheme}
          className={`p-3 ${
            theme === "dark"
              ? "text-light-orange font-medium font-custom"
              : "text-gray font-medium font-custom"
          }`}
        >
          {theme === "dark" ? <IoMdMoon size={24} /> : <IoMdSunny size={24} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
