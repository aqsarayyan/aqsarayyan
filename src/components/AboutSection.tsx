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
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-40" />

      <div className="container mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-wide block mb-2">
            About Me
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>

          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full blur-3xl bg-primary/40 opacity-40" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-72 h-72 rounded-full object-cover border-4 border-primary shadow-2xl"
              />

            </motion.div>

            <div className="absolute -left-8 top-10 flex flex-col gap-3">
              {skills.slice(0, 2).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow"
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
                  className="px-3 py-1 text-sm rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Student Developer from Banda Aceh
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Saya adalah seorang siswa di MAN 1 Banda Aceh yang memiliki minat besar
              dalam dunia teknologi dan pemrograman. Saya mulai belajar coding pada
              tahun 2022 dan terus mengembangkan berbagai proyek untuk meningkatkan
              keterampilan saya.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Selain coding, saya juga tertarik pada fotografi, video editing,
              dan English debate. Saya percaya kreativitas dan teknologi dapat
              berjalan bersama untuk menciptakan solusi inovatif.
            </p>

            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-6 rounded-2xl backdrop-blur-md bg-background/70 border shadow-sm hover:shadow-xl transition text-center"
                >

                  <stat.icon className="h-7 w-7 text-primary mx-auto mb-3" />

                  <p className="font-display text-3xl font-bold">
                    {stat.value}
                  </p>

                  <p className="text-sm text-muted-foreground">
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