import React from "react";
import Cube from "../Cube";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
const AboutMe: React.FC<Props> = ({ theme, toggleTheme }) => {
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
    <div
      className={`w-full  min-h-screen p-4 sm:p-8 flex flex-col sm:flex-row ${
        theme === "dark" ? "bg-gray-dark" : "bg-gray-light"
      }`}
      id="about-section"
    >
      <div className="text-center flex-grow">
        <div className="relative">
          <h1 className="text-2xl mt-10 sm:text-4xl text-light-orange  font-custom tracking-wider uppercase">
            {"ABOUT ME"}
          </h1>
        </div>
        <div className="relative mt-8">
          <p
            className={`mt-4 px-4 sm:px-8 py-10 text-sm sm:text-base ${
              theme === "dark" ? "text-gray-light" : "text-dark-gray"
            }`}
          >
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
            <h2
              className={`text-2xl sm:text-3xl  font-custom  my-3  tracking-wider ${
                theme === "dark" ? "text-gray-light" : "text-dark-gray"
              }`}
            >
              SKILLS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-4 sm:px-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded ${
                  theme === "dark" ? "bg-gray-dark1 " : "bg-white-original"
                }`}
              >
                <div className="flex justify-between">
                  <h3
                    className={`font-bold font-custom  ${
                      theme === "dark" ? "text-gray-light" : "text-dark-gray"
                    }`}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className={`font-bold font-custom  ${
                      theme === "dark" ? "text-gray-light" : "text-dark-gray"
                    }`}
                  >
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
      <div className="absolute top-30 right-8 flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
