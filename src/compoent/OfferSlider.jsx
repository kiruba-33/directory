// 1️⃣ IMPORTS
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 2️⃣ CUSTOM ARROWS (SAME AS YOUR DESIGN)
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2
    bg-black/40 text-white shadow-lg p-3 rounded-full
    hover:bg-black/70 transition-all duration-300
    z-20"
  >
    ❮
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2
    bg-black/40 text-white shadow-lg p-3 rounded-full
    hover:bg-black/70 transition-all duration-300
    z-20"
  >
    ❯
  </button>
);

// 3️⃣ MAIN COMPONENT
const OfferSlider = () => {
  const images = [
    "/offers/h1.webp",
    "/offers/h1.webp",
    "/offers/h1.webp",
    "/offers/h1.webp",
  ];

  return (
    <div className="w-[90%] mx-auto mt-4 relative">

      {/* 🔥 FIXED — FULL WIDTH (NO GAP) */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}          // ✔ FIXED — full width
        spaceBetween={0}           // ✔ FIXED
        centeredSlides={false}     // ✔ FIXED
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="offer"
              className="w-full h-[360px] object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 5️⃣ CUSTOM ARROWS */}
      <div className="prev-btn">
        <PrevArrow />
      </div>
      <div className="next-btn">
        <NextArrow />
      </div>
    </div>
  );
};

export default OfferSlider;   // ✔ EXPORT WORKING
