import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="pt-32 pb-32 md:pt-40 md:pb-40 bg-black relative overflow-hidden scroll-mt-80" id="hero">
      {/* Enhanced gradient spots with stronger tabl green visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-[55%] right-1/4 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary/18 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-56 h-56 bg-primary/12 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '2s'}}></div>
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
              <img 
                src="/images/tablCubeLogo.png" 
                alt="tabl Logo" 
                className="h-20 w-20 mx-auto mb-4 hero-fade-in" 
              />
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 fade-in">
              AI CAD <span className="text-primary"> Assistant </span> for Engineers Ready to Move<span className="text-primary"> Fast</span>. 
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto fade-in">
                Prompt. Iterate. Integrate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 fade-in">
              <Button 
                className="rounded-lg text-base px-8 py-6 bg-secondary hover:bg-secondary flex items-center gap-2"
                onClick={handleGetStarted}
              >
                Join the Waitlist <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-lg text-base px-8 py-6 border-gray-600 text-white hover:bg-gray-800"
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
.hero-fade-in {
  opacity: 0;
  transform: translateX(-40px);
  animation: hero-fade-in-slide 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
}
.hero-fade-in-delay-1 { animation-delay: 0.3s; }
.hero-fade-in-delay-2 { animation-delay: 0.6s; }
.hero-fade-in-delay-3 { animation-delay: 0.9s; }
@keyframes hero-fade-in-slide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`}</style>
