import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;