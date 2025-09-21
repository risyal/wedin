import React from "react";
import { motion as Motion } from "framer-motion";

export default function EventAgenda({ agenda }) {
  return (
    <Motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
    >
      <h3 className="text-xl font-semibold text-pink-600">{agenda.title}</h3>
      <p className="text-gray-700 mt-1">
        <span className="font-medium">Tanggal:</span> {agenda.date} &nbsp;|&nbsp; <span className="font-medium">Waktu:</span> {agenda.time}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Lokasi:</span> {agenda.location}
      </p>
      <p className="mt-2 text-gray-600">{agenda.description}</p>
    </Motion.div>
  );
}