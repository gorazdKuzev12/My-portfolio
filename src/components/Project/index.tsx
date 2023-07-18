import React from "react";
import { AiOutlineClose, AiFillCheckCircle } from "react-icons/ai";

type ProjectProps = {
  title: string;
  date: string;
  technologies: any;
  setSelectedProject: any;
  setShowSelectedProject: any;
};

const Project: React.FC<ProjectProps> = ({
  title,
  date,
  technologies,
  setSelectedProject,
  setShowSelectedProject,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedProject(null);
        setShowSelectedProject(false);
      }}
      className="fixed inset-0 flex items-center justify-center z-50 p-8 bg-gradient-to-r from-blue-900 to-black bg-opacity-90 backdrop-filter backdrop-blur-xl"
    >
      <div className="bg-white text-gray-dark rounded-xl shadow-2xl max-w-4xl w-full overflow-auto transform transition-all duration-700 ease-in-out scale-95 hover:scale-100">
        <div className="relative flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-1/2 p-12 bg-gray-dark text-white space-y-8">
            <div className="flex items-start justify-between">
              <h2 className="text-6xl font-extrabold text-orange-lighter leading-none">
                {title}
              </h2>
              <button
                className="mt-2 text-5xl text-white hover:text-orange-light transition-colors duration-200"
                onClick={() => {
                  /* Close function goes here */
                }}
              >
                <AiOutlineClose />
              </button>
            </div>
            <p className="text-2xl">{date}</p>
            <div className="mt-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex space-x-6 pb-2">
              {technologies.map((tech: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 transform transition-all duration-200 hover:scale-105"
                >
                  <div className="tech-card bg-white-original shadow-2xl rounded-lg p-4 text-center transition-transform duration-500 ease-in-out transform hover:rotate-y-180">
                    <div className="tech-card-face front-face">
                      <AiFillCheckCircle className="text-4xl text-orange-light" />
                      <span className="text-gray-dark mt-2 font-semibold text-xl">
                        {tech}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-12 space-y-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <h3 className="text-4xl font-bold text-white-original">
              Project Overview:
            </h3>
            <p className="text-orange-lighter text-2xl leading-relaxed">
              This project demonstrates the practical application of a modern
              tech stack including Next.js, Prisma, and GraphQL. These
              technologies were utilized to create a robust, efficient, and
              scalable web application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
