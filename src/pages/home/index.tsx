import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
