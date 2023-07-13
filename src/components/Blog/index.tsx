import React from "react";

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
