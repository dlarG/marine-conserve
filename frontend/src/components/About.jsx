import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const calculateOffsets = () => {
      const offsets = {};
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          offsets[key] = sectionRefs.current[key].offsetTop;
        }
      });
      setSectionOffsets(offsets);
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);
    const timer = setTimeout(calculateOffsets, 100);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  // const approachCards = [
  //   {
  //     id: "data-driven",
  //     title: "Collecting Coral Data",
  //     description:
  //       "When coral reefs are damaged, fragments may break off the colony and resettle on the reef. We collect those damaged fragments and care for them in our nurseries.",
  //     image: "/images/collect3.jpg",
  //     alt: "coral data collection in the field",
  //     color: "teal",
  //     delay: "400ms",
  //   },
  //   {
  //     id: "community-led",
  //     title: "Nursing & Outplanting",
  //     description:
  //       "We nurture coral fragments in underwater nurseries until they are large enough to be outplanted back onto the reef, helping to restore damaged ecosystems.",
  //     image: "images/nurse.jpg",
  //     alt: "Community engagement and training",
  //     color: "teal",
  //     delay: "600ms",
  //   },
  //   {
  //     id: "innovation",
  //     title: "Replanting & Restoration",
  //     description:
  //       "Using innovative techniques and community involvement, we outplant healthy corals back onto degraded reefs to promote recovery and biodiversity.",
  //     image: "images/backg.jpg",
  //     alt: "Innovative conservation technology",
  //     color: "teal",
  //     delay: "800ms",
  //   },
  // ];

  const images = {
    teamPhoto:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    underwaterResearch: "images/aboutus1.jpg",
    communityWork:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    coralCloseup:
      "https://images.unsplash.com/photo-1546026423-cc4642626d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  // Timeline data
  const timeline = [
    {
      year: "2013",
      event: "GREEN Inc. founded in Sogod Bay, Southern Leyte",
      description:
        "Establishment of coral nursery in Malitbog and reef monitoring",
    },
    {
      year: "2014",
      event: "Coral Nursery & Transplant Trials",
      description:
        "Tested different types of coral nursery and transplant methods, assisted scientific surveys in Silago, Southern Leyte",
    },
    {
      year: "2015",
      event: "Community Engagement Programs Launched",
      description:
        "Crown of thorns seastar research initiative begun its population monitoring program",
    },
    {
      year: "2017",
      event: "Published Flora & Fauna of Tagbak Marine Park",
      description:
        "Published the first comprehensive guidebook of the area's marine life",
    },
    {
      year: "2020",
      event: "Crown of Thorns Outbreak Reported",
      description:
        "Made a comprehensive report about the crown of thorns outbreak in Sogod Bay and presented it to the governor for a scientifically based intervention.",
    },
    {
      year: "2022",
      event: "Hinundayan Marine Survey",
      description:
        "Conducted surveys on coral reef and reef fishes on selected Marine Protected Areas in Southern Leyte funded by SPIADFI and USAID assisted Provincial Tourism office in exploring Hinundayan for possible dive sites",
    },
    {
      year: "2023",
      event: "Coral Restoration Initiatives Launched",
      description:
        "Started Dive Against Debris, Crown of Thorns Monitoring, Coral Restoration",
    },
  ];

  return (
    <div className="relative  overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-10xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* <div
          ref={(el) => (sectionRefs.current["header"] = el)}
          className={`text-center mb-10 transform transition-all duration-1000 ${
            isVisible.header
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-6">
            <span className="text-teal-700 font-semibold text-sm">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-teal-700">Story</span> &{" "}
            <span className="text-teal-700">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grassroots beginnings to becoming a trusted voice in marine
            conservation
          </p>
        </div> */}
        <div
          ref={(el) => (sectionRefs.current["mainContainer"] = el)}
          className={`bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] rounded-l-3xl overflow-hidden -mr-4 sm:-mr-6 lg:-mr-8 transform transition-all duration-1000 ${
            isVisible.mainContainer
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-12 opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-10 xl:p-12 relative z-10">
              <h3
                className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-300 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                About <span className="text-teal-600 ">GREEN Inc.</span>
              </h3>

              <div
                className={`space-y-6 text-gray-700 transform transition-all duration-1000 delay-500 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-lg leading-relaxed">
                  Grassroots Responsiveness thru Education on Environmental
                  Needs, Incorporated <strong>(GREEN, Inc.)</strong> was
                  formally established in <strong>2013</strong> by{" "}
                  <strong>Jerome Jack Napala</strong>, alongside like-minded
                  individuals passionate about marine conservation.
                </p>
                <p className="text-lg leading-relaxed">
                  Before founding GREEN, Inc., Mr. Napala was a simple
                  government employee with a deep appreciation for the marine
                  environment. His life and professional path took a major turn
                  when he was awarded a{" "}
                  <strong>
                    marine conservation scholarship with Coral Cay Conservation
                  </strong>
                  , where he earned his early dive certification and gained a
                  firsthand understanding of the critical importance of healthy
                  marine ecosystems.
                </p>
                <p className="text-lg leading-relaxed">
                  This experience profoundly influenced his decision to pursue a
                  career in <strong>marine biology</strong> and eventually
                  become a <strong>PADI Open Water Scuba Instructor, </strong>
                  combining his scientific knowledge with hands-on diving
                  expertise. Through GREEN, Inc., Jerome and his team channel
                  their passion into{" "}
                  <strong>
                    marine conservation, community engagement, and science-based
                    initiatives{" "}
                  </strong>
                  to protect and restore the reefs and coastal resources of
                  Southern Leyte.
                </p>
              </div>

              <div
                className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100 transform transition-all duration-1000 delay-700 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 group-hover:animate-bounce">
                    2013
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Year Founded</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-teal-600 group-hover:animate-bounce">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Years Active</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-600 group-hover:animate-bounce">
                    35+
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Studies</div>
                </div>
              </div>
            </div>
            <div
              className={`relative h-[500px] lg:h-auto transform transition-all duration-1000 delay-400 ${
                isVisible.mainContainer
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={images.underwaterResearch}
                  alt="GREEN Inc. team conducting underwater research"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
              <div className="absolute max-w-80 inset-0 bg-gradient-to-r from-white via-white/80 via-white/30"></div>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current["fullImage"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden transform transition-all duration-1000 ${
            isVisible.fullImage ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              transform: `translateY(${
                (scrollY - (sectionOffsets.fullImage || 0)) * 0.05
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/images/close.JPG"
              alt="Close up image of fish"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div
            className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1000 delay-300`}
          >
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Protecting Marine Ecosystems
              </h3>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Through scientific research and community partnerships
              </p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current["approach"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 transform transition-all duration-1000 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-blue-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/100 via-teal-900/60 via-teal-900/40 to-transparent" />
          <div className="absolute left-0 inset-y-0 w-1/3 bg-gradient-to-r from-teal-900/30 to-transparent" />
          <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-emerald-900/20 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
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
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-teal-300/30 to-transparent transform rotate-12 blur-sm" />
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-300/20 to-transparent transform -rotate-6 blur-sm" />
            <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-emerald-300/25 to-transparent transform rotate-3 blur-sm" />
          </div>
          <div className="max-w-full justify-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center mb-12 transform transition-all duration-1000 delay-200 ${
                isVisible.approach
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Our Conservation{" "}
                <span className="bg-gradient-to-r from-teal-300 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Pillars
                </span>
              </h4>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                GREEN, Inc.'s integrated approach focuses on four key components
                to protect Sogod Bay's marine ecosystems
              </p>
              <p className="text-sm text-gray-400 mt-4 md:hidden">
                Tap cards to learn more about each pillar
              </p>
            </div>

            {/* Conservation Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Pillar 1: Coral Restoration */}
              <div
                className={`transform transition-all duration-700 delay-100 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div
                  onClick={() => handleCardClick("coral-restoration")}
                  className={`group relative h-80 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-teal-900/20 to-green-900/10 backdrop-blur-sm hover:border-green-400/50 hover:scale-105 transition-all duration-500 ${
                    activeCard === "coral-restoration"
                      ? "scale-105 border-green-400/50"
                      : ""
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="/projects/coral-conservation.jpg"
                      alt="Coral restoration work underwater"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/images/default-coral.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-teal-900/80 group-hover:via-teal-900/40 group-hover:to-teal-900/20 transition-all duration-500" />
                  </div>

                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">
                        Coral Restoration
                      </h3>
                    </div>
                    <div
                      className={`transform transition-all duration-500 mb-4 ${
                        activeCard === "coral-restoration"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">
                        Rehabilitation of degraded reefs through scientifically
                        guided techniques including nursery installation, coral
                        fragment propagation, and long-term monitoring to assess
                        recovery.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs text-green-200 border border-green-400/40 backdrop-blur-sm">
                          Nursery Installation
                        </span>
                        <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs text-green-200 border border-green-400/40 backdrop-blur-sm">
                          Fragment Propagation
                        </span>
                        <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs text-green-200 border border-green-400/40 backdrop-blur-sm">
                          Reef Monitoring
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/projects/coral-restoration");
                      }}
                      className={`w-full cursor-pointer transform transition-all duration-500 delay-100 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-teal-700 hover:scale-105 ${
                        activeCard === "coral-restoration"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

              {/* Pillar 2: Marine Debris Removal */}
              <div
                className={`transform transition-all duration-700 delay-200 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div
                  onClick={() => handleCardClick("debris-removal")}
                  className={`group relative h-80 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-blue-900/20 to-teal-900/10 backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-500 ${
                    activeCard === "debris-removal"
                      ? "scale-105 border-blue-400/50"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      src="/projects/debris-removal.JPG"
                      alt="Marine debris removal underwater cleanup"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/images/default-cleanup.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-blue-900/80 group-hover:via-blue-900/40 group-hover:to-blue-900/20 transition-all duration-500" />
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                        Marine Debris Removal
                      </h3>
                    </div>
                    <div
                      className={`transform transition-all duration-500 mb-4 ${
                        activeCard === "debris-removal"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">
                        Regular underwater clean-up dives targeting marine
                        debris, especially plastics and ghost fishing gear,
                        which pose severe threats to reef health and marine
                        life.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Dive Against Debris
                        </span>
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Ghost Net Removal
                        </span>
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Plastic Cleanup
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/projects/debris-removal");
                      }}
                      className={`w-full cursor-pointer transform transition-all duration-500 delay-100 bg-gradient-to-r from-blue-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-teal-700 hover:scale-105 ${
                        activeCard === "debris-removal"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              <div
                className={`transform transition-all duration-700 delay-300 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div
                  onClick={() => handleCardClick("cots-monitoring")}
                  className={`group relative h-80 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-teal-900/20 to-blue-900/10 backdrop-blur-sm hover:border-teal-400/50 hover:scale-105 transition-all duration-500 ${
                    activeCard === "cots-monitoring"
                      ? "scale-105 border-teal-400/50"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      src="/projects/cots-monitoring.JPG"
                      alt="Crown of thorns starfish monitoring"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/images/default-starfish.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-teal-900/80 group-hover:via-teal-900/40 group-hover:to-teal-900/20 transition-all duration-500" />
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors duration-300">
                        COTS Monitoring & Response
                      </h3>
                    </div>

                    <div
                      className={`transform transition-all duration-500 mb-4 ${
                        activeCard === "cots-monitoring"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">
                        Regular monitoring and rapid-response removal of
                        Crown-of-Thorns Starfish to prevent large-scale coral
                        predation and protect reef ecosystems from outbreaks.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-teal-500/30 rounded-full text-xs text-teal-200 border border-teal-400/40 backdrop-blur-sm">
                          Regular Monitoring
                        </span>
                        <span className="px-3 py-1 bg-teal-500/30 rounded-full text-xs text-teal-200 border border-teal-400/40 backdrop-blur-sm">
                          Rapid Response
                        </span>
                        <span className="px-3 py-1 bg-teal-500/30 rounded-full text-xs text-teal-200 border border-teal-400/40 backdrop-blur-sm">
                          Outbreak Prevention
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/projects/cots-monitoring");
                      }}
                      className={`w-full cursor-pointer transform transition-all duration-500 delay-100 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-teal-600 hover:to-blue-700 hover:scale-105 ${
                        activeCard === "cots-monitoring"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              <div
                className={`transform transition-all duration-700 delay-400 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div
                  onClick={() => handleCardClick("data-collection")}
                  className={`group relative h-80 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-blue-900/20 to-green-900/10 backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-500 ${
                    activeCard === "data-collection"
                      ? "scale-105 border-blue-400/50"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img
                      src="/projects/data-collection1.jpg"
                      alt="Scientific data collection underwater research"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/images/default-research.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-blue-900/80 group-hover:via-blue-900/40 group-hover:to-blue-900/20 transition-all duration-500" />
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                        Scientific Data Collection
                      </h3>
                    </div>
                    <div
                      className={`transform transition-all duration-500 mb-4 ${
                        activeCard === "data-collection"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">
                        Evidence-based conservation through detailed monitoring
                        of coral reef health, fish populations, and benthic
                        communities to inform adaptive management strategies.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Reef Health Data
                        </span>
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Fish Population Studies
                        </span>
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                          Evidence-Based Strategies
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/projects/data-collection");
                      }}
                      className={`w-full cursor-pointer transform transition-all duration-500 delay-100 bg-gradient-to-r from-blue-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-green-700 hover:scale-105 ${
                        activeCard === "data-collection"
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

            {/* Summary Statement */}
            <div
              className={`text-center mb-10 transform transition-all duration-1000 delay-500 ${
                isVisible.approach
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6">
                Through these integrated activities, we aim to restore and
                protect the reefs of Sogod Bay while fostering a culture of
                science-based, community-supported marine conservation in
                Southern Leyte.
              </p>
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => navigate("/projects")}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transition-transform duration-500 group-hover:translate-x-full"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <span>Explore All Our Projects</span>
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
            </div>
          </div>
        </div>
        <div
          ref={(el) => (sectionRefs.current["fullImageQuote"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden transform transition-all duration-1000 ${
            isVisible.fullImageQuote
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              transform: `translateY(${
                (scrollY - (sectionOffsets.fullImageQuote || 0)) * 0.06
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/images/small2.jpg"
              alt="GREEN Inc. team conducting underwater research"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div
            className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1000 delay-300`}
          >
            <div className="text-center text-white px-6 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-4xl font-bold mb-6 leading-tight drop-shadow-lg">
                "Every effort, no matter how small, contributes to the greater
                goal of{" "}
                <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                  marine preservation
                </span>
                "
              </blockquote>
              <p className="text-lg md:text-xl text-blue-100 drop-shadow-md">
                Help us in our mission to protect and restore our oceans for
                future generations
              </p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current["timeline"] = el)}
          className="mb-20 mt-16 px-4 sm:px-6 lg:px-8 "
        >
          <h3
            className={`text-3xl font-bold mt-15 text-center text-gray-900 mb-12 transform transition-all duration-1000 ${
              isVisible.timeline
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Our <span className="text-teal-600">Journey</span> Through the Years
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-teal-400 hidden md:block"></div>

            <div className="space-y-12 relative">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 transform transition-all duration-1000 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    isVisible.timeline
                      ? "translate-x-0 opacity-100"
                      : index % 2 === 0
                      ? "-translate-x-12 opacity-0"
                      : "translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-32 flex-shrink-0">
                    <div className="bg-white border-2 border-teal-500 rounded-full px-6 py-2 text-center hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-teal-600">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-lg mx-auto hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {item.event}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApproachCard = ({ card, isVisible, isActive, onClick }) => {
  const colorClasses = {
    blue: "group-hover:from-blue-600/90 group-hover:via-blue-600/70 group-hover:to-blue-600/40",
    teal: "group-hover:from-teal-600/90 group-hover:via-teal-600/70 group-hover:to-teal-600/40",
    green:
      "group-hover:from-green-600/90 group-hover:via-green-600/70 group-hover:to-green-600/40",
  };

  const activeColorClasses = {
    blue: "from-blue-600/90 via-blue-600/70 to-blue-600/40",
    teal: "from-teal-600/90 via-teal-600/70 to-teal-600/40",
    green: "from-green-600/90 via-green-600/70 to-green-600/40",
  };

  return (
    <div
      className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: card.delay }}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-all duration-500 ${
            isActive
              ? `md:${colorClasses[card.color]} ${
                  activeColorClasses[card.color]
                }`
              : `${colorClasses[card.color]}`
          }`}
        ></div>
      </div>

      <div
        className={`absolute inset-0 flex items-end p-6 transition-opacity duration-300 ${
          isActive
            ? "md:group-hover:opacity-0 opacity-0"
            : "group-hover:opacity-0"
        }`}
      >
        <div>
          <h4 className="text-2xl font-bold text-white">{card.title}</h4>
          <div className="md:hidden mt-2">
            <span className="text-white/70 text-sm">Tap to learn more</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 transform ${
          isActive
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0"
        }`}
      >
        <div className="text-center">
          <h4 className="text-2xl font-bold text-white mb-4">{card.title}</h4>
          <p className="text-white/90 leading-relaxed">{card.description}</p>
          {isActive && (
            <div className="md:hidden mt-4">
              <span className="text-white/70 text-sm">Tap again to close</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
