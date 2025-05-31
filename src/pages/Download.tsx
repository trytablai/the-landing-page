import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Download = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = (format: string) => {
    console.log(`Downloading ${format} file`);
    setShowOptions(false);
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadProgress(0);
          }, 500); // Keep the full bar visible briefly before hiding
          return 100;
        }
        return prev + 2; // Increment by 2% each interval
      });
    }, 50); // Update every 50ms for smooth animation
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          {/* Progress bar background */}
          <div 
            className={`rounded-lg border border-primary bg-[#0f0f0f] overflow-hidden transition-all duration-300 ${
              isDownloading ? 'w-64' : 'w-auto'
            }`}
            style={{ transform: 'scale(1.2)' }}
          >
            {/* Progress fill */}
            <div 
              className="absolute inset-0 bg-primary transition-all duration-50 ease-linear z-0"
              style={{ 
                width: isDownloading ? `${downloadProgress}%` : '0%',
                opacity: isDownloading ? 1 : 0
              }}
            />
            
            {/* Button text */}
            <Button 
              className={`relative rounded-lg border-0 flex items-center gap-2 transition-all duration-300 text-base px-6 py-3 font-thinbold z-10 ${
                isDownloading 
                  ? 'w-64 bg-[#0f0f0f]/0 hover:bg-[#0f0f0f]/0' 
                  : 'bg-[#0f0f0f] hover:bg-primary hover:text-black'
              }`}
              style={{ 
                transform: 'scale(1.2)',
                color: isDownloading 
                  ? `rgb(${255 - (downloadProgress * 2.55)}, ${255 - (downloadProgress * 2.55)}, ${255 - (downloadProgress * 2.55)})`
                  : 'white'
              }}
              onClick={() => !isDownloading && setShowOptions(!showOptions)}
            >
              Download File
            </Button>
          </div>
        </div>

        {/* Format options menu */}
        <div 
          className={`absolute top-full mt-0 transition-all duration-300 ease-in-out transform ${
            showOptions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative w-[300px] h-[150px]">
            {/* Format buttons positioned in an arc */}
            <button
              onClick={() => handleDownload('STEP')}
              className="absolute left-0 top-1/6 w-14 h-14 rounded-full border border-primary bg-primary text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center font-medium text-sm hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform rotate-0"
            >
              STEP
            </button>
            <button
              onClick={() => handleDownload('STL')}
              className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-primary bg-primary text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center font-medium text-sm hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              STL
            </button>
            <button
              onClick={() => handleDownload('OBJ')}
              className="absolute right-0 top-1/6 w-14 h-14 rounded-full border border-primary bg-primary text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center font-medium text-sm hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform -rotate-0"
            >
              OBJ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download; 