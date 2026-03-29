import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/20 shadow-lg"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-center md:text-left flex-1">

            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur text-sm font-medium text-gray-300 mb-6 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to My Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Fulltime Student
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                &amp; Part-Time Coder
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"
            >
              I've been coding since 2022, and I have a passion for creating innovation
              and learning new things. I am currently a student at MAN 1 Banda Aceh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-white/30 text-white hover:bg-white hover:text-black"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-6 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/aqsarayyan', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadaqsarayyan/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/aqsa_rayyan/', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-white" />
      </motion.button>
    </section>
  );
}