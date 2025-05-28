import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    // Scroll to the CTA section
    const ctaSection = document.querySelector('#waitlist');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleViewPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to the platform preview section
    const platformSection = document.querySelector('#platform-preview');
    if (platformSection) {
      platformSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to the features section
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNewSection = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to a new section - update the selector as needed
    const newSection = document.querySelector('#faq');
    if (newSection) {
      newSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="flex items-center w-full max-w-5xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img 
            src="/images/tablFullLogo.png" 
            alt="tabl Logo" 
            className="h-12 w-25 mr-3" 
          />
          <span className="text-2xl font-bold text-white"></span>
        </div>
        {/* Centered Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-12">
            <a 
              href="#platform-preview" 
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleViewPlatform}
            >
              View Platform
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleFeatures}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleNewSection}
            >
              FAQ
            </a>
          </div>
        </div>
        {/* Join Waitlist Button */}
        <div className="hidden md:flex items-center ml-6">
          <Button 
            className="rounded-lg bg-secondary flex items-center gap-2 hover:animate-throb hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 text-base px-6 py-3 font-thinbold"
            onClick={handleGetStarted}
          >
            Join Waitlist
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none transition-transform duration-200 hover:scale-125 hover:drop-shadow-glow"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-card rounded-lg shadow-lg p-4 border border-gray-200 md:hidden mt-2">
          <div className="flex flex-col space-y-4">
            <a
              href="#platform-preview"
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleViewPlatform}
            >
              View Platform
            </a>
            <a
              href="#features"
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleFeatures}
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-white hover:text-primary font-thinbold text-base cursor-pointer transition-transform duration-200 hover:scale-110 hover:drop-shadow-glow"
              onClick={handleNewSection}
            >
              FAQ
            </a>
            <Button 
              className="w-full rounded-lg bg-secondary flex items-center gap-2 hover:animate-throb hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 text-base px-6 py-3 font-thinbold"
              onClick={handleGetStarted}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

<style>{`
  .drop-shadow-glow {
    filter: drop-shadow(0 0 8px #22d3ee88);
  }
`}</style>
