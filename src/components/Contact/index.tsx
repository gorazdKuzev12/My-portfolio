import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ContactMe = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-dark p-8">
      <div className="text-center">
        <div className="relative">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-4xl text-gray-light font-bold font-custom">
            {"<contact me/>"}
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
                <h3 className="text-lg font-bold text-gray-light">LinkedIn</h3>
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
  );
};

export default ContactMe;
