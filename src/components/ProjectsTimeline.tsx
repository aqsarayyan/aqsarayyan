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
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium block mb-2">
            My Journey
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Coding & Project Timeline
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-muted space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="ml-6"
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] mt-2" />

              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>

              <h3 className="text-xl font-bold mt-1">
                {project.title}
              </h3>

              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}