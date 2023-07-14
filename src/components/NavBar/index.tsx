import React, { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full bg-gray-dark shadow-lg flex flex-col md:flex-row justify-between items-center text-gray-light p-4 md:p-8">
      <div className="text-2xl md:text-3xl font-bold ml-4 font-custom tracking-wide text-center">
        <span className="text-light-orange">./QZ</span>
        <span className="text-gray-light"> code</span>
      </div>

      <div className="flex flex-row space-x-0 md:space-x-8 mt-4 md:mt-0">
        <a href="" className="p-3 text-light-gray font-medium font-custom">
          About me
        </a>
        <a href="" className="p-3 text-gray font-medium font-custom">
          Projects
        </a>
        <a href="" className="p-3 text-gray font-medium font-custom">
          Blog
        </a>
        <a href="" className="p-3 text-gray font-medium font-custom">
          Contact
        </a>
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
