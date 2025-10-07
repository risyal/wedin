import React, { useState, useEffect, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import Confetti from "react-confetti";
import Countdown from "react-countdown";
import MusicPlayer from "@src/components/MusicPlayer";
import Guestbook from "@src/components/Guestbook";
import DigitalEnvelope from "@src/components/DigitalEnvelope";
import MempelaiInfo from "@src/components/Mempelai";
import EventDetails from "@src/components/EventDetails";
import bgImage from "@src/assets/images/bgijo.png";

// === Konstanta Acara ===
const WEDDING_DATE = new Date("2025-10-30T10:30:00");
const COUPLE_NAMES = "Tirta & Risyal";
const WEDDING_DAY = "Kamis, 30 Oktober 2025";

// === Warna Tema Hijau Datu Bugis (Diperbaiki: Kontras Tinggi untuk Readability) ===
const THEME = {
  primary: "#2E7D32", // Hijau tua - aksen utama
  secondary: "#4CAF50", // Hijau sedang - gradient
  textPrimary: "#1B5E20", // Hijau sangat gelap - teks utama pada background terang
  textSecondary: "#000000", // Hitam - teks kritis (Arab/Quran) untuk kontras maksimal
  light: "#E8F5E8", // Hijau sangat muda - background terang
  lighter: "#F1F8E9", // Hijau putih - background paling terang
  accent: "#F9A825", // Emas - hover/links Bugis
  white: "#FFFFFF", // Putih - teks pada background gelap
  shadow: "rgba(27, 94, 32, 0.2)", // Shadow hijau subtle
};

// === Efek Confetti (Disesuaikan: Partikel hijau untuk tema) ===
function ConfettiEffect({ isActive }) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={true}
      numberOfPieces={200}
      gravity={0.1}
      wind={0.01}
      colors={["#2E7D32", "#4CAF50", "#F9A825", "#E8F5E8"]} // Warna confetti hijau dan emas Bugis
    />
  );
}

// === Komponen Pembuka Islami (Update: Teks hitam untuk kontras) ===
function IslamicOpening() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-8"
      role="banner"
    >
      <p 
        className="text-3xl mb-2 font-serif leading-relaxed"
        style={{ 
          color: THEME.textSecondary, // Hitam untuk kontras tinggi
          textShadow: "1px 1px 2px rgba(255,255,255,0.8)" // Subtle glow untuk readability
        }}
      >
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
      </p>
      <p className="text-sm text-[THEME.textPrimary] font-light">
        Assalamu'alaikum Warahmatullahi Wabarakatuh
      </p>
    </Motion.div>
  );
}

// === Ayat Quran (Update: Teks Arab hitam, terjemahan gelap) ===
function QuranVerse() {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-[#4CAF50] overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${THEME.lighter} 0%, ${THEME.light} 100%)` // Background lebih terang
      }}
    >
      <p 
        className="text-center text-xl mb-3 font-serif leading-loose text-lg"
        style={{ 
          color: THEME.textSecondary, // Hitam untuk kontras
          textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
        }}
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
      </p>
      <p className="text-center text-sm text-[THEME.textPrimary] italic px-4">
        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan dijadikan-Nya di antara kamu rasa kasih dan sayang.”
      </p>
      <p className="text-center text-sm text-[THEME.primary] mt-3 font-semibold border-t border-[#4CAF50] pt-2">
        (QS. Ar-Rum: 21)
      </p>
    </Motion.div>
  );
}

// === Countdown Timer (Update: Container lebih terang, numbers putih) ===
function CountdownTimer() {
  const renderer = useMemo(
    () => ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return (
          <Motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center text-xl font-bold py-4"
            style={{ color: THEME.primary }}
          >
            🎉 Hari Pernikahan Telah Tiba! Selamat kepada {COUPLE_NAMES} 🎉
          </Motion.p>
        );
      }

      const timeUnits = [
        { label: "Hari", val: days },
        { label: "Jam", val: hours },
        { label: "Menit", val: minutes },
        { label: "Detik", val: seconds },
      ];

      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {timeUnits.map((unit, i) => (
            <Motion.div
              key={unit.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[THEME.primary] to-[THEME.secondary] rounded-xl p-4 shadow-md"
              style={{ 
                color: THEME.primary, // Putih untuk kontras pada hijau tua
                boxShadow: `0 4px 15px ${THEME.shadow}` 
              }}
            >
              <Motion.div
                className="text-2xl md:text-3xl font-bold"
                key={unit.val} // Re-animate on change
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {unit.val.toString().padStart(2, "0")}
              </Motion.div>
              <div className="text-xs font-medium mt-1">
                {unit.label}
              </div>
            </Motion.div>
          ))}
        </div>
      );
    },
    []
  );

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg"
      style={{ 
        background: `linear-gradient(135deg, ${THEME.lighter} 0%, ${THEME.light} 100%)` // Lebih terang
      }}
    >
      <h2 className="text-2xl font-serif text-center text-[THEME.primary] mb-6 flex items-center justify-center gap-2">
        ⏰ Menuju Hari Bahagia
      </h2>
      <Countdown date={WEDDING_DATE} renderer={renderer} />
    </Motion.div>
  );
}

// === Layout Utama (Update: Background lebih terang, teks gelap) ===
function Layout({ children, fixedElements = null }) {
  return (
    <div className="relative min-h-screen" style={{ 
      background: `linear-gradient(to bottom right, ${THEME.lighter}, ${THEME.light})` // Gradient hijau sangat terang
    }}>
      {/* Background: Full pada mobile, side-by-side pada desktop - overlay lebih kuat untuk kontras */}
      <div className="md:hidden w-full h-48 flex justify-center items-center bg-cover bg-center relative z-0 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70" // Opacity lebih rendah untuk gambar
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[THEME.primary]/30 to-transparent" // Overlay hijau lebih kuat
        />
        <div className="relative z-10 text-center p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-md max-w-sm mx-auto"> {/* Bg lebih opaque */}
          <h2 className="text-2xl font-serif mb-2 text-[THEME.textSecondary]">{COUPLE_NAMES}</h2> {/* Hitam */}
          <p className="text-base text-[THEME.textPrimary]">{WEDDING_DAY}</p>
        </div>
      </div>

      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-3/4 justify-center items-center z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[THEME.primary]/20 to-transparent"
        />
        <div className="relative z-10 text-center p-6 bg-white/90 backdrop-blur-md rounded-lg shadow-xl max-w-md"> {/* Bg lebih opaque */}
          <h2 className="text-3xl font-serif mb-2 text-[THEME.textSecondary]">{COUPLE_NAMES}</h2> {/* Hitam */}
          <p className="text-lg text-[THEME.textPrimary]">{WEDDING_DAY}</p>
        </div>
      </div>

      {/* Konten utama: Background terang dengan teks gelap */}
      <main className="w-full md:w-1/4 md:fixed md:right-0 md:top-0 md:bottom-0 backdrop-blur-sm shadow-2xl min-h-screen px-4 md:px-6 py-8 md:py-10 z-20 overflow-y-auto" style={{ 
        background: `${THEME.lighter}`, // Sangat terang
        boxShadow: `0 8px 32px ${THEME.shadow}` 
      }}>
        <div className="max-w-md mx-auto">{children}</div>
      </main>

      {/* Slot untuk fixed elements (e.g., MusicPlayer) */}
      {fixedElements}
    </div>
  );
}

// === Komponen Utama Aplikasi ===
export default function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000); // Extended to 8s for better effect
    return () => clearTimeout(timer);
  }, []);

  // Fixed Music Player Component (Memoized: Hanya dibuat sekali untuk hindari re-mount)
  const FixedMusicPlayer = useMemo(() => () => (  // Wrap dengan useMemo, return function
    <Motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
      style={{ 
        boxShadow: `0 10px 25px ${THEME.shadow}`, // Shadow hijau
      }}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-full p-3 md:p-4 shadow-lg border border-[THEME.secondary]/50 hover:bg-white/100 transition-all duration-300 md:hover:scale-105">
        <MusicPlayer 
          src="/music/wedding-song.mp3" 
          className="w-12 h-12 md:w-14 md:h-14" // Adjust size jika MusicPlayer support className
          aria-label="Putar musik latar belakang pernikahan"
        />
      </div>
    </Motion.div>
  ), []); // Empty dependency: Hanya compute sekali

  return (
    <Layout fixedElements={<FixedMusicPlayer />}>  {/* Sekarang FixedMusicPlayer adalah function yang stable */}
      <ConfettiEffect isActive={showConfetti} />
      
      <IslamicOpening />
      <QuranVerse />
      <CountdownTimer />
      <MempelaiInfo />
      <EventDetails />
      <DigitalEnvelope />
      <Guestbook />

      {/* Footer (Ditingkatkan: Social links placeholder) */}
      <footer className="text-center text-xs text-[THEME.textPrimary] py-6 mt-8 border-t border-[THEME.secondary]/30">
        <p className="mb-2">© 2025 {COUPLE_NAMES} Wedding</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:text-[THEME.accent] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[THEME.accent] transition-colors">WhatsApp</a>
        </div>
      </footer>
    </Layout>
  );
}
