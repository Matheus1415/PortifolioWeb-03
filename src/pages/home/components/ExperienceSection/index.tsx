import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, Terminal } from "lucide-react";

const EXPERIENCES = [
    {
        year: "2025",
        role: "Desenvolvedor Júnior",
        company: "Smart Telecom",
        desc: "Desenvolvimento full stack de sistemas internos e automações para provedores de internet, otimizando processos críticos de telecomunicação.",
        tags: ["Full Stack", "Laravel", "Automação", "APIs RESTful"],
        accent: "#A855F7",
        link: "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
    },
    {
        year: "2025",
        role: "Freelance Full Stack",
        company: "Pimentex (E-commerce)",
        desc: "Implementação de gateway de pagamento, integração logística com Correios e refinamento do fluxo de conversão e compra.",
        tags: ["E-commerce", "Pagamentos", "Laravel", "Integrações"],
        accent: "#06B6D4",
        link: "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
    },
    {
        year: "2024 - 2025",
        role: "Freelance Developer",
        company: "TechNorth",
        desc: "Desenvolvimento de interfaces modernas e integração de APIs RESTful de pagamento, com foco total em UX e performance.",
        tags: ["PHP", "MySQL", "JavaScript", "Payments"],
        accent: "#EAB308",
    },
    {
        year: "2024",
        role: "Freelance Developer",
        company: "Pimentex (Jurídico)",
        desc: "Automação de sistema jurídico para geração de documentos e controle de prazos, otimizando o workflow dos advogados.",
        tags: ["Automação", "Sistema Jurídico", "Laravel", "MySQL"],
        accent: "#10B981",
    },
    {
        year: "2024",
        role: "Project Management",
        company: "Google Certification",
        desc: "Especialização em Gerenciamento de Projetos, dominando metodologias ágeis (Scrum/Kanban) e gestão de stakeholders.",
        tags: ["Agile", "Scrum", "Google Certified"],
        accent: "#4285F4",
    },
    {
        year: "2024",
        role: "Estágio Full Stack",
        company: "Full Stack Internship",
        desc: "Domínio prático do ecossistema Laravel/PHP e jQuery, focado em entregar soluções reais e escaláveis.",
        tags: ["Laravel", "PHP", "jQuery", "Database"],
        accent: "#F43F5E",
    },
    {
        year: "2023 - 2024",
        role: "Project Lead",
        company: "Mendel Project",
        desc: "Criação de uma plataforma educacional interativa sobre genética. Design moderno focado em visualização de dados.",
        tags: ["Genética", "JS", "Design Interativo"],
        accent: "#8B5CF6",
        link: "https://github.com/Matheus1415/Mendel"
    },
    {
        year: "2022 - 2024",
        role: "Técnico de Informática",
        company: "Formação Técnica",
        desc: "Base sólida em infraestrutura, redes e desenvolvimento de software. Abordagem prática em soluções tecnológicas.",
        tags: ["Infra", "Redes", "Dev", "Hardware"],
        accent: "#64748B",
    }
];

const TimelineItem = ({ exp, index, lineProgress }: any) => {
    const threshold = index / EXPERIENCES.length;
    // Efeito de opacidade e escala apenas quando o item entra no foco do scroll
    const opacity = useTransform(lineProgress, [threshold - 0.1, threshold, threshold + 0.1], [0.3, 1, 1]);
    const scale = useTransform(lineProgress, [threshold - 0.1, threshold], [0.95, 1]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="relative pl-12 pb-16 last:pb-0"
        >
            <div className="absolute left-0 top-2 -translate-x-1/2 z-10">
                <div
                    className="w-3 h-3 rounded-full border-2 border-black"
                    style={{ backgroundColor: exp.accent, boxShadow: `0 0 10px ${exp.accent}` }}
                />
            </div>

            <div
                className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all group cursor-pointer"
                onClick={() => exp.link && window.open(exp.link, "_blank")}
            >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                            <Briefcase size={12} />
                            {exp.company}
                        </div>
                    </div>
                    <div
                        className="px-3 py-1 rounded-full font-mono text-[10px] font-bold border flex items-center gap-2"
                        style={{ color: exp.accent, borderColor: `${exp.accent}30`, backgroundColor: `${exp.accent}10` }}
                    >
                        {exp.year}
                        {exp.link && <ExternalLink size={10} />}
                    </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-4">
                    {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag: string) => (
                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-500 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const ExperienceSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
    const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} id="experience" className="relative py-32 bg-black">
            <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-16">

                <div className="lg:col-span-3">
                    <div className="sticky top-32 space-y-8">
                        <div className="space-y-6">
                            <span className="font-mono text-xs uppercase tracking-[0.4em] text-purple-500">
                                // Carreira.log
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                                JORNADA DE <br />
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent italic">
                                    EVOLUÇÃO.
                                </span>
                            </h2>
                            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-medium">
                                Mais de 2 anos transformando café em sistemas escaláveis e interfaces que as pessoas amam usar.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/5 space-y-4">
                            <div className="flex items-center gap-3">
                                <Terminal size={16} className="text-purple-500" />
                                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest leading-none">
                                    Stack Principal: PHP/Node/React/TS
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar size={16} className="text-blue-500" />
                                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest leading-none">
                                    Disponível para Projetos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-900">
                        <motion.div
                            style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                            className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        />
                    </div>

                    <div className="space-y-0">
                        {EXPERIENCES.map((exp, i) => (
                            <TimelineItem
                                key={i}
                                exp={exp}
                                index={i}
                                lineProgress={smoothProgress}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};