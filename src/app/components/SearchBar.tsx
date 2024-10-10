import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="O que você quer aprender hoje?"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
