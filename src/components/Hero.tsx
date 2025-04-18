
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-primary min-h-[80vh] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unlocking African Growth Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Expert financial guidance tailored to Africa's emerging markets. We help you navigate
            investments, growth strategies, and wealth management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: TrendingUp,
                title: "Market Growth",
                description: "Access high-growth African markets",
              },
              {
                icon: Shield,
                title: "Secure Investments",
                description: "Protected and regulated investments",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Experienced financial advisors",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <feature.icon className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
