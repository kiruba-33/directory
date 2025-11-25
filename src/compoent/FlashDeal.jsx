import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // 👈 added Autoplay
import "swiper/css";
import "swiper/css/navigation";

import flashData from "../data/flashData.json";

const FlashDeal = () => {
  // 48 hours in seconds (example)
  const [countdown, setCountdown] = useState(48 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <section
      className="relative w-full mt-10 py-16 bg-black overflow-hidden"
      id="flash-deal"
    >
      {/* 🔥 PREMIUM ANIMATED BACKGROUND */}
      <div className="flashdeal-animated-bg" />

      {/* MAIN CONTENT WRAPPER (ABOVE BACKGROUND) */}
      <div className="relative z-10">
        {/* TITLE */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide drop-shadow-xl">
          FLASH DEAL
        </h2>

        {/* COUNTDOWN TIMER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/95 text-red-600 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] font-semibold text-lg">
            <span className="inline-flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
            <span className="inline-flex h-3 w-3 rounded-full bg-red-500" />
            <span>Ends in</span>
            <span className="font-bold tabular-nums">{formatTime(countdown)}</span>
          </div>
        </div>

        {/* SLIDER */}
        <div className="px-4 md:px-10">
          <Swiper
            modules={[Navigation, Autoplay]}           // 👈 autoplay enabled
            navigation={{ nextEl: ".flash-next", prevEl: ".flash-prev" }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,             // 3 seconds between slides
              disableOnInteraction: false,
            }}
            className="relative"
          >
            {flashData.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-2xl p-5 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                  <div>
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-[220px] object-cover rounded-xl mb-4"
                    />
                    {deal.subtitle && (
                      <p className="text-gray-400 text-xs md:text-sm mb-1">
                        {deal.subtitle}
                      </p>
                    )}
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      {deal.title}
                    </h3>
                    {deal.price && (
                      <p className="font-bold text-gray-700 mt-1 text-base md:text-lg">
                        {deal.price}
                      </p>
                    )}
                    {deal.discount && (
                      <p className="text-green-600 text-xs md:text-sm">
                        {deal.discount}
                      </p>
                    )}
                  </div>
                  <button className="bg-blue-600 text-white mt-4 w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Grab Deal
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV BUTTONS */}
          <button className="flash-prev hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform z-20">
            <span className="text-xl text-gray-800">&lt;</span>
          </button>
          <button className="flash-next hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform z-20">
            <span className="text-xl text-gray-800">&gt;</span>
          </button>
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="bg-gray-900 text-white px-10 py-3 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:bg-black transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashDeal;
