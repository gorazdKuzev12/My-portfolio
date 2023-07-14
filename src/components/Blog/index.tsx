import React from "react";
import Cube from "../Cube";

const Blog = () => {
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
  return (
    <div className="min-h-screen bg-gray-dark1 flex flex-col items-center p-4 sm:p-8 relative">
      <div className="absolute top-6 right-8 flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 4} />
        ))}
      </div>

      <div className="text-center w-full sm:w-3/4">
        <div className="relative">
          <div className="w-12 mx-auto h-1 bg-light-orange mb-2"></div>
          <h1 className="text-2xl sm:text-4xl text-gray-light font-bold font-custom">
            {"<blog posts/>"}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 sm:mt-40">
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
              <p className="mt-4 text-light-orange font-medium">{post.date}</p>
              <h2 className="text-2xl text-gray-light font-bold font-custom mt-2">
                {post.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
