// src/pages/Offers.jsx

import { useState } from "react";
import OfferModal from "../compoent/OfferModal"; // 🔥 FIXED PATH
import FilterModal from "../compoent/FilterModal";
import { motion } from "framer-motion";
import { FiDownload, FiHeart, FiShare2, FiSliders } from "react-icons/fi"; // 🔥 Added Filter Icon

const offerData = [
{
  id: 1,
  title: "50% Off on Premium Electronics",
  store: "Tech Hub Theni",
  oldPrice: "9999",
  newPrice: "4999",
  category: "Electronics",
  rating: 4.8,
  date: "2024-12-31",
  city: "Theni",
  img: "https://images.unsplash.com/photo-1518770660439-4636190af475",

  // 🔥 STEP 3 - MULTI IMAGES HERE
  images: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  ],
},

  {
    id: 2,
    title: "Premium Membership Benefits",
    store: "Theni Mall",
    oldPrice: "1999",
    newPrice: "999",
    category: "Fashion",
    rating: 4.9,
    date: "2024-12-25",
    city: "Theni",
    img: "https://images.unsplash.com/photo-1524024973431-1c1f6b77b9e3",
  },
  {
    id: 3,
    title: "30% Off on Home Appliances",
    store: "Home Essentials",
    oldPrice: "7999",
    newPrice: "5599",
    category: "Home",
    rating: 4.5,
    date: "2024-12-20",
    city: "Theni",
    img: "https://images.unsplash.com/photo-1581579185169-8c0b2c7c5076",
  },
  {
    id: 4,
    title: "Fitness Membership Offer",
    store: "FitZone Gym",
    oldPrice: "4999",
    newPrice: "3749",
    category: "Health & Beauty",
    rating: 4.7,
    date: "2024-12-28",
    city: "Theni",
    img: "https://images.unsplash.com/photo-1594737625785-cd164e25d71c",
  },
];

export default function Offers() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-4">

      {/* 🔎 SEARCH BAR (MOVED TO TOP - CORRECT) */}
      <div className="mt-4 mb-6 w-full md:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search offers, stores..."
          className="w-full px-4 py-2 rounded-xl border shadow-sm focus:outline-none"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-between items-center flex-wrap mb-6">

        {/* LEFT CATEGORIES */}
        <div className="flex gap-3 flex-wrap">
          {[
            "All Categories",
            "Food & Dining",
            "Shopping",
            "Electronics",
            "Fashion",
            "Health & Beauty",
            "Entertainment",
          ].map((cat, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RIGHT FILTERS + ICON */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <select className="px-4 py-2 rounded-lg border">
            <option>All Cities</option>
            <option>Theni</option>
            <option>Madurai</option>
            <option>Coimbatore</option>
          </select>

          <button
  className="px-4 py-2 flex items-center gap-2 border rounded-lg hover:bg-gray-100 transition"
  onClick={() => setFilterOpen(true)}
>
  <FiSliders size={18} /> Filters
</button>
{/* 🔍 FILTER POPUP */}
{filterOpen && (
  <FilterModal
    onClose={() => setFilterOpen(false)}
    applyFilters={() => setFilterOpen(false)}
  />
)}

        </div>
      </div>

      {/* GRID 4 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {offerData.map((offer) => (
          <motion.div
            key={offer.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative"
          >

            {/* ICONS OVER IMAGE */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <button className="bg-white p-2 rounded-full shadow">
                <FiShare2 size={18} />
              </button>
              <button className="bg-white p-2 rounded-full shadow">
                <FiDownload size={18} />
              </button>
              <button className="bg-white p-2 rounded-full shadow">
                <FiHeart size={18} />
              </button>
            </div>

     <img src={offer.img} alt="" className="h-72 w-full object-cover" />


            <div className="p-4">
              {/* TAGS */}
              <div className="flex gap-2 mb-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Platinum</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">50%</span>
              </div>

              <h3 className="font-semibold text-lg">{offer.title}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <span>🏬</span> {offer.store}
              </p>

              <div className="flex items-center gap-3 text-sm mt-2 text-gray-700">
                ⭐ <b>{offer.rating}</b>
                📅 {offer.date}
                📍 {offer.city}
              </div>

              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-gray-400 line-through">₹{offer.oldPrice}</p>
                  <p className="text-green-600 font-bold text-lg">₹{offer.newPrice}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedOffer(offer)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
                >
                  View Offer
                </motion.button>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      {selectedOffer && (
        <OfferModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
      )}
    </div>
  );
}
