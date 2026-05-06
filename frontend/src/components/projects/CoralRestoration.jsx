import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CoralRestoration() {
  const sectionRefs = useRef({});
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    overview: false,
    process: false,
    impact: false,
    gallery: false,
  });
  const [scrollY, setScrollY] = useState(0);
  const [currentMethod, setCurrentMethod] = useState(0);

  // Swipe detection states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const methods = [
    {
      id: "wedging",
      title: "Wedging Method",
      subtitle: "Natural Substrate Integration",
      description:
        "Utilizing existing cracks and holes in stable substrates for coral fragment placement, ensuring minimal movement and rapid calcification within one week.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343136/555705217_10238078344967574_7898261656592206056_n_mjjsbg.jpg",
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
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384112/nails1_v3v9xs.jpg",
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
      title: "Experimental Approach",
      subtitle: "Some of our experimental approaches",
      description:
        "Sustainable ceramic tiles that mimic natural coral substrates and naturally erode over decades, leaving behind established coral communities.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1778038304/Untitled_design_c7vj7c.png",
      stats: [
        { label: "Material", value: "Terracotta" },
        { label: "Erosion", value: "Natural" },
        { label: "Impact", value: "Positive" },
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

  // Simplified Navigation Logic
  const handleNext = () => {
    setCurrentMethod((prev) => (prev + 1) % methods.length);
  };

  const handlePrev = () => {
    setCurrentMethod((prev) => (prev - 1 + methods.length) % methods.length);
  };

  // Touch Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
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
            src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384221/071018_4346_obo6kl.jpg"
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
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384222/071018_4351_juhsud.jpg"
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

      {/* Enhanced Process Section */}
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
              {/* Desktop Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="cursor-pointer hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-20 w-16 h-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 group items-center justify-center"
                aria-label="Previous method"
              >
                <svg
                  className="w-8 h-8 text-gray-700 group-hover:text-teal-600 transition-colors duration-300"
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
              </button>

              <button
                onClick={handleNext}
                className="cursor-pointer hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-20 w-16 h-16 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 group items-center justify-center"
                aria-label="Next method"
              >
                <svg
                  className="w-8 h-8 text-gray-700 group-hover:text-teal-600 transition-colors duration-300"
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
              </button>

              {/* Method Counter */}
              <div className="absolute -top-12 right-4 md:right-0 text-sm text-gray-500 font-medium">
                <span className="text-teal-600 font-bold">
                  {currentMethod + 1}
                </span>
                <span className="mx-2">/</span>
                <span>{methods.length}</span>
              </div>

              {/* Carousel Track Container */}
              <div
                className="relative overflow-hidden rounded-2xl bg-white touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* The Sliding Track */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentMethod * 100}%)` }}
                >
                  {methods.map((method, index) => (
                    <div
                      key={method.id}
                      className="w-full flex-shrink-0 grid lg:grid-cols-2 gap-0"
                    >
                      {/* Image Section */}
                      <div className="relative h-64 lg:h-full min-h-[300px]">
                        <img
                          src={method.image}
                          alt={method.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/images/default-coral-method.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-emerald-600/10 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700 shadow-sm">
                            Method {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-8">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {method.title}
                          </h3>
                          <p className="text-lg text-teal-600 font-medium mb-6">
                            {method.subtitle}
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-8">
                            {method.description}
                          </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {method.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100"
                            >
                              <div className="text-xl lg:text-2xl font-bold text-teal-600 mb-1">
                                {stat.value}
                              </div>
                              <div className="text-xs lg:text-sm text-gray-600">
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
                            {method.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-teal-400 rounded-full"></div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center gap-4 mt-8 lg:hidden">
                {methods.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMethod(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentMethod
                        ? "w-8 bg-teal-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to method ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Bottom Preview Cards */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {methods.map((method, index) => (
                <button
                  key={method.id}
                  onClick={() => setCurrentMethod(index)}
                  className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 ${
                    index === currentMethod
                      ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-300 shadow-lg scale-105"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 shadow-sm ${
                        index === currentMethod
                          ? "bg-teal-600 text-white"
                          : "bg-white text-gray-600 border border-gray-200"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Restoration{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
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
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384409/071018_4343_xgnx0z.jpg",
                  alt: "Before and after restoration comparison",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384407/071018_4333_jdnz08.jpg",
                  alt: "Coral nursery maintenance process",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384417/PB080058_jzitbw.jpg",
                  alt: "Coral transplantation underwater work",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384415/P7240105_mfhcbi.jpg",
                  alt: "Healthy restored reef ecosystem thriving",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384415/P3290154_g7mysv.jpg",
                  alt: "Scientific coral health monitoring",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384411/555502458_10238099510616702_881221077159221412_n_b531if.jpg",
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
          isVisible.gallery
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
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
              <button
                onClick={() => navigate("/volunteer/coral-restoration")}
                className="cursor-pointer group relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
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

              <button
                onClick={() => navigate("/volunteer/coral-restoration")}
                target="_blank"
                className="cursor-pointer group border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Become a Volunteer
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoralRestoration;
