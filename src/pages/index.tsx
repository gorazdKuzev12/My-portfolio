import React, { useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/index";

export default function Home() {
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
