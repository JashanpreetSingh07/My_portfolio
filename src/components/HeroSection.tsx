import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";
import planetHorizon from "@/assets/planet-horizon.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Planet horizon background */}
      <div className="absolute inset-0">
        <img
          src={planetHorizon}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay on top to blend */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, hsl(0 0% 4%) 0%, transparent 40%, transparent 60%, hsl(0 0% 4% / 0.3) 100%)"
        }} />
      </div>

      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 40%, hsl(0 0% 8% / 0.6) 0%, transparent 60%)"
      }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-[120px] opacity-15"
        style={{ background: "hsl(0 80% 50%)", top: "20%", right: "15%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="px-2 py-0.5 bg-primary text-primary-foreground rounded text-xs font-bold">New</span>
          <span className="text-sm text-muted-foreground">Open to Opportunities</span>
          <ArrowRight size={14} className="text-muted-foreground" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">I build & solve</span>
          <br />
          <span className="text-gradient">with </span>
          <span className="font-display italic text-gradient-primary">real code</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg text-muted-foreground mb-2">
            Hello, I'm <span className="text-foreground font-semibold">Jashanpreet Singh</span>
          </p>
          <div className="inline-block">
            <motion.span
              className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold tracking-wide"
              animate={{ boxShadow: ["0 0 20px hsl(0 80% 55% / 0.3)", "0 0 40px hsl(0 80% 55% / 0.5)", "0 0 20px hsl(0 80% 55% / 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Full-Stack Developer
            </motion.span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="mailto:jashanp675@gmail.com"
            className="group inline-flex items-center gap-3 glass rounded-full pl-6 pr-3 py-3 text-foreground font-medium hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 glass rounded-full px-6 py-3 text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} className="text-primary group-hover:-translate-y-0.5 transition-transform" />
            View CV
          </motion.a>

          <a href="mailto:jashanp675@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors md:ml-2">
            <Mail size={16} />
            <span className="text-sm">jashanp675@gmail.com</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/JashanpreetSingh07", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/jashanpreet-singh", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
