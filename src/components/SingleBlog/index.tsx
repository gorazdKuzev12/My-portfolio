import React from "react";
import { FaArrowLeft } from "react-icons/fa";
interface BlogSection {
  title: string;
  content: string;
}

interface BlogContent {
  subtitle: string;
  sections: BlogSection[];
  conclusion: string;
}

type SingleBlogProps = {
  image: string;
  date: string;
  title: string;
  content: BlogContent; // Updated to use BlogContent interface
  theme: "dark" | "light";
  onHide: () => void; // New prop to handle hiding the SingleBlog
};

const SingleBlog: React.FC<SingleBlogProps> = ({
  image,
  date,
  title,
  content,
  theme,
  onHide,
}) => {
  return (
    <div
      className={`min-h-screen bg-gray-dark1 flex flex-col items-center p-4 sm:p-8 relative ${
        theme === "dark" ? "bg-gray-dark1" : "bg-white-original"
      }`}
    >
      <div className="absolute top-6 right-8 cursor-pointer" onClick={onHide}>
        <FaArrowLeft size={24} style={{ color: "white" }} />
      </div>
      <div className="text-center w-full sm:w-3/4">
        <div className="relative p-6 rounded text-center shadow-md transition-all duration-500 ease-in-out transform">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <p className="mt-4 text-light-orange font-medium">{date}</p>
            <h2
              className={`text-3xl text-gray-light font-bold font-custom mt-2 ${
                theme === "dark" ? "text-gray-light" : "text-gray-menu"
              }`}
            >
              {title}
            </h2>
            <h3
              className={`text-2xl mt-4 ${
                theme === "dark" ? "text-gray-light" : "text-gray-dark1"
              }`}
            >
              {content.subtitle}
            </h3>
            {content.sections.map((section, index) => (
              <div key={index}>
                <h4
                  className={`text-xl mt-4 ${
                    theme === "dark" ? "text-gray-light" : "text-gray-dark1"
                  }`}
                >
                  {section.title}
                </h4>
                <p
                  className={`mt-2 ${
                    theme === "dark" ? "text-gray-light" : "text-gray-dark1"
                  }`}
                >
                  {section.content}
                </p>
              </div>
            ))}
            <p
              className={`mt-6 text-lg ${
                theme === "dark" ? "text-gray-light" : "text-gray-dark1"
              }`}
            >
              {content.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
