import { useState } from 'react';
import { Play } from 'lucide-react';

// Adjust this value to match your navbar's height
const NAVBAR_HEIGHT = 80; // px

const PlatformPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="platform-preview" className="py-10 bg-black relative overflow-hidden scroll-mt-80">
      {/* Gradient spots moved away from edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-3/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 left-1/6 w-64 h-64 bg-secondary-500/15 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="text-center mb-16">
          <p className="text-3xl md:text-5xl mb-4 text-white">
            CAD turned into <span className="text-primary">Conversation</span>
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how engineers transform their ideas into manufacturable 3D models with just a simple prompt.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto fade-in relative">
          <div className="w-full h-80 md:h-96 lg:h-[28rem] rounded-md overflow-hidden">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="/images/videoPreview.png"
                  alt="Video Preview"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/50 transition-colors"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="bg-primary/90 hover:bg-primary p-6 rounded-full transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QNEjm8L7l_o?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&autohide=1&fs=1&cc_load_policy=0&iv_load_policy=3&disablekb=0&playsinline=1&start=0"
                title="tabl Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;

