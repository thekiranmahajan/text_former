import React from "react";
import { RiInputCursorMove } from "react-icons/ri";
import { SiHomebridge, SiInformatica } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between bg-gray-900 text-white h-14">
      <a href="/" className=" ml-6">
        <AllIcons icon={<SiHomebridge size="28" />} text={"Home"} />
      </a>
      <div className="flex select-none ">
        <span className="rounded-lg text-green-400 transition-all duration-300 hover:text-white mr-3">
          {<RiInputCursorMove size="25" />}
        </span>
        <a
          href="/"
          className=" flex justflex-row font-Poppins font-bold text-lg   "
        >
          <h1 className=" hover:text-green-400 transition-all duration-300">
            Text Former
          </h1>
        </a>
      </div>

      <a href="/" className="mr-6">
        <AllIcons icon={<SiInformatica size="28" />} text={"About"} />
      </a>
    </nav>
  );
};
const AllIcons = ({ icon, text }) => (
  <div
    className=" flex items-center justify-center 
             h-10 lg:h-12 w-10 lg:w-12 mx-auto shadow-lg
               bg-gray-800 text-green-400
               hover:bg-green-600 hover:text-white 
               rounded-3xl hover:rounded-xl 
               transition-all duration-300 ease-linear
               cursor-pointer group"
  >
    {icon}
    <span
      className="absolute w-auto p-3 min-w-max lg:p-4
        rounded-md shadow-md
        text-green-400 bg-gray-900 
        text-sm lg:text-base  font-bold
        transition-all duration-500 scale-0 
        origin-bottom group-hover:scale-100"
    >
      {text}
    </span>
  </div>
);

export default Navbar;
