import React, { useEffect, useRef, useState } from "react";
import Cube from "../Cube";
import Project from "../Project";
interface ProjectData {
  id: number;
  title: string;
  date: string;
  technologies: string[];
}

const Projects = () => {
  const projectData: ProjectData[] = [
    {
      id: 1,
      title: "Nonstop Dogwear",
      date: "2022-07-12",
      technologies: ["NextJs", "Prisma", "GraphQL"],
    },
    {
      id: 2,
      title: "Recepie WebSite",
      date: "2022-08-15",
      technologies: ["React", "Redux", "Firebase"],
    },
    {
      id: 3,
      title: "Ida Dashboard",
      date: "2022-09-01",
      technologies: ["Vue.js", "Vuetify", "Firestore"],
    },
    {
      id: 4,
      title: "Ida Store",
      date: "2022-09-01",
      technologies: ["Angular", "RxJs", "NGRX"],
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | {
    id: number;
    title: string;
    date: string;
    technologies: string[];
  }>(null);
  const [showSelectedProject, setShowSelectedProject] = useState(false);
  const onMouseDown = (e: any) => {
    setIsDragging(true);
    setStartPosition(e.pageX - scrollRef.current?.offsetLeft!);
    setScrollLeft(scrollRef.current?.scrollLeft!);
  };

  console.log(showSelectedProject);
  console.log(selectedProject);

  const onMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current?.offsetLeft!;
    const SCROLL_SPEED = 2;
    const walk = (x - startPosition) * SCROLL_SPEED;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4.1;
    }
  }, []);

  return (
    <div className="w-full bg-gray-dark1 min-h-screen flex flex-col p-4 sm:p-8 relative">
      <div className="absolute top-6 right-8 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 2} />
        ))}
      </div>
      <div className="text-center">
        <div className="relative">
          <h1 className="text-2xl mt-10 sm:text-4xl text-light-orange  font-custom tracking-wider uppercase">
            {"PROJECTS"}
          </h1>
        </div>
        <div
          ref={scrollRef}
          className="flex mt-20 sm:mt-18 px-4 sm:px-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800 space-x-1"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseUp}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {projectData.map(({ id, title, date, technologies }) => (
            <div
              className="bg-gray-dark1 relative group cursor-pointer min-w-[25vw] flex-shrink-0 flex items-center justify-center"
              key={id}
              style={{ minHeight: "120px" }}
              onClick={() => {
                setSelectedProject({ id, title, date, technologies }),
                  setShowSelectedProject(true); // This should be the correct function
              }}
            >
              <img
                src={`./images/project${id}.jpg`}
                alt={title}
                className="w-5/6 h-5/6 object-cover transition-all duration-500 ease-in-out transform group-hover:blur"
                // set selected project
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70">
                <div className="text-center space-y-4">
                  <h2
                    className="text-white-original text-xl sm:text-4xl font-bold uppercase group-hover:scale-110 transform transition-transform duration-500 tracking-widest"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-light-orange text-sm sm:text-lg font-semibold group-hover:translate-y-2 transform transition-transform duration-500 tracking-widest"
                    style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}
                  >
                    {date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show the selected project */}
        {showSelectedProject && selectedProject && (
          <Project
            title={selectedProject.title}
            date={selectedProject.date}
            technologies={selectedProject.technologies}
            setShowSelectedProject={setShowSelectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
