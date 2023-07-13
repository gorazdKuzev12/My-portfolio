import React from "react";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full bg-gray-dark1 h-screen flex flex-col justify-center items-center p-8"
    >
      <div className="text-center">
        <div className="relative">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-4xl text-gray-light font-bold font-custom">
            {"<projects/>"}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 px-8">
          <div className="bg-gray-dark1">
            <img
              src="./images/project1.jpg"
              alt="Project 1"
              className="w-full object-cover"
            />
          </div>
          <div className="bg-gray-dark1">
            <img
              src="./images/project2.jpg"
              alt="Project 2"
              className="w-full object-cover"
            />
          </div>
          <div className="bg-gray-dark1">
            <img
              src="./images/project3.jpg"
              alt="Project 3"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
Projects.displayName = "Projects";

export default Projects;
