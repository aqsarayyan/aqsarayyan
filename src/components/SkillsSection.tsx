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
        <span className="text-sm text-gray-300">{level}%</span>
      </div>

      {/* BAR BG */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full 
                     bg-gradient-to-r from-gray-400 via-gray-200 to-white
                     shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">

      {/* MONOCHROME BACKGROUND */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 
                   bg-gradient-to-r from-black via-zinc-900 via-zinc-800 to-black 
                   bg-[length:300%_300%] blur-3xl opacity-70"
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
          <span className="text-gray-300 font-medium mb-2 block">
            Skills
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 
                          bg-gradient-to-r from-gray-500 to-white 
                          mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { title: "Web Development", icon: "🌐", data: skills.web },
            { title: "Programming", icon: "💻", data: skills.programming },
            { title: "Software & Tech", icon: "🛠️", data: skills.tools },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              animate={{ y: [0, -6, 0] }}
              className="p-6 
                         bg-white/5 backdrop-blur-lg 
                         border border-white/10 
                         rounded-2xl shadow-lg 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                         hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/10">
                  <span className="text-2xl">{section.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-4">
                {section.data.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}