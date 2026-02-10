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
  const [setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        ref={(el) => (sectionRefs.current["hero"] = el)}
        className={`relative h-[70vh] overflow-hidden transform transition-all duration-1000 ${
          isVisible.hero ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src="/projects/coral-conservation.jpg"
            alt="Coral restoration underwater work"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/images/default-coral.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to About
            </button>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Coral Restoration
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Rebuilding Sogod Bay's coral reefs through science-based
              restoration techniques
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div
        ref={(el) => (sectionRefs.current["overview"] = el)}
        className={`py-20 bg-white transform transition-all duration-1000 delay-200 ${
          isVisible.overview
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Project <span className="text-teal-600">Overview</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Our coral restoration program represents a comprehensive
                  approach to reef rehabilitation in Sogod Bay, Southern Leyte.
                  We focus on collecting naturally detached coral fragments from
                  healthy donor colonies and nurturing them in carefully
                  maintained underwater nurseries.
                </p>
                <p className="text-lg leading-relaxed">
                  Through scientifically guided techniques including nursery
                  installation, coral fragment propagation, and long-term
                  monitoring, we aim to restore degraded reef areas and enhance
                  the resilience of existing coral communities.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <div className="text-2xl font-bold text-teal-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Restoration Sites
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">
                    5,000+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Corals Transplanted
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/projects/coral-nursery.jpg"
                alt="Underwater coral nursery"
                className="w-full rounded-2xl shadow-xl"
                onError={(e) => {
                  e.target.src = "/images/default-nursery.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div
        ref={(el) => (sectionRefs.current["process"] = el)}
        className={`py-20 bg-gradient-to-b from-teal-50 to-emerald-50 transform transition-all duration-1000 delay-300 ${
          isVisible.process
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Restoration <span className="text-teal-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures the highest success rates in coral
              transplantation and long-term reef recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Fragment Collection",
                description:
                  "Careful collection of naturally detached coral fragments from healthy donor colonies",
                icon: "🪸",
              },
              {
                step: "02",
                title: "Nursery Cultivation",
                description:
                  "Nurturing fragments in underwater nurseries until they reach optimal transplant size",
                icon: "🌱",
              },
              {
                step: "03",
                title: "Site Preparation",
                description:
                  "Preparing degraded reef areas and selecting optimal locations for transplantation",
                icon: "🔨",
              },
              {
                step: "04",
                title: "Monitoring & Care",
                description:
                  "Regular monitoring and maintenance to ensure successful coral establishment and growth",
                icon: "📊",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4 text-center">{item.icon}</div>
                <div className="text-teal-600 font-bold text-sm mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div
        ref={(el) => (sectionRefs.current["impact"] = el)}
        className={`py-20 bg-white transform transition-all duration-1000 delay-400 ${
          isVisible.impact
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measuring Our <span className="text-teal-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through continuous monitoring and scientific assessment, we track
              the success and long-term impact of our restoration efforts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Coral Survival Rate
              </h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
              <p className="text-gray-600">
                Average survival rate of transplanted corals after 12 months
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reef Coverage
              </h3>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                2.5 km²
              </div>
              <p className="text-gray-600">
                Total reef area actively restored and monitored
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Species Diversity
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <p className="text-gray-600">
                Coral species actively maintained in our restoration program
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Successful Nursery Establishment
                  </h4>
                  <p className="text-gray-600">
                    Established 8 active coral nurseries across different reef
                    zones in Sogod Bay
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Community Engagement
                  </h4>
                  <p className="text-gray-600">
                    Trained over 50 local divers in coral restoration techniques
                    and monitoring protocols
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Scientific Partnerships
                  </h4>
                  <p className="text-gray-600">
                    Collaborative research with marine biology institutions for
                    improved restoration methods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Long-term Monitoring
                  </h4>
                  <p className="text-gray-600">
                    Comprehensive 5-year monitoring program tracking coral
                    health and reef recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div
        ref={(el) => (sectionRefs.current["gallery"] = el)}
        className={`py-20 bg-gradient-to-b from-gray-50 to-white transform transition-all duration-1000 delay-500 ${
          isVisible.gallery
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project <span className="text-teal-600">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our coral restoration work and the
              remarkable recovery of Sogod Bay's reefs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/projects/coral-before-after.jpg",
                alt: "Before and after coral restoration",
              },
              {
                src: "/projects/coral-nursery-maintenance.jpg",
                alt: "Coral nursery maintenance",
              },
              {
                src: "/projects/coral-transplantation.jpg",
                alt: "Coral transplantation process",
              },
              {
                src: "/projects/healthy-restored-reef.jpg",
                alt: "Healthy restored reef ecosystem",
              },
              {
                src: "/projects/coral-monitoring.jpg",
                alt: "Coral health monitoring",
              },
              {
                src: "/projects/community-involvement.jpg",
                alt: "Community involvement in restoration",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `/images/default-coral-${index + 1}.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-teal-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support Our Coral Restoration Efforts
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Help us continue rebuilding Sogod Bay's coral reefs and protecting
            marine biodiversity for future generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/donate")}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Support This Project
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoralRestoration;
