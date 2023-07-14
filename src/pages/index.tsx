import React, { useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/indec";

export default function Home() {
  const aboutMeRef = React.useRef<HTMLElement | null>(null);
  const projectsRef = React.useRef<HTMLElement | null>(null);

  return (
    <div className="bg-gray-900 h-screen">
      <NavBar />
      <HomePage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Blog />
      <Footer />
    </div>
  );
}
