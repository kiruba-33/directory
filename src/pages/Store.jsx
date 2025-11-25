// src/pages/Store.jsx
import React from "react";

// Sample Store Data (you can replace with API later)
const stores = [
  {
    id: 1,
    name: "Amazon",
    image: "/assets/stores/amazon.png",
    description: "Flat 10% Cashback on all electronics",
    rating: 4.5,
    reviews: 132,
  },
  {
    id: 2,
    name: "Myntra",
    image: "/assets/stores/myntra.png",
    description: "Best fashion deals with 5% cashback",
    rating: 4.2,
    reviews: 98,
  },
  {
    id: 3,
    name: "Swiggy",
    image: "/assets/stores/swiggy.png",
    description: "Upto ₹100 cashback on food orders",
    rating: 4.8,
    reviews: 203,
  },
];

const Store = () => {
  return (
    <div className="w-full py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        Popular Stores
      </h1>

      {/* STORE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stores.map((store, index) => (
          <div
            key={store.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all duration-300"
          >
            {/* Store IMAGE */}
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Store NAME */}
            <h2 className="text-xl font-semibold mb-2">{store.name}</h2>

            {/* Store DESCRIPTION */}
            <p className="text-gray-600 mb-3">{store.description}</p>

            {/* ⭐ RATING + REVIEWS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {/* Star Icon */}
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-semibold">{store.rating}</span>
              </div>
              <p className="text-gray-500 text-sm">{store.reviews} Reviews</p>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
              Visit Store
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
