
import { useState, useEffect } from 'react';
import { Zap, Settings, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const features = [{
  icon: <Zap className="h-16 w-16 text-primary" />,
  title: "Instant CAD Generation",
  description: "Transform simple prompts into fully parameterized 3D models in seconds. Our AI understands engineering constraints and generates manufacturable designs with proper tolerances and features.",
  image: "/lovable-uploads/24939a9c-98b0-42a4-a4ef-81b6e8d4479f.png"
}, {
  icon: <Settings className="h-16 w-16 text-primary" />,
  title: "Smart Parameterization",
  description: "Every generated model comes with intelligent parameters that let you modify dimensions, features, and constraints in real-time. Iterate on your designs without starting from scratch.",
  image: "/lovable-uploads/24939a9c-98b0-42a4-a4ef-81b6e8d4479f.png"
}, {
  icon: <FileText className="h-16 w-16 text-primary" />,
  title: "Export Ready Files",
  description: "Get production-ready STEP and STL files instantly. Compatible with all major CAD software and 3D printers, so you can move seamlessly from design to manufacturing.",
  image: "/lovable-uploads/24939a9c-98b0-42a4-a4ef-81b6e8d4479f.png"
}, {
  icon: <Shield className="h-16 w-16 text-primary" />,
  title: "Engineering Intelligence",
  description: "Built-in engineering agent answers design questions, suggests improvements, and ensures your models meet industry standards. It's like having an experienced engineer by your side.",
  image: "/lovable-uploads/24939a9c-98b0-42a4-a4ef-81b6e8d4479f.png"
}];

const Features = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (current === features.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [api, current]);
  
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced gradient spots moved closer to center with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/8 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/12 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/8 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful CAD Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to go from concept to manufacture, powered by AI and built for engineers.
          </p>
        </div>
        
        {/* Carousel Container with fade overlays */}
        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/70 to-transparent z-20 pointer-events-none"></div>
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/70 to-transparent z-20 pointer-events-none"></div>
          
          <Carousel setApi={setApi} className="w-full" opts={{
            align: "center",
            loop: true,
            containScroll: false,
            dragFree: true
          }}>
            <CarouselContent className="ml-0">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-[60%] lg:basis-[45%]">
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-gray-800 h-[600px] flex flex-col gap-6 max-w-md mx-auto">
                    {/* Top - Image space */}
                    <div className="w-full h-64 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-900">
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom - Text content */}
                    <div className="flex-1 flex flex-col justify-center text-center px-2">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-8 border-gray-600 text-white hover:bg-gray-800 z-30" />
            <CarouselNext className="right-8 border-gray-600 text-white hover:bg-gray-800 z-30" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === current ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
