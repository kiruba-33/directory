import { useState } from "react";

export default function OfferCard({ offer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition shadow-lg">
        <img src={offer.image} className="w-full h-40 object-cover" />

        <div className="p-4">
          <h2 className="text-lg font-semibold">{offer.title}</h2>
          <p className="text-sm text-gray-400">{offer.shop}</p>

          <p className="text-xs text-red-400 mt-2">
            ⏳ Expires: {offer.expiry}
          </p>

          <button
            className="mt-3 w-full bg-red-500 py-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            View Coupon
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
       <div className="bg-cardBg border border-accent rounded-xl p-4 shadow-md hover:shadow-xl transition">
  <h2 className="text-accent font-bold text-lg">{offer.title}</h2>
  <p className="text-sm text-textDark">{offer.shop}</p>
            <p className="mt-2 font-bold text-green-600">COUPON: {offer.code}</p>
            <p className="text-xs mt-2 text-gray-600">Show this at the shop!</p>

            <button
              onClick={() => setOpen(false)}
             className="mt-3 w-full bg-accent text-white py-2 rounded-md hover:bg-textDark"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
