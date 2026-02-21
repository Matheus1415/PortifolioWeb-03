import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Cpu, Timer, GraduationCap, Sparkles, Database, Globe, Terminal } from "lucide-react";

const FloatingElement = ({ children, delay = 0, duration = 5, x = 0, y = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
            y: [y, y - 20, y],
            x: [x, x + 10, x]
        }}
        transition={{
            y: { duration, repeat: Infinity, ease: "easeInOut", delay },
            x: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay },
            opacity: { duration: 1 }
        }}
        className="absolute z-20 hidden md:block"
        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
        {children}
    </motion.div>
);

const EnergyCore = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-[450px] md:h-[550px] perspective-1000">
            <div className="absolute w-72 h-72 bg-purple-600/20 blur-[130px] animate-pulse" />

            {[1, 1.8, 2.5].map((ring, i) => (
                <motion.div
                    key={i}
                    className="absolute border border-white/5 rounded-full"
                    style={{ width: ring * 120, height: ring * 120 }}
                    animate={{
                        rotate: i % 2 === 0 ? 360 : -360,
                        borderColor: i === 1 ? ["rgba(168,85,247,0.1)", "rgba(59,130,246,0.3)", "rgba(168,85,247,0.1)"] : "rgba(255,255,255,0.05)"
                    }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                />
            ))}

            <FloatingElement x={-180} y={-140} delay={0} duration={6}>
                <div className="p-3 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-blue-400 shadow-2xl">
                    <Database size={20} />
                </div>
            </FloatingElement>

            <FloatingElement x={160} y={-100} delay={1} duration={5}>
                <div className="p-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-full text-emerald-400 shadow-2xl">
                    <Globe size={18} />
                </div>
            </FloatingElement>

            <FloatingElement x={140} y={120} delay={0.5} duration={7}>
                <div className="p-3 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-purple-400 shadow-2xl">
                    <Terminal size={20} />
                </div>
            </FloatingElement>

            <motion.div
                className="relative z-10 w-36 h-36 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.5)]"
                animate={{
                    rotateY: [0, 180, 360],
                    rotateX: [0, 45, 0],
                    borderRadius: ["2rem", "3rem", "2rem"],
                }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 bg-white/10 rounded-[inherit] blur-sm" />
                <Cpu size={54} className="text-white relative z-20 drop-shadow-2xl" />

                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-full h-full bg-white rounded-full blur-2xl z-0"
                />
            </motion.div>

            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full"
                    animate={{
                        y: [0, -200],
                        x: [0, (Math.random() - 0.5) * 250],
                        opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.4 }}
                />
            ))}
        </div>
    );
};

export const AboutSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const manifestoText = `Aos 19 anos, minha filosofia de desenvolvimento é centrada no pragmatismo. Enquanto muitos se perdem na sintaxe, eu me foco na arquitetura do problema. Como graduando em Engenharia de Software, entendo que um bom desenvolvedor não é aquele que escreve mais código, mas aquele que projeta soluções tão eficientes que o código se torna invisível. Meu objetivo é um só: automatizar o caos para que você possa focar no que realmente importa.`;

    return (
        <section id="about" ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-24 bg-black overflow-hidden">
            <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <motion.div className="space-y-12 pr-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs uppercase tracking-[0.4em] text-purple-400">
                                // About.me
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                            CÓDIGO QUE <br />
                            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent italic">
                                DOMINA O TEMPO.
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 max-w-xl">
                        {manifestoText.split(" ").map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden pb-1">
                                <motion.span
                                    initial={{ y: "100%", opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.02,
                                        ease: [0.215, 0.61, 0.355, 1]
                                    }}
                                    className="text-lg md:text-xl font-medium text-zinc-400 block hover:text-white transition-colors cursor-default"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
                        {[
                            {
                                icon: <GraduationCap className="text-purple-400" size={22} />,
                                title: "Engenharia de Software",
                                sub: "Fundamentos sólidos, visão de futuro.",
                                color: "group-hover:text-purple-400"
                            },
                            {
                                icon: <Timer className="text-blue-400" size={22} />,
                                title: "Eficiência Máxima",
                                sub: "Menos manual, mais inteligência.",
                                color: "group-hover:text-blue-400"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (idx * 0.2) }}
                                className="group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 mt-1 bg-zinc-900 rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className={cn("text-white font-bold transition-colors", item.color)}>
                                            {item.title}
                                        </h4>
                                        <p className="text-zinc-500 text-sm italic leading-relaxed">
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* LADO DIREITO: CORE E CARDS FLUTUANTES */}
                <div className="relative">
                    <EnergyCore />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
                        transition={{
                            opacity: { duration: 1 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-zinc-950/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 min-w-[260px]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/20 text-purple-400">
                                    <Code2 size={24} />
                                </div>
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1"
                                >
                                    <Sparkles size={12} className="text-yellow-400" />
                                </motion.div>
                            </div>
                            <div>
                                <p className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">Fullstack Mindset</p>
                                <p className="text-white font-bold tracking-wide">Soluções que Escalam</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};