import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/index";

// Define light and dark themes
const lightTheme = {
  background: "#f0f0f0",
  text: "#1a1a1a",
  accent: "#FF4500",
};

const darkTheme = {
  background: "#121212",
  text: "#f5f5f5",
  accent: "#FF4500",
};

// Global Styles
const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const AppContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Loader = styled.div<{ isLoaded: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: 50;
  transition: transform 2s ease-in-out;
  transform: ${({ isLoaded }) =>
    isLoaded ? "translateY(-100%)" : "translateY(0)"};
`;

const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  span {
    &:first-child {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark"); // default to dark mode

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppContainer>
        <Loader isLoaded={isLoaded}>
          <LoaderText>
            <span>./QZ</span>
            <span> code</span>
          </LoaderText>
        </Loader>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <HomePage theme={theme} toggleTheme={toggleTheme} />
        <AboutMe theme={theme} toggleTheme={toggleTheme} />
        <Projects theme={theme} toggleTheme={toggleTheme} />
        <ContactMe theme={theme} toggleTheme={toggleTheme} />
        <Blog theme={theme} toggleTheme={toggleTheme} />
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </AppContainer>
    </ThemeProvider>
  );
}
