import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[#0b0f19]" />

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 opacity-40 blur-3xl
        bg-gradient-to-r
        from-blue-900
        via-indigo-900
        to-slate-900
        bg-[length:300%_300%]"
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-300 font-medium tracking-wide"
        >
          Student Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight
          bg-gradient-to-r
          from-blue-400
          to-indigo-400
          bg-clip-text
          text-transparent"
        >
          Aqsa Rayyan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto"
        >
          A student from Banda Aceh passionate about technology,
          programming, video editing, and photography.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400
            text-white font-medium transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/20
            text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-white/60"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}