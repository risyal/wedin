// src/pages/LandingPage.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { Heart, Calendar, MapPin } from "lucide-react";
import coupleImage from "@src/assets/images/circle.png";
import bgImage from "@src/assets/images/bgbungaijo.png";
import bgijosimple from "@src/assets/images/bgijosimple.png";

export default function LandingPage({ onOpenInvitation }) {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Tamu Undangan";

  return (
    <>
      {/* 🌿 Fullscreen Background (repeating, benar-benar full kiri-kanan) */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
          filter: "brightness(0.95)",
        }}
      ></div>

      {/* Konten utama */}
      <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           style={{
          backgroundImage: `url(${bgijosimple})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "repeat",
          filter: "brightness(0.95)",
        }}
          className="w-full max-w-lg bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 border border-green-100/60 mx-4 my-8 md:my-12"
        >
          {/* Bismillah */}
          <div className="text-center md:mb-2">
            <p
              className="text-2xl md:text-3xl text-green-700 font-serif mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <p className="text-xs md:text-sm text-green-600 tracking-wide">
              Bismillahirrahmanirrahim
            </p>
          </div>

          {/* Top Floral Decoration */}
          <div className="flex justify-center mb-2">
            <svg viewBox="0 0 200 40" className="w-40 h-8 md:w-56 md:h-12">
              <path
                d="M 20 20 Q 30 10 40 20 T 60 20"
                stroke="#a7c4a3"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 140 20 Q 150 10 160 20 T 180 20"
                stroke="#a7c4a3"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <circle cx="100" cy="20" r="3" fill="#c8e6c9" />
            </svg>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <p className="text-xs md:text-sm text-green-600 tracking-[0.15em] mb-2">
              THE WEDDING OF
            </p>
            <div className="w-12 h-px bg-green-300 mx-auto mb-4"></div>
          </div>

          {/* Couple Illustration */}
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-56 md:w-72 h-56 md:h-72 rounded-full bg-green-200/40 blur-3xl"></div>
            </div>

            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-100 shadow-xl">
              <img
                src={coupleImage}
                alt="Couple"
                className="object-cover w-full h-full scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Couple Names */}
          <div className="text-center mb-6">
            <h1
              className="text-3xl md:text-5xl font-serif text-green-800 mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Fulanah & Fulan
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="w-8 h-px bg-green-300"></div>
              <Heart className="w-4 h-4 text-green-400 fill-green-400" />
              <div className="w-8 h-px bg-green-300"></div>
            </div>
          </div>

          {/* Date & Venue */}
          <div className="text-center ">
            <div className="flex items-center justify-center gap-2 text-green-700">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-sm md:text-base font-medium">
                Kamis, 30 Oktober 2025
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-xs md:text-sm">Enrekang, Indonesia</p>
            </div>
          </div>

          {/* Guest Info */}
          <div className="text-center mb-2 bg-green-50/50 rounded-2xl py-4 px-4 md:py-5 md:px-6">
            <p className="text-xs text-green-600 mb-1 tracking-wide">
              KEPADA YTH.
            </p>
            <p className="text-sm md:text-base font-medium text-green-800">
              Bapak/Ibu/Saudara/i
            </p>
            <p className="text-base md:text-lg font-semibold text-green-700 mt-1">
              {guestName}
            </p>
          </div>

          {/* CTA Button */}
         <div>
  <button
    onClick={onOpenInvitation}
    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-2.5 md:py-3 rounded-full font-medium hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-md"
  >
    <span className="text-base md:text-lg">✉️</span>
    <span className="text-xs md:text-sm tracking-wide">Buka Undangan</span>
  </button>
</div>


          {/* Footer Note */}
          {/* <p className="text-center text-xs md:text-sm text-green-600 mt-6 opacity-70">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          </p> */}
        </Motion.div>
      </div>
    </>
  );
}
