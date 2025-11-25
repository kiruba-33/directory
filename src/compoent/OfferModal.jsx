// src/components/OfferModal.jsx

import { motion } from "framer-motion";
import { FiHeart, FiShare2 } from "react-icons/fi";

export default function OfferModal({ offer, onClose }) {
  if (!offer) return null; // safety check!!

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl w-full max-w-[550px] p-6 relative shadow-lg"
      >
        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-700"
        >
          ✖
        </button>

        {/* TEMP SINGLE IMAGE (NO CRASH) */}
        <img
          src={offer.img}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        {/* TITLE */}
        <h2 className="text-xl font-bold">{offer.title}</h2>
        <p className="text-gray-500 text-sm">{offer.store}</p>

        {/* TAGS */}
        <div className="flex gap-2 mt-3">
          <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">Gold</span>
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">30%</span>
          <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">{offer.category}</span>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-4">
          <h3 className="font-semibold text-md mb-1">Description</h3>
          <p className="text-gray-600 text-sm">
            Great deals on premium products. Upgrade your lifestyle today!
          </p>
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-gray-400 line-through text-sm">₹{offer.oldPrice}</p>
            <p className="text-green-600 font-bold text-2xl">₹{offer.newPrice}</p>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm">Redeem Offer</button>
        </div>

        {/* INFO */}
        <div className="flex gap-4 items-center text-sm text-gray-600 mt-4">
          <p>📆 Expires: {offer.date}</p>
          <p>📍 {offer.city}</p>
          <p>⭐ {offer.rating}</p>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="flex gap-3 mt-5">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center text-sm">
            <FiHeart /> Save
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center text-sm">
            <FiShare2 /> Share
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
