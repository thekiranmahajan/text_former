import React from "react";
import pic from "../images/me.png";
import { SiGitextensions, SiHomebridge, SiInformatica } from "react-icons/si";

const Sidebar = () => {
  return (
    <div
      className=" h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 absolute top-10 select-none	 container fixed top-0 left-0 h-screen w-12 lg:w-16
                    bg-gray-900 flex flex-col 
                      text-white shadow-2xl "
    >
      <div className="">
        <a href="#" className="">
          <AllIcons icon={<SiGitextensions size="28" />} text={"TextFormer"} />
        </a>
        <a href="#" className="">
          <AllIcons icon={<SiHomebridge size="28" />} text={"Home"} />
        </a>
        <a href="#" className="">
          <AllIcons icon={<SiInformatica size="28" />} text={"About"} />
        </a>
        <div>
          <img
            className=" select-none	flex  h-10 lg:h-12 w-10 lg:w-12  mx-auto lg:mt-[23rem] mt-[24rem]"
            src={pic}
            alt="Author: Kiran Mahajan"
          />
        </div>
      </div>
    </div>
  );
};
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

export default Sidebar;
