import React from "react";
import { RiInputCursorMove } from "react-icons/ri";

function Navbar() {
  return (
    <nav className=" flex items-center justify-center bg-gray-900 text-white h-10 scrollbar-hide">
      <span className="rounded-lg text-green-500 mr-3">
        {<RiInputCursorMove size="25" />}
      </span>
      <a href="/">
      <h1 className=" flex justflex-row select-none font-Poppins font-bold text-lg ">
        Text Former
      </h1>
      </a>
    </nav>
  );
}

export default Navbar;
