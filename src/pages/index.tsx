import React, { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/index";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const [theme, setTheme] = useState<"dark" | "light">("dark"); // default to light mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="bg-gray-dark1  relative overflow-hidden">
      <div
        className={`fixed inset-0 bg-gray-dark1 z-50 transition-all duration-2000 ease-in-out transform ${
          isLoaded ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="text-2xl md:text-3xl font-bold ml-4 font-custom tracking-wide text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-light-orange">./QZ</span>
          <span className="text-gray-light"> code</span>
        </div>
      </div>
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <HomePage theme={theme} toggleTheme={toggleTheme} />
      <AboutMe theme={theme} toggleTheme={toggleTheme} />
      <Projects />
      <ContactMe />
      <Blog />
      <Footer />
    </div>
  );
}
