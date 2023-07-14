import React from "react";
import Cube from "../Cube";

const Projects = () => {
  const projectData = [
    { id: 1, title: "Nonstop Dogwear", date: "2022-07-12" },
    { id: 2, title: "Ida Kids Store", date: "2022-08-15" },
    { id: 3, title: "Ida Dashboard", date: "2022-09-01" },
  ];

  return (
    <div className="w-full bg-gray-dark1 min-h-screen flex flex-col p-4 sm:p-8 relative">
      <div className="absolute top-6 right-8 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 2} />
        ))}
      </div>
      <div className="text-center">
        <div className="relative">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-2xl sm:text-4xl text-gray-light font-bold font-custom tracking-wide">
            {"<projects/>"}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 sm:mt-48 px-4 sm:px-8">
          {projectData.map(({ id, title, date }) => (
            <div
              className="bg-gray-dark1 relative group cursor-pointer"
              key={id}
              style={{ minHeight: "200px" }}
            >
              <img
                src={`./images/project${id}.jpg`}
                alt={title}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:blur-sm"
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
      </div>
    </div>
  );
};

export default Projects;
