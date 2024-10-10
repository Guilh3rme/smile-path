"use client";
import React from "react";
import Dashboard from "./dashboard/page";

const Home: React.FC = () => {
  return (
    <div>
      <Dashboard /> {/* Chamando o componente do Dashboard */}
    </div>
  );
};

export default Home;
