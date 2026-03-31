import { motion } from "framer-motion";
import { Code2, Brain, Trophy, BookOpen, User } from "lucide-react";

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
    <section id="about" className="pt-8 pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Who am I section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32 relative rounded-[2rem] overflow-hidden group glass p-8 md:p-14 hover:border-primary/30 transition-all shadow-lg"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -mt-32 -mr-32 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -mb-32 -ml-32 transition-transform duration-1000 group-hover:scale-110"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-20">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56">
                  <div className="absolute inset-0 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 backdrop-blur-md z-10 shadow-lg shadow-primary/5">
                    <User className="w-20 h-20 md:w-28 md:h-28 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-t border-r border-primary/60 animate-spin" style={{ animationDuration: '4s' }}></div>
                  <div className="absolute inset-[-10px] rounded-full border-b border-l border-primary/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '6s' }}></div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                  Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic font-display">am I?</span>
                </h2>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I am a passionate Computer Science student specializing in <strong className="text-foreground tracking-wide font-semibold text-primary/90">Machine Learning</strong>, focused on creating intelligent and impactful software solutions.
                  </p>
                  <p>
                    I have hands-on experience in developing end-to-end projects, including <span className="text-foreground font-medium">AI-powered systems</span>, web applications, and data-driven tools. I enjoy transforming complex problems into simple, efficient solutions and constantly push myself to learn and adapt to new technologies.
                  </p>
                  <p className="font-medium text-foreground/80">
                    My goal is to contribute to innovative teams and build products that make a real difference.
                  </p>
                </div>
              </div>
            </div>
        </motion.div>

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
