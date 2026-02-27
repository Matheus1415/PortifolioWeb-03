import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Terminal, Home, ChevronRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040a] px-6 text-white"
    >
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 80%)`
          )
        }}
      />

      <div className="absolute inset-0 z-[-1] opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/5 bg-zinc-900/40 p-8 text-center backdrop-blur-2xl shadow-2xl md:p-16"
      >
        <motion.div 
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20"
        >
          <AlertTriangle className="text-cyan-400" size={32} />
        </motion.div>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-500">
            Error_Code: 404_NOT_FOUND
          </p>
          
          <h1 className="relative inline-block text-8xl font-black tracking-tighter md:text-9xl">
            <span className="relative z-10 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              404
            </span>
            <span className="absolute left-1 top-1 z-0 text-cyan-500/30 blur-sm">404</span>
          </h1>
        </div>

        <div className="mx-auto mt-6 max-w-sm space-y-4">
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            A requisição ao recurso falhou. O objeto solicitado não foi encontrado no servidor ou foi movido para um diretório desconhecido.
          </p>
          
          <div className="rounded-lg bg-black/50 p-4 border border-white/5 font-mono text-[11px] text-left text-zinc-500">
            <div className="flex gap-2 mb-1">
              <span className="text-red-500">●</span>
              <span className="text-yellow-500">●</span>
              <span className="text-green-500">●</span>
            </div>
            <p><span className="text-cyan-500">const</span> status = <span className="text-purple-400">"lost"</span>;</p>
            <p><span className="text-cyan-500">if</span> (page === undefined) return <span className="text-cyan-400">"BackToHome"</span>;</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:pr-10"
          >
            <Home size={18} />
            VOLTAR AO SISTEMA
            <motion.span 
              animate={{ x: isHovered ? 5 : 0 }}
              className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} />
            </motion.span>
          </Link>

          <a
            href="https://github.com/Matheus1415"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/5"
          >
            <Terminal size={18} /> REPORTAR BUG
          </a>
        </div>
      </motion.section>

      <div className="absolute top-1/4 left-10 h-32 w-32 bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 h-40 w-40 bg-purple-500/10 blur-[120px]" />
    </main>
  );
}

function useTransform(values: any[], handler: (args: any[]) => string) {
  const [val, setVal] = useState("");
  useEffect(() => {
    return values[0].onChange(() => {
      setVal(handler(values.map(v => v.get())));
    });
  }, [values, handler]);
  return val;
}