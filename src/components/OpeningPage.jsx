import React from "react";
import { motion as Motion} from "framer-motion";

export default function OpeningPage({ onOpenInvitation }) {
  return (
    <Motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://placehold.co/400x300/pink/white?text=Rose+and+Wedding+Rings"
        alt="Pink roses and wedding rings"
        className="w-64 h-48 rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-5xl font-serif font-bold mb-2">Selamat Datang</h1>
      <p className="text-2xl mb-8">Diundangan Pernikahan</p>
      <p className="text-xl italic mb-10">Tirta & Risyal</p>
      <button
        onClick={onOpenInvitation}
        className="bg-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        Buka Undangan
      </button>
    </Motion.div>
  );
}