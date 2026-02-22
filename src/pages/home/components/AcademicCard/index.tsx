import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, GraduationCap, Code2, BookOpen } from "lucide-react";

const ACADEMIC_PROJECTS = [
    {
        id: "01",
        title: "Mendel: Genética Computacional",
        desc: "Simulador de leis genéticas com foco em algoritmos de probabilidade e renderização reativa. Um estudo sobre como simplificar conceitos biológicos complexos através do código.",
        tech: ["JavaScript", "Algorithms", "Canvas API"],
        status: "FUNDAMENTOS",
        color: "#22d3ee",
        github: "https://github.com/Matheus1415/Mendel",
    },
    {
        id: "02",
        title: "Algorithms Study Guide",
        desc: "Repositório educacional focado na implementação de algoritmos fundamentais utilizando TypeScript. O foco central é a aplicação rigorosa de Clean Code e a análise de eficiência de código, transformando conceitos teóricos em implementações didáticas e performáticas.",
        tech: ["TypeScript", "Clean Code", "DS & Algorithms"],
        status: "FUNDAMENTOS",
        color: "#22d3ee",
        github: "https://github.com/Matheus1415/algorithms-study-guide",
    },
    {
        id: "03",
        title: "DevCompare: Venn Logic",
        desc: "Aplicação interativa de visualização de dados que utiliza conceitos de conjuntos matemáticos (Interseção, União e Diferença) para comparar stacks tecnológicas. Implementa diagramas de Venn dinâmicos para análise visual de ecossistemas de desenvolvimento.",
        tech: ["Set Theory", "Data Viz", "React"],
        status: "MATEMÁTICA",
        color: "#3b82f6",
        github: "https://github.com/Matheus1415/DevCompare",
    },
    {
        id: "04",
        title: "NLW Agents: AI Context",
        desc: "Sistema de salas de dúvidas inteligente. Utiliza processamento de áudio e integração com a API do Gemini (IA) para gerar respostas contextualizadas. Um estudo prático sobre como orquestrar LLMs e gerenciar estados de conversa em tempo real.",
        tech: ["Gemini AI", "LLM", "Prompt Eng"],
        status: "INTELIGÊNCIA",
        color: "#8b5cf6",
        github: "https://github.com/Matheus1415/Agents",
    },
    {
        id: "05",
        title: "Laravel FilesSystem",
        desc: "Exploração profunda do sistema de arquivos e abstração de storage do Laravel. Implementa uma arquitetura completa de gerenciamento de diretórios, permissões de arquivos, streams de download e persistência de dados estruturados.",
        tech: ["Laravel", "System Design", "File Storage"],
        status: "INFRAESTRUTURA",
        color: "#ef4444",
        github: "https://github.com/Matheus1415/FilesSystem",
    }
];

const AcademicCard = ({ project, index, progress, range, targetScale }: any) => {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    backgroundColor: "#09090b",
                    top: `calc(-10% + ${index * 25}px)`
                }}
                className="relative w-full max-w-[800px] h-[450px] rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl overflow-hidden"
            >
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none" />

                <div
                    className="absolute -right-20 -top-20 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
                    style={{ backgroundColor: project.color }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Code2 size={16} style={{ color: project.color }} />
                                </div>
                                <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                                    Project_Module_{project.id}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                {project.title}
                            </h3>
                        </div>
                        <div
                            className="font-mono text-[9px] px-3 py-1 rounded-full border"
                            style={{ borderColor: `${project.color}30`, color: project.color }}
                        >
              // {project.status}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                        <div className="space-y-4">
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-zinc-500 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <button className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const AcademicSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative bg-black px-6">
            <div className="pt-24 pb-12 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
                    <GraduationCap size={14} className="text-cyan-400" />
                    <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">Academic Research Lab</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
                    Engenharia de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">Software.</span>
                </h2>
            </div>

            <div className="relative">
                {ACADEMIC_PROJECTS.map((project, i) => {
                    const targetScale = 1 - ((ACADEMIC_PROJECTS.length - i) * 0.05);
                    return (
                        <AcademicCard
                            key={i}
                            index={i}
                            project={project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            <div className="h-[20vh]" />
        </section>
    );
};