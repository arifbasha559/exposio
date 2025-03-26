import React from "react";
import { FaInstagram, FaRegCopyright } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-8 mt-16 ">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-gray-600 text-sm md:text-base font-light flex gap-2 items-center text-center md:text-left">
          <FaRegCopyright className="text-gray-500" />
          {new Date().getFullYear()}
          <span className="font-exposio font-bold text-gray-800">
            Exposio Gallery 
          </span>{" "}
          - Moments in Light. All rights reserved.
        </p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/arif_off04/"
            className="text-gray-500 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:arifbasha559@gmail.com"
            className="text-gray-500 hover:text-pink-500 transition duration-300"
          >
            <MdMail className="text-2xl md:text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
