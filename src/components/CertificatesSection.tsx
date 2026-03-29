import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const learning = [
  {
    title: 'React',
    description: 'Learning modern frontend development and building interactive web applications.',
    progress: 'In Progress',
    image: '⚛️',
  },
  {
    title: 'Advanced Python',
    description: 'Improving Python skills including scripting, automation, and problem solving.',
    progress: 'In Progress',
    image: '🐍',
  },
  {
    title: 'Web Development',
    description: 'Learning how to build better websites using modern tools and frameworks.',
    progress: 'Learning',
    image: '🌐',
  },
  {
    title: 'Git & GitHub',
    description: 'Practicing version control and collaboration using Git and GitHub.',
    progress: 'Learning',
    image: '🐙',
  },
  {
    title: 'Problem Solving',
    description: 'Improving logical thinking and algorithmic problem solving.',
    progress: 'Ongoing',
    image: '🧠',
  },
  {
    title: 'Software Development',
    description: 'Learning how real-world software projects are structured and built.',
    progress: 'Exploring',
    image: '💻',
  },
];

export default function LearningSection() {
  return (
    <section id="learning" className="relative py-20 md:py-32 overflow-hidden bg-black">

      {/* subtle animated background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black bg-[length:300%_300%] blur-3xl opacity-40"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 font-medium mb-2 block">
            Learning
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Currently Learning
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {learning.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-full p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-white"
              >

                {/* ICON */}
                <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-white/10 border border-white/10">
                  <span className="text-3xl">{item.image}</span>
                </div>

                <div className="space-y-3">

                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-gray-300 mt-0.5 shrink-0" />

                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{item.progress}</span>
                  </div>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}