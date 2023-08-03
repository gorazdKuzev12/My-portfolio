import React, { useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Cube from "../Cube";

const ContactMe = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center bg-gray-dark p-10 sm:p-16 relative"
      id="contact-section"
    >
      <div className="absolute top-6 right-8 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 3} />
        ))}
      </div>

      <div className="text-center w-full sm:w-3/4">
        <div className="relative">
          <h1 className="text-2xl mt-10 sm:text-4xl text-light-orange font-custom tracking-wider uppercase">
            {"CONTACT ME"}
          </h1>
          <p className="mt-5 text-base font-light gradient-text tracking-wider">
            {"Let's start an exciting journey together."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center text-center sm:mt-20 space-y-2 sm:space-x-20 items-start">
          <div className="space-y-16">
            <div className="flex items-center text-gray-light space-x-6 p-5 bg-white shadow-lg hover:group">
              <div className="p-3 rounded-full group-hover:text-orange-lighter">
                <FiMail
                  size={32}
                  className="transition-colors duration-300 text-light-orange"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-light">Email</h3>
                <a
                  href="mailto:gorazd.kuzev10@gmail.com"
                  className=" text-gray-light"
                >
                  gorazd.kuzev10@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center text-gray-light space-x-6 p-5 bg-white shadow-lg hover:group">
              <div className="p-3 rounded-full group-hover:text-light-orange">
                <FiGithub
                  size={32}
                  className="transition-colors duration-300 text-light-orange"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-light">Github</h3>
                <a
                  href="https://github.com/gorazdkuzev122"
                  className=" text-gray-light"
                >
                  gorazdkuzev122
                </a>
              </div>
            </div>

            <div className="flex items-center text-light-gray space-x-6 p-5 bg-white shadow-lg hover:group">
              <div className="p-3 rounded-full group-hover:text-light-orange">
                <FiLinkedin
                  size={32}
                  className="transition-colors duration-300 text-light-orange"
                />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-light">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/gorazd-kuzev"
                  className=" text-gray-light"
                >
                  Gorazd Kuzev
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <form
              action=""
              method="post"
              className="space-y-10"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="flex flex-col sm:space-x-4 sm:flex-row space-y-6 sm:space-y-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 rounded text-lg focus:border-light-orange focus:ring-2 focus:ring-light-orange focus:outline-none"
                  style={{
                    border: "1px solid #d3dce6",
                    backgroundColor: "transparent",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 rounded text-lg focus:border-light-orange focus:ring-2 focus:ring-light-orange focus:outline-none"
                  style={{
                    border: "1px solid #d3dce6",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={10}
                className="w-full px-4 py-4 rounded text-lg focus:border-light-orange focus:ring-2 focus:ring-light-orange focus:outline-none"
                style={{
                  border: "1px solid #d3dce6",
                  backgroundColor: "transparent",
                }}
              ></textarea>
              <button
                type="submit"
                className="px-8 py-3 w-full rounded font-custom text-light-orange border-2 border-light-orange bg-transparent hover:border-orange-lighter hover:text-orange-lighter transition-all duration-300"
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
