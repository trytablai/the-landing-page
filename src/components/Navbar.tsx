
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="/images/tablFullLogo.png" 
              alt="tabl Logo" 
              className="h-12 w-25 mr-3" 
            />
            <span className="text-2xl font-bold text-white"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#platform-preview" 
              className="text-white hover:text-primary font-medium text-sm cursor-pointer"
              onClick={handleViewPlatform}
            >
              View Platform
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-primary font-medium text-sm cursor-pointer"
              onClick={handleFeatures}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-primary font-medium text-sm cursor-pointer"
              onClick={handleNewSection}
            >
              FAQ
            </a>
            <Button 
              className="rounded-full bg-secondary hover:bg-secondary"
              onClick={handleGetStarted}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-card rounded-lg shadow-lg p-4 border border-gray-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#platform-preview"
                className="text-white hover:text-primary font-medium text-sm cursor-pointer"
                onClick={handleViewPlatform}
              >
                View Platform
              </a>
              <a
                href="#features"
                className="text-white hover:text-primary font-medium text-sm cursor-pointer"
                onClick={handleFeatures}
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-white hover:text-primary font-medium text-sm cursor-pointer"
                onClick={handleNewSection}
              >
                FAQ
              </a>
              <Button 
                className="w-full rounded-full bg-primary hover:bg-secondary"
                onClick={handleGetStarted}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
