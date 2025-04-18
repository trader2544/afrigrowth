
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  LineChart,
  Gem,
  Building,
  PiggyBank,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Investment Advisory",
    description: "Personalized investment strategies for African markets",
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description: "In-depth analysis of African market trends and opportunities",
  },
  {
    icon: Gem,
    title: "Wealth Management",
    description: "Comprehensive wealth preservation and growth strategies",
  },
  {
    icon: Building,
    title: "Corporate Finance",
    description: "Strategic financial planning for businesses",
  },
  {
    icon: PiggyBank,
    title: "Savings Planning",
    description: "Expert guidance on savings and retirement planning",
  },
  {
    icon: GraduationCap,
    title: "Financial Education",
    description: "Educational resources and workshops",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to African markets and growth
            opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
