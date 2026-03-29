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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Optional 3D */}
      <ThreeScene />

      {/* Subtle ambient light */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-white rounded-full blur-[140px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="
                w-48 h-48 md:w-64 md:h-64
                object-cover rounded-full
                border border-white/10
              "
            />
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left flex-1">

            {/* Small label */}
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest text-white/50 border border-white/10 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              PORTFOLIO
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
            >
              Fulltime Student
              <br />
              <span className="text-white/70">
                & Part-Time Coder
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-white/60 mb-8 max-w-xl"
            >
              I've been coding since 2022, focused on building projects,
              improving skills, and exploring creative technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="
                  rounded-full px-8
                  bg-white text-black
                  hover:opacity-80
                  transition-all
                "
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="
                  rounded-full px-8
                  border-white/20 text-white
                  hover:bg-white hover:text-black
                  transition-all
                "
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-5 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/aqsarayyan' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadaqsarayyan/' },
                { icon: Instagram, href: 'https://www.instagram.com/aqsa_rayyan/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="
                    p-3 rounded-full
                    border border-white/10
                    text-white/70
                    hover:text-white
                    hover:border-white/30
                  "
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll button */}
      <motion.button
        onClick={scrollToAbout}
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          p-3 rounded-full
          border border-white/10
          text-white/60
          hover:text-white
          hover:border-white/30
        "
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>

    </section>
  );
}