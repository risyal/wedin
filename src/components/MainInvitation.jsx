import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Countdown from "react-countdown";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import MusicPlayer from "@src/components/MusicPlayer";
import Guestbook from "@src/components/Guestbook";
import DigitalEnvelope from "@src/components/DigitalEnvelope";
import EventAgenda from "@src/components/EventAgenda";
import bgImage from "@src/assets/images/bg.png";

const WEDDING_DATE = new Date("2026-12-31T10:00:00");
const LOCATION = {
  lat: -6.2,
  lng: 106.816666,
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

function Header() {
  return (
    <header className="text-center py-8 px-4">
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-serif font-semibold text-gray-900"
      >
        Undangan Pernikahan
      </Motion.h1>
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-2 text-gray-600"
      >
        Fulan & Fulanah
      </Motion.p>
    </header>
  );
}

function CountdownTimer() {
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-2">Countdown Menuju Hari H</h2>
      <Countdown
        key={WEDDING_DATE.getTime()}
        date={WEDDING_DATE}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <span className="text-xl font-bold">
                Hari Pernikahan Telah Tiba!
              </span>
            );
          }
          return (
            <div className="flex justify-center space-x-6 text-gray-800 font-mono text-xl">
              <div>
                <div className="font-bold text-3xl">{days}</div> hari
              </div>
              <div>
                <div className="font-bold text-3xl">{hours}</div> jam
              </div>
              <div>
                <div className="font-bold text-3xl">{minutes}</div> menit
              </div>
              <div>
                <div className="font-bold text-3xl">{seconds}</div> detik
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

function ConfettiEffect({ isActive }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={false}
      numberOfPieces={300}
    />
  );
}

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Ganti dengan API key Anda
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={LOCATION} zoom={15}>
      <Marker position={LOCATION} />
    </GoogleMap>
  );
}

function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex">
      {/* Background fixed + header selalu center */}
      <div className="hidden md:flex fixed inset-0 w-3/4 justify-center items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Header di tengah layar */}
        <div className="relative z-10 text-center p-6 bg-white/70 backdrop-blur-md rounded-lg shadow-md max-w-md">
          <h2 className="text-3xl font-serif mb-2">
            Fulanah & Fulan
          </h2>
          <p className="text-lg text-gray-700">
            Rabu, 15 Maret 2023
          </p>
        </div>
      </div>

      {/* Konten utama */}
       <main className="relative max-w-2xl w-full ml-auto bg-[#FFE8D1] shadow-lg min-h-screen px-6 py-10 z-10 rounded-lg">
        {children}
      </main>
    </div>
  );
}


export default function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Contoh agenda acara
  const agendas = [
    {
      id: 1,
      title: "Akad Nikah",
      date: "2024-12-31",
      time: "10:00 WIB",
      location: "Masjid Agung",
      description: "Prosesi akad nikah yang sakral",
    },
    {
      id: 2,
      title: "Resepsi",
      date: "2024-12-31",
      time: "12:00 WIB",
      location: "Gedung Serbaguna",
      description: "Resepsi pernikahan bersama keluarga dan sahabat",
    },
    {
      id: 3,
      title: "Syukuran",
      date: "2025-01-01",
      time: "10:00 WIB",
      location: "Rumah Mempelai Wanita",
      description: "Syukuran dan doa bersama",
    },
  ];

  return (
    <Layout>
      <ConfettiEffect isActive={showConfetti} />
      <MusicPlayer src="/music/wedding-song.mp3" />
      <Header />
      <CountdownTimer />
      <section className="my-8">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4 text-center"
        >
          Agenda Acara
        </Motion.h2>
        <div className="space-y-6">
          {agendas.map((agenda) => (
            <EventAgenda key={agenda.id} agenda={agenda} />
          ))}
        </div>
      </section>

      <section className="my-8">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4 text-center"
        >
          Lokasi Acara
        </Motion.h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-600">Google Map Placeholder</span>
          </div>
        </div>
      </section>

      <section className="my-8">
        <DigitalEnvelope />
      </section>

      <section className="my-8">
        <Guestbook />
      </section>
    </Layout>
  );
}
