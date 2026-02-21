import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.02));
    return unsub;
  }, [scrollYProgress]);

  return (
    <>

      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full flex items-center gap-6 transition-all duration-500"
        style={{
          background: scrolled ? "hsl(0 0% 4% / 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid hsl(0 0% 10%)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px hsl(0 0% 0% / 0.5)" : "none",
        }}
      >
        <span className="font-mono text-xs font-bold" style={{ color: "hsl(262 83% 65%)" }}>
          &lt;dev /&gt;
        </span>
        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-hover
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: "hsl(0 0% 45%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(0 0% 90%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(0 0% 45%)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
};
