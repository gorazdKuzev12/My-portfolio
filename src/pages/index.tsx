import React from "react";
export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Menu */}
      <div className="w-1/10 bg-gray-900 shadow-lg flex flex-col justify-center items-center text-white">
        <div className="text-xl font-bold mb-2">Gorazd Kuzev</div>
        <div className="flex flex-col">
          <a href="#" className="py-2">
            About me
          </a>
          <a href="#" className="py-2">
            Projects
          </a>
          <a href="#" className="py-2">
            Blog
          </a>
          <a href="#" className="py-2">
            Contact
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-9/10 bg-gray-800 flex flex-col justify-center items-center text-white">
        <div className="flex items-center mb-4">
          <div className="w-1/6 h-px bg-orange-500 mr-4"></div>
          <div>
            <div className="text-2xl font-bold">Gorazd Kuzev</div>
            <div className="text-lg">Web Developer</div>
          </div>
        </div>
        <img
          src="/profile-pic.jpg"
          className="w-1/3 h-auto rounded-full"
          alt="Gorazd Kuzev profile picture"
        />
      </div>
    </div>
  );
}
