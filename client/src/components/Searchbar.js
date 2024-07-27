import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search companies..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
}

export default SearchBar;
