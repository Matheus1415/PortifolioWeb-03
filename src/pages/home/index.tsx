import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";

export default function Home() {
  return (
    <ScrollArea className="h-[927px]">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </ScrollArea>
  );
}
