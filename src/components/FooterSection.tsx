import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo */}
          <motion.div
            className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <span className="text-2xl font-bold text-primary">JS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's innovate together
          </h2>
          <p className="text-muted-foreground mb-10">Ready to collaborate? Let's connect.</p>

          {/* Email CTA */}
          <motion.a
            href="mailto:jashanp675@gmail.com"
            className="group inline-flex items-center gap-3 glass rounded-full px-8 py-4 hover:border-primary/50 transition-all mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} className="text-primary" />
            <span className="text-foreground font-medium">jashanp675@gmail.com</span>
            <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          {/* Social row */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { icon: Github, href: "https://github.com/JashanpreetSingh07", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/jashanpreet-singh", label: "LinkedIn" },
              { icon: Phone, href: "tel:+917357316266", label: "Phone" },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.15, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jashanpreet Singh. Built with passion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
