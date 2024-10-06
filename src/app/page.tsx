/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import ActivityCard from "./components/ActivityCard";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Conteúdo abaixo do NavBar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
