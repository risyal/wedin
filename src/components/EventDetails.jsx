import React from "react";
import { motion as Motion } from "framer-motion";

const THEME = {
  primary: "#3E7C59",
  secondary: "#6FBF73",
  accent: "#CDEAC0",
  light: "#EAF6E6",
  shadow: "rgba(62, 124, 89, 0.15)",
};

export default function EventDetails() {
  const events = [
    {
      title: "🕌 Akad Nikah",
      date: "Kamis",
      day: "30",
      month: "Oktober 2025",
      time: "10.30 WITA - 11.00 WITA",
      location: "Kediaman Mempelai Wanita",
      color: THEME.primary,
    },
    {
      title: "🎉 Resepsi",
      date: "Kamis",
      day: "30",
      month: "Oktober 2025",
      time: "11.00 WITA - Selesai",
      location: "Kediaman Mempelai Wanita",
      color: THEME.secondary,
    },
  ];

  return (
    <section
      className="relative py-20 text-center"
      style={{
        background: `linear-gradient(180deg, ${THEME.light} 0%, #ffffff 100%)`,
      }}
    >
      {/* Ornamen atas */}
      <div
        className="absolute top-0 left-0 w-full h-32 rounded-b-[50%]"
        style={{
          background: `linear-gradient(to bottom, ${THEME.accent}, transparent)`,
          opacity: 0.7,
        }}
      ></div>

      {/* Ornamen bawah */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 rounded-t-[50%]"
        style={{
          background: `linear-gradient(to top, ${THEME.accent}, transparent)`,
          opacity: 0.7,
        }}
      ></div>

      {/* Judul */}
      <Motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-serif mb-10 tracking-wide relative z-10"
        style={{
          color: THEME.primary,
          textShadow: `0 1px 2px ${THEME.shadow}`,
        }}
      >
        Hari Spesial
      </Motion.h2>

      <div className="flex flex-col items-center gap-8 relative z-10 px-6">
        {events.map((event, i) => (
          <React.Fragment key={i}>
            {/* Kartu acara */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] shadow-lg p-8 w-full max-w-md border bg-white"
              style={{
                borderColor: event.color,
                boxShadow: `0 8px 20px ${THEME.shadow}`,
              }}
            >
              <h3
                className="text-lg font-semibold mb-4 uppercase tracking-widest"
                style={{ color: event.color }}
              >
                {event.title}
              </h3>

              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-xl font-medium" style={{ color: THEME.primary }}>
                  {event.date}
                </span>
                <span className="text-6xl font-bold leading-none" style={{ color: THEME.primary }}>
                  {event.day}
                </span>
                <span className="text-base font-medium" style={{ color: THEME.primary }}>
                  {event.month}
                </span>
              </div>

              <p className="text-sm mb-2" style={{ color: THEME.primary, opacity: 0.9 }}>
                🕐 {event.time}
              </p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: THEME.primary, opacity: 0.9 }}>
                📍 {event.location}
              </p>

              <Motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block border-2 px-8 py-2 rounded-full font-semibold transition-all"
                style={{
                  borderColor: event.color,
                  color: event.color,
                }}
              >
                Lihat Lokasi
              </Motion.a>
            </Motion.div>

            {/* Tambahkan emotikon penghubung kecuali setelah yang terakhir */}
            {i === 0 && (
              <Motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl text-green-600"
              >
                💚
              </Motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
