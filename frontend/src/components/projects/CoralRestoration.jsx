import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

function CoralRestoration() {
  const sectionRefs = useRef({});
  //   const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    overview: false,
    process: false,
    impact: false,
    gallery: false,
  });
  const [scrollY, setScrollY] = useState(0);
  const [currentMethod, setCurrentMethod] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const methods = [
    {
      id: "wedging",
      title: "Wedging Method",
      subtitle: "Natural Substrate Integration",
      description:
        "Utilizing existing cracks and holes in stable substrates for coral fragment placement, ensuring minimal movement and rapid calcification within one week.",
      image: "/images/wedging.jpg",
      stats: [
        { label: "Success Rate", value: "92%" },
        { label: "Calcification", value: "1 Week" },
        { label: "Sustainability", value: "High" },
      ],
      features: [
        "Uses natural cracks & holes",
        "Minimal environmental impact",
        "Quick calcification process",
        "Maximum stability",
      ],
    },
    {
      id: "concrete",
      title: "Concrete Nail System",
      subtitle: "Enhanced Structural Support",
      description:
        "Modified secure attachment using concrete nails and plastic ties, providing stable foundations for coral growth based on proven DOST Filipinnovation techniques.",
      image: "/images/nails1.jpg",
      stats: [
        { label: "Durability", value: "Excellent" },
        { label: "Stability", value: "High" },
        { label: "Success Rate", value: "88%" },
      ],
      features: [
        "Hammer-driven concrete nails",
        "Plastic tie securement",
        "Stable foundation creation",
        "Proven modified technique",
      ],
    },
    {
      id: "terracotta",
      title: "Terracotta Tiles",
      subtitle: "Biodegradable Artificial Reefs",
      description:
        "Sustainable ceramic tiles that mimic natural coral substrates and naturally erode over decades, leaving behind established coral communities.",
      image: "/images/tiles1.jpg",
      stats: [
        { label: "Biodegradable", value: "Yes" },
        { label: "Erosion Time", value: "Decades" },
        { label: "Cost Efficiency", value: "High" },
      ],
      features: [
        "Calcium carbonate similarity",
        "Natural erosion process",
        "Locally sourced materials",
        "Environmentally friendly",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CounterAnimation = ({ start, end, isVisible }) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
      if (!isVisible) return;
      let current = start;
      const increment = Math.ceil((end - start) / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setCount(current);
      }, 30);
      return () => clearInterval(interval);
    }, [start, end, isVisible]);

    return <span>{count}</span>;
  };

  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: "50px" }
        );

        observer.observe(sectionRefs.current[key]);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrentMethod((prev) => (prev + 1) % methods.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentMethod((prev) => (prev - 1 + methods.length) % methods.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section
        id="hero"
        className="relative overflow-hidden h-[70vh] md:h-[70vh]"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/projects/071018_4346.JPG"
            alt="Coral restoration underwater work"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/images/default-coral.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Parallax overlay elements */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-teal-400/10 blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-emerald-400/10 blur-xl"></div>
        </div>

        <div
          ref={(el) => (sectionRefs.current["hero"] = el)}
          className="relative z-10 h-full flex items-center justify-center px-4"
        >
          <div className="text-center text-white max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span>Coral</span> <span>Restoration</span>
            </h1>
            <div className="h-1 w-52 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto text-white/90 tracking-wide">
              Rebuilding Sogod Bay's coral reefs through science-based
              <span className="block mt-2 font-medium">
                restoration techniques
              </span>
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative">
        <div
          ref={(el) => (sectionRefs.current["overview"] = el)}
          className={`py-10 bg-white transform transition-all duration-1000 ${
            isVisible.overview
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full blur-xl opacity-70"></div>
                <div className="relative">
                  <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
                    Project Overview
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    Reviving Marine
                    <span className="block text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
                      Ecosystems
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our comprehensive coral restoration program in Sogod Bay,
                      Southern Leyte focuses on{" "}
                      <span className="font-semibold text-gray-900">
                        scientifically-guided rehabilitation
                      </span>
                      of degraded reef areas through innovative techniques and
                      community engagement.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By collecting naturally detached fragments from healthy
                      donor colonies and nurturing them in underwater nurseries,
                      we're creating resilient coral communities that support
                      marine biodiversity.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300">
                      <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                        5+
                      </div>
                      <div className="text-gray-700 font-medium">
                        Restoration Sites
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-teal-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300">
                      <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                        <CounterAnimation
                          start={1000}
                          end={5000}
                          isVisible={isVisible.overview}
                        />
                        +
                      </div>
                      <div className="text-gray-700 font-medium">
                        Corals Transplanted
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src="/projects/071018_4351.JPG"
                    alt="Underwater coral nursery"
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      e.target.src = "/images/default-nursery.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Carousel Version */}
      <section id="process" className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/20 to-emerald-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

        <div
          ref={(el) => (sectionRefs.current["process"] = el)}
          className={`relative z-10 transform transition-all duration-1000 ${
            isVisible.process
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced Restoration
                <span className="block text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
                  Techniques
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic, science-based approach ensuring optimal success
                rates in coral transplantation and long-term reef recovery
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Previous method"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-teal-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </button>

              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Next method"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-teal-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>

              {/* Method Counter */}
              <div className="absolute -top-12 right-4 md:right-0 text-sm text-gray-500 font-medium">
                <span className="text-teal-600 font-bold">
                  {currentMethod + 1}
                </span>
                <span className="mx-2">/</span>
                <span>{methods.length}</span>
              </div>

              {/* Carousel Content */}
              <div className="relative overflow-hidden">
                <div
                  className={`transition-all duration-500 ease-out ${
                    direction === "next"
                      ? isAnimating
                        ? "opacity-0 translate-x-full"
                        : "opacity-100 translate-x-0"
                      : isAnimating
                      ? "opacity-0 -translate-x-full"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 lg:h-full">
                        <img
                          src={methods[currentMethod].image}
                          alt={methods[currentMethod].title}
                          className="w-full h-full object-cover transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = "/images/default-coral-method.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-emerald-600/10 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700">
                            Method {currentMethod + 1}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12">
                        <div className="mb-8">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {methods[currentMethod].title}
                          </h3>
                          <p className="text-lg text-teal-600 font-medium mb-6">
                            {methods[currentMethod].subtitle}
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-8">
                            {methods[currentMethod].description}
                          </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {methods[currentMethod].stats.map((stat, index) => (
                            <div
                              key={index}
                              className="text-center p-4 bg-gray-50 rounded-xl"
                            >
                              <div className="text-2xl font-bold text-teal-600 mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Features List */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {methods[currentMethod].features.map(
                              (feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-3"
                                >
                                  <div className="flex-shrink-0 w-2 h-2 bg-teal-400 rounded-full"></div>
                                  <span className="text-gray-700">
                                    {feature}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center gap-4 mt-8 lg:hidden">
                {methods.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentMethod ? "next" : "prev");
                      setCurrentMethod(index);
                    }}
                    className={`w-8 h-2 rounded-full transition-all duration-300 ${
                      index === currentMethod
                        ? "bg-teal-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to method ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Method Preview (Desktop only) */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {methods.map((method, index) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setDirection(index > currentMethod ? "next" : "prev");
                    setCurrentMethod(index);
                  }}
                  className={`p-4 rounded-2xl transition-all duration-300 ${
                    index === currentMethod
                      ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-300 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                        index === currentMethod
                          ? "bg-teal-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h4
                        className={`font-semibold transition-colors duration-300 ${
                          index === currentMethod
                            ? "text-teal-700"
                            : "text-gray-700"
                        }`}
                      >
                        {method.title.split(" ")[0]}
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          index === currentMethod
                            ? "text-teal-600"
                            : "text-gray-500"
                        }`}
                      >
                        {method.title.split(" ").slice(1).join(" ")}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative">
        <div
          ref={(el) => (sectionRefs.current["gallery"] = el)}
          className={`py-10 transform transition-all duration-1000 ${
            isVisible.gallery
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
                Visual Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Restoration
                <span className="block text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Documenting the remarkable recovery of Sogod Bay's coral
                ecosystems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/projects/coral-restoration/071018_4343.JPG",
                  alt: "Before and after restoration comparison",
                },
                {
                  src: "/projects/coral-restoration/071018_4333.JPG",
                  alt: "Coral nursery maintenance process",
                },
                {
                  src: "/projects/coral-restoration/PB080058.JPG",
                  alt: "Coral transplantation underwater work",
                },
                {
                  src: "/projects/coral-restoration/P7240105.jpg",
                  alt: "Healthy restored reef ecosystem thriving",
                },
                {
                  src: "/projects/coral-restoration/P3290154.JPG",
                  alt: "Scientific coral health monitoring",
                },
                {
                  src: "/projects/coral-restoration/555502458_10238099510616702_881221077159221412_n.jpg",
                  alt: "Community involvement in restoration activities",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `/images/default-coral-${
                          (index % 6) + 1
                        }.jpg`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className={`mb-10 max-w-7xl mx-auto text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-teal-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Support Our Coral Restoration Journey
            </h3>
            <p className="text-gray-600 mb-8">
              Join us rebuilding Sogod Bay's coral reefs and preserving marine
              biodiversity for future generations. Explore our latest updates
              and get involved in our ongoing restoration efforts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer group relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-2">
                  <span>Support This Project</span>
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

              <a
                href="https://www.facebook.com/GREENIncorporatedSogodBay"
                target="_blank"
                className="cursor-pointer group border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Get Involved
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoralRestoration;
