import { motion } from "framer-motion";

const techRows = [
  ["C++", "Python", "Java", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "HTML", "CSS"],
  ["MySQL", "MongoDB", "Docker", "Flask", "FastAPI", "Git", "GitHub", "TensorFlow", "OpenCV", "Pandas"],
  ["Scikit-learn", "NLP", "Hugging Face", "NumPy", "Matplotlib", "Seaborn", "spaCy", "NLTK", "PyTorch"],
];

const TechStackSection = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">
          Focused on latest technologies
        </h2>

        <div className="space-y-4">
          {techRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className={rowIndex % 2 === 0 ? "marquee" : "marquee-reverse"}>
                <div className="flex gap-3 w-max">
                  {[...row, ...row, ...row, ...row].map((tech, i) => (
                    <div
                      key={`${tech}-${i}`}
                      className="flex items-center gap-2 glass rounded-full px-5 py-2.5 whitespace-nowrap"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <span className="text-sm text-secondary-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Edge fade */}
      <div className="absolute top-0 bottom-0 left-0 w-32 z-10" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
      <div className="absolute top-0 bottom-0 right-0 w-32 z-10" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />
    </section>
  );
};

export default TechStackSection;
