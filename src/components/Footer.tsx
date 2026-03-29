import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aqsarayyan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadaqsarayyan/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aqsa_rayyan/', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>© {currentYear} Made by</span>
            <span className="text-white font-medium">Aqsa Rayyan</span>
          </motion.div>

          {/* RIGHT (SOCIALS) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

        </div>

      </div>
    </footer>
  );
}