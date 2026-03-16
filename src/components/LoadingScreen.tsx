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
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0b0f19]">

      {/* Animated Gradient */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r
        from-blue-900
        via-indigo-900
        to-slate-900
        opacity-40 blur-3xl
        bg-[length:300%_300%]"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full left-1/4 top-1/3"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full right-1/4 bottom-1/3"
      />

      <div className="relative text-center">

        {/* Name Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold
          bg-gradient-to-r
          from-blue-400
          to-indigo-400
          bg-clip-text
          text-transparent"
        >
          Aqsa Rayyan
        </motion.h1>

        {/* Typing Text */}
        <p className="text-blue-300/80 mt-4 h-6">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mt-8 mx-auto">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-indigo-400"
          />

        </div>

      </div>

    </div>
  );
}