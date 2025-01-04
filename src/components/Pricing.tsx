import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "0",
    features: ["Basic access", "Limited queries", "Standard response time", "Community support"],
  },
  {
    name: "Pro",
    price: "29",
    features: ["Unlimited queries", "Priority response", "Advanced features", "Email support"],
  },
  {
    name: "Team",
    price: "99",
    features: ["Team collaboration", "Admin dashboard", "API access", "24/7 support"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-8 rounded-lg bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">
                ${plan.price}
                <span className="text-lg font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.name === "Pro"
                    ? "bg-accent hover:bg-accent/90 animate-glow"
                    : "bg-accent/10 hover:bg-accent/20"
                } text-white`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};