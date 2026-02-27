import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Cpu, ExternalLink, Github, Lightbulb, X } from "lucide-react";
import { projects } from "@/data/project";

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) => {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      className="group relative flex-shrink-0 w-[350px] md:w-[400px] h-[480px] rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5 cursor-pointer"
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
                onClick={(event) => event.stopPropagation()}
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
                onClick={(event) => event.stopPropagation()}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "-70%"]);

  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_0_100px_rgba(0,0,0,1)] scrollbar-hide"
            >
              <div
                className="absolute inset-0 h-64 opacity-20 blur-3xl pointer-events-none"
                style={{ background: selectedProject.bg }}
              />

              <div className="relative p-6 md:p-10 space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
                        Case_Study_{selectedProject.id}
                      </span>
                      <span
                        className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                        style={{
                          color: selectedProject.statusColor,
                          borderColor: `${selectedProject.statusColor}40`,
                          backgroundColor: `${selectedProject.statusColor}10`,
                        }}
                      >
                        {selectedProject.status}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="group p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X size={20} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {selectedProject.desc}
                </p>

                {/* Grid de Detalhes Técnicos e Aprendizados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Cpu size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-widest font-bold">Engenharia</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.technicalDetails.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-snug">
                          <span className="text-cyan-500/50 mt-1">▹</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learnings */}
                  <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Lightbulb size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-widest font-bold">Aprendizados</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.learnings.map((learning, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-snug">
                          <span className="text-purple-500/50 mt-1">check_</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack & Actions */}
                <div className="pt-6 border-t border-white/5 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200"
                      >
                        <Github size={18} /> REPOSITÓRIO NO GITHUB
                      </a>
                    )}

                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
                      >
                        <ExternalLink size={18} />
                        {selectedProject.demo.includes("figma.com") ? "PROTÓTIPO" : "VISUALIZAR PROJETO"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
