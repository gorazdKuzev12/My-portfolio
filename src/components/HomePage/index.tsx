import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Cube from "../Cube";
import useScrollPosition from "../ScrollHandler";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  profileImage: string; 

};

const Container = styled.div<{ theme: "dark" | "light" }>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme === "dark" ? "#1F1F1F" : "#ffffff"};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentSection = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${props => props.theme === "dark" ? "#1F1F1F" : "#ffffff"};
  color: #d1d1d1;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const BorderedContent = styled.div`
  border-left: 4px solid #FF4500;
  padding-left: 1rem;
`;

const Title = styled.h1<{ theme: "dark" | "light" }>`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme === "dark" ? "#d1d1d1" : "#333333"};

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  animation: fadeInOut 3s ease-in-out;
`;

const Button = styled.a`
  background-color: transparent;
  border: 2px solid #FF4500;
  color: #FF4500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 1.25rem;
  text-decoration: none;
`;

const ImageSection = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow: hidden;
  background-color: ${props => props.theme === "dark" ? "#1F1F1F" : "#ffffff"};

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledMotionImg = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  margin-top: 1.25rem;
  z-index: 10;
`;

const CubeContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const HomePage: React.FC<Props> = ({ theme, toggleTheme,profileImage }) => {
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
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
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
    <Container theme={theme}>
      <ContentSection theme={theme}>
        <TitleContainer>
          <div>
            <BorderedContent>
              <Title theme={theme}>GORAZD KUZEV</Title>
              <SubTitle>
                {displayedPhrase.split("").map((letter, index) => (
                  <AnimatedLetter
                    key={index}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {letter}
                  </AnimatedLetter>
                ))}
              </SubTitle>
            </BorderedContent>
            <Button href="#">About me</Button>
          </div>
        </TitleContainer>
      </ContentSection>

      <ImageSection theme={theme}>
        <ImageContainer>
          <StyledMotionImg
            src={profileImage}
            alt="my image"
            style={{ translateY: scrollY / 2 }}
          />
        </ImageContainer>
      </ImageSection>

      <CubeContainer>
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 0} />
        ))}
      </CubeContainer>
    </Container>
  );
};

export default HomePage;