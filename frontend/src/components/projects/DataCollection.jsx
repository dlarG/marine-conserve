import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

function DataCollection() {
  const sectionRefs = useRef({});
  // const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    overview: false,
    process: false,
    impact: false,
    gallery: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Defer the loading state update to avoid cascading renders
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section
        id="hero"
        className="relative overflow-hidden h-[70vh] md:h-[70vh]"
      >
        {/* Main background image with parallax */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px) scale(1.1)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/projects/data-collection1.jpg"
            alt="Scientific data collection underwater research"
            className="w-full h-[120%] object-cover"
            style={{ minHeight: "calc(70vh + 100px)" }}
            onError={(e) => {
              e.target.src = "/images/default-research.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Parallax overlay elements */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-teal-400/20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-400/20 blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-cyan-400/15 blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Hero content */}
        <div
          ref={(el) => (sectionRefs.current["hero"] = el)}
          className="relative z-10 h-full flex items-center justify-center px-4"
        >
          <div className="text-center text-white max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                <span className="animate-slide-up">Scientific </span>
                <span className="text-transparent bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 bg-clip-text animate-slide-up delay-150">
                  Data Collection
                </span>
              </h1>

              <div
                className={`h-1 w-64 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-8 transform transition-all duration-1000 delay-500 ${
                  isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></div>

              <p
                className={`text-xl md:text-2xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto text-white/90 tracking-wide transform transition-all duration-1000 delay-700 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Evidence-based research supporting adaptive
                <span className="block mt-2 font-medium text-white">
                  marine conservation strategies
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-teal-300 to-blue-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/10 to-white"></div>

        <div
          ref={(el) => (sectionRefs.current["overview"] = el)}
          className={`py-10 transform transition-all duration-1000 relative z-10 ${
            isVisible.overview
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-xl opacity-50"></div>

                <div className="relative">
                  <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4 bg-teal-50 px-4 py-2 rounded-full">
                    Research Overview
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Evidence-Based
                    <span className="block text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">
                      Conservation Science
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Scientific data collection forms the foundation of our
                      evidence-based conservation approach. Our comprehensive
                      research program focuses on coral reef health assessments,
                      fish population dynamics, and benthic community structure
                      analysis throughout Sogod Bay's diverse marine ecosystems.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Through systematic monitoring protocols, underwater
                      surveys, and collaborative research partnerships, we
                      generate critical data that informs adaptive management
                      strategies and measures the effectiveness of our
                      conservation interventions over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/projects/data-collection/P1280001.JPG"
                      alt="Underwater scientific research activities"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/default-science.jpg";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/20 via-blue-50/30 to-teal-50/20"></div>

        <div
          ref={(el) => (sectionRefs.current["process"] = el)}
          className={`py-10 transform transition-all duration-1000 relative z-10 ${
            isVisible.process
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4 bg-teal-50 px-4 py-2 rounded-full">
                Scientific Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Rigorous{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">
                  Research Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic, peer-reviewed approach ensuring reliable data for
                evidence-based conservation decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Site Selection",
                  description:
                    "Strategic selection of monitoring sites representing diverse reef habitats and conditions",

                  color: "from-teal-500 to-teal-600",
                },
                {
                  step: "02",
                  title: "Data Collection",
                  description:
                    "Standardized underwater surveys recording coral health, fish populations, and habitat quality",

                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "03",
                  title: "Analysis & Trends",
                  description:
                    "Statistical analysis of data trends to identify patterns and conservation priorities",

                  color: "from-cyan-500 to-cyan-600",
                },
                {
                  step: "04",
                  title: "Adaptive Management",
                  description:
                    "Using research findings to refine conservation strategies and measure program effectiveness",

                  color: "from-indigo-500 to-indigo-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 delay-${
                    index * 100
                  }`}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl md:text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Connection lines for desktop */}
            <div className="hidden lg:flex justify-center items-center mt-12 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center text-white text-sm font-bold">
                    {i}
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-teal-300 to-blue-300"></div>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center text-white text-sm font-bold">
                4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative">
        <div
          ref={(el) => (sectionRefs.current["gallery"] = el)}
          className={`py-10 transform transition-all duration-1000 relative z-10 ${
            isVisible.gallery
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4 bg-teal-50 px-4 py-2 rounded-full">
                Scientific Documentation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Research
                <span className="block text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Visual documentation of our scientific research activities and
                data collection methods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/projects/data-collection/556987177_10238077943677542_4769185689283737038_n.jpg",
                  alt: "Coral health assessment using transect line method",
                },
                {
                  src: "/projects/data-collection/557068371_10238078344527563_6873362158842804122_n.jpg",
                  alt: "Fish population counting and species identification",
                },
                {
                  src: "/projects/data-collection/557265560_10238090922682009_2490871689071061588_n.jpg",
                  alt: "Underwater data recording on waterproof slates",
                },
                {
                  src: "/projects/data-collection/P3290154.JPG",
                  alt: "Water quality sampling for chemical analysis",
                },
                {
                  src: "/projects/data-collection/P1070085.JPG",
                  alt: "Research team collaboration and methodology discussion",
                },
                {
                  src: "/projects/data-collection/P1070080.JPG",
                  alt: "Scientific data analysis and statistical processing",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `/images/default-research-${
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
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-teal-300 to-emerald-300 rounded-2xl p-8 md:p-12 border border-teal-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Support Scientific Marine Research
            </h3>
            <p className="text-gray-600 mb-8">
              Help us continue generating critical data that guides effective
              marine conservation in Sogod Bay through evidence-based research
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer group relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-2">
                  <span>Fund Research</span>
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
                  View Publications
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
            <p className="mt-8 text-gray-400 text-sm">
              Every contribution supports rigorous scientific research for
              marine conservation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCollection;
