import { Code, Brain, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat like you're talking to a brilliant friend",
  },
  {
    icon: Brain,
    title: "Universal Knowledge",
    description: "From academic research to creative projects",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Build entire applications with AI guidance",
  },
  {
    icon: Zap,
    title: "Learning Companion",
    description: "Personalized explanations in any field",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Supercharge Your Productivity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};