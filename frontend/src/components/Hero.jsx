import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 pb-30 md:pt-0">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Background with Parallax Transform */}
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img
            className="w-full h-full object-cover animate-fade-in-slow"
            src="/images/12.jpg"
            alt=""
          />
        </div>

        {/* Gradient Overlay with subtle parallax */}
        <div
          className="absolute bottom-0 left-0 right-0 h-300 bg-gradient-to-t from-blue-900/60 via-blue-900/30 to-transparent animate-fade-in-up"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content with Counter-Parallax */}
      <div
        className={`relative md:mt-20 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <div className="transform transition-transform duration-100">
          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight transform transition-all duration-1000 drop-shadow-lg ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent animate-text-shimmer">
              Marine Conservation Through Science,
            </span>
            <span
              className={`block bg-gradient-to-r from-blue-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              Community & Action
            </span>
          </h1>

          {/* Description */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-sm sm:text-xl md:text-2xl font-medium text-white mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Protecting and restoring coral reefs through research, responsible
              diving, and community partnerships in Southern Leyte and beyond.
            </p>
            <p className="text-xs md:text-lg text-blue-100 font-semibold max-w-3xl mx-auto mb-10 drop-shadow-sm">
              It is never too late to take action—every effort, no matter how
              small, helps conserve and protect our marine environment for
              generations to come.
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

      {/* Enhanced Scroll Indicator with subtle parallax */}
      <div
        className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          transitionDelay: "1s",
          transform: `translateX(-50%) translateY(${scrollY * -0.1}px)`,
          opacity: Math.max(0, 1 - scrollY / 400), // Fade out as user scrolls
        }}
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
