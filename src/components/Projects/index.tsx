// Projects.tsx
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Cube from "../Cube";
import Project from "../Project";

interface ProjectData {
  id: number;
  title: string;
  date: string;
  technologies: string[];
}

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

// ==================== Styled Components ====================

// Container for the entire Projects section
const ProjectsContainer = styled.div<{ themeMode: "dark" | "light" }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#1F1F1F" : "#FFFFFF"};

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

// Absolute container in the top-right corner for the cubes
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

// Title for the "PROJECTS" heading
const Title = styled.h1`
  margin-top: 2.5rem;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #FF4500; /* Light orange */

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

// Container that holds all project items (horizontal scrolling on desktop)
const ProjectsScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow: hidden;

  @media (min-width: 640px) {
    flex-direction: row;
    padding: 0 2rem;
    overflow-x: auto;
  }
`;

// Each project item container (image + overlay)
const ProjectItem = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 70vw; /* for smaller screens; adjust as you like */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: 120px;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    min-width: 25vw; /* mimic "min-w-[25vw]" from Tailwind */
    margin-right: 0.5rem;
    margin-bottom: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  /* On hover, blur the image (we do the transition inside ProjectImage) */
  &:hover img {
    filter: blur(4px);
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
    /* background-color: rgba(0, 0, 0, 0.05); */
  }
`;

// The project image
const ProjectImage = styled.img`
  width: 600px;
  height: 60%;
  object-fit: cover;
  margin:30px;
  transition: all 0.5s ease-in-out;
`;

// Overlay (title + date)
const Overlay = styled.div`
  position: absolute;
  inset: 0; /* top:0, right:0, bottom:0, left:0 */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 0.5s ease-in-out;
`;

// Container for text inside the overlay
const OverlayContent = styled.div`
  text-align: center;
  color: white;
  transition: transform 0.5s ease-in-out;
`;

// Overlay Title
const OverlayTitle = styled.h2`
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 640px) {
    font-size: 1.3rem;
  }
`;

// Overlay Date
const OverlayDate = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #FF4500;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const Projects: React.FC<Props> = ({ theme, toggleTheme }) => {
  const projectData: ProjectData[] = [
    {
      id: 1,
      title: "Non-stop dogwear (Internal)",
      date: "01.04.2020 - 01.01.2025",
      technologies: [
        "NextJs",
        "Postgresql",
        "Prisma",
        "Apollo Client",
        "Style Components",
        "TypeScript",
        "GraphQL",
      ],
    },
    {
      id: 2,
      title: "Non-stop dogwear (Official website)",
      date: "01.04.2022 - 01.01.2025",
      technologies: [
        "NextJs",
        "Gatsby",
        "Style Components",
        "TypeScript",
        "GraphQL",
      ],
    },
    {
      id: 3,
      title: "Villa Smaragdis",
      date: "05.05.2024 - 08.08.2024",
      technologies: ["Vue.js", "Vuetify", "Firestore"],
    },
    {
      id: 4,
      title: "Simple Recepies",
      date: "01.02.2020 - 20.06.2020",
      technologies: ["Gatsby", "Firebase"],
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | ProjectData>(
    null
  );
  const [showSelectedProject, setShowSelectedProject] = useState(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartPosition(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth > 768) {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const SCROLL_SPEED = 2;
      const walk = (x - startPosition) * SCROLL_SPEED;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      // Scroll to the middle of the container initially (optional)
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4;
    }
  }, []);

  // Sample images for the Project component
  const sampleImages = [
    "./images/ida1.jpg",
    "./images/ida2.jpg",
    "./images/ida3.jpg",
    "./images/ida4.jpg",
    "./images/ida5.jpg",
    "./images/ida6.jpg",
    "./images/ida7.jpg",
    "./images/ida8.jpg",
  ];

  return (
    <ProjectsContainer themeMode={theme} id="projects-section">
      {/* Cube decorations */}
      <CubeContainer>
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 2} />
        ))}
      </CubeContainer>

      {/* Title */}
      <Title>PROJECTS</Title>

      {/* Scrollable projects container */}
      <ProjectsScrollWrapper
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projectData.map(({ id, title, date, technologies }) => (
          <ProjectItem
            key={id}
            onClick={() => {
              setSelectedProject({ id, title, date, technologies });
              setShowSelectedProject(true);
            }}
          >
            <ProjectImage src={`./images/project${id}.jpg`} alt={title} />
            <Overlay className="overlay">
              <OverlayContent>
                <OverlayTitle>{title}</OverlayTitle>
                <OverlayDate>{date}</OverlayDate>
              </OverlayContent>
            </Overlay>
          </ProjectItem>
        ))}
      </ProjectsScrollWrapper>

      {/* Selected project modal */}
      {showSelectedProject && selectedProject && (
        <Project
          title={selectedProject.title}
          date={selectedProject.date}
          technologies={selectedProject.technologies}
          setShowSelectedProject={setShowSelectedProject}
          setSelectedProject={setSelectedProject}
          images={sampleImages}
        />
      )}
    </ProjectsContainer>
  );
};

export default Projects;
