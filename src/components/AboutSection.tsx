import { motion } from "framer-motion";
import { Code2, Brain, Trophy, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "200+ Problems Solved",
    description: "Across coding platforms including LeetCode",
  },
  {
    icon: Trophy,
    title: "LeetCode Rating 1487",
    description: "Top ~48% globally in competitive programming",
  },
  {
    icon: Brain,
    title: "AI & NLP Training",
    description: "Hands-on NLP training with transformers and modern AI",
  },
  {
    icon: BookOpen,
    title: "8.55 CGPA",
    description: "B.Tech CSE at Lovely Professional University",
  },
];

const scrollingItems = [
  "Custom Payments & Access Control — Built in-house payment flows and gated access systems.",
  "Unified Auth & Identity — Shared authentication with session handling and role-based access.",
  "AI Services & Model Orchestration — Integrated AI logic for smart features and responses.",
  "Platform Monitoring — Internal analytics for usage patterns and system health.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Something that{" "}
            <span className="font-display italic text-gradient-primary">stands out</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Achievements and highlights from my journey</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scrolling services ticker */}
        <div className="relative overflow-hidden rounded-2xl glass p-1">
          <div className="overflow-hidden">
            <div className="marquee">
              <div className="flex gap-6 w-max py-4 px-4">
                {[...scrollingItems, ...scrollingItems, ...scrollingItems].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                    <span className="text-border mx-2">|</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
