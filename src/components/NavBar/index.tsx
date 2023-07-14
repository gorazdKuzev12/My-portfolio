import React, { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full bg-gray-dark shadow-lg flex flex-row justify-between items-center text-gray-light p-8">
      <div className="text-3xl font-bold ml-4 font-custom tracking-wide">
        <span className="text-light-orange">./QZ</span>
        <span className="text-gray-light"> code</span>
      </div>

      <div className="flex flex-row space-x-8">
        <a href="#" className="p-3 text-light-gray font-medium font-custom">
          About me
        </a>
        <a href="#" className="p-3 text-light-gray font-medium font-custom">
          Projects
        </a>
        <a href="#" className="p-3 text-light-gray font-medium font-custom">
          Blog
        </a>
        <a href="#" className="p-3 text-light-gray font-medium font-custom">
          Contact
        </a>
        <button
          onClick={toggleTheme}
          className={`p-3 ${
            theme === "dark"
              ? "text-gray font-medium font-custom"
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
