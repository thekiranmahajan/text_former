import React from 'react'
import { SiGitextensions, SiHomebridge, SiInformatica } from "react-icons/si";
const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg"
    >
      <SidebarIcon icon={<SiGitextensions size="28" />} />
      <SidebarIcon icon={<SiHomebridge size="32" />} />
      <SidebarIcon icon={<SiInformatica size="20" />} />
    </div>
  );
};
const SidebarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);

export default Sidebar