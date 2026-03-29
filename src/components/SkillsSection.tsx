import { motion } from 'framer-motion';

const skills = {
  web: [
    { name: 'HTML', level: 85 },
    { name: 'Basic CSS', level: 75 },
    { name: 'Simple Websites', level: 80 },
    { name: 'React (Learning)', level: 40 },
  ],
  programming: [
    { name: 'Python', level: 85 },
    { name: 'C++', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'Python Scripts', level: 85 },
  ],
  tools: [
    { name: 'VS Code', level: 90 },
    { name: 'DaVinci Resolve', level: 85 },
    { name: 'Canva', level: 80 },
    { name: 'Troubleshooting', level: 85 },
    { name: 'Installing OS', level: 80 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-white">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-blue-300">{level}%</span>
      </div>

      <div className="h-2 bg-blue-900/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.7)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">

      {/* SAME BACKGROUND AS OTHER SECTIONS */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 via-blue-800 to-blue-950 bg-[length:300%_300%] blur-3xl opacity-60"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 text-white"
        >
          <span className="text-blue-300 font-medium mb-2 block">Skills</span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -6, 0] }}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/20">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Web Development
              </h3>
            </div>

            <div className="space-y-4">
              {skills.web.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            animate={{ y: [0, -6, 0] }}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/20">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Programming
              </h3>
            </div>

            <div className="space-y-4">
              {skills.programming.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={{ y: [0, -6, 0] }}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/20">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Software & Tech
              </h3>
            </div>

            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}