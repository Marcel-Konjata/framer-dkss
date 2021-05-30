import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center p-3">
      <span className="mr-1">Copyrichtig</span>

      <span className="font-bold">&copy;{new Date().getFullYear()}</span>
      <span className="ml-1"> Marcel Konjata</span>
    </div>
  );
};

export default Footer;
