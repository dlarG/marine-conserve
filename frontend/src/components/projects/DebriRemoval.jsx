import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function DebriRemoval() {
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
  const navigate = useNavigate();

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
      {/* Hero Section with Enhanced Parallax */}
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
            src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384229/debris-removal_lumhle.jpg"
            alt="Marine debris removal underwater cleanup"
            className="w-full h-[120%] object-cover"
            style={{ minHeight: "calc(70vh + 100px)" }}
            onError={(e) => {
              e.target.src = "/images/default-cleanup.jpg";
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
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-400/20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-cyan-400/20 blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-indigo-400/15 blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Animated floating debris elements */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-1/5 left-1/6 w-8 h-8 rounded-full bg-blue-300/30 blur-sm animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/5 w-6 h-6 rounded-full bg-cyan-300/40 blur-sm animate-float-medium delay-500"></div>
          <div className="absolute top-2/3 left-1/2 w-4 h-4 rounded-full bg-white/20 blur-sm animate-float-fast delay-1000"></div>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="inline-block animate-slide-up">Marine</span>{" "}
                <span>Debris</span>{" "}
                <span className="inline-block animate-slide-up delay-300">
                  Removal
                </span>
              </h1>

              <div
                className={`h-1 w-52 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8 transform transition-all duration-1000 delay-500 ${
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
                Protecting marine life through systematic underwater cleanup
                <span className="block mt-2 font-medium text-white">
                  and debris prevention
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-teal-300 to-green-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/10 to-white"></div>

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
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-green-100 rounded-full blur-xl opacity-50"></div>

                <div className="relative">
                  <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                    Project Overview
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Clearing Our
                    <span className="block text-transparent bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text">
                      Ocean Pathways
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Marine debris poses one of the most significant threats to
                      reef ecosystems and marine life. Our{" "}
                      <span className="font-semibold text-green-700">
                        "Dive Against Debris"
                      </span>{" "}
                      program conducts systematic underwater surveys and cleanup
                      operations to locate and remove harmful materials from
                      Sogod Bay's coral reefs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Through regular underwater clean-up dives, community
                      engagement, and prevention education, we work to eliminate
                      existing debris while preventing future contamination,
                      particularly targeting ghost fishing gear that continues
                      to trap marine life.
                    </p>
                  </div>

                  {/* <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                        150+
                      </div>
                      <div className="text-gray-700 font-medium">
                        Cleanup Dives
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        And counting
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 to-white p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl">
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                        2.5 tons
                      </div>
                      <div className="text-gray-700 font-medium">
                        Debris Removed
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Equivalent to 2 cars
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384301/P9160011_c80zpq.jpg"
                      alt="Underwater debris cleanup operation"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/default-underwater.jpg";
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-cyan-50/30 to-blue-50/20"></div>

        <div
          ref={(el) => (sectionRefs.current["process"] = el)}
          className={`py-10 transform transition-all duration-1000 relative z-10 ${
            isVisible.process
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-10">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Systematic{" "}
                <span className="text-transparent bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text">
                  Cleanup Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive approach ensuring safe and effective debris
                removal while protecting marine ecosystems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Site Survey",
                  description:
                    "Systematic underwater surveys to identify debris hotspots and assess contamination levels",
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "02",
                  title: "Safe Removal",
                  description:
                    "Careful extraction of debris using specialized tools and techniques to avoid reef damage",
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "03",
                  title: "Surface Processing",
                  description:
                    "Sorting, cataloging, and proper disposal of collected debris according to material type",
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "04",
                  title: "Prevention Education",
                  description:
                    "Community outreach programs to prevent future debris accumulation in marine areas",
                  color: "from-green-500 to-green-600",
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

                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Connection lines for desktop */}
            <div className="hidden lg:flex justify-center items-center mt-12 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                    {i}
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-green-300 to-cyan-300"></div>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                4
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
          className={`py-10 transform transition-all duration-1000 relative z-10 ${
            isVisible.impact
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-10">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Measurable Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Environmental
                <span className="block text-transparent bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text">
                  Impact & Achievements
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Tracking our progress in protecting Sogod Bay's marine
                ecosystems
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Debris Reduction",
                  value: "75%",
                  description:
                    "Reduction in visible debris at monitored reef sites",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
                },
                {
                  title: "Area Coverage",
                  value: "12 km²",
                  description:
                    "Total reef area regularly cleaned and monitored",
                  color: "from-cyan-500 to-blue-500",
                  bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
                },
                {
                  title: "Marine Life Rescues",
                  value: "200+",
                  description: "Marine animals freed from entangling debris",
                  color: "from-indigo-500 to-purple-500",
                  bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} rounded-2xl p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                Key Achievements
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Ghost Net Recovery",
                    description:
                      "Successfully removed over 500 kg of abandoned fishing nets from reef areas",
                    color: "bg-gradient-to-br from-blue-100 to-blue-200",
                  },
                  {
                    title: "Community Involvement",
                    description:
                      "Engaged 80+ local volunteers in regular cleanup activities and training",
                    color: "bg-gradient-to-br from-cyan-100 to-cyan-200",
                  },
                  {
                    title: "Recycling Partnership",
                    description:
                      "Established partnerships with recycling facilities for proper waste processing",
                    color: "bg-gradient-to-br from-green-100 to-green-200",
                  },
                  {
                    title: "Prevention Programs",
                    description:
                      "Educational outreach reaching 500+ community members annually",
                    color: "bg-gradient-to-br from-purple-100 to-purple-200",
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
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-10">
              <span className="inline-block text-sm font-medium text-green-600 uppercase tracking-wider mb-4 bg-green-50 px-4 py-2 rounded-full">
                Visual Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Project{" "}
                <span className="text-transparent bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text">
                  Gallery
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Documenting our marine debris removal operations and community
                impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1778038996/P7230054_kyt0km.jpg",
                  alt: "Before and after debris removal comparison",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1778039085/P7300008_sra737.jpg",
                  alt: "Ghost fishing net removal operation",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384300/P9160010_qt0fkc.jpg",
                  alt: "Plastic debris collection underwater",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1778039100/P8190137_yqbn0f.jpg",
                  alt: "Community volunteer cleanup team",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1778039169/P7230069_yvjm7w.jpg",
                  alt: "Debris sorting and processing on surface",
                },
                {
                  src: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384299/P6140239_feuccb.jpg",
                  alt: "Restored reef ecosystem after cleanup",
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
                        e.target.src = `/images/default-debris-${
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
              Join Our Marine Cleanup Mission
            </h3>
            <p className="text-gray-600 mb-8">
              Join us in our mission to remove debris from Sogod Bay and protect
              marine life. Explore our latest updates and get involved in our
              ongoing cleanup efforts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/volunteer/dive-against-debris")}
                className="cursor-pointer group relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
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

              <button
                onClick={() => navigate("/volunteer/dive-against-debris")}
                className="cursor-pointer group border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Volunteer With Us
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

export default DebriRemoval;
