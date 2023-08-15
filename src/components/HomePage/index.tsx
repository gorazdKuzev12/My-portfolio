import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Cube from "../Cube";
import useScrollPosition from "../ScrollHandler";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const HomePage: React.FC<Props> = ({ theme, toggleTheme }) => {
  const phrases = [
    "WEB DEVELOPER",
    "FULL STACK ",
    "FREELANCER",
    " PROBLEM SOLVER",
    "CREATIVE MIND",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % phrases.length;
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let displayedPhrase = "";

    const timeout = setTimeout(() => {
      for (let i = 0; i < phrase.length; i++) {
        setTimeout(() => {
          displayedPhrase = phrase.substring(0, i + 1);
          setDisplayedPhrase(displayedPhrase);
        }, i * 100);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);
  const scrollY = useScrollPosition();

  return (
    <div
      className={`flex flex-col md:flex-row relative min-h-screen min-w-screen  ${
        theme === "dark" ? "bg-gray-dark1" : "bg-white-original"
      }`}
    >
      <div
        className={`w-full md:w-2/4  flex flex-col justify-center items-start text-gray-light p-8 space-y-8  ${
          theme === "dark" ? "bg-gray-dark1" : "bg-white-original"
        }`}
      >
        <div className="flex items-start space-x-4">
          <div>
            <div className="border-l-4 border-light-orange pl-4">
              <h1
                className={`text-5xl md:text-7xl font-bold font-custom ${
                  theme === "dark" ? "text-light-gray" : "text-dark-gray"
                }`}
              >
                GORAZD KUZEV
              </h1>

              <h2 className="text-4xl md:text-5xl font-medium font-custom mb-5">
                {displayedPhrase.split("").map((letter: any, index: any) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in-out"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </h2>
            </div>

            <a
              href="#"
              className="bg-transparent border-light-orange border-2 text-light-orange px-4 py-2 rounded font-custom m-5"
            >
              About me
            </a>
          </div>
        </div>
      </div>

      <div
        className={`"w-full md:w-2/4 flex flex-col justify-center items-start p-8 overflow-hidden ${
          theme === "dark" ? "bg-gray-dark1 " : "bg-white-original"
        }`}
      >
        <div className="w-full h-full relative">
          <motion.img
            src="./images/profile2.jpg"
            alt="Description"
            className="object-cover h-full w-full mt-5 z-10"
            style={{ translateY: scrollY / 2 }}
          />
        </div>
      </div>

      <div className="absolute top-6 right-8 flex space-x-2 ">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 0} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
