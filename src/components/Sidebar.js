import React from "react";
import pic from "../images/me.png";
import { SiGitextensions, SiHomebridge, SiInformatica } from "react-icons/si";
const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 md: w-12 
                    flex flex-col 
                    bg-gray-900 text-white shadow-2xl "
    >
      <a href="#" className="md: mt-10">
        <SidebarIcon icon={<SiGitextensions size="28" />} text={"TextFormer"} />
      </a>
      <a href="#" className="">
        <SidebarIcon icon={<SiHomebridge size="32" />} text={"Home"} />
      </a>
      <a href="#" className="sff">
        <SidebarIcon icon={<SiInformatica size="20" />} text={"About"} />
      </a>

      <div
        className=" flex justify-center items-center
                h-12 w-12 md: w-10 m: h-10
          mx-auto shadow-lg
               bg-gray-800
                 rounded-3xl  md:mt-60"
      >
        <img className="" src={pic} alt="Author: Kiran Mahajan" />
      </div>
    </div>
  );
};
const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);


export default Sidebar;
