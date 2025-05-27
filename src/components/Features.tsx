import { useState, useEffect, useRef } from 'react';
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

interface FeatureCardProps {
  feature: typeof features[0];
  idx: number;
}

const FeatureCard = ({ feature, idx }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const direction = idx % 2 === 0 ? 'left' : 'right';
  const baseAnim = 'transition-all duration-700 ease-out opacity-0';
  const animIn = visible
    ? 'opacity-100 translate-x-0'
    : direction === 'left'
      ? '-translate-x-32'
      : 'translate-x-32';
  const flexDirection = idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div
      ref={cardRef}
      className={`bg-black/90 rounded-3xl shadow-2xl flex flex-col ${flexDirection} items-stretch h-[400px] max-w-6xl mx-auto w-full border border-white/80 transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] ${baseAnim} ${animIn} relative overflow-hidden`}
    >
      <div className={`flex-shrink-0 w-full md:w-1/2 h-56 md:h-full flex overflow-hidden`}> 
        <div className={`bg-gray-900 flex items-center justify-center w-full h-full shadow-md ${idx % 2 === 0 ? 'md:rounded-l-3xl md:rounded-r-none' : 'md:rounded-r-3xl md:rounded-l-none'}`}> 
          {feature.icon}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-left px-8 py-8">
        <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
          {feature.title.split(' ').map((word, i) => 
            word.toLowerCase() === 'instant' || word.toLowerCase() === 'smart' || word.toLowerCase() === 'export' || word.toLowerCase() === 'engineering' ? 
              <span key={i} className="text-primary">{word} </span> : 
              <span key={i}>{word} </span>
          )}
        </h3>
        <p className="text-gray-300 text-xl leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

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
    }, 8000);

    return () => clearInterval(interval);
  }, [api, current]);
  
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden scroll-mt-80">
      {/* Enhanced gradient spots moved closer to center with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-primary/30 rounded-full blur-[150px]" style={{animation: 'float-slow 16s ease-in-out infinite', animationDelay: '0s'}}></div>
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-secondary/25 rounded-full blur-[170px]" style={{animation: 'float-medium 12s ease-in-out infinite', animationDelay: '0.5s'}}></div>
        <div className="absolute top-[20%] right-[20%] w-[25rem] h-[25rem] bg-primary/35 rounded-full blur-[130px]" style={{animation: 'float-fast 8s ease-in-out infinite', animationDelay: '1s'}}></div>
        <div className="absolute bottom-[20%] left-[20%] w-[30rem] h-[30rem] bg-secondary/30 rounded-full blur-[150px]" style={{animation: 'float-slow 16s ease-in-out infinite', animationDelay: '1.5s'}}></div>
        <div className="absolute top-[30%] left-[30%] w-[20rem] h-[20rem] bg-primary/25 rounded-full blur-[110px]" style={{animation: 'float-medium 12s ease-in-out infinite', animationDelay: '2s'}}></div>
        <style>{`
          @keyframes float-slow {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes float-medium {
            0% { transform: translateX(0) scale(1); }
            50% { transform: translateX(20px) scale(1.03); }
            100% { transform: translateX(0) scale(1); }
          }
          @keyframes float-fast {
            0% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-10px, 10px) scale(1.02); }
            50% { transform: translate(10px, -10px) scale(1.04); }
            75% { transform: translate(-10px, 10px) scale(1.02); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-float-slow { animation: float-slow 16s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        `}</style>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful CAD Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to go from concept to manufacture, powered by AI and built for engineers.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
