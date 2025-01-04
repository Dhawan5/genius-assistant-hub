import { ChartBar, Users, Zap } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "100,000+",
    label: "Active Users",
  },
  {
    icon: ChartBar,
    value: "1M+",
    label: "Questions Answered Daily",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Accuracy Rate",
  },
];

export const Metrics = () => {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-b from-accent/10 to-transparent border border-accent/20"
            >
              <metric.icon className="w-12 h-12 text-accent mb-4" />
              <span className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </span>
              <span className="text-gray-400">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};