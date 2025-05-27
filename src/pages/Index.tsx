
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PlatformPreview from "@/components/PlatformPreview";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced background gradient spots with stronger tabl green presence */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main tabl green gradient spots - more visible */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/18 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/6 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/6 w-64 h-64 bg-secondary/16 rounded-full blur-3xl"></div>
        
        {/* Secondary tabl green spots */}
        <div className="absolute top-1/2 left-2/3 w-48 h-48 bg-primary/12 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/2 left-1/5 w-52 h-52 bg-primary/14 rounded-full blur-3xl"></div>
        
        {/* Subtle warm accent spots for depth */}
        <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-orange-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-yellow-500/4 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PlatformPreview />
        <CTA />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
