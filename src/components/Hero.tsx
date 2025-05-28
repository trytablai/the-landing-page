import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Hero = () => {
  const handleGetStarted = () => {
    const ctaSection = document.querySelector('#waitlist');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPlatform = () => {
    const platformSection = document.querySelector('#platform-preview');
    if (platformSection) {
      platformSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black relative overflow-hidden scroll-mt-80" id="hero">
      {/* Enhanced gradient spots with stronger tabl green visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-[55%] right-1/4 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-[40%] left-3/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[15%] right-1/3 w-56 h-56 bg-primary/15 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '2s'}}></div>
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
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <div className="flex items-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-700 mb-6 w-fit mx-auto">
                <img 
                  src="/images/fusen.png" 
                  alt="Fusen Logo" 
                  className="h-5 w-5" 
                />
                <span className="text-sm text-gray-300 whitespace-nowrap font-inter">Backed by Fusen</span>
              </div>
              <p className="text-4xl md:text-6xl text-white leading-tight mb-4">
                {`AI CAD Assistant for Engineers Ready to Move Fast.`.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    <span
                      className={`inline-block ${
                        word === 'Assistant' || word === 'Fast.'
                          ? 'text-primary'
                          : ''
                      }`}
                      style={{ 
                        opacity: 0,
                        animation: `fadeIn 0.5s ease-out ${0.1 * i}s forwards`
                      }}
                    >
                      {word}
                    </span>
                    {i < arr.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </p>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto fade-in font-inter" style={{animationDelay: '2.5s'}}>
                Prompt. Iterate. Integrate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 fade-in">
              <Button 
                className="rounded-lg text-base px-8 py-6 bg-secondary flex items-center gap-2 hover:animate-throb shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 font-bold"
                onClick={handleGetStarted}
              >
                Join the Waitlist <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-lg text-base px-8 py-6 border-gray-600 text-white hover:bg-gray-800 hover:animate-throb shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 font-bold"
                onClick={handleViewPlatform}
              >
                View Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes throb {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .hover:animate-throb:hover {
    animation: throb 1s ease-in-out infinite !important;
  }
`}</style>
