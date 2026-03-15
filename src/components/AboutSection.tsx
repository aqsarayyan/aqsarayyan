import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '15+', label: 'Projects Built' },
    { icon: Video, value: '20+', label: 'Videos Edited' },
    { icon: Coffee, value: '∞', label: 'Late Night Coding' },
    { icon: Rocket, value: '3+', label: 'Years Learning' },
  ];

  const skills = ['React', 'JavaScript', 'Python', 'Tailwind', 'Git'];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* glow background */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full" />

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* floating skills */}
            <div className="absolute -top-6 -left-6 flex flex-col gap-3">
              {skills.slice(0,2).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full glass shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 flex flex-col gap-3">
              {skills.slice(2).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full glass shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>

          {/* TEXT */}
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
              Saya adalah siswa di MAN 1 Banda Aceh yang memiliki minat besar
              dalam dunia teknologi dan pemrograman. Saya mulai belajar coding
              pada tahun 2022 dan sejak itu terus mengembangkan berbagai proyek
              untuk meningkatkan kemampuan saya.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Selain coding, saya juga tertarik pada fotografi, video editing,
              dan English debate. Saya percaya teknologi dan kreativitas dapat
              berjalan bersama untuk menciptakan solusi yang inovatif.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl border bg-background/70 backdrop-blur-md shadow-sm hover:shadow-xl transition text-center"
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