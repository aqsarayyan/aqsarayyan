import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold mb-2 block tracking-wide">
            About Me
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">

              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Experience card */}
              <div className="absolute -bottom-6 -right-6 bg-background/80 backdrop-blur-lg p-5 rounded-xl shadow-xl border">
                <p className="font-display font-bold text-3xl text-primary">
                  3+
                </p>
                <p className="text-sm text-muted-foreground">
                  Tahun Pengalaman
                </p>
              </div>

            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Passionate Student &amp; Coder
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Saya adalah seorang siswa di MAN 1 Banda Aceh yang memiliki minat besar dalam dunia
              pemrograman. Dengan pengalaman lebih dari 3 tahun, saya telah mengembangkan berbagai
              proyek yang mencakup berbagai teknologi dan bahasa pemrograman.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Selain coding, saya juga aktif dalam lomba fotografi dan English Debate. 
              Saya percaya kreativitas dan komunikasi yang baik sangat penting
              dalam dunia teknologi modern.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border bg-background/60 backdrop-blur-md shadow-sm hover:shadow-xl transition-all text-center"
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