"use client";
import React, { useState } from "react";
import {
  FiHome,
  FiMenu,
  FiBook,
  FiAward,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

interface SidebarProps {
  setActiveContent: (content: string) => void; // Prop to update active content in the dashboard
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Control the expansion state of the sidebar

  return (
    <div
      className={`h-screen bg-background shadow-md flex flex-col ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300`}>
      {/* Header with toggle button */}
      <div className="p-6 bg-background text-black flex items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black focus:outline-none">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-10 flex-1">
        <ul className="flex flex-col space-y-4">
          <li>
            <button
              onClick={() => setActiveContent("home")}
              className="w-full flex items-center p-4 rounded-lg text-grayblue-700 hover:bg-accent_opacity transition-colors duration-300 focus:outline-none">
              <FiHome
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Início</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveContent("unidades")}
              className="w-full flex items-center p-4 rounded-lg text-grayblue-700 hover:bg-accent_opacity transition-colors duration-300 focus:outline-none">
              <FiBook
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Unidades</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveContent("conquistas")}
              className="w-full flex items-center p-4 rounded-lg text-grayblue-700 hover:bg-accent_opacity transition-colors duration-300 focus:outline-none">
              <FiAward
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Conquistas</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveContent("mensagens")}
              className="w-full flex items-center p-4 rounded-lg text-grayblue-700 hover:bg-accent_opacity transition-colors duration-300 focus:outline-none">
              <FiMessageSquare
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Mensagens</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveContent("perfil")}
              className="w-full flex items-center p-4 rounded-lg text-grayblue-700 hover:bg-accent_opacity transition-colors duration-300 focus:outline-none">
              <FiUser
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Perfil</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
