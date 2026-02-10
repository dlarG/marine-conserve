import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CotsResponse() {
  const sectionRefs = useRef({});
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    overview: false,
    process: false,
    impact: false,
    gallery: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
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
            src="/projects/cots-monitoring.JPG"
            alt="Crown of thorns starfish monitoring"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/images/default-starfish.jpg";
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
              COTS Monitoring & Response
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Protecting coral reefs from Crown-of-Thorns Starfish outbreaks
              through monitoring and rapid response
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
                Project <span className="text-green-600">Overview</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Crown-of-Thorns Starfish (COTS) are natural predators of coral
                  polyps, but population outbreaks can devastate entire reef
                  systems. Our comprehensive monitoring and response program
                  tracks COTS populations and implements rapid intervention
                  strategies to prevent large-scale coral mortality.
                </p>
                <p className="text-lg leading-relaxed">
                  Through systematic underwater surveys, population assessment
                  protocols, and targeted removal operations, we maintain
                  ecological balance and protect Sogod Bay's coral reefs from
                  devastating COTS outbreaks that can destroy decades of coral
                  growth.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    25+
                  </div>
                  <div className="text-gray-700 font-medium">Survey Sites</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">
                    3,000+
                  </div>
                  <div className="text-gray-700 font-medium">COTS Removed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/projects/cots-survey.jpg"
                alt="COTS population survey underwater"
                className="w-full rounded-2xl shadow-xl"
                onError={(e) => {
                  e.target.src = "/images/default-survey.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div
        ref={(el) => (sectionRefs.current["process"] = el)}
        className={`py-20 bg-gradient-to-b from-green-50 to-emerald-50 transform transition-all duration-1000 delay-300 ${
          isVisible.process
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Monitoring & Response{" "}
              <span className="text-green-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures early detection of COTS population
              increases and rapid response to prevent outbreak conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Regular Monitoring",
                description:
                  "Monthly underwater surveys to assess COTS population densities across multiple reef sites",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Population Assessment",
                description:
                  "Scientific evaluation of population trends and identification of potential outbreak conditions",
                icon: "📊",
              },
              {
                step: "03",
                title: "Rapid Response",
                description:
                  "Immediate deployment of removal teams when population thresholds exceed natural levels",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Impact Monitoring",
                description:
                  "Post-removal monitoring to assess coral recovery and prevent population rebound",
                icon: "🌊",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4 text-center">{item.icon}</div>
                <div className="text-green-600 font-bold text-sm mb-2">
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
              Conservation <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results from our COTS monitoring and response program
              protecting Sogod Bay's coral reefs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Outbreak Prevention
              </h3>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">
                Success rate in preventing COTS outbreaks through early
                intervention
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Coral Protection
              </h3>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                8.5 km²
              </div>
              <p className="text-gray-600">
                Reef area actively monitored and protected from COTS damage
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Response Time
              </h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">72hrs</div>
              <p className="text-gray-600">
                Average response time from outbreak detection to intervention
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Program Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                    Comprehensive Monitoring Network
                  </h4>
                  <p className="text-gray-600">
                    Established monitoring protocols across 25+ reef sites in
                    Sogod Bay
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
                    Trained Response Teams
                  </h4>
                  <p className="text-gray-600">
                    40+ certified divers trained in COTS identification and safe
                    removal techniques
                  </p>
                </div>
              </div>

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
                    Scientific Collaboration
                  </h4>
                  <p className="text-gray-600">
                    Partnership with marine research institutions for population
                    dynamics studies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    Community Awareness
                  </h4>
                  <p className="text-gray-600">
                    Educational programs on COTS ecology and reef protection for
                    local communities
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
              Project <span className="text-green-600">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Documentation of our COTS monitoring activities and successful
              coral reef protection efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/projects/cots-identification.jpg",
                alt: "COTS species identification training",
              },
              {
                src: "/projects/cots-removal.jpg",
                alt: "Safe COTS removal techniques",
              },
              {
                src: "/projects/cots-population-survey.jpg",
                alt: "Population density survey",
              },
              {
                src: "/projects/coral-damage-assessment.jpg",
                alt: "Coral damage assessment",
              },
              {
                src: "/projects/cots-monitoring-team.jpg",
                alt: "COTS monitoring team in action",
              },
              {
                src: "/projects/recovered-reef.jpg",
                alt: "Reef recovery after COTS control",
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
                    e.target.src = `/images/default-cots-${index + 1}.jpg`;
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
      <div className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support COTS Monitoring Efforts
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Help us maintain vigilant protection of Sogod Bay's coral reefs
            through continued monitoring and rapid response capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/donate")}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Support This Project
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CotsResponse;
