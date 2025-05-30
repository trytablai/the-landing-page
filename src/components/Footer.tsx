import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800 relative overflow-hidden">
      {/* Gradient spots moved away from edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/18 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-primary/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/images/tablFullLogo.png" 
              alt="tabl Logo" 
              className="h-12 w-25" 
            />
            <p className="text-gray-400 text-sm hidden md:block">
              Prompt. Iterate. Integrate.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/tabl-ai/" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/tabl.ai/" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-2 md:mb-0">
            © {currentYear} tabl. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
