import React from "react";
import {
  FaArrowLeft,
  FaDatabase,
  FaPlay,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const BlogPost2 = ({
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
            Handling Localization and Dynamic Pathnames in Next.js 14
          </h1>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            Managing multiple languages and localized pathnames in a Next.js
            application can be a challenging task. Different languages often
            require unique URL structures, and dynamic content can complicate
            matters further. In this post, I'll share how I tackled these issues
            by creating a script to generate localized paths dynamically.
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
            Problem: Localized Pathnames for Dynamic Content
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            In my Next.js 14 application, I needed to support multiple languages
            with different path structures. For instance:
          </p>
          <ul
            className={`list-disc list-inside ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <li>English: en/magazine/bag</li>
            <li>German: de/magazin/rugzag</li>
          </ul>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            The challenge was that while the main path (magazine in English and
            magazin in German) could be defined, the dynamic part (bag in
            English and rugzag in German) required translation based on
            available data.
          </p>
          <h2
            className={`text-3xl mt-12 ${
              theme === "dark" ? "gradient-text" : "text-gray-800"
            }`}
          >
            <MdSecurity
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Solution: Generating Localized Paths Dynamically
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            To solve this, I created a script that fetches blog post data from a
            CMS (Directus in this case) and generates the necessary path
            configurations. This script ensures that each language has the
            correct path structure for both static and dynamic segments.
          </p>
          <h2
            className={`text-3xl mt-16 ${
              theme === "dark" ? "gradient-text" : "text-gray-800"
            }`}
          >
            <FaPlay
              className="inline mr-2"
              color={theme === "dark" ? "#FF4500" : "#FF4500"}
            />
            Step-by-Step Breakdown
          </h2>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>1. Define Languages and Their Path Structures</strong>
            <br />I defined a set of supported languages with their respective
            path structures.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Code:</strong>
            <pre className="whitespace-pre-wrap break-all text-left">
              <code>{`const languages = {
  en: { name: "English", subFolder: "en", magazine: "magazine" },
  de: { name: "Deutsch", subFolder: "de", magazine: "magazin" },
  es: { name: "Spanish", subFolder: "es", magazine: "repositorio" },
  fi: { name: "Suomi", subFolder: "fi", magazine: "tietopankki" },
  fr: { name: "French", subFolder: "fr", magazine: "magazine" },
  no: { name: "Norsk", subFolder: "no", magazine: "magasin" },
  se: { name: "Svenska", subFolder: "se", magazine: "magasin" },
  ru: { name: "Russia", subFolder: "ru", magazine: "blog" },
};`}</code>
            </pre>
          </div>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>2. Fetch Blog Posts with Translations</strong>
            <br />
            Using a GraphQL query, I fetched the blog posts and their
            translations.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Code:</strong>
            <pre className="whitespace-pre-wrap break-all text-left">
              <code>{`const GET_BLOG_POSTS = \`
  query getBlogPosts {
    blog_posts {
      slug
      category {
        name
      }
      translations {
        language_code
        slug
      }
    }
  }
\`;

async function fetchBlogPosts() {
  const response = await fetch("https://yourdirectus.app/graphql", {
    method: "POST",
    headers: {
      "Authorization": \`Bearer \${process.env.DIRECTUS_TOKEN}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_BLOG_POSTS }),
  });

  if (!response.ok) {
    throw new Error(\`Network error: \${response.statusText}\`);
  }

  const { data } = await response.json();
  return data.blog_posts;
}`}</code>
            </pre>
          </div>
          <p
            className={`mt-10 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            <strong>3. Generate Localized Paths</strong>
            <br />I generated localized paths for each blog post and language.
          </p>
          <div
            className={`bg-light-orange p-3 mt-10 rounded border-l-4 border-orange-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaTerminal className="inline mr-2 text-orange-500" size={18} />
            <strong>Code:</strong>
            <pre className="whitespace-pre-wrap break-all text-left bg-gray-800 text-gray-200 p-4 rounded-lg">
              <code>
                {`<span class="text-purple-400">async function</span> generateMagazinePaths() {
  <span class="text-blue-400">const</span> blogPosts = <span class="text-purple-400">await</span> fetchBlogPosts();
  <span class="text-blue-400">const</span> paths = {};

  blogPosts.forEach(({ slug, translations }) => {
    paths[<span class="text-green-400">\`/magazine/\${slug}\`</span>] = {};

    Object.keys(languages).forEach((langKey) => {
      <span class="text-blue-400">const</span> magazineSlug = languages[langKey].magazine;
      <span class="text-blue-400">const</span> languageSubFolder = languages[langKey].subFolder;
      <span class="text-blue-400">let</span> localizedSlug = slug;

      <span class="text-purple-400">if</span> (langKey !== <span class="text-green-400">"en"</span>) {
        <span class="text-blue-400">const</span> translation = translations.find((t) => t.language_code === langKey);
        <span class="text-purple-400">if</span> (translation && translation.slug) {
          localizedSlug = translation.slug;
        }
      }

      paths[<span class="text-green-400">\`/magazine/\${slug}\`</span>][languageSubFolder] = <span class="text-green-400">\`/\${magazineSlug}/\${localizedSlug}\`</span>;
    });
  });

  fs.writeFileSync(<span class="text-green-400">"magazinePaths.json"</span>, JSON.stringify(paths, <span class="text-purple-400">null</span>, 2));
}

generateMagazinePaths().then(() =>
  console.log(<span class="text-green-400">"Magazine paths generated successfully."</span>)
);`}
              </code>
            </pre>
          </div>
          <p
            className={`mt-6 text-lg ${
              theme === "dark" ? "text-gray-light" : "text-gray-700"
            }`}
          >
            By dynamically generating localized paths based on CMS data, I was
            able to effectively manage multiple languages and their unique URL
            structures in my Next.js 14 application. This approach ensures that
            all dynamic content is properly localized, providing a seamless
            experience for users in different regions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
