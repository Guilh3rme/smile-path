"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Unidades from "./unidades/page";
import Conquistas from "./conquistas/page";
import Mensagens from "./mensagens/page";
import Perfil from "./perfil/page";

const Dashboard: React.FC = () => {
  const [activeContent, setActiveContent] = useState("home"); // State to control which content is rendered

  // Function to render the selected content
  const renderContent = () => {
    switch (activeContent) {
      case "unidades":
        return <Unidades />;
      case "conquistas":
        return <Conquistas />;
      case "mensagens":
        return <Mensagens />;
      case "perfil":
        return <Perfil />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Página Inicial</h1>
            <p>Esta é a página inicial do seu dashboard.</p>
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* NavBar sempre no topo */}
      <NavBar />

      {/* Conteúdo abaixo do NavBar */}
      <div className="flex flex-1">
        {/* Sidebar with setActiveContent passed as a prop */}
        <Sidebar setActiveContent={setActiveContent} />

        {/* Conteúdo principal, dynamically rendered */}
        <main className="flex-1 bg-slate-500 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
