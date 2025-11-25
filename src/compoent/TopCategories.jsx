// src/component/TopCategories.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Most Popular", img: "/top/top0.webp", route: "most-popular" },
  { name: "Electronics", img: "/top/top1.webp", route: "electronics" },
  { name: "Fashion", img: "/top/top2.jpg", route: "fashion" },
  { name: "Home & Kitchen", img: "/top/top3.webp", route: "home-kitchen" },
  { name: "50% Cashback", img: "/top/top4.png", route: "cashback" },
  { name: "Credit Cards", img: "/assets/top6.png", route: "credit-cards" },
  { name: "Mobiles", img: "/top/top6.webp", route: "mobiles" },
  { name: "Beauty & Grooming", img: "/top/top7.webp", route: "beauty-grooming" },
];

const TopCategories = () => {
  return (
    <div className="w-full mt-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-2">
        {categories.map((cat, index) => (
          <Link key={index} to={`/category/${cat.route}`}>
            <div className="flex flex-col items-center cursor-pointer">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-20 h-20 rounded-full border shadow-md object-cover"
              />
              <p className="mt-2 text-sm">{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
