import { useState, useEffect, useRef } from 'react';
import { Zap, Settings, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCube from './AnimatedCube';
import AnimatedGear from './AnimatedGear';

const features = [{
  icon: <Zap className="h-16 w-16 text-primary" />,
  title: "Instant CAD Generation",
  description: "Transform simple prompts into parameterized and manufacturable 3D models in seconds.",
  image: "/lovable-uploads/24939a9c-98b0-42a4-a4ef-81b6e8d4479f.png"
}, {
  icon: <FileText className="h-16 w-16 text-primary" />,
  title: "Feature Tree Generator",
  description: "Generate complex 3D features automatically with intuitive controls and visualizations.",
  image: "/images/featureTreeLoop.mov"
},
// }, {
//   icon: <FileText className="h-16 w-16 text-primary" />,
//   title: "Export Ready Files",
//   description: "Get production-ready STEP and STL files compatible with all major CAD software & 3D printers.",
//   image: "/images/tablDownloadLoop.mov"
// }, {
{
  icon: <Shield className="h-16 w-16 text-primary" />,
  title: "Engineering Intelligence",
  description: "Built-in engineering agent to answer design questions and suggests improvements.",
  image: "/images/engineeringAgentLoop.mov"
}, {
  icon: <Settings className="h-16 w-16 text-primary" />,
  title: "Smart Parameterization",
  description: "Models come with intelligent parameters to adjust dimensions, features, and constraints in real-time.",
  image: "/images/tablParametersLoop.mov"
}];

interface FeatureCardProps {
  feature: typeof features[0];
  idx: number;
  cardRef?: React.RefObject<HTMLDivElement>;
  iconRef?: React.RefObject<HTMLDivElement>;
}

const FeatureCard = ({ feature, idx, cardRef, iconRef }: FeatureCardProps) => {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = cardRef || localRef;
  const [visible, setVisible] = useState(false);
  const [gearRadius, setGearRadius] = useState(1);
  const [gearTeeth, setGearTeeth] = useState(12);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

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
      ref={ref}
      className={`flex flex-col ${flexDirection} items-center gap-12 py-20 w-full ${baseAnim} ${animIn}`}
    >
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center px-8"> 
        <div
          ref={iconRef}
          className={`bg-[#0f0f0f] ${(idx === 0 ) ? ' p-0' : 'p-8'} rounded-2xl w-full max-w-full flex items-center justify-center${(idx === 1 || idx === 0) ? ' overflow-hidden' : ''}`}
          style={idx === 1 ? { borderRadius: '1rem' } : {}}>
          {idx === 0 ? (
            <AnimatedCube useModel={true} scale={0.015} />
          ) : idx === 1 ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                console.error('Video error:', e);
                const videoElement = e.target as HTMLVideoElement;
                console.error('Video error details:', {
                  error: videoElement.error,
                  networkState: videoElement.networkState,
                  readyState: videoElement.readyState
                });
              }}
              controls={false}
              style={{ backgroundColor: 'transparent' }}
            >
              <source src={feature.image} type="video/quicktime" />
              <source src={feature.image} type="video/mp4" />
              <source src={feature.image} type="video/x-m4v" />
              Your browser does not support the video tag.
            </video>
          ) : idx === 2 ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                console.error('Video error:', e);
                const videoElement = e.target as HTMLVideoElement;
                console.error('Video error details:', {
                  error: videoElement.error,
                  networkState: videoElement.networkState,
                  readyState: videoElement.readyState
                });
              }}
              controls={false}
              style={{ backgroundColor: 'transparent' }}
            >
              <source src={feature.image} type="video/quicktime" />
              <source src={feature.image} type="video/mp4" />
              <source src={feature.image} type="video/x-m4v" />
              Your browser does not support the video tag.
            </video>
          ) : idx === 3 ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                console.error('Video error:', e);
                const videoElement = e.target as HTMLVideoElement;
                console.error('Video error details:', {
                  error: videoElement.error,
                  networkState: videoElement.networkState,
                  readyState: videoElement.readyState
                });
              }}
              controls={false}
              style={{ backgroundColor: 'transparent' }}
            >
              <source src={feature.image} type="video/quicktime" />
              <source src={feature.image} type="video/mp4" />
              <source src={feature.image} type="video/x-m4v" />
              Your browser does not support the video tag.
            </video>
          ) : (
            feature.icon
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-left w-full md:w-1/2 px-8">
        <div className="flex items-center gap-2 mb-2">
          <img src="/images/tablCubeLogo.png" alt="Product Icon" className="h-6 w-6" />
          <span className="text-md text-gray-400 font-medium tracking-wide py-0.5">Feature</span>
        </div>
        <p className="text-5xl text-white mb-4 leading-tight">
          {feature.title.split(' ').map((word, i) => {
            // Handle responsive title for Smart Parameterization
            if (feature.title === "Smart Parameterization") {
              return (
                <span key={i}>
                  <span className="hidden md:inline">
                    {word.toLowerCase() === 'smart' ? 
                      <span className="text-primary">{word} </span> : 
                      <span>{word} </span>
                    }
                  </span>
                  <span className="md:hidden">
                    {word.toLowerCase() === 'smart' ? 
                      <span className="text-primary">{word} </span> : 
                      <span>{word === 'Parameterization' ? 'Parameters' : word} </span>
                    }
                  </span>
                </span>
              );
            }
            
            // Original logic for other titles
            return word.toLowerCase() === 'instant' || word.toLowerCase() === 'smart' || word.toLowerCase() === 'feature' || word.toLowerCase() === 'engineering' ? 
              <span key={i} className="text-primary">{word} </span> : 
              <span key={i}>{word} </span>;
          })}
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  return (
    <section id="features" className="py-10 bg-black relative overflow-hidden scroll-mt-80">
      {/* Enhanced gradient spots moved closer to center with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[15%] left-[10%] w-[20rem] h-[20rem] bg-primary/30 rounded-full blur-[150px]" style={{animation: 'float-slow 16s ease-in-out infinite', animationDelay: '0s'}}></div>
        <div className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-secondary/25 rounded-full blur-[170px]" style={{animation: 'float-medium 12s ease-in-out infinite', animationDelay: '0.5s'}}></div>
        <div className="absolute top-[20%] right-[20%] w-[25rem] h-[25rem] bg-primary/35 rounded-full blur-[130px]" style={{animation: 'float-fast 8s ease-in-out infinite', animationDelay: '1s'}}></div>
        <div className="absolute bottom-[20%] left-[20%] w-[20rem] h-[20rem] bg-secondary/30 rounded-full blur-[150px]" style={{animation: 'float-slow 16s ease-in-out infinite', animationDelay: '1.5s'}}></div>
        <div className="absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-primary/25 rounded-full blur-[110px]" style={{animation: 'float-medium 12s ease-in-out infinite', animationDelay: '2s'}}></div>
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
        <div ref={featuresRef} className="flex flex-col gap-16">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              feature={feature}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
