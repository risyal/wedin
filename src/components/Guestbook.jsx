import React from "react";
import { motion as Motion} from "framer-motion";

export default function Guestbook() {
  return (
    <Motion.div
      className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto text-center border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-pink-600">Ucapan & Doa</h2>
      <p className="text-gray-600 italic">Fitur guestbook sedang dalam pengembangan...</p>
    </Motion.div>
  );
}