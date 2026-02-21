import { useRef, useState, useEffect, Activity } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Code2, Database, Cloud,
    Cpu, Globe,
    Workflow, Binary, Server,
    ShieldAlert,
    RotateCcw,
    Zap,
    Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

const SKILLS = [
    { icon: Code2, label: "Frontend Core", desc: "React · TS · JS · JQuery", accent: "#61DAFB" },
    { icon: Server, label: "Backend PHP", desc: "Laravel · PHP · Solid", accent: "#F05340" },
    { icon: Database, label: "Backend Node", desc: "Node.js · Express · Zod", accent: "#83CD29" },
    { icon: Cpu, label: "Arquitetura", desc: "Engenharia · DDD · Clean Code", accent: "#A855F7" },
    { icon: Binary, label: "Database", desc: "MySQL · PostgreSQL · Query Optm", accent: "#3B82F6" },
    { icon: Globe, label: "API Design", desc: "RESTful · JWT · RBAC Security", accent: "#06B6D4" },
    { icon: Cloud, label: "DevOps", desc: "Docker · CI/CD · Containers", accent: "#2496ED" },
    { icon: Workflow, label: "Automação", desc: "N8N · Low Code · Scripts", accent: "#FF6C37" },
];
const SkillScanner = () => {
    const [lines, setLines] = useState<string[]>([
        "> SYSTEM_READY",
        "> AGWAITING_INPUT..."
    ]);
    const [isBooting, setIsBooting] = useState(false);
    const [memoryUsage, setMemoryUsage] = useState(12);

    // Função para adicionar linhas ao terminal
    const addLog = (msg: string) => {
        setLines(prev => [...prev.slice(-8), `> ${msg.toUpperCase()}`]);
    };

    // Simulação de uso de memória oscilando
    useEffect(() => {
        const interval = setInterval(() => {
            setMemoryUsage(prev => {
                const next = prev + (Math.random() * 4 - 2);
                return next < 5 ? 5 : next > 95 ? 90 : next;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleAction = (type: 'inject' | 'reboot' | 'scan') => {
        if (isBooting) return;

        if (type === 'inject') {
            addLog("injecting_payload: node_core.bin");
            setTimeout(() => addLog("integrity_check: 100%"), 600);
        } else if (type === 'reboot') {
            setIsBooting(true);
            setLines(["> SYSTEM_REBOOTING...", "> KERNEL_HALTED"]);
            setTimeout(() => {
                setIsBooting(false);
                setLines(["> SYSTEM_ONLINE", "> WELCOME_BACK_ENGINEER"]);
            }, 2000);
        } else {
            addLog("scanning_vulnerabilities...");
            setTimeout(() => addLog("status: secure_environment"), 800);
        }
    };

    return (
        <div className="relative w-full aspect-square max-w-[700px] flex items-center justify-center mx-auto">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-purple-500/10 rounded-full"
                        style={{ width: `${i * 32}%`, height: `${i * 32}%` }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 20 / i, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 bg-zinc-950 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] w-full max-w-[420px] overflow-hidden"
            >
                <div className="bg-zinc-900/50 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_5px_#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Terminal size={12} className="text-zinc-500" />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Root@Mainframe</span>
                    </div>
                </div>

                <div className="p-4 grid grid-cols-2 gap-4 border-b border-white/5 bg-zinc-900/20">
                    <div className="space-y-1">
                        <div className="flex justify-between text-[9px] font-mono text-zinc-500 uppercase">
                            <span>Memory_Usage</span>
                            <span className={memoryUsage > 80 ? "text-red-500" : "text-purple-400"}>
                                {memoryUsage.toFixed(1)}%
                            </span>
                        </div>
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-purple-500"
                                animate={{ width: `${memoryUsage}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div className="text-right">
                            <p className="text-[8px] text-zinc-600 font-mono leading-none">CPU_LOAD</p>
                            <p className="text-[10px] text-green-500 font-mono">STABLE</p>
                        </div>
                        <Cpu size={16} className="text-zinc-700" />
                    </div>
                </div>

                <div className="p-5 h-48 font-mono text-[11px] overflow-hidden flex flex-col justify-end">
                    <AnimatePresence mode="popLayout">
                        {lines.map((line, idx) => (
                            <motion.p
                                key={idx + line}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className={cn(
                                    "py-0.5",
                                    idx === lines.length - 1 ? "text-purple-400" : "text-zinc-600"
                                )}
                            >
                                <span className="opacity-50 mr-2 text-zinc-700">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                {line}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-purple-500 inline-block mt-1"
                    />
                </div>

                <div className="p-4 bg-zinc-900/30 border-t border-white/5 flex gap-2">
                    <button
                        onClick={() => handleAction('inject')}
                        className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-purple-400 text-[10px] font-bold transition-all active:scale-95 uppercase tracking-wider"
                    >
                        <Zap size={12} /> Inject_Code
                    </button>
                    <button
                        onClick={() => handleAction('scan')}
                        className="cursor-pointer px-3 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg text-zinc-400 transition-all active:scale-95"
                    >
                        <ShieldAlert size={14} />
                    </button>
                    <button
                        onClick={() => handleAction('reboot')}
                        className="cursor-pointer px-3 flex items-center justify-center bg-zinc-900 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 rounded-lg text-zinc-400 hover:text-red-400 transition-all active:scale-95"
                    >
                        <RotateCcw size={14} />
                    </button>
                </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
};

const SpotlightCard = ({ icon: Icon, label, desc, accent, index }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [op, setOp] = useState(0);

    return (
        <motion.div
            ref={ref}
            onMouseMove={(e) => {
                const rect = ref.current?.getBoundingClientRect();
                if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setOp(1)}
            onMouseLeave={() => setOp(0)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900/20 p-4"
        >
            <div className="pointer-events-none absolute -inset-px transition duration-300"
                style={{ opacity: op, background: `radial-gradient(100px circle at ${pos.x}px ${pos.y}px, ${accent}15, transparent 80%)` }}
            />
            <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-950 border border-white/5" style={{ color: accent }}>
                    <Icon size={18} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-xs">{label}</h4>
                    <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-tight">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
};

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-black overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent pointer-events-none" />

            <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">

                <div className="relative order-2 lg:order-1 lg:col-span-4 flex justify-center items-center min-h-[500px]">

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute w-[150%] h-[150%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -rotate-12 opacity-20" />

                        <div className="absolute w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-zinc-800 opacity-20"
                        />
                    </div>

                    <div className="relative z-20">
                        <SkillScanner />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <motion.div
                            animate={{ x: [-200, 200], opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-[2px] h-40 bg-gradient-to-b from-transparent via-purple-500 to-transparent blur-sm"
                        />
                    </div>
                </div>

                <motion.div className="space-y-12 lg:pl-4 order-1 lg:order-2 lg:col-span-6">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-400">
                                // Tech.Stack
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                            ARSENAL DE <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent italic">
                                ALTO NÍVEL.
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {SKILLS.map((skill, i) => (
                            <SpotlightCard key={skill.label} {...skill} index={i} />
                        ))}
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2">
                            <Activity size={16} className="text-blue-500 animate-pulse" />
                            <p className="text-zinc-500 text-sm font-medium italic">
                                "Sistemas robustos nascem da atenção aos detalhes e performance extrema."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};