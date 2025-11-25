// src/components/FilterModal.jsx

import { motion } from "framer-motion";

export default function FilterModal({ onClose, applyFilters }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl w-[90%] md:w-[450px] p-6 relative shadow-xl"
      >
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-3 right-3 text-2xl">✖</button>

        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* CATEGORY */}
        <label className="font-medium">Category</label>
        <select className="w-full border px-3 py-2 rounded-lg mb-4">
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
          <option>Health & Beauty</option>
        </select>

        {/* CITY */}
        <label className="font-medium">City</label>
        <select className="w-full border px-3 py-2 rounded-lg mb-4">
          <option>All</option>
          <option>Theni</option>
          <option>Madurai</option>
          <option>Coimbatore</option>
        </select>

        {/* PRICE SORT */}
        <label className="font-medium">Price</label>
        <select className="w-full border px-3 py-2 rounded-lg mb-4">
          <option>Default</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>

        {/* RATING */}
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="rating" />
          <label htmlFor="rating">⭐ 4 & above</label>
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Apply Filters
        </button>
      </motion.div>
    </motion.div>
  );
}
