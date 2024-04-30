import React, { useState } from "react";
import Cube from "../Cube";
import SingleBlog from "../SingleBlog";
import BlogPost1 from "../BlogPost1";
import BlogPost2 from "../BlogPost2";
import BlogPost3 from "../BlogPost3";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  content: BlogContent; // Updated to use BlogContent interface
};
interface BlogSection {
  title: string;
  content: string;
}

interface BlogContent {
  subtitle: string;
  sections: BlogSection[];
  conclusion: string;
}

const Blog: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [showSingleBlog, setShowSingleBlog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(0);
  const blogPostTemplate = `
  Title:
  "Mastering PostgreSQL: Installation, PGPASSWORD Solutions, and PgAdmin Introduction"
  
  Introduction:
  Diving into the world of databases, PostgreSQL stands out as a robust choice. In this guide, we cover the essentials: installing PostgreSQL, resolving the PGPASSWORD issue on Windows, and exploring PgAdmin, the comprehensive database management tool.
  
  Subsection 1: Installing PostgreSQL
  To embark on your journey with PostgreSQL:
  
  Download the PostgreSQL installer from the official website, suitable for your operating system.
  Run the installer, selecting the default components, including the PostgreSQL Server and PgAdmin.
  Set a secure password for the 'postgres' user; this is crucial for future database operations.
  Subsection 2: Copying the Main Database
  Post-installation, creating a database backup is a wise step. Utilize the pg_dump tool, bundled with PostgreSQL, with the command:
  
  bash
  Copy code
  pg_dump -h localhost -U your_username your_database_name > backup.sql
  Save to grepper
  Subsection 3: PGPASSWORD and Windows Command Prompt
  Setting the PGPASSWORD environment variable in Windows can be tricky. Instead of using the command prompt, a reliable alternative is:
  
  Creating a .pgpass file in your user's home directory.
  Adding the connection details in the format: hostname:port:database:username:password.
  Adjusting the file permissions for security.
  Subsection 4: Changing pg_dump to Prompt for a Password
  If you prefer manual password entry, modify the pg_dump command:
  
  bash
  Copy code
  pg_dump -h localhost -U your_username -W your_database_name > backup.sql
  Save to grepper
  The -W flag ensures that pg_dump prompts for the password each time.
  
  Subsection 5: Getting Started with PgAdmin
  PgAdmin, the intuitive graphical interface for PostgreSQL, simplifies database management:
  
  Open PgAdmin, installed alongside PostgreSQL.
  Create a new server connection via the browser pane.
  Enter the necessary connection details like host, database, username, and save.
  Conclusion:
  PostgreSQL offers a comprehensive database system, and while initial setup on Windows might present challenges, the solutions are straightforward. With pg_dump for backups and PgAdmin for management, your database journey is well-equipped.
`;

  const posts = [
    {
      id: 1,
      image: "./images/post1.jpg",
      date: "12 July 2023",
      title: "Blog Post 1",
      content: {
        subtitle:
          "Installation, PGPASSWORD Solutions, and PgAdmin Introduction",
        sections: [
          {
            title: "Installing PostgreSQL",
            content:
              "To embark on your journey with PostgreSQL: Download the PostgreSQL installer from the official website, suitable for your operating system. Run the installer, selecting the default components, including the PostgreSQL Server and PgAdmin. Set a secure password for the 'postgres' user; this is crucial for future database operations.",
          },
          {
            title: "Copying the Main Database",
            content:
              "Post-installation, creating a database backup is a wise step. Utilize the pg_dump tool, bundled with PostgreSQL, with the command: pg_dump -h localhost -U your_username your_database_name > backup.sql.",
          },
          {
            title: "Additional Section Title",
            content: "Content for the additional section.",
          },
          // Add more sections as needed
        ],
        conclusion:
          "PostgreSQL offers a comprehensive database system, and while initial setup on Windows might present challenges, the solutions are straightforward. With pg_dump for backups and PgAdmin for management, your database journey is well-equipped.",
      },
    },
    {
      id: 2,
      image: "./images/post2.jpg",
      date: "15 July 2023",
      title: "Blog Post 2",
      content: {
        subtitle:
          "Installation, PGPASSWORD Solutions, and PgAdmin Introduction",
        sections: [
          {
            title: "Installing PostgreSQL",
            content:
              "To embark on your journey with PostgreSQL: Download the PostgreSQL installer from the official website, suitable for your operating system. Run the installer, selecting the default components, including the PostgreSQL Server and PgAdmin. Set a secure password for the 'postgres' user; this is crucial for future database operations.",
          },
          {
            title: "Copying the Main Database",
            content:
              "Post-installation, creating a database backup is a wise step. Utilize the pg_dump tool, bundled with PostgreSQL, with the command: pg_dump -h localhost -U your_username your_database_name > backup.sql.",
          },
          {
            title: "Additional Section Title",
            content: "Content for the additional section.",
          },
          // Add more sections as needed
        ],
        conclusion:
          "PostgreSQL offers a comprehensive database system, and while initial setup on Windows might present challenges, the solutions are straightforward. With pg_dump for backups and PgAdmin for management, your database journey is well-equipped.",
      },
    },
    {
      id: 3,
      image: "./images/post3.jpg",
      date: "20 July 2023",
      title: "Blog Post 3",
      content: {
        subtitle:
          "Installation, PGPASSWORD Solutions, and PgAdmin Introduction",
        sections: [
          {
            title: "Installing PostgreSQL",
            content:
              "To embark on your journey with PostgreSQL: Download the PostgreSQL installer from the official website, suitable for your operating system. Run the installer, selecting the default components, including the PostgreSQL Server and PgAdmin. Set a secure password for the 'postgres' user; this is crucial for future database operations.",
          },
          {
            title: "Copying the Main Database",
            content:
              "Post-installation, creating a database backup is a wise step. Utilize the pg_dump tool, bundled with PostgreSQL, with the command: pg_dump -h localhost -U your_username your_database_name > backup.sql.",
          },
          {
            title: "Additional Section Title",
            content: "Content for the additional section.",
          },
          // Add more sections as needed
        ],
        conclusion:
          "PostgreSQL offers a comprehensive database system, and while initial setup on Windows might present challenges, the solutions are straightforward. With pg_dump for backups and PgAdmin for management, your database journey is well-equipped.",
      },
    },
  ];
  const handleBlogClick = (post: any) => {
    setSelectedBlog(post.id);
    setShowSingleBlog(true);
  };

  const renderBlogPost = () => {
    switch (selectedBlog) {
      case 1:
        return (
          <BlogPost3
            onHide={() => {
              setShowSingleBlog(false);
              setSelectedBlog(0);
            }}
            theme={theme}
          />
        );
      case 2:
        return (
          <BlogPost3
            onHide={() => {
              setShowSingleBlog(false);
              setSelectedBlog(0);
            }}
            theme={theme}
          />
        );
      case 3:
        return (
          <BlogPost3
            onHide={() => {
              setShowSingleBlog(false);
              setSelectedBlog(0);
            }}
            theme={theme}
          />
        );
      default:
        return null;
    }
  };

  if (showSingleBlog && selectedBlog) {
    return renderBlogPost();
  }
  return (
    <div
      className={`min-h-screen bg-gray-dark1 flex flex-col items-center p-4 sm:p-8 relative ${
        theme === "dark" ? "bg-gray-dark1" : "bg-white-original"
      }`}
      id="blog-section"
    >
      <div className="absolute top-6 right-8 flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 4} />
        ))}
      </div>

      <div className="text-center w-full sm:w-3/4">
        <div className="relative">
          <h1 className="text-2xl mt-10 sm:text-4xl text-light-orange  font-custom tracking-wider uppercase">
            {"BLOG POSTS"}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 sm:mt-25">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`p-6 rounded text-center shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 ${
                theme === "dark" ? "bg-gray-dark1 " : "bg-gray-light"
              }`}
              onClick={() => handleBlogClick(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="mt-4 text-light-orange font-medium">
                  {post.date}
                </p>
                <h2
                  className={`text-2xl text-gray-light font-bold font-custom mt-2 ${
                    theme === "dark" ? "text-gray-light" : "text-gray-menu"
                  }`}
                >
                  {post.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
