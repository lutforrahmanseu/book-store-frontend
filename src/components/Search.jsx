import React from "react";

export default function Search() {
  return (
    <div>
      <input
        className="px-3 py-2 rounded-s-md outline-none"
        type="search"
        id="search"
        name="search"
        placeholder="Search a book"
      />
      <button className="px-6 py-2 rounded-e-md font-semibold text-white bg-blue-300">
        Search
      </button>
    </div>
  );
}
