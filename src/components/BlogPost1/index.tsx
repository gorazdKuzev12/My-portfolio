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

const BlogPost1 = ({
  onHide,
  theme,
}: {
  onHide: () => void;
  theme: "dark" | "light";
}) => {
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
            Navigating and Paginating with Next.js 14: Handling Search Params,
            Params, and Server Components
          </h1>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            Next.js 14 introduces several powerful features that can
            significantly enhance your development workflow. In this blog post,
            I'll share my experiences and solutions for handling search
            parameters, dynamic routing with params, server components, and
            implementing pagination, along with filters.
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
            Accessing Search Params and Params
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>Problem:</strong> Dynamically fetching and filtering data
            based on URL parameters and search parameters can be tricky.
            <br />
            <strong>Solution:</strong> Next.js provides robust support for
            accessing URL parameters (params) and search parameters
            (searchParams). By leveraging these, I dynamically fetched and
            filtered content.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Example:</strong> Extracting URL parameters and search
            parameters in a Next.js component.
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
            Filtering Data with Search Params
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>Problem:</strong> Integrating search parameters for
            filtering content without overcomplicating the code.
            <br />
            <strong>Solution:</strong> By conditionally checking for
            searchParams.category, I created a filter that applied only when a
            category was selected. This made the code cleaner and the filtering
            process efficient.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Example:</strong> Setting up a filter based on
            searchParams.category if it exists, otherwise using a default
            filter.
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
            Implementing Pagination in Server Components
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>Problem:</strong> Efficiently handling large datasets with
            pagination on the server to minimize client load.
            <br />
            <strong>Solution:</strong> Calculating pagination on the server,
            fetching only the required data for each page, and determining the
            total number of pages based on the data.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Example:</strong> Fetching data with pagination parameters
            (limit and skip) and determining numOfPages.
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
            Passing Parameters Between Pages
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>Problem:</strong> Maintaining state and parameters across
            page navigations, especially with filters and pagination.
            <br />
            <strong>Solution:</strong> Utilizing Next.js's routing capabilities,
            I passed parameters through the URL, ensuring smooth navigation and
            state persistence.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Example:</strong> Using Next.js's router.push to navigate
            between pages with the current parameters intact.
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
            Dynamic Routing with Pagination and Filters
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>Problem:</strong> Ensuring dynamic routes work seamlessly
            with pagination and filters without causing inconsistencies.
            <br />
            <strong>Solution:</strong> Combining dynamic routes with search
            parameters, I fetched and displayed data correctly while keeping the
            user experience smooth and intuitive.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Example:</strong> Navigating through pages and applying
            filters while maintaining the correct state.
          </div>
          <p
            className={`mt-6 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            Next.js 14 has significantly simplified handling dynamic routes,
            search params, and server-side pagination. These features, when used
            effectively, can greatly enhance the performance and user experience
            of your application. By addressing common challenges and leveraging
            Next.js's robust capabilities, you can build dynamic, responsive,
            and efficient web applications with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost1;
