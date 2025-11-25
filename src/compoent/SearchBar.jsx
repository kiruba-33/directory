import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center mt-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search shops or offers in Theni..."
        className="w-3/4 md:w-2/4 bg-white text-black px-4 py-2 rounded-xl outline-none shadow-md"
      />
      <button className="ml-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-xl transition">
        Search
      </button>
    </div>
  );
}
