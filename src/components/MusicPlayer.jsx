import React, { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import bgm from "@src/assets/bgm/bgm.mp3"; // ⬅️ import BGM langsung

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto play on mount
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false)); // browser block policy
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg p-3 cursor-pointer select-none z-50"
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") togglePlay();
      }}
    >
      <audio ref={audioRef} src={bgm} loop preload="auto" />
      {isPlaying ? (
        // Pause Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        // Play Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-1.88a1 1 0 00.75-.97v-3.75a1 1 0 00-.75-.882z"
          />
        </svg>
      )}
    </Motion.div>
  );
}
