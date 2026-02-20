import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  ArrowRight, 
  Github, 
  Linkedin 
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      <section className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Disponível para novos projetos
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Desenvolvedor Fullstack & <br /> Interface Designer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Especialista em construir experiências digitais modernas com React, 
            TypeScript e as melhores práticas de performance e acessibilidade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center gap-2 group">
              Ver Projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2">
              <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION (Usando Framer Motion Stagger) --- */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <SkillCard icon={<Code2 />} title="Frontend" desc="React, Next.js, Tailwind" />
            <SkillCard icon={<Cpu />} title="Backend" desc="Node.js, PostgreSQL" />
            <SkillCard icon={<Layout />} title="UI/UX" desc="Figma, Radix UI" />
            <SkillCard icon={<Globe />} title="SEO" desc="Performance, Core Web Vitals" />
          </motion.div>
        </div>
      </section>

      {/* --- CTA PARA PLANOS/SERVIÇOS --- */}
      <section className="py-24 container mx-auto px-6 max-w-5xl text-center">
        <div className="p-12 rounded-3xl bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4 text-white">Interessado em escalar seu produto?</h2>
          <p className="mb-8 opacity-90">Confira meus planos de consultoria e desenvolvimento.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Ver Planos e Preços
          </button>
        </div>
      </section>

    </main>
  );
}

function SkillCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-1 text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}