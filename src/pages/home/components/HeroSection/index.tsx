import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Terminal, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const BorderBeamButton = ({ children }: { children: React.ReactNode }) => (
  <div className="border-beam-wrapper group" data-hover>
    <button className="glow-btn relative z-10 block text-sm tracking-wider font-bold text-white transition-transform group-hover:scale-105">
      {children}
    </button>
  </div>
);

const Grid3D = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTilt({
        x: ((e.clientY - cy) / cy) * 15,
        y: ((e.clientX - cx) / cx) * -15,
      });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" style={{ perspective: "1000px" }}>
      <div
        className="absolute inset-[-20%] grid-3d opacity-40"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
          transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
      />

      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, #000 90%)" }} />
    </div>
  );
};

const MaskRevealText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => (
  <div className="overflow-hidden inline-block">
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("text-white", className)}
    >
      {text}
    </motion.div>
  </div>
);

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden flex-shrink-0">
      <Grid3D />

      <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs px-4 py-2 rounded-full mb-8 border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <Zap size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-zinc-300">
            <span className="text-white font-bold tracking-tight">DEVS</span> · Fullstack Web Developer
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
        </motion.div>

        <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.85] mb-8 tracking-tighter flex flex-col items-center">
          <MaskRevealText text="DEV WEB" delay={0.1} />
          <div className="flex gap-[0.2em]">
            <MaskRevealText text="FULLSTACK" delay={0.4} className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" />
          </div>
        </h1>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8 font-mono tracking-[0.25em] uppercase text-zinc-400"
        >
          Matheus Pereira da Silva
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <p className="font-mono text-sm md:text-lg leading-relaxed text-zinc-300">
            "Automatizar processos é investir no tempo. Processos podem ser automatizados, <span className="text-white font-bold italic">tempo não</span>."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-8 md:gap-24 mt-20 md:mt-24"
        >
          {[
            { n: "2+", label: "Anos de código" },
            { n: "7+", label: "Projetos feitos" },
            { n: "∞", label: "Cafés/Processos" },
          ].map(({ n, label }) => (
            <div key={label} className="text-center group cursor-default">
              <div className="text-3xl md:text-5xl font-black text-white group-hover:text-purple-500 transition-colors duration-500">{n}</div>
              <div className="font-mono text-[9px] md:text-[10px] mt-2 uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-mono">Role para baixo</span>
        <ArrowDown size={18} className="text-purple-500/50" />
      </motion.div>
    </section>
  );
};
