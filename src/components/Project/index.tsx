import React from "react";
import { AiOutlineClose, AiFillCheckCircle } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProjectProps = {
  title: string;
  date: string;
  technologies: string[];
  images: string[];
  setSelectedProject: any;
  setShowSelectedProject: any;
};

const Project: React.FC<ProjectProps> = ({
  title,
  date,
  technologies,
  images,
  setSelectedProject,
  setShowSelectedProject,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowSelectedProject(false);
  };

  return (
    <div
      className="w-full h-screen
    fixed inset-0 flex items-center justify-center z-50 p-15 bg-gradient-to-r from-blue-900 to-black bg-opacity-90 backdrop-filter backdrop-blur-xl"
      onClick={handleClose} // Close when clicking outside of the modal
    >
      <div
        className="bg-white text-gray-dark rounded-xl shadow-2xl w-full transform transition-all duration-700 ease-in-out scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent the modal content from triggering the background's onClick
      >
        {" "}
        <div className="relative flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-1/2 p-12 bg-gray-dark text-white-original space-y-8">
            <h2 className="text-5xl font-extrabold text-white-original leading-none border-b-2 border-white-original inline-block pt-3">
              {title}
            </h2>

            <div className="mt-6 w-full h-full">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      className="w-full h-96 rounded shadow-md"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-12 space-y-6 bg-white-original">
            <AiOutlineClose
              className="w-14 h-14 cursor-pointer text-xl text-white bg-black absolute top-6 right-6 rounded-full transform scale-50 origin-center"
              onClick={handleClose}
            />
            <h3 className="text-4xl font-bold text-orange-lighter">
              Project Overview
            </h3>
            <p className="text-gray-dark1 text-2xl leading-relaxed">
              Design Philosophy: The design is playful, using a palette of
              bright and pastel colors that resonate with the joy and innocence
              of childhood. The user interface is intuitive, making it easy even
              for the tech-unacquainted to navigate and find what they're
              looking for. Features: Interactive Product Displays: Items are
              showcased with interactive 3D views, allowing users to get a
              near-tangible feel of the product.
              {/* rest of your overview text */}
            </p>

            <div className="mt-6 flex flex-row items-center justify-center space-x-4 ">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-100 rounded shadow hover:shadow-md transition ease-in-out duration-300"
                >
                  <AiFillCheckCircle className="text-4xl text-orange-light mb-2" />
                  <span className="text-gray-dark1 font-semibold text-xl">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://your-netlify-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 mb-6 bg-light-orange text-white-original py-2 px-4 rounded hover:bg-orange-500 transition ease-in-out duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
