import React, { useState } from "react";
import Cube from "../Cube";
import SingleBlog from "../SingleBlog";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  content?: string; // Optional, if you don't have content in your initial posts array
};

const Blog: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [showSingleBlog, setShowSingleBlog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

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
  const handleBlogClick = (post: any) => {
    setSelectedBlog(post);
    setShowSingleBlog(true);
  };

  if (showSingleBlog && selectedBlog) {
    return (
      <SingleBlog
        image={selectedBlog.image}
        date={selectedBlog.date}
        title={selectedBlog.title}
        content="Installing PostgreSQL, Addressing the PGPASSWORD Issue on Windows, and Getting Started with PgAdmin

        If you're diving into the world of databases, PostgreSQL (often referred to as Postgres) is an excellent choice. A powerful, open-source relational database system, Postgres boasts extensibility, SQL compliance, and an impressive feature set. In this guide, we'll walk you through the installation process, address a common issue with setting the PGPASSWORD on Windows, and introduce you to the handy tool, PgAdmin.
        
        1. Installing PostgreSQL
        
        To get started with Postgres:
        
        Download the installer for your operating system from the official website.
        Run the installer and follow the on-screen instructions. You'll be prompted to choose components; for most users, the default components (PostgreSQL Server and PgAdmin) are suitable.
        Set your password for the 'postgres' user during installation. Remember this password, as you'll need it for database operations.
        2. Copying the Main Database
        
        Once installed, you might want to create a backup of your database. The pg_dump tool, bundled with Postgres, lets you do just that. Use the command:
        
        Copy code
        pg_dump -h localhost -U your_username your_database_name > backup.sql
        Save to grepper
        3. PGPASSWORD and Windows Command Prompt
        
        On Windows, a common issue users encounter is setting the PGPASSWORD environment variable in the command prompt. This variable allows you to specify the database password, so you don't have to enter it repeatedly.
        
        However, simply entering:
        
        arduino
        Copy code
        set PGPASSWORD=your_password
        Save to grepper
        in the command prompt might not always work due to potential visibility issues or restrictive permissions.
        
        Solution: Use a .pgpass file.
        
        Create a text file named .pgpass in your user's home directory.
        Add connection details: hostname:port:database:username:password.
        Save and close the file.
        Change the file's permissions to ensure it's readable only by you.
        4. Changing pg_dump to Prompt for a Password
        
        If you prefer not to use the PGPASSWORD variable or the .pgpass file, you can modify the pg_dump command to ask for a password each time:
        
        Copy code
        pg_dump -h localhost -U your_username -W your_database_name > backup.sql
        Save to grepper
        The -W flag forces pg_dump to prompt for the password.
        
        5. Getting Started with PgAdmin
        
        PgAdmin is a powerful graphical interface for managing your Postgres databases.
        
        Open PgAdmin, which was installed with Postgres.
        In the browser pane, right-click on 'Servers' and select 'Create' > 'Server'.
        In the 'General' tab, provide a name for your connection.
        Switch to the 'Connection' tab. Fill in the host (usually localhost), port, database, and username details.
        Click 'Save'. You'll be prompted for your password.
        Using PgAdmin, you can easily manage your databases, tables, schemas, and execute SQL commands with its intuitive interface.
        
        Conclusion
        
        PostgreSQL is a robust database system, and while setting it up and getting started might present a few hitches, especially on Windows, solutions are readily available. With tools like pg_dump and PgAdmin, managing your databases becomes considerably more straightforward. Dive in, and happy data handling!" // You may need to add content to your posts or fetch it differently
        theme={theme}
        onHide={() => {
          setShowSingleBlog(false);
          setSelectedBlog(null);
        }}
      />
    );
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
