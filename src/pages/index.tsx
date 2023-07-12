import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi"; // import needed icons
import { IoMdSunny, IoMdMoon } from "react-icons/io";

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
  const posts = [
    {
      id: 1,
      image: "./images/post1.jpg",
      date: "12 July 2023",
      title: "Blog Post 1",
    },
    {
      id: 2,
      image: "./images/post2.jpg",
      date: "15 July 2023",
      title: "Blog Post 2",
    },
    {
      id: 3,
      image: "./images/post3.jpg",
      date: "20 July 2023",
      title: "Blog Post 3",
    },
  ];
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
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
          <button
            onClick={toggleTheme}
            className={`p-3 ${
              theme === "dark"
                ? "text-gray font-medium font-custom"
                : "text-gray font-medium font-custom"
            }`}
          >
            {theme === "dark" ? (
              <IoMdMoon size={24} />
            ) : (
              <IoMdSunny size={24} />
            )}
          </button>
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

      <div className="w-full bg-gray-dark1 h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
            <h1 className="text-4xl text-gray-light font-bold font-custom">
              My Projects
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
      <div className="w-full h-screen flex justify-center items-center bg-gray-dark p-8">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
            <h1 className="text-4xl text-gray-light font-bold font-custom">
              Contact Me
            </h1>
          </div>

          <div className="flex flex-row w-full justify-center text-center mt-8">
            <div className="w-1/2 space-y-8">
              <div className="flex items-center text-gray-light space-x-4">
                <div className="bg-white p-2 rounded-full">
                  <FiMail size={32} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-light ">Email</h3>
                  <a href="mailto:gorazd.kuzev10@gmail.com">
                    gorazd.kuzev10@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-light space-x-4">
                <div className="bg-white p-2 rounded-full">
                  <FiGithub size={32} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-light ">Github</h3>
                  <a href="https://github.com/gorazdkuzev122">gorazdkuzev122</a>
                </div>
              </div>
              <div className="flex items-center text-light-gray space-x-4">
                <div className="bg-white p-2 rounded-full text-gray-light">
                  <FiLinkedin size={32} />
                </div>
                <div className="text-left text-gray-light">
                  <h3 className="text-lg font-bold text-gray-light">
                    LinkedIn
                  </h3>
                  <a href="https://www.linkedin.com/in/gorazd-kuzev">
                    Gorazd Kuzev
                  </a>
                </div>
              </div>
            </div>

            <div className="w-1/2 space-y-8">
              <form action="" method="post" className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-1/2 px-4 py-2 border-gray-light rounded bg-transparent"
                    // style={{ backgroundColor: "transparent !important" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-1/2 px-4 py-2 border-gray-light rounded bg-transparent"
                    // style={{ backgroundColor: "transparent !important" }}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border-gray-light rounded bg-transparent"
                  // style={{ backgroundColor: "transparent !important" }}
                ></textarea>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-dark-gray text-light-gray"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-gray-dark1  flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
            <h1 className="text-4xl text-gray-light font-bold font-custom">
              My Blog Posts
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-gray-dark1 rounded text-center"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded"
                />
                <p className="mt-4 text-light-orange font-medium">
                  {post.date}
                </p>
                <h2 className="text-2xl text-gray-light font-bold font-custom mt-2">
                  {post.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-dark p-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-light font-medium">
            © {new Date().getFullYear()} GORAZD KUZEV. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
