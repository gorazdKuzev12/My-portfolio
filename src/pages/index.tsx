import React from "react";

export default function Home() {
  const skills = [
    { name: "React", percent: 90 },
    { name: "Next.js", percent: 100 },
    { name: "Gatsby.js", percent: 60 },
    { name: "JavaScript", percent: 100 },
    { name: "HTML5", percent: 100 },
    { name: "CSS3", percent: 90 },
    { name: "Node.js", percent: 90 },
    { name: "GraphQL", percent: 70 },
  ];

  return (
    <div className="bg-gray-900 h-screen">
      <div className="w-full bg-gray-dark shadow-lg flex flex-row justify-between items-center text-gray-light p-8">
        <div className="text-2xl font-bold ml-4 font-custom">GORAZD KUZEV</div>
        <div className="flex flex-row space-x-8">
          <a href="#" className="p-3 text-gray font-medium font-custom">
            About me
          </a>
          <a href="#" className="p-3 text-gray font-medium font-custom">
            Projects
          </a>
          <a href="#" className="p-3 text-gray font-medium font-custom">
            Blog
          </a>
          <a href="#" className="p-3 text-gray font-medium font-custom">
            Contact
          </a>
        </div>
      </div>

      <div className="h-full flex">
        <div className="w-2/4 bg-gray-dark1 flex flex-col justify-center items-start text-gray-light p-8 space-y-8">
          <div className="border-l-4 border-light-orange pl-4">
            <h1 className="text-6xl font-bold font-custom">GORAZD KUZEV</h1>
            <h2 className="text-4xl font-medium font-custom">WEB DEVELOPER</h2>
          </div>
          <a
            href="#"
            className="bg-transparent border-light-orange border-2 text-light-orange px-4 py-2 rounded font-custom"
          >
            About me
          </a>
        </div>

        <div className="w-2/4 bg-gray-dark1 flex flex-col justify-center items-start p-8">
          <div className="w-2/3 h-2/3">
            <img
              src="./images/profile.jpg"
              alt="Description"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-dark h-screen p-8">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
            <h1 className="text-4xl text-gray-light font-bold font-custom">
              About me
            </h1>
          </div>
          <div className="relative mt-8">
            <div className="w-8 mx-auto h-1 bg-gray-light mb-2"></div>
            <h2 className="text-2xl font-medium font-custom text-gray-light">
              My journey
            </h2>
          </div>
          <p className="text-gray-light mt-4 px-8 py-10">
            I am a dedicated Front-end Developer with a degree in Computer
            Science from the University of Maribor. I have honed my skills in
            JavaScript, ReactJS, Next.js, and Gatsby.js, and I am proficient in
            leveraging these technologies to build impressive, modern web
            designs. I also have a deep understanding of UI/UX design
            principles, ensuring seamless user experiences across devices. My
            experience extends to using TailwindCSS frameworks to enable
            efficient and responsive web development. In the realm of Back-end
            Development, I have built scalable solutions using Node.js and
            effectively handled data through GraphQL and Prisma.
          </p>

          <div className="relative mt-8">
            <div className="w-8 mx-auto h-1 bg-gray-light mb-1"></div>
            <h2 className="text-2xl font-bold font-custom text-gray-light my-3">
              My Skills
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 px-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-dark1 p-4 rounded">
                <div className="flex justify-between">
                  <h3 className="font-bold font-custom text-gray-light">
                    {skill.name}
                  </h3>
                  <span>{skill.percent}%</span>
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
    </div>
  );
}
