import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <ScrollArea className="h-[927px]">
      <CustomCursor />
      <Navbar />
      <HeroSection />
    </ScrollArea>
  );
}
