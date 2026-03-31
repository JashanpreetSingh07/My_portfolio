import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as Element;
      if (target?.closest && (target.closest('a') || target.closest('button'))) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Tiny immediate dot for precision */}
      <motion.div
        className="pointer-events-none fixed z-[60] rounded-full bg-primary shadow-[0_0_10px_theme('colors.primary.DEFAULT')] hidden md:block"
        style={{
          width: 6,
          height: 6,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Custom trailing shape (4-point AI Sparkle) */}
      <motion.div
        className="pointer-events-none fixed z-[50] flex items-center justify-center mix-blend-screen hidden md:block"
        style={{
          width: 40,
          height: 40,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
      >
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary drop-shadow-[0_0_8px_theme('colors.primary.DEFAULT')]"
        >
          <path
            d="M12 2C12 2 13.5 10.5 22 12C13.5 13.5 12 22 12 22C12 22 10.5 13.5 2 12C10.5 10.5 12 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-colors duration-300 ${isHovering ? "fill-primary/20" : "fill-transparent"}`}
          />
        </svg>
      </motion.div>

      {/* Large background ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-0 rounded-full bg-primary/10 blur-[100px] hidden md:block"
        style={{
          width: 400,
          height: 400,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CursorGlow;
