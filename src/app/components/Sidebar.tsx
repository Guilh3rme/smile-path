"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiMenu,
  FiBook,
  FiAward,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi"; // React Icons

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Hook do Next.js para capturar a rota atual
  const [isExpanded, setIsExpanded] = useState(true); // Iniciado como expandido

  // Determina qual item está ativo com base no pathname atual
  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`h-screen bg-background shadow-md flex flex-col ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300`}>
      {/* Header com botão de expandir/colapsar */}
      <div className="p-6 bg-background text-black flex items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black focus:outline-none">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Menu de navegação */}
      <nav className="mt-10">
        <ul>
          <li className="mb-4">
            <Link
              href="/"
              className={`flex items-center p-4 rounded-lg ${
                isActive("/")
                  ? "bg-accent text-white"
                  : "text-grayblue-700 hover:bg-accent_opacity"
              }`}>
              <FiHome
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Início</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/unidades"
              className={`flex items-center p-4 rounded-lg ${
                isActive("/unidades")
                  ? "bg-accent text-white"
                  : "text-grayblue-700 hover:bg-accent_opacity"
              }`}>
              <FiBook
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Unidades</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/conquistas"
              className={`flex items-center p-4 rounded-lg ${
                isActive("/conquistas")
                  ? "bg-accent text-white"
                  : "text-grayblue-700 hover:bg-accent_opacity"
              }`}>
              <FiAward
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Conquistas</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/mensagens"
              className={`flex items-center p-4 rounded-lg ${
                isActive("/mensagens")
                  ? "bg-accent text-white"
                  : "text-grayblue-700 hover:bg-accent_opacity"
              }`}>
              <FiMessageSquare
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Mensagens</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/perfil"
              className={`flex items-center p-4 rounded-lg ${
                isActive("/perfil")
                  ? "bg-accent text-white"
                  : "text-grayblue-700 hover:bg-accent_opacity"
              }`}>
              <FiUser
                size={24}
                className="mr-3"
              />
              {isExpanded && <span>Perfil</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
