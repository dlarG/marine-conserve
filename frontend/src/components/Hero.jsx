import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const pillars = [
    { title: "Coral Restoration", color: "text-green-300" },
    { title: "Marine Debris Removal", color: "text-green-300" },
    { title: "COTS Monitoring", color: "text-green-300" },
    {
      title: "Scientific Data Collection",
      color: "text-green-300",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>
        {`
          .hero-carousel .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/100 via-teal-900/60 via-teal-900/40 to-transparent" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-teal-300/30 to-transparent transform rotate-12 blur-sm" />
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-300/20 to-transparent transform -rotate-6 blur-sm" />
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-emerald-300/25 to-transparent transform rotate-3 blur-sm" />
        </div>
      </div>

      <div
        className={`hidden lg:flex absolute bottom-10 left-0 w-full overflow-hidden z-20 transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-teal-900/80 via-teal-900/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-teal-900/80 via-teal-900/40 to-transparent z-10 pointer-events-none" />

        <div className="px-10 w-7xl mx-auto relative z-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="hero-carousel w-full"
          >
            {[...pillars, ...pillars, ...pillars].map((pillar, index) => (
              <SwiperSlide key={index} className="!w-auto py-2">
                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer">
                  {pillar.icon && (
                    <span className="text-2xl mr-3">{pillar.icon}</span>
                  )}
                  <span
                    className={`font-semibold ${pillar.color} text-sm md:text-base whitespace-nowrap`}
                  >
                    {pillar.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-20">
        <div className="w-full lg:w-1/2 lg:mb-0">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-[0.5rem] text-center lg:text-left lg:mt-10 lg:text-[0.6rem] uppercase tracking-widest text-teal-300 mb-4 mt-10 lg:mt-0 font-semibold">
              Protecting Our Oceans since 2013
            </p>

            <h1 className="text-3xl sm:text-3xl md:text-[2.3rem] lg:text-[2.8rem] text-center lg:text-left mt-5 lg:mt-0 font-bold text-white mb-6 leading-tight tracking-tight">
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
              <p className="text-l sm:text-lg md:text-l text-white/90 mb-8 md:max-w-full lg:max-w-2xl leading-relaxed">
                GREEN, Inc. launches a full-time marine conservation operation
                in Malitbog, Southern Leyte, focusing on{" "}
                <span className="text-green-300 font-semibold">
                  coral restoration
                </span>
                ,
                <span className="text-green-300 font-semibold">
                  {" "}
                  marine debris removal
                </span>
                , and
                <span className="text-green-300 font-semibold">
                  {" "}
                  science-based conservation
                </span>{" "}
                to protect Sogod Bay's rich marine ecosystems.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 sm:gap-4 lg:justify-start justify-center transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <button
                onClick={() => navigate("/mission")}
                style={{ cursor: "pointer" }}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl text-base sm:text-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95 max-w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span className="whitespace-nowrap">Support Our Mission</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

              <button
                className="group border-2 border-white/30 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl text-base sm:text-lg font-semibold hover:border-white/60 hover:bg-white/5 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 active:scale-95 max-w-full"
                style={{ cursor: "pointer" }}
              >
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform"
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
                  <span className="whitespace-nowrap">Explore Our Impact</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 mt-12 lg:mt-0 transform transition-all duration-1000 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="relative max-w-full mx-auto lg:ml-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-emerald-500/20 rounded-full blur-2xl opacity-70" />

              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384101/hero-img21_lncb59.png"
                alt="Marine conservation in Southern Leyte - GREEN, Inc. team protecting coral reefs"
                className="w-full h-auto relative z-10"
                loading="eager"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(0,255,0,0.1))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
