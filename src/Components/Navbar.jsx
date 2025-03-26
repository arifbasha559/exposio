import React, { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar w-full flex justify-center items-center px-5 lg:px-20 z-50 sticky top-0 left-0 bg-white/50 backdrop-blur-xs h-fit">
      <div className="flex justify-between items-center max-w-[2080px] w-full">
      <h1 className="text-5xl text-s font-extrabold py-5 font-exposio text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a] title">
        <Link to="/">Exposio</Link>
        
      </h1>
      <button
        className="lg:hidden cursor-pointer text-gray-700 transition-all duration-700 flex focus:outline-none"
        onClick={toggleMenu}
      >
        {!isMenuOpen ? 
        <RiMenu3Fill  className="transition-all duration-700 text-2xl text-black" />        
      :  <RiCloseFill   className="transition-all duration-700 text-3xl text-black" />        
    }
      </button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex lg:space-x-5 absolute items-center flex-col lg:flex-row lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
        >
        <Link
          to="/gallery"
          className="block lg:inline-block pb-4 text-lg font-medium text-gray-700 hover:text-[#ff0081] px-5 py-2 lg:p-0"
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="block lg:inline-block text-lg font-medium text-gray-700 hover:text-[#ff0081] px-5 py-2 lg:p-0"
        >
          About
        </Link>
        <Link
          to="/services"
          className="block lg:inline-block text-lg font-medium text-gray-700 hover:text-[#ff0081] px-5 py-2 lg:p-0"
          >
          Services
        </Link>
        <Link
          to="/contact"
          className="block lg:inline-block text-lg font-medium text-gray-700 hover:text-[#ff0081] px-5 py-2 lg:p-0"
          >
          Contact
        </Link>
      </nav>
          </div>
    </div>
  );
};

export default Navbar;
