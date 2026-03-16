import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'My personal portfolio website built to showcase my coding projects, technical skills, and creative work.',
    tags: ['HTML', 'CSS', 'React'],
    image: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Python Automation Scripts',
    description: 'A collection of small Python scripts I built while learning programming, including simple automation and utility tools.',
    tags: ['Python'],
    image: '🐍',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
  },
  {
    title: 'C++ Practice Programs',
    description: 'Programs created while learning C++ fundamentals like loops, conditions, functions, and basic algorithms.',
    tags: ['C++'],
    image: '💻',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
  },
  {
    title: 'Simple Websites',
    description: 'Basic websites created while learning web development using HTML and CSS.',
    tags: ['HTML', 'CSS'],
    image: '🖥️',
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
  },
  {
    title: 'Video Editing Projects',
    description: 'Video editing work created using DaVinci Resolve including personal edits and creative projects.',
    tags: ['DaVinci Resolve', 'Video Editing'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Photography',
    description: 'Photography projects exploring composition, lighting, and storytelling through images.',
    tags: ['Photography'],
    image: '📷',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">

      {/* Animated Navy Gradient */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 via-blue-800 to-blue-950 bg-[length:300%_300%] blur-3xl opacity-60"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-medium mb-2 block">Portfolio</span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Projects &amp; Works
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="h-full p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >

                {/* Icon */}
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>

                <div className="space-y-3 text-white">

                  <div className="flex items-center gap-2">

                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-300/20 text-blue-300 font-medium">
                        Content
                      </span>
                    )}

                    <h3 className="font-display text-lg font-bold">
                      {project.title}
                    </h3>

                  </div>

                  <p className="text-sm text-blue-200/80 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-blue-300/20 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">

                    {project.github && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {project.youtube && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}

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