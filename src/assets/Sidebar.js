import React from 'react'
import { SiGitextensions, SiHomebridge, SiInformatica } from "react-icons/si";
// import { FaFire, FaPoo } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg"
    >
      <SideBarIcon icon={<SiGitextensions size="28" />} />
      <SideBarIcon icon={<SiHomebridge size="32" />} />
      <SideBarIcon icon={<SiInformatica size="20" />} />
    </div>
  );
};
const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

export default Sidebar