import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const learning = [
  {
    title: 'React',
    description: 'Learning modern frontend development and building interactive web applications.',
    progress: 'In Progress',
    image: '⚛️',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Advanced Python',
    description: 'Improving Python skills including scripting, automation, and problem solving.',
    progress: 'In Progress',
    image: '🐍',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Web Development',
    description: 'Learning how to build better websites using modern tools and frameworks.',
    progress: 'Learning',
    image: '🌐',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Git & GitHub',
    description: 'Practicing version control and collaboration using Git and GitHub.',
    progress: 'Learning',
    image: '🐙',
    color: 'from-gray-500/20 to-slate-500/20',
  },
  {
    title: 'Problem Solving',
    description: 'Improving logical thinking and algorithmic problem solving.',
    progress: 'Ongoing',
    image: '🧠',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Software Development',
    description: 'Learning how real-world software projects are structured and built.',
    progress: 'Exploring',
    image: '💻',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function LearningSection() {
  return (
    <section id="learning" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Learning</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Currently Learning
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {learning.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                  <span className="text-3xl">{item.image}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.progress}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}