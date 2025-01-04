import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Metrics } from "@/components/Metrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Hero />
      <Metrics />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;