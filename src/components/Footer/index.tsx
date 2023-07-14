import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-dark p-4 sm:p-8">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-light font-medium leading-5">
          © {new Date().getFullYear()} GORAZD KUZEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
