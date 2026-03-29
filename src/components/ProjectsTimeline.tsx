import { motion } from "framer-motion";

const projects = [
  {
    year: "2022",
    title: "Started Programming",
    description:
      "Began learning programming with Python and wrote my first basic scripts and small programs.",
  },
  {
    year: "2023",
    title: "Learning C++",
    description:
      "Expanded programming knowledge by learning C++ and understanding fundamental programming concepts like loops, functions, and problem solving.",
  },
  {
    year: "2024",
    title: "Web Development",
    description:
      "Started building simple websites using HTML and basic CSS while learning how the web works.",
  },
  {
    year: "2025",
    title: "Creative & Tech Projects",
    description:
      "Worked on video editing with DaVinci Resolve, photography, and continued improving programming skills.",
  },
  {
    year: "Now",
    title: "Learning React",
    description:
      "Currently learning React and improving Python knowledge in more depth while building personal projects.",
  },
];

export default function ProjectsTimeline() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">

      {/* SAME NAVY ANIMATED BACKGROUND */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 via-blue-800 to-blue-950 bg-[length:300%_300%] blur-3xl opacity-60"
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white"
        >
          <span className="text-blue-300 font-medium block mb-2">
            My Journey
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Coding & Project Timeline
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20 space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="ml-6"
            >
              {/* DOT */}
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] mt-2 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />

              {/* CARD */}
              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition">

                <span className="text-sm text-blue-300">
                  {project.year}
                </span>

                <h3 className="text-xl font-bold mt-1 text-white">
                  {project.title}
                </h3>

                <p className="text-blue-200/80 mt-2">
                  {project.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}