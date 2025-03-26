import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full flex px-5 lg:px-20 sticky top-0 left-0 bg-white/50 backdrop-blur-xs h-fit ">
      <h1 className="text-5xl text-s font-extrabold  py-5 font-exposio text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a] title ">
        <Link to="/"> Exposio</Link>
      </h1>
    </div>
  );
};

export default Navbar;
