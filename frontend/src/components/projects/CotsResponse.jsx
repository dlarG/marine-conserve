import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

function CotsResponse() {
  const sectionRefs = useRef({});
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
            src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384227/cots-monitoring_jrysjy.jpg"
            alt="Crown of thorns starfish monitoring"
            className="w-full h-[120%] object-cover"
            style={{ minHeight: "calc(70vh + 100px)" }}
            onError={(e) => {
              e.target.src = "/images/default-starfish.jpg";
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
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-green-400/20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-emerald-400/20 blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-lime-400/15 blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Animated floating star elements */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-1/5 left-1/6 w-6 h-6 rounded-full bg-green-300/40 blur-sm animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/5 w-4 h-4 rounded-full bg-emerald-300/50 blur-sm animate-float-medium delay-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full"></div>
          </div>
          <div className="absolute top-2/3 left-1/2 w-8 h-8 rounded-full bg-lime-300/30 blur-sm animate-float-fast delay-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-green-300 rounded-full"></div>
          </div>
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
                <span className="inline-block animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-300">
                  COTS
                </span>
                <span className="block animate-slide-up delay-150">
                  Monitoring & Response
                </span>
              </h1>

              <div
                className={`h-1 w-64 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8 transform transition-all duration-1000 delay-500 ${
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
                Protecting coral reefs from Crown-of-Thorns Starfish outbreaks
                <span className="block mt-2 font-medium text-white">
                  through vigilant monitoring and rapid response
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
            <div className="w-1 h-3 bg-gradient-to-b from-green-300 to-emerald-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/10 to-white"></div>

        <div
          ref={(el) => (sectionRefs.current["overview"] = el)}
          className={`py-16 md:py-24 transform transition-all duration-1000 relative z-10 ${
            isVisible.overview
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur-xl opacity-50"></div>

                <div className="relative">
                  <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                    Project Overview
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Protecting Reefs from
                    <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                      Starfish Predation
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Crown-of-Thorns Starfish (COTS) are natural predators of
                      coral polyps, but population outbreaks can devastate
                      entire reef systems. Our comprehensive{" "}
                      <span className="font-semibold text-green-700">
                        monitoring and response program
                      </span>{" "}
                      tracks COTS populations and implements rapid intervention
                      strategies to prevent large-scale coral mortality.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Through systematic underwater surveys, population
                      assessment protocols, and targeted removal operations, we
                      maintain ecological balance and protect Sogod Bay's coral
                      reefs from devastating COTS outbreaks that can destroy
                      decades of coral growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur-xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384381/P5250150_c2uarv.jpg"
                      alt="COTS population survey underwater"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/default-survey.jpg";
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
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/20 via-emerald-50/30 to-green-50/20"></div>

        <div
          ref={(el) => (sectionRefs.current["process"] = el)}
          className={`py-16 md:py-24 transform transition-all duration-1000 relative z-10 ${
            isVisible.process
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Systematic{" "}
                <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  Monitoring Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Early detection and rapid response system to prevent COTS
                outbreaks and protect coral reef ecosystems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Regular Monitoring",
                  description:
                    "Monthly underwater surveys to assess COTS population densities across multiple reef sites",
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "02",
                  title: "Population Assessment",
                  description:
                    "Scientific evaluation of population trends and identification of potential outbreak conditions",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  step: "03",
                  title: "Rapid Response",
                  description:
                    "Immediate deployment of removal teams when population thresholds exceed natural levels",
                  color: "from-lime-500 to-lime-600",
                },
                {
                  step: "04",
                  title: "Impact Monitoring",
                  description:
                    "Post-removal monitoring to assess coral recovery and prevent population rebound",
                  color: "from-teal-500 to-teal-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 delay-${
                    index * 100
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Connection lines for desktop */}
            <div className="hidden lg:flex justify-center items-center mt-12 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-white text-sm font-bold">
                    {i}
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-green-300 to-emerald-300"></div>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-white text-sm font-bold">
                4
              </div>
            </div>

            {/* Process description */}
            <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Scientific Approach to COTS Management
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-700 mb-3">
                    Threshold-Based Response
                  </h4>
                  <p className="text-gray-700">
                    We use scientifically established population thresholds to
                    trigger response actions, ensuring interventions are timely
                    and effective without disrupting natural ecosystem balance.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-700 mb-3">
                    Data-Driven Decisions
                  </h4>
                  <p className="text-gray-700">
                    All monitoring data is analyzed to identify trends and
                    hotspots, enabling targeted interventions where they are
                    most needed for maximum ecological impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/10 to-white"></div>

        <div
          ref={(el) => (sectionRefs.current["impact"] = el)}
          className={`py-16 md:py-24 transform transition-all duration-1000 relative z-10 ${
            isVisible.impact
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Conservation Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Measurable{" "}
                <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  Results & Achievements
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Tracking our progress in protecting Sogod Bay's coral reefs from
                COTS predation
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                Program Achievements
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Comprehensive Monitoring Network",
                    description:
                      "Established monitoring protocols across 25+ reef sites in Sogod Bay with real-time data tracking",
                    background: "from-green-50 to-emerald-50",
                  },
                  {
                    title: "Trained Response Teams",
                    description:
                      "40+ certified divers trained in COTS identification and safe removal techniques with ongoing certification",
                  },
                  {
                    title: "Scientific Collaboration",
                    description:
                      "Partnership with marine research institutions for population dynamics studies and methodology improvement",
                  },
                  {
                    title: "Community Awareness",
                    description:
                      "Educational programs on COTS ecology and reef protection reaching 500+ community members annually",
                  },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Impact Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h4 className="text-lg font-semibold text-green-700 mb-4">
                  Ecological Balance
                </h4>
                <p className="text-gray-700">
                  Our program maintains the delicate ecological balance by
                  removing only excess COTS populations, preserving their
                  natural role in reef ecosystems while preventing destructive
                  outbreaks.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <h4 className="text-lg font-semibold text-emerald-700 mb-4">
                  Long-term Sustainability
                </h4>
                <p className="text-gray-700">
                  By training local communities and establishing sustainable
                  monitoring protocols, we ensure long-term reef protection
                  beyond our direct intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative">
        <div
          ref={(el) => (sectionRefs.current["gallery"] = el)}
          className={`py-16 md:py-24 transform transition-all duration-1000 relative z-10 ${
            isVisible.gallery
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Visual Documentation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Monitoring
                <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Documenting our COTS monitoring activities and successful coral
                reef protection efforts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384388/P7240134_pbxkyt.jpg",
                  alt: "COTS species identification training with marine biologists",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384371/cots-monitoring_v9osqs.jpg",
                  alt: "Safe COTS removal techniques using specialized tools",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384374/P5250117_l4mtpi.jpg",
                  alt: "Underwater population density survey and data collection",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384376/P5250118_ul6ohd.jpg",
                  alt: "Scientific assessment of coral damage from COTS predation",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384386/P5250160_qmlygb.jpg",
                  alt: "Dedicated COTS monitoring team in action underwater",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384380/P5250129_okz7q4.jpg",
                  alt: "Healthy reef ecosystem recovering after successful COTS control",
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
                        e.target.src = `/images/default-cots-${
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
              Join Our Coral Restoration Protection
            </h3>
            <p className="text-gray-600 mb-8">
              Help us maintain vigilant monitoring of COTS populations and rapid
              response capabilities to protect Sogod Bay's precious coral reef
              ecosystems
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
            <p className="mt-8 text-gray-400 text-sm">
              Every contribution helps prevent COTS outbreaks and protect coral
              reef biodiversity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CotsResponse;
