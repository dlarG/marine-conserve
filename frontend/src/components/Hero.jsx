import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img
            className="w-full h-full object-cover animate-fade-in-slow"
            src="/images/123321.jpg"
            alt="Coral Reef Background"
          />
        </div> */}

        {/* Enhanced Gradient Overlays with marine theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-teal-800/30 to-emerald-900/20" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(167, 243, 208, 0.15) 50%, rgba(20, 184, 166, 0.05) 100%)",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-blue-900/60" />

        {/* Top gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/100 via-teal-900/60 via-teal-900/40 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Light rays */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              style={{
                width: `${20 + i * 8}px`,
                height: `${20 + i * 8}px`,
                left: `${10 + i * 12}%`,
                top: `${20 + i * 10}%`,
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-teal-300/30 to-transparent transform rotate-12 blur-sm" />
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-300/20 to-transparent transform -rotate-6 blur-sm" />
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-emerald-300/25 to-transparent transform rotate-3 blur-sm" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-20">
        <div className="w-full lg:w-1/2 lg:mb-0">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-xs text-center lg:text-left lg:mt-10 lg:text-sm uppercase tracking-widest text-teal-300 mb-4 mt-10 lg:mt-0 font-semibold">
              Protecting Our Oceans
            </p>

            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl text-center lg:text-left mt-5 lg:mt-0 font-bold text-white mb-6 leading-tight tracking-tight">
              <span
                className={`block bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                Marine Conservation
              </span>
              <span
                className={`block bg-gradient-to-r from-teal-300 via-green-400 to-emerald-400 bg-clip-text text-transparent transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                Through Science,
              </span>
              <span
                className={`block bg-gradient-to-r from-teal-200 via-green-300 to-emerald-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                Community & Action
              </span>
            </h1>

            <div
              className={`transform transition-all duration-1000 text-center lg:text-left ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <p className="text-l sm:text-xl md:text-xl text-white/90 mb-8 md:max-w-full lg:max-w-2xl leading-relaxed">
                Protecting and restoring{" "}
                <span className="text-green-300 font-semibold">
                  coral reefs
                </span>{" "}
                through research, responsible diving, and community partnerships
                in Southern Leyte and beyond.
              </p>
            </div>
            <div
              className={`flex flex-wrap gap-4 lg:justify-start justify-center transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <button
                onClick={() => navigate("/mission")}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-3">
                  <span>Support Our Mission</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-white/60 hover:bg-white/5 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 active:scale-95">
                <span className="relative flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span>Explore Our Impact</span>
                </span>
              </button>
            </div>
            <div
              className={`grid grid-cols-3 gap-6 mt-12 transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">
                  50+
                </div>
                <div className="text-sm text-white/70">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">
                  1000+
                </div>
                <div className="text-sm text-white/70">
                  Coral Colonies Saved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">
                  15+
                </div>
                <div className="text-sm text-white/70">Community Partners</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 transform transition-all duration-1000 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="relative max-w-full mx-auto lg:ml-auto">
            {/* Main Image */}
            <div className="relative max-w-3xl mx-auto lg:ml-auto">
              <img
                src="/images/hero-img2.png"
                alt="Marine Conservation"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -top-8 right-8">
              <div className="relative">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`bubble-${i}`}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    style={{
                      width: `${8 + i * 4}px`,
                      height: `${8 + i * 4}px`,
                      left: `${i * 15}px`,
                      top: `${i * -15}px`,
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`w-full lg:w-1/2 transform transition-all duration-1000 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="relative mx-auto lg:ml-auto max-w-full">
            <div className="relative rounded-2xl overflow-hidden transform perspective-1000 rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700">
              <img
                src="/images/img-1.svg"
                alt="Coral Reef Conservation"
                className="w-full h-64 sm:h-80 md:h-120 object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          transitionDelay: "2s",
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <button
          onClick={handleScrollToContent}
          className="group animate-bounce hover:animate-none"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm group-hover:text-white transition-colors"></span>
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
              <div className="w-1 h-4 bg-gradient-to-b from-green-300 to-teal-400 rounded-full mt-2 animate-pulse group-hover:animate-none"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
