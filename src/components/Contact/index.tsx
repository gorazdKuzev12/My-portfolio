import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Cube from "../Cube";

const ContactMe = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-gray-dark p-4 sm:p-16 relative">
      <div className="absolute top-6 right-8 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 3} />
        ))}
      </div>

      <div className="text-center w-full sm:w-3/4">
        <div className="relative ">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-2xl sm:text-4xl text-gray-light font-bold font-custom">
            {"<contact me/>"}
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-center text-center mt-20 sm:mt-40 space-y-10 sm:space-x-10">
          <div className="space-y-10">
            <div className="flex items-center text-gray-light space-x-4 p-3 bg-white shadow-lg">
              <div className="p-3 rounded-full">
                <FiMail size={32} className="text-light-orange" />
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
                <h3 className="text-lg font-bold text-gray-light">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gorazd-kuzev">
                  Gorazd Kuzev
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <form
              action=""
              method="post"
              className="space-y-5"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="flex flex-col sm:space-x-4 sm:flex-row space-y-4 sm:space-y-0">
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
  );
};

export default ContactMe;
