import { useNavigate } from "react-router-dom";
import React from "react";

function PillarAbout() {
  const sectionRefs = React.useRef({});
  const [isVisible] = React.useState({
    approach: true,
  });
  const navigate = useNavigate();
  return (
    <div
      ref={(el) => (sectionRefs.current["approach"] = el)}
      className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 overflow-hidden transform transition-all duration-1000 ${
        isVisible.approach
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
    >
      {/* New Background - Matching Blog Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-emerald-50" />

      {/* Wave patterns */}
      <div className="absolute top-0 left-0 right-0 h-20">
        <svg
          className="w-full h-full text-teal-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            opacity=".15"
          ></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 transform rotate-180">
        <svg
          className="w-full h-full text-emerald-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            opacity=".15"
          ></path>
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm border border-teal-100"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Our Conservation{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Pillars
            </span>
          </h4>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            GREEN, Inc.'s integrated approach focuses on four key components to
            protect Sogod Bay's marine ecosystems
          </p>
        </div>

        {/* Pillar 1: Coral Restoration */}
        <div
          className={`transform transition-all duration-700 delay-100 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/projects/coral-conservation.jpg"
                  alt="Coral restoration work underwater"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/default-coral.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Coral Restoration
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Rehabilitation of degraded reefs through scientifically guided
                  techniques including nursery installation, coral fragment
                  propagation, and long-term monitoring to assess recovery. Our
                  coral restoration program focuses on collecting naturally
                  detached coral fragments from healthy donor colonies and
                  nurturing them in carefully maintained underwater nurseries
                  until they reach optimal size for transplantation.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Nursery Installation
                  </span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Fragment Propagation
                  </span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Reef Monitoring
                  </span>
                </div>

                <button
                  onClick={() => navigate("/projects/coral-restoration")}
                  className="cursor-pointer group relative bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Marine Debris Removal */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Marine Debris Removal
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Regular underwater clean-up dives targeting marine debris,
                  especially plastics and ghost fishing gear, which pose severe
                  threats to reef health and marine life. Our "Dive Against
                  Debris" program conducts systematic underwater surveys to
                  locate and remove discarded fishing nets, plastic bottles,
                  bags, and other harmful materials.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    Dive Against Debris
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    Ghost Net Removal
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    Plastic Cleanup
                  </span>
                </div>

                <button
                  onClick={() => navigate("/projects/debris-removal")}
                  className="cursor-pointer group relative bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </div>

              <div className="relative h-80 lg:h-auto order-1 lg:order-2">
                <img
                  src="/projects/debris-removal.JPG"
                  alt="Marine debris removal underwater cleanup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/default-cleanup.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: COTS Monitoring */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/projects/cots-monitoring.JPG"
                  alt="Crown of thorns starfish monitoring"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/default-starfish.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    COTS Monitoring & Response
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Regular monitoring and rapid-response removal of
                  Crown-of-Thorns Starfish to prevent large-scale coral
                  predation and protect reef ecosystems from devastating
                  outbreaks. Our comprehensive COTS management program involves
                  systematic underwater surveys to track population densities
                  and identify early signs of outbreak conditions.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                    Regular Monitoring
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                    Rapid Response
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                    Outbreak Prevention
                  </span>
                </div>

                <button
                  onClick={() => navigate("/projects/cots-monitoring")}
                  className="cursor-pointer group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 4: Scientific Data Collection */}
        <div
          className={`transform transition-all duration-700 delay-400 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Scientific Data Collection
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  To support evidence-based conservation, GREEN, Inc. conducts
                  comprehensive scientific data collection focusing on coral
                  reef health assessments, fish population dynamics, and benthic
                  community structure analysis throughout Sogod Bay. Our
                  systematic approach enables us to develop adaptive management
                  strategies and measure the effectiveness of our conservation
                  interventions.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Reef Health Data
                  </span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Fish Population Studies
                  </span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    Evidence-Based Strategies
                  </span>
                </div>

                <button
                  onClick={() => navigate("/projects/data-collection")}
                  className="cursor-pointer group relative bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </div>

              <div className="relative h-80 lg:h-auto order-1 lg:order-2">
                <img
                  src="/projects/data-collection1.jpg"
                  alt="Scientific data collection underwater research"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/default-research.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-teal-500/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Statement */}
        <div
          className={`text-center mt-16 mb-10 transform transition-all duration-1000 delay-500 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
            <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-6">
              Through these integrated activities, we aim to restore and protect
              the reefs of Sogod Bay while fostering a culture of science-based,
              community-supported marine conservation in Southern Leyte.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 transform rotate-180">
        <svg
          className="w-full h-full text-teal-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}
export default PillarAbout;
