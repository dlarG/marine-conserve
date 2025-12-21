import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 pb-30 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Background */}
        <img
          className="w-full h-full object-cover animate-fade-in-slow"
          src="https://images.unsplash.com/photo-1719042575585-e9d866f43210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2NjAzOTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 h-300 bg-blue-900/40 animate-fade-in-up" />
      </div>

      {/* Main Content */}
      <div
        className={`relative md:mt-20 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}
      >
        <div className="transform transition-transform duration-100">
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent animate-text-shimmer">
              Science-Driven Coral Conservation for
            </span>
            <span
              className={`block bg-gradient-to-r from-blue-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              Thriving Oceans
            </span>
          </h1>

          {/* Description */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Protecting and restoring coral reefs through research, responsible
              diving, and community partnerships in Southern Leyte and beyond.
              <span className="block text-blue-200/80 text-base md:text-lg mt-3 md:mt-4 font-normal animate-pulse-slow">
                Every action—no matter how small—helps safeguard marine
                ecosystems for future generations.
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 sm:px-0 transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button className="w-full sm:w-auto group relative bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95 animate-float">
              <div className="absolute inset-0 bg-black rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center space-x-3">
                <span>Support Our Mission</span>
              </span>
            </button>

            <button className="w-full sm:w-auto group border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95">
              <span className="relative flex items-center justify-center space-x-3">
                <span>View Our Research</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: "1s" }}
      >
        <button
          onClick={handleScrollToContent}
          className="group animate-bounce hover:animate-none"
          aria-label="Scroll to content"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/25">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-300 to-teal-300 rounded-full mt-2 animate-pulse group-hover:animate-none"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
