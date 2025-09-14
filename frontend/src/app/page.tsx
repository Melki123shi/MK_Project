import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "./services/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
