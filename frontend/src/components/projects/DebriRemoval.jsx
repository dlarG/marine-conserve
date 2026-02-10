import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function DebriRemoval() {
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
            src="/projects/debris-removal.JPG"
            alt="Marine debris removal underwater cleanup"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/images/default-cleanup.jpg";
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
              Marine Debris Removal
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed drop-shadow-md max-w-3xl mx-auto">
              Protecting marine life through systematic underwater cleanup and
              debris prevention
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
                Project <span className="text-blue-600">Overview</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Marine debris poses one of the most significant threats to
                  reef ecosystems and marine life. Our "Dive Against Debris"
                  program conducts systematic underwater surveys and cleanup
                  operations to locate and remove discarded fishing nets,
                  plastic bottles, bags, and other harmful materials from Sogod
                  Bay's coral reefs.
                </p>
                <p className="text-lg leading-relaxed">
                  Through regular underwater clean-up dives, community
                  engagement, and prevention education, we work to eliminate
                  existing debris while preventing future contamination. Our
                  efforts focus particularly on ghost fishing gear that
                  continues to trap and harm marine life long after being
                  abandoned.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    150+
                  </div>
                  <div className="text-gray-700 font-medium">Cleanup Dives</div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                  <div className="text-2xl font-bold text-cyan-600 mb-2">
                    2.5 tons
                  </div>
                  <div className="text-gray-700 font-medium">
                    Debris Removed
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/projects/underwater-cleanup.jpg"
                alt="Underwater debris cleanup operation"
                className="w-full rounded-2xl shadow-xl"
                onError={(e) => {
                  e.target.src = "/images/default-underwater.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div
        ref={(el) => (sectionRefs.current["process"] = el)}
        className={`py-20 bg-gradient-to-b from-blue-50 to-cyan-50 transform transition-all duration-1000 delay-300 ${
          isVisible.process
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cleanup <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive debris removal while
              prioritizing diver safety and environmental protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey",
                description:
                  "Systematic underwater surveys to identify debris hotspots and assess contamination levels",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Safe Removal",
                description:
                  "Careful extraction of debris using specialized tools and techniques to avoid reef damage",
                icon: "🤿",
              },
              {
                step: "03",
                title: "Surface Processing",
                description:
                  "Sorting, cataloging, and proper disposal of collected debris according to material type",
                icon: "♻️",
              },
              {
                step: "04",
                title: "Prevention Education",
                description:
                  "Community outreach programs to prevent future debris accumulation in marine areas",
                icon: "📚",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4 text-center">{item.icon}</div>
                <div className="text-blue-600 font-bold text-sm mb-2">
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
              Environmental <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results from our marine debris removal efforts
              protecting Sogod Bay's ecosystems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Debris Reduction
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-gray-600">
                Reduction in visible debris at monitored reef sites
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Area Coverage
              </h3>
              <div className="text-4xl font-bold text-cyan-600 mb-2">
                12 km²
              </div>
              <p className="text-gray-600">
                Total reef area regularly cleaned and monitored
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Marine Life Rescues
              </h3>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                200+
              </div>
              <p className="text-gray-600">
                Marine animals freed from entangling debris
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                    Ghost Net Recovery
                  </h4>
                  <p className="text-gray-600">
                    Successfully removed over 500 kg of abandoned fishing nets
                    from reef areas
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
                    Community Involvement
                  </h4>
                  <p className="text-gray-600">
                    Engaged 80+ local volunteers in regular cleanup activities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    Recycling Partnership
                  </h4>
                  <p className="text-gray-600">
                    Established partnerships with recycling facilities for
                    proper waste processing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    Prevention Programs
                  </h4>
                  <p className="text-gray-600">
                    Educational outreach reaching 500+ community members
                    annually
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
              Project <span className="text-blue-600">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our marine debris removal operations and
              community involvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/projects/debris-before-after.jpg",
                alt: "Before and after debris removal",
              },
              {
                src: "/projects/ghost-net-removal.jpg",
                alt: "Ghost fishing net removal",
              },
              {
                src: "/projects/plastic-cleanup.jpg",
                alt: "Plastic debris collection",
              },
              {
                src: "/projects/volunteer-cleanup.jpg",
                alt: "Community volunteer cleanup",
              },
              {
                src: "/projects/debris-sorting.jpg",
                alt: "Debris sorting and processing",
              },
              {
                src: "/projects/clean-reef.jpg",
                alt: "Restored reef after cleanup",
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
                    e.target.src = `/images/default-debris-${index + 1}.jpg`;
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
      <div className="py-20 bg-gradient-to-r from-blue-500 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Marine Cleanup Efforts
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Help us keep Sogod Bay's waters clean and protect marine life from
            the dangers of debris pollution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/donate")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Support This Project
            </button>
            <button
              onClick={() => navigate("/volunteer")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebriRemoval;
