import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-5 px-6"
    >
      {/* Logo - absolute left */}
      <motion.a
        href="#home"
        className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-foreground font-display italic hidden md:block"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActiveLink("Home")}
      >
        JS
      </motion.a>

      {/* Centered glass pill nav */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex items-center rounded-full border border-border/40 py-1.5 px-1.5"
          style={{
            background: "hsl(0 0% 8% / 0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className="relative px-5 py-2 text-[13px] tracking-wide transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              {activeLink === link.label && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-[2px] bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className={activeLink === link.label ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                {link.label}
              </span>
            </motion.a>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-border/50 mx-1.5" />

          {/* CTA */}
          <motion.a
            href="mailto:jashanp675@gmail.com"
            className="px-5 py-2 text-[13px] tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-foreground font-display italic">JS</a>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-border/40 p-6"
          style={{ background: "hsl(0 0% 8% / 0.9)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setMobileOpen(false); setActiveLink(link.label); }}
              className={`block py-3 transition-colors ${activeLink === link.label ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </a>
          ))}
          <a href="mailto:jashanp675@gmail.com" className="block mt-2 py-3 text-center bg-primary text-primary-foreground rounded-full font-medium">
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
