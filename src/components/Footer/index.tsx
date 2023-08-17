import React from "react";
type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const Footer: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <footer
      className={`p-4 sm:p-8 ${
        theme === "dark" ? "bg-gray-dark" : "bg-gray-menu"
      }`}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-light font-medium leading-5">
          © {new Date().getFullYear()} GORAZD KUZEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
