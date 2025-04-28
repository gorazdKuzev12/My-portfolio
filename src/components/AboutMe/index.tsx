import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Cube from "../Cube";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  skills: { name: string; percent: number }[];
  bio:string;

};



// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fillProgress = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Styled components
const AboutSection = styled.div<{ themeMode: "dark" | "light" }>`
  width: 100%;
  min-height: 100vh;

  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#1A1A1A" : "#F5F5F5"};
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Heading = styled.h1<{ themeMode: "dark" | "light" }>`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f74412" : "#FF4500")};
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${({ themeMode }) => (themeMode === "dark" ? "#ee5b21" : "#FF4500")};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100px;
  }
`;

const Paragraph = styled.p<{ themeMode: "dark" | "light" }>`
  font-size: 1.1rem;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#E5E5E5" : "#4A4A4A")};
  text-align: justify;
  margin-bottom: 2rem;
  position: relative;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  animation: ${fadeIn} 0.8s ease-out;
`;

const SkillsHeading = styled.h2<{ themeMode: "dark" | "light" }>`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f74412" : "#ea7734")};
  text-transform: uppercase;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 3rem;
    height: 2px;
    background-color: ${({ themeMode }) =>
      themeMode === "dark" ? "#E5E5E5" : "#4A4A4A"};
    margin: 0.5rem 0;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 5rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div<{ themeMode: "dark" | "light" }>`
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#2C2C2C" : "#FFFFFF"};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SkillName = styled.h3<{ themeMode: "dark" | "light" }>`
  font-weight: bold;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#E5E5E5" : "#4A4A4A")};
  font-size: 1.1rem;
`;

const SkillPercent = styled.span<{ themeMode: "dark" | "light" }>`
  font-weight: bold;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#f47520" : "#FF4500")};
`;
const CubeContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;

  /* Give some space between cubes when stacked vertically, 
     then switch to horizontal at >= 640px */
  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-right: 0.5rem;
      margin-bottom: 0;
    }
  }
`;


const ProgressBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#404040" : "#E5E5E5"};
  border-radius: 0.5rem;
  height: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div<{ percent: number; isVisible: boolean }>`
  background: linear-gradient(90deg, #f47520 0%, #ee5b21 100%);
  border-radius: 0.5rem;
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  transform-origin: left;
  transition: transform 1s ease-out;
  transform: scaleX(${({ isVisible }) => (isVisible ? 1 : 0)});
`;

// Component
const AboutMe: React.FC<Props> = ({ theme,skills,bio }) => {
  const [visibleSkills, setVisibleSkills] = useState<{ [key: string]: boolean }>(
    {}
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll("[data-skill]");
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <AboutSection  id="about-section" themeMode={theme}>

      <TextSection>
        <Heading themeMode={theme}>About Me</Heading>
        <Paragraph themeMode={theme}>
        {bio}
        </Paragraph>
      </TextSection>
      <SkillsSection>
        <SkillsHeading themeMode={theme}>Skills</SkillsHeading>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard
              themeMode={theme}
              key={index}
              data-skill
              id={`skill-${index}`}
            >
              <SkillHeader>
                <SkillName themeMode={theme}>{skill.name}</SkillName>
                <SkillPercent themeMode={theme}>
                  {skill.percent}%
                </SkillPercent>
              </SkillHeader>
              <ProgressBar theme={theme}>
                <ProgressFill
                  percent={skill.percent}
                  isVisible={visibleSkills[`skill-${index}`]}
                />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsContainer>
      </SkillsSection>
    </AboutSection>
  );
};

export default AboutMe;