import React from "react";
import Cube from "../Cube";

const AboutMe = React.forwardRef((props, ref) => {
  const skills = [
    { name: "HTML5", percent: 100 },
    { name: "CSS3 - Tailwind - Style components", percent: 90 },
    { name: "Next.js", percent: 100 },
    { name: "React", percent: 90 },
    { name: "TypeScript.js", percent: 100 },
    { name: "JavaScript", percent: 100 },
    { name: "Node.js", percent: 80 },
    { name: "GraphQL", percent: 70 },
    { name: "Prisma", percent: 90 },
    { name: "MySql", percent: 80 },
  ];
  return (
    <div className="w-full bg-gray-dark min-h-screen p-4 sm:p-8 flex flex-col sm:flex-row">
      <div className="text-center flex-grow">
        <div className="relative">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-4xl sm:text-5xl text-gray-light font-bold font-custom">
            {"<about me/>"}
          </h1>
        </div>
        <div className="relative mt-8">
          <p className="text-gray-light mt-4 px-4 sm:px-8 py-10 text-sm sm:text-base">
            I am a dedicated Fullstack Developer with 3 years of experience. I
            have a degree in Computer Science from the University of Maribor. I
            have honed my skills in JavaScript, ReactJS, Next.js, and Gatsby.js,
            and I am proficient in leveraging these technologies to build
            impressive, modern web designs. I also have a deep understanding of
            UI/UX design principles. My experience extends to using TailwindCSS
            frameworks to enable efficient and responsive web development. In
            the realm of Back-end Development, I have built scalable solutions
            using Node.js and effectively handled data through GraphQL and
            Prisma.
          </p>
          <div className="relative mt-8">
            <div className="w-8 mx-auto h-1 bg-gray-light mb-1"></div>
            <h2 className="text-2xl sm:text-3xl font-bold font-custom text-gray-light my-3">
              {"<skills/>"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-4 sm:px-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-dark1 p-4 rounded">
                <div className="flex justify-between">
                  <h3 className="font-bold font-custom text-gray-light">
                    {skill.name}
                  </h3>
                  <span className="font-bold font-custom text-gray-light">
                    {skill.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-light rounded h-2 mt-2">
                  <div
                    className="bg-light-orange rounded h-2"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-30 right-10 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 1} />
        ))}
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
