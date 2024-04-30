import React, { useCallback } from "react";
import {
  FaArrowLeft,
  FaCopy,
  FaDatabase,
  FaPlay,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const BlogPost3 = ({
  onHide,
  theme,
}: {
  onHide: () => void;
  theme: "dark" | "light";
}) => {
  const command1 =
    "pg_dump -h localhost -U your_username your_database_name > backup.sql";
  const command2 =
    "pg_dump -h localhost -U your_username -W your_database_name > backup.sql";

  const copyToClipboard = useCallback((cmd: string) => {
    navigator.clipboard.writeText(cmd).then(
      () => alert("Command copied to clipboard!"),
      (err) => alert("Failed to copy text: " + err) // Fixed the argument passing here
    );
  }, []);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col items-center p-4 sm:p-8 relative`}
    >
      <div className="absolute top-6 right-8 cursor-pointer" onClick={onHide}>
        <FaArrowLeft
          size={24}
          style={{ color: theme === "dark" ? "#FF4500" : "#FF4500" }}
        />
      </div>
      <div className="text-center w-full sm:w-3/4">
        <div className="p-6 rounded shadow-lg transition-all duration-500 ease-in-out transform bg-white dark:bg-gray-800">
          <h1
            className={`text-4xl font-bold tracking-wide mt-2 mb-10 ${
              theme === "dark" ? "gradient-text" : "gradient-text"
            }`}
          >
            <FaDatabase
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Mastering PostgreSQL: A Personal Journey through Installation,
            Overcoming PGPASSWORD Challenges, and Starting with PgAdmin
          </h1>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            {/* <img
              src={`./images/postgres-logo.png`}
              alt="PostgreSQL Logo"
              style={{ maxWidth: "450px", display: "block", margin: "0 auto" }} // Inline styles for TypeScript
            /> */}
            Embarking on the journey of mastering PostgreSQL can seem daunting
            at first. It's a powerful, robust database system that is widely
            respected for its reliability and comprehensive features. In this
            post, I’ll walk you through my own experiences with installing
            PostgreSQL, tackling the notorious PGPASSWORD challenge on Windows,
            and making my first strides with PgAdmin.
          </p>
          <h2
            className={`text-3xl mt-16  ${
              theme === "dark" ? "gradient-text" : "gradient-text"
            }`}
          >
            <FaTools
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Installing PostgreSQL
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            When I decided to dive into PostgreSQL, my first step was to install
            it on my system. Here’s how I did it: I visited the official
            PostgreSQL website to download the latest installer, making sure it
            was the right version for my Windows setup. Running the installer
            was straightforward. I opted for the default components, which
            included the PostgreSQL Server and PgAdmin. During installation, I
            was prompted to set a password for the 'postgres' user, which is
            essential for securing your database operations.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Command 1:</strong> <code>{command1}</code>
            <FaCopy
              className="inline ml-2 text-orange-500 cursor-pointer"
              size={18}
              onClick={() => copyToClipboard(command1)}
              title="Copy to clipboard"
            />
          </div>
          <h2
            className={`text-3xl mt-12 ${
              theme === "dark" ? "gradient-text" : "text-gray-800"
            }`}
          >
            <MdSecurity
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Facing the PGPASSWORD Challenge
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            Here’s where things got a bit tricky. On Windows, setting up the
            PGPASSWORD environment variable was a hassle, and I struggled with
            it. After much trial and error, I found an alternative that worked
            perfectly: I created a .pgpass file in my user's home directory,
            filled it with the necessary connection details in the format:
            hostname:port:database:username:password. I ensured to adjust the
            file permissions to keep it secure, protecting my database
            credentials.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Command 2:</strong> <code>{command2}</code>
            <FaCopy
              className="inline ml-2 text-orange-500 cursor-pointer"
              size={18}
              onClick={() => copyToClipboard(command2)}
              title="Copy to clipboard"
            />
          </div>
          <h2
            className={`text-3xl mt-16 ${
              theme === "dark" ? "gradient-text" : "text-gray-800"
            }`}
          >
            <FaPlay
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Getting Started with PgAdmin
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            PgAdmin is a fantastic tool that comes with PostgreSQL, offering a
            graphical interface to manage your databases more intuitively: I
            opened PgAdmin, which was installed alongside PostgreSQL. In the
            browser pane, I set up a new server connection. I entered the
            necessary connection details such as host, database, and username,
            and saved them.
          </p>
          <p
            className={`mt-6 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            Tackling PostgreSQL on Windows presented its unique challenges,
            particularly around managing passwords securely. However, the sense
            of accomplishment when everything starts working as intended is
            incredibly rewarding. With PgAdmin by my side and a reliable backup
            process in place using pg_dump, I feel well-equipped on my database
            management journey. I hope my experiences help you as you set up
            your own PostgreSQL environment. Dive in, and don't be afraid to
            tackle the challenges head-on—it's all part of becoming a master at
            managing your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost3;
