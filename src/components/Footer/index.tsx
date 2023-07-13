import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-dark p-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-light font-medium">
          © {new Date().getFullYear()} GORAZD KUZEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
