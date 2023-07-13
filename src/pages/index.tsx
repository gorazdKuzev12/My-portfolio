import React, { useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/indec";

export default function Home() {
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const rect = aboutMeRef.current.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <NavBar />
      <HomePage />
      <AboutMe ref={aboutMeRef} />
      <Projects ref={projectsRef} />
      <ContactMe />
      <Blog />
      <Footer />
    </div>
  );
}
