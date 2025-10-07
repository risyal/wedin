import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import brideImage from "@src/assets/images/bride.png";
import groomImage from "@src/assets/images/groom.png";
import bgijosimple from "@src/assets/images/bgijosimple.png";


const THEME = {
  primary: "#2E7D32",
  secondary: "#4CAF50",
  textPrimary: "#1B5E20",
  light: "#E8F5E8",
  lighter: "#F1F8E9",
  accent: "#F9A825",
  shadow: "rgba(27, 94, 32, 0.15)",
};

export default function MempelaiInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const groom = {
    name: "Risyal Atriansyah",
    job: "Software Engineer",
    hobby: "Traveling & Fotografi",
    bio: "-",
    image: groomImage,
  };

  const bride = {
    name: "Tirta Dewi S",
    job: "-",
    hobby: "Membaca & Memasak",
    bio: "-",
    image: brideImage,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Motion.section
      ref={ref}
      className="mb-16 text-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${THEME.lighter} 0%, ${THEME.light} 100%)`,
        borderRadius: "18px",
        padding: "3rem 2rem",
        boxShadow: `0 8px 32px ${THEME.shadow}`,
      }}
    >
      {/* Ornamen background animasi lembut */}
      <Motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(165,214,167,0.15), transparent 60%)`,
          
         backgroundImage: `url(${bgijosimple})`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Judul */}
      <Motion.h2
        className="text-3xl font-serif mb-10 relative z-10"
        style={{ color: THEME.primary }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        💕 Mempelai
      </Motion.h2>

      {/* === Mempelai Wanita === */}
      <Motion.div
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="p-8 rounded-3xl backdrop-blur-md shadow-md border border-[#C8E6C9] flex flex-col items-center text-center mb-10 relative z-10"
        style={{
          background: THEME.lighter,
          boxShadow: `0 6px 20px ${THEME.shadow}`,
        }}
        whileHover={{ scale: 1.02, rotate: 0.3 }}
      >
        <Motion.img
          src={bride.image}
          alt={bride.name}
          className="w-44 h-60 object-cover rounded-xl mb-6 shadow-lg border-4"
          style={{ borderColor: THEME.accent }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: THEME.primary }}
        >
          {bride.name}
        </h3>
        <p className="text-sm mb-1" style={{ color: THEME.textPrimary }}>
          💻 {bride.job}
        </p>
        <p className="text-sm mb-1" style={{ color: THEME.textPrimary }}>
          💖 Hobi: {bride.hobby}
        </p>
        <p
          className="text-sm italic mt-4 px-4 leading-relaxed"
          style={{ color: THEME.textPrimary }}
        >
          {bride.bio}
        </p>
      </Motion.div>

      {/* Simbol Penghubung */}
      <Motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
            scale: 1,
            opacity: 1,
            y: [0, -6, 0],
        }}
        transition={{
            scale: { duration: 0.8, ease: "easeOut" },
            opacity: { duration: 0.8, ease: "easeOut" },
            y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
        className="text-5xl mb-10 relative z-10"
        style={{ color: THEME.primary }}
        >
        💞
        </Motion.div>

      {/* === Mempelai Laki-laki === */}
      <Motion.div
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="p-8 rounded-3xl backdrop-blur-md shadow-md border border-[#C8E6C9] flex flex-col items-center text-center relative z-10"
        style={{
          background: THEME.lighter,
          boxShadow: `0 6px 20px ${THEME.shadow}`,
        }}
        whileHover={{ scale: 1.02, rotate: -0.3 }}
      >
        <Motion.img
          src={groom.image}
          alt={groom.name}
          className="w-44 h-60 object-cover rounded-xl mb-6 shadow-lg border-4"
          style={{ borderColor: THEME.accent }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: THEME.primary }}
        >
          {groom.name}
        </h3>
        <p className="text-sm mb-1" style={{ color: THEME.textPrimary }}>
          💼 {groom.job}
        </p>
        <p className="text-sm mb-1" style={{ color: THEME.textPrimary }}>
          💖 Hobi: {groom.hobby}
        </p>
        <p
          className="text-sm italic mt-4 px-4 leading-relaxed"
          style={{ color: THEME.textPrimary }}
        >
          {groom.bio}
        </p>
      </Motion.div>
    </Motion.section>
  );
}
