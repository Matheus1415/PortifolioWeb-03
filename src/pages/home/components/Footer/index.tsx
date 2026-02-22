import { useRef, useCallback, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Instagram, MessageSquare } from "lucide-react";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/Matheus1415" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/5585991507663" }, 
  { icon: Mail, label: "Email", href: "mailto:mps.web.tech@gmail.com@gmail.com" }, 
];

const MagneticLink = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - (rect.left + rect.width / 2)) * 0.4, y: (e.clientY - (rect.top + rect.height / 2)) * 0.4 });
  }, []);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ x: pos.x, y: pos.y }}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="group relative flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-purple-500/5 hover:border-purple-500/20 transition-colors duration-500"
    >
      <Icon size={22} className="text-zinc-500 group-hover:text-purple-400 transition-colors" />
      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-300 transition-colors">{label}</span>
    </motion.a>
  );
};

export const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer ref={ref} id="contact" className="relative py-32 px-6 overflow-hidden bg-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto text-center relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-purple-500 mb-6 block">
          // Ready for the next sprint?
        </span>
        
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
          VAMOS TIRAR SUA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 italic">
            IDEIA DO BACKLOG.
          </span>
        </h2>

        <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto mb-12 font-medium">
          Seja para um sistema robusto em Laravel ou uma interface insana em React, 
          estou pronto para codar. Vamos conversar sobre o seu próximo grande projeto.
        </p>

        <a
          href="mailto:matheus.p.silva.dev@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-400 transition-all hover:scale-105 active:scale-95 mb-20 group"
        >
          ME MANDE UM SALVE
          <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {SOCIALS.map((s) => (
            <MagneticLink key={s.label} {...s} />
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
            © 2026 · Matheus Pereira · Full Stack Developer
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-zinc-600 font-mono text-[10px]">SYSTEM_STABLE: 100%</span>
            </div>
            <span className="text-zinc-800 font-mono text-[10px]">v2.0.0-stable</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-2xl z-[100] hover:border-purple-500/50 hover:text-purple-400 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};