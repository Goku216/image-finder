// src/components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <div className="flex justify-center border-2 border-blue-500 overflow-hidden rounded-md">
          <input
            id="default-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
            className="w-2xl h-10 outline-none bg-white text-gray-600 text-sm px-4 py-3"
          />
          <input
            type="submit"
            value="Search"
            className="flex w-15 items-center justify-center bg-[#007bff] px-5 text-sm text-white"
          />
        </div>
      </form>
    </>
  );
};
