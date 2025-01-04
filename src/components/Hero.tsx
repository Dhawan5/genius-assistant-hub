import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

export const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Brilliant AI Partner for Everything
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Get instant help with writing, analysis, coding, and creative work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-lg animate-glow"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Try Ultimate AI Free
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-lg"
            >
              View Demo
            </Button>
          </div>
          <p className="text-gray-400">
            10,000+ professionals already using Ultimate AI
          </p>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};