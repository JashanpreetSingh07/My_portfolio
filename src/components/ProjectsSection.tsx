import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "HMM-Based POS Tagging",
    date: "Dec 2025",
    description: "A POS tagging system for code-mixed Hindi-English (Hinglish) text using Hidden Markov Models. Features an interactive web app for testing and visualizing tagging results in real time.",
    tech: ["Python", "NLP", "HMM", "JavaScript"],
    github: "https://github.com/JashanpreetSingh07/HMM-Based-POS-Tagging-for-Code-Mixed-Hindi-English-Hinglish-Text",
    live: "https://hmm-based-pos-tagging-for-code-mixed.onrender.com"
  },
  {
    title: "Dynamic Memory Visualizer",
    date: "Oct 2025",
    description: "A web-based simulator that visualizes OS memory management techniques like paging, segmentation, and virtual memory with interactive visual components.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/JashanpreetSingh07/Dynamic_Memory_Visualizer",
    live: "https://dynamic-memory-visualizer.onrender.com"
  },
  {
    title: "LumiTrax",
    date: "Sep 2025",
    description: "A responsive productivity web app to track tasks, metrics, and daily progress with a modern UI for organizing activities and monitoring performance.",
    tech: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    github: "https://github.com/JashanpreetSingh07/LumiTrax",
    live: "https://jashanpreetsingh07.github.io/LumiTrax/"
  },
  {
    title: "StudyVerse",
    date: "Apr 2025",
    description: "A web-based learning platform to organize study materials, notes, and resources with clean UI/UX design and full responsiveness across devices.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/JashanpreetSingh07/StudyVerse",
    live: "https://jashanpreetsingh07.github.io/StudyVerse/"
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Things I've built that solve real problems</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, hsl(0 80% 55% / 0.08), transparent 70%)" }}
              />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        className="w-9 h-9 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight size={16} className="text-primary" />
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      className="w-9 h-9 glass rounded-full flex items-center justify-center opacity-0 transition-opacity"
                    />
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/30">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
