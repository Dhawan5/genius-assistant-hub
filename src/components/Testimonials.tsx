import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "TechCorp",
    image: "/placeholder.svg",
    content: "Ultimate AI Assistant has transformed how I write code. The intelligent suggestions and real-time assistance have boosted my productivity by 3x.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    company: "CreativeHub",
    image: "/placeholder.svg",
    content: "As a content creator, having Ultimate AI by my side is like having a brilliant creative partner. It helps me brainstorm ideas and refine my writing.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Research Analyst",
    company: "DataInsights",
    image: "/placeholder.svg",
    content: "The depth of knowledge and analytical capabilities are impressive. It's become an indispensable tool for my research work.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Loved by Professionals Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-lg bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};