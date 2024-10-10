import React from "react";
import Image from "next/image";
import { FiBell, FiSearch, FiChevronDown } from "react-icons/fi";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-navbar text-white h-16 md:h-20 lg:h-24 flex items-center justify-between px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" // Tamanho responsivo da logo
        />
        <span className="text-xl md:text-2xl lg:text-3xl font-bold ml-2">
          SmilePath
        </span>
      </div>

      {/* Campo de pesquisa */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto hidden sm:block">
        {/* Campo de pesquisa fica oculto em telas pequenas */}
        <FiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Procurando por algo?"
          className="w-full bg-white text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      {/* Ícones do lado direito */}
      <div className="flex items-center space-x-4">
        <FiBell
          size={24}
          className="cursor-pointer"
        />
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-white">
            G
          </div>
          <span className="hidden sm:inline">Guilherme</span>
          <FiChevronDown className="hidden sm:inline" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
