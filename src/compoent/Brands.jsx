import React from "react";

const brands = [
  { name: "Amazon", offer: "Upto 4% Rewards", img: "/assets/brand1.png", tag: "Sale Live Now" },
  { name: "Ajio", offer: "Upto 10% Cashback", img: "/assets/brand2.png", tag: "Sale Live Now" },
  { name: "JioMart", offer: "Upto 8% Cashback", img: "/assets/brand3.png", tag: "Upto 50% Off" },
  { name: "Federal Bank", offer: "Flat ₹600 Rewards", img: "/assets/brand4.png", tag: "Best Travel Card" },
  { name: "Dot & Key", offer: "Upto 15% Cashback", img: "/assets/brand5.png", tag: "Upto 20% Off" },
];

const Brands = () => {
  return (
    <div className="w-full mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Most Popular Brands</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {brands.map((b, index) => (
          <div key={index} className="bg-white w-[250px] rounded-xl shadow-md flex-shrink-0 p-4 hover:shadow-lg transition">
            <p className="bg-pink-100 text-pink-600 px-3 py-1 text-xs w-fit rounded-full mb-2">{b.tag}</p>
            <img src={b.img} alt={b.name} className="h-20 w-full object-contain mb-3" />
            <button className="bg-blue-600 text-white w-full py-2 rounded-lg">
              {b.offer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
