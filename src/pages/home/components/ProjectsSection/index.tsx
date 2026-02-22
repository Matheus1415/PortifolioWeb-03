import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: "01",
    title: "Restaurant Web App",
    desc: "Aplicação interativa para exploração de cardápios com filtros avançados e interface responsiva.",
    tech: ["React", "TypeScript", "Sass"],
    status: "LIVE",
    statusColor: "#10b981",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #064e3b 100%)",
    github: "https://github.com/Matheus1415/restaurante",
    demo: null
  },
  {
    id: "02",
    title: "NearbyApp",
    desc: "App mobile para localização de comércios locais e resgate de cupons via QR Code.",
    tech: ["React Native", "Expo", "TS"],
    status: "MOBILE",
    statusColor: "#06b6d4",
    bg: "linear-gradient(135deg, #083344 0%, #1e1b4b 100%)",
    github: "https://github.com/Matheus1415/NearbyApp",
    demo: "https://www.figma.com/community/file/1448070647757721748"
  },
  {
    id: "03",
    title: "Tech Innovation Hub",
    desc: "API RESTful robusta para gestão de startups e investimentos com autenticação segura.",
    tech: ["Laravel", "MySQL", "PHP"],
    status: "BACKEND",
    statusColor: "#f43f5e",
    bg: "linear-gradient(135deg, #450a0a 0%, #1e1b4b 100%)",
    github: "https://github.com/Matheus1415/TechInnovationHub",
    demo: null
  },
  {
    id: "04",
    title: "FreelanceHours",
    desc: "Plataforma full-stack conectando criadores a patrocinadores para viabilizar projetos.",
    tech: ["Laravel", "Livewire", "MySQL"],
    status: "PROD",
    statusColor: "#fbbf24",
    bg: "linear-gradient(135deg, #422006 0%, #171717 100%)",
    github: "https://github.com/Matheus1415/FreelanceHours",
    demo: "https://www.figma.com/community/file/1425095508121835225"
  },
  {
    id: "05",
    title: "Mendel",
    desc: "Plataforma interativa de educação genética com foco em UX e aprendizagem prática.",
    tech: ["React", "Chakra UI", "JS"],
    status: "TECH LEAD",
    statusColor: "#a855f7",
    bg: "linear-gradient(135deg, #2e1065 0%, #0f172a 100%)",
    github: "https://github.com/Matheus1415/Mendel",
    demo: "https://mendel-legacy.netlify.app/"
  },
  {
    id: "06",
    title: "in.orbit",
    desc: "Sistema full-stack de metas semanais com visualização de progresso em tempo real.",
    tech: ["Node.js", "React", "Docker"],
    status: "FULLSTACK",
    statusColor: "#22d3ee",
    bg: "linear-gradient(135deg, #164e63 0%, #020617 100%)",
    github: "https://github.com/Matheus1415/NLWPocketJS",
    demo: null
  },
  {
    id: "07",
    title: "Space Explorer",
    desc: "Exploração visual do universo com filtros dinâmicos e design imersivo.",
    tech: ["React", "TypeScript", "Sass"],
    status: "UI/UX",
    statusColor: "#6366f1",
    bg: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
    github: "https://github.com/Matheus1415/siteEspacial",
    demo: null
  },
  {
    id: "08",
    title: "Webhook Inspector (AI)",
    desc: "Estação de trabalho para capturar, inspecionar e replicar webhooks em tempo real com análise inteligente de payloads.",
    tech: ["Node.js", "Fastify", "OpenAI", "React"],
    status: "FULLSTACK",
    statusColor: "#f59e0b",
    bg: "linear-gradient(135deg, #451a03 0%, #1e1b4b 100%)",
    github: "https://github.com/Matheus1415/Webhooks-Inspector",
    demo: null
  },
];

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  return (
    <motion.div
      className="group relative flex-shrink-0 w-[350px] md:w-[400px] h-[480px] rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5"
    >
      <div
        className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110"
        style={{ background: project.bg }}
      />

      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="font-mono text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
            {project.id}
          </span>
          <div
            className="font-mono text-[10px] px-2 py-1 rounded-full border"
            style={{
              color: project.statusColor,
              borderColor: `${project.statusColor}40`,
              backgroundColor: `${project.statusColor}10`
            }}
          >
            ● {project.status}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-mono text-zinc-500 bg-black/50 px-2 py-0.5 rounded border border-white/5">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-3">
            {project.desc}
          </p>

          <div className="flex gap-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors"
              >
                <Github size={14} /> SOURCE
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                {project.demo.includes("figma.com") ? "FIGMA" : "LIVE DEMO"}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "-70%"]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-black"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f605,transparent_50%)]" />

        <div className="relative z-20 w-full pt-12 pb-8 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-purple-500/60">
                // Selected_Works_2026
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              IDEIAS QUE <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent italic">
                VIRAM CÓDIGO.
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3 pt-4 text-zinc-600">
              <div className="h-px w-8 bg-zinc-800" />
              <p className="text-[10px] font-bold tracking-widest uppercase animate-pulse">
                Role para explorar
              </p>
              <div className="h-px w-8 bg-zinc-800" />
            </div>
          </motion.div>
        </div>

        <div className="relative w-full mt-4 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-[10vw] md:px-[20vw]"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <div 
            onClick={() => window.open('https://github.com/Matheus1415', '_blank')}
            className="flex-shrink-0 w-[300px] h-[450px] rounded-2xl border border-dashed border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-purple-500/30 transition-all bg-zinc-950/2 cursor-pointer">
              <div className="p-4 bg-zinc-900/50 rounded-full border border-white/5 group-hover:scale-110 transition-transform">
                <Github className="text-zinc-600 group-hover:text-purple-400" size={24} />
              </div>
              <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Ver mais no GitHub</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};