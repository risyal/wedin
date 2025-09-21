import React, { useState } from "react";
import { motion as Motion} from "framer-motion";

export default function DigitalEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Motion.div
      className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto text-center border border-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-pink-600">Amplop Digital</h2>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition"
        >
          Buka Amplop
        </button>
      ) : (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-gray-800 font-mono text-lg"
        >
          <p>Rekening Bank:</p>
          <p className="font-bold text-xl">1234 5678 9012 3456</p>
          <p>Bank ABC</p>
          <p>Atas Nama: Fulan & Fulanah</p>
        </Motion.div>
      )}
    </Motion.div>
  );
}