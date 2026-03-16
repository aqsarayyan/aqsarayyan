import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {

  const stats = [
    { icon: Code2, value: '15+', label: 'Projects Built' },
    { icon: Video, value: '20+', label: 'Videos Edited' },
    { icon: Coffee, value: '∞', label: 'Late Night Coding' },
    { icon: Rocket, value: '3+', label: 'Years Learning' },
  ];

  const skills = [
    'Python',
    'JavaScript',
    'C++',
    'HTML',
    'etc...',
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >

      {/* Smooth Animated Navy Gradient */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 via-blue-800 to-blue-950 bg-[length:300%_300%] blur-3xl opacity-60"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-300 font-semibold tracking-wide block mb-2">
            About Me
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Get to Know Me
          </h2>

          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-300" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* Floating container */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full blur-3xl bg-white/10 opacity-20" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-72 h-72 rounded-full object-cover border border-white/20 shadow-lg"
              />

            </motion.div>

            {/* Skill badges */}
            <div className="absolute -left-8 top-10 flex flex-col gap-3">
              {skills.slice(0, 2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="absolute -right-8 bottom-10 flex flex-col gap-3">
              {skills.slice(2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Student Developer from Banda Aceh
            </h3>

            <p className="text-blue-200/80 leading-relaxed">
              I am a student at MAN 1 Banda Aceh who has a strong interest
              in technology and programming. I started learning coding in
              2022 and continue to develop various projects to improve
              my skills.
            </p>

            <p className="text-blue-200/80 leading-relaxed">
              Besides coding, I am also interested in photography,
              video editing, and English debate. I believe creativity
              and technology can work together to create innovative solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center text-white"
                >
                  <stat.icon className="h-7 w-7 text-blue-300 mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-blue-200/80">
                    {stat.label}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}