import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const text = "Initializing Portfolio...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">

      {/* Subtle Moving Light */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
      />

      <div className="relative text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Aqsa Rayyan
        </motion.h1>

        {/* Typing Text */}
        <p className="text-white/50 mt-4 h-6 text-sm tracking-wide">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Minimal Progress Line */}
        <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mt-8 mx-auto">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-white"
          />

        </div>

      </div>

    </div>
  );
}