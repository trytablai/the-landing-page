const PlatformPreview = () => {
  return (
    <section id="platform-preview" className="py-0 bg-black relative overflow-hidden scroll-mt-80">
      {/* Gradient spots moved away from edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-3/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 left-1/6 w-64 h-64 bg-secondary-500/15 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See tabl in Action</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how engineers transform their ideas into manufacturable 3D models with just a simple prompt.
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-card rounded-xl shadow-md overflow-hidden fade-in">
          <div className="p-2 md:p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 md:p-8 rounded-lg border border-gray-800">
              <div className="w-full h-80 md:h-96 lg:h-[28rem] bg-gray-900 rounded-md overflow-hidden pointer-events-none">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/QNEjm8L7l_o?autoplay=1&mute=1&loop=1&playlist=QNEjm8L7l_o&controls=0&showinfo=0&rel=0&modestbranding=1&autohide=1&fs=0&cc_load_policy=0&iv_load_policy=3&disablekb=1&playsinline=1&start=0&widget_referrer=https%3A%2F%2Fexample.com"
                  title="tabl Platform Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
