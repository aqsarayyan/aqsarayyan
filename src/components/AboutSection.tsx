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
      className="relative py-24 bg-black text-white overflow-hidden"
    >

      {/* Ambient Glow */}
      <motion.div
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[140px] left-1/2 -translate-x-1/2 top-20"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gray-500 text-sm tracking-widest block mb-2">
            ABOUT
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Get to Know Me
          </h2>

          <div className="w-16 h-[2px] mx-auto mt-4 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full blur-2xl bg-white/10 opacity-20" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border border-white/10"
              />

            </motion.div>

            {/* SKILLS LEFT */}
            <div className="absolute -left-6 top-10 flex flex-col gap-3">
              {skills.slice(0, 2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* SKILLS RIGHT */}
            <div className="absolute -right-6 bottom-10 flex flex-col gap-3">
              {skills.slice(2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Student Developer from Banda Aceh
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am a student at MAN 1 Banda Aceh with a strong interest
              in technology and programming. I started learning coding in
              2022 and continue to build projects to improve my skills.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I am also interested in photography, video editing, and
              English debate. I believe creativity and technology can
              work together to create meaningful solutions.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-3 text-gray-400" />

                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>

                  <p className="text-xs text-gray-500">
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