import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'My personal portfolio website built to showcase my coding projects, technical skills, and creative work.',
    tags: ['HTML', 'CSS', 'React'],
    image: '🌐',
    github: '#',
    demo: '#',
  },
  {
    title: 'Python Automation Scripts',
    description: 'A collection of small Python scripts I built while learning programming, including simple automation and utility tools.',
    tags: ['Python'],
    image: '🐍',
    github: '#',
  },
  {
    title: 'C++ Practice Programs',
    description: 'Programs created while learning C++ fundamentals like loops, conditions, functions, and basic algorithms.',
    tags: ['C++'],
    image: '💻',
    github: '#',
  },
  {
    title: 'Simple Websites',
    description: 'Basic websites created while learning web development using HTML and CSS.',
    tags: ['HTML', 'CSS'],
    image: '🖥️',
    github: '#',
  },
  {
    title: 'Video Editing Projects',
    description: 'Video editing work created using DaVinci Resolve including personal edits and creative projects.',
    tags: ['DaVinci Resolve', 'Video Editing'],
    image: '🎬',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Photography',
    description: 'Photography projects exploring composition, lighting, and storytelling through images.',
    tags: ['Photography'],
    image: '📷',
    isContent: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-black text-white overflow-hidden">

      {/* Subtle moving glow */}
      <motion.div
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent_60%)] blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 font-medium mb-2 block">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Projects & Works
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="h-full p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >

                {/* ICON */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10">
                  <span className="text-5xl">{project.image}</span>
                </div>

                <div className="space-y-3">

                  <div className="flex items-center gap-2 flex-wrap">

                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-300">
                        Content
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>

                  </div>

                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 pt-2 flex-wrap">

                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="rounded-full bg-white text-black hover:bg-gray-200"
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {project.youtube && (
                      <Button
                        size="sm"
                        className="rounded-full bg-white text-black hover:bg-gray-200"
                        asChild
                      >
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