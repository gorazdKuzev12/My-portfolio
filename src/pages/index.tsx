import React from "react";

export default function Home() {
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
          <h1 className="text-4xl text-gray-light font-bold font-custom border-t-4 border-light-orange inline-block">
            About me
          </h1>
          <h2 className="text-2xl font-medium font-custom mt-4  text-gray-light">
            My bio
          </h2>
          <p className="text-gray-light mt-4">
            Specializing in Front-end Development with a Computer Science degree
            from the University of Maribor, I bring to the table expert
            knowledge in JavaScript, ReactJS, Next.js, and Gatsby.js. I have
            hands-on experience in HTML5 and CSS3 for creating modern,
            responsive web designs and am proficient in UI/UX design, ensuring
            seamless user experiences across devices. I am skilled in using
            TailwindCSS frameworks for efficient and responsive web development.
            <br />
            <br />
            As for Back-end Development, I am adept in using Node.js for
            server-side programming, ensuring reliable and scalable solutions. I
            have expertise in GraphQL and Prisma for efficient API development
            and data handling.
          </p>
          <h2 className="text-2xl font-bold font-custom mt-4 border-t-4 border-light-orange inline-block text-gray-light">
            My Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              "React",
              "JavaScript",
              "Next.js",
              "Gatsby.js",
              "HTML5",
              "CSS3",
              "Node.js",
              "GraphQL",
            ].map((skill, index) => (
              <div key={index} className="bg-gray-dark1 p-4 rounded">
                <h3 className="font-bold font-custom text-gray-light">
                  {skill}
                </h3>
                <div className="w-full bg-light-orange rounded h-2 mt-2">
                  <div
                    className="bg-orange-500 rounded h-2"
                    style={{ width: "90%" }}
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
