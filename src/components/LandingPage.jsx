// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ harus lowercase
import coupleImage from "@src/assets/images/potrait.png"; 
import floral from "@src/assets/images/floral.png"; 

export default function LandingPage({ onOpenInvitation }) {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Nama Tamu";

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${floral})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Frame foto dengan dekorasi daun */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mb-6 flex justify-center"
      >
        {/* Daun floral background */}
        <img
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hand-painted-leaf-watercolor-frame-decoration-png-image_5195146.png"
          alt="floral frame"
          className="absolute inset-0 w-72 h-72 object-contain -z-10 opacity-80"
        />
        {/* Foto couple */}
        <img
          src={coupleImage}
          alt="Couple"
          className="w-60 h-80 object-cover shadow-lg rounded-md border-4 border-white"
        />
      </motion.div>

      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg text-gray-700 mb-2 tracking-wide"
      >
        The Wedding Of
      </motion.h2>

      {/* Nama pasangan */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-3xl md:text-4xl font-semibold mb-2 text-[#9c7c55] italic"
      >
        fulan &amp; fulanah
      </motion.h1>

      {/* Salam */}
      <p className="text-gray-600 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i</p>

      {/* Nama tamu */}
      <h3 className="text-lg font-semibold text-[#9c7c55] mb-6">
        {guestName}
      </h3>

      {/* Tombol aksi */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button
          onClick={onOpenInvitation}
          className="flex items-center justify-center gap-2 bg-[#9c7c55] text-white py-3 rounded-md shadow-md hover:bg-[#b18c62] transition"
        >
          <span>📜</span> Open Invitation
        </button>

        <button className="flex items-center justify-center gap-2 border border-gray-400 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
          <span>📱</span> QR Check In
        </button>
      </div>
    </div>
  );
}
