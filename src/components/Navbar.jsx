import React from "react";
import { RiInputCursorMove } from "react-icons/ri";
import { SiHomebridge, SiInformatica } from "react-icons/si";

const Navbar = ()=>  {
  return (
    <nav className=" flex items-center justify-between bg-gray-900 text-white h-14">
      <a href="/" className="">
        <AllIcons icon={<SiHomebridge size="28" />} text={"Home"} />
      </a>
      <div className="flex">
        <span className="rounded-lg text-green-500 mr-3">
          {<RiInputCursorMove size="25" />}
        </span>
        <a href="/">
          <h1 className=" flex justflex-row select-none font-Poppins font-bold text-lg ">
            Text Former
          </h1>
        </a>
      </div>

      <a href="/" className="">
        <AllIcons icon={<SiInformatica size="28" />} text={"About"} />
      </a>
    </nav>
  );
}
const AllIcons = ({ icon, text }) => (
  <div
    className="relative flex items-center justify-center 
             h-10 lg:h-12 w-10 lg:w-12 mb-5 mx-auto shadow-lg
               bg-gray-800 text-green-500
               hover:bg-green-600 hover:text-white 
               rounded-3xl hover:rounded-xl 
               transition-all duration-300 ease-linear
               cursor-pointer group"
  >
    {icon}
    <span
      class="absolute w-auto p-2 m-2 min-w-max left-10 lg:left-14 lg:p-3
        rounded-md shadow-md
        text-green-500 bg-gray-900 
        text-xs font-bold
        transition-all duration-100 scale-0 origin-left; group-hover:scale-100"
    >
      {text}
    </span>
  </div>
);

export default Navbar;
