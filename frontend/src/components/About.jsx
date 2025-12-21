import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState({});
  const sectionRefs = useRef({});

  // Calculate section offsets when components mount and on resize
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

    // Calculate initial offsets
    calculateOffsets();

    // Recalculate on window resize
    window.addEventListener("resize", calculateOffsets);

    // Small delay to ensure all elements are mounted
    const timer = setTimeout(calculateOffsets, 100);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      clearTimeout(timer);
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
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

  // Images (replace with your actual images)
  const images = {
    teamPhoto:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    underwaterResearch: "images/2.jpg",
    communityWork:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    coralCloseup:
      "https://images.unsplash.com/photo-1546026423-cc4642626d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  // Timeline data
  const timeline = [
    {
      year: "2010",
      event: "GREEN Inc. founded in Southern Leyte",
      description:
        "Started with small-scale beach cleanups and reef monitoring",
    },
    {
      year: "2013",
      event: "First Tagbak Marine Park assessment",
      description: "Comprehensive survey of marine biodiversity in the area",
    },
    {
      year: "2015",
      event: "Crown-of-Thorns Starfish research initiative",
      description: "Began 10-year population tracking program",
    },
    {
      year: "2018",
      event: "Published Flora & Fauna of Tagbak Marine Park",
      description: "First comprehensive guidebook of the area's marine life",
    },
    {
      year: "2020",
      event: "AI Coral Assessment Pilot Program",
      description:
        "Started integrating artificial intelligence with traditional survey methods",
    },
    {
      year: "2023",
      event: "Regional Conservation Network Established",
      description: "Expanded partnerships across Visayas region",
    },
  ];

  // Key achievements
  const achievements = [
    { number: "10+", label: "Years of continuous data collection" },
    { number: "50+", label: "Scientific surveys conducted" },
    { number: "1,000+", label: "Hectares of reef monitored" },
    { number: "200+", label: "Community members trained" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-10xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Header */}
        <div
          ref={(el) => (sectionRefs.current["header"] = el)}
          className={`text-center mb-10 transform transition-all duration-1000 ${
            isVisible.header
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 mt-10 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-blue-600">Story</span> &{" "}
            <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grassroots beginnings to becoming a trusted voice in marine
            conservation
          </p>
        </div>

        {/* MAIN CONTAINER with animations */}
        <div
          ref={(el) => (sectionRefs.current["mainContainer"] = el)}
          className={`bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] rounded-l-3xl overflow-hidden -mr-4 sm:-mr-6 lg:-mr-8 transform transition-all duration-1000 ${
            isVisible.mainContainer
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-12 opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE - Text Content */}
            <div className="p-10 lg:p-12 xl:p-16 relative z-10">
              <h3
                className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-300 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Bridging Science with{" "}
                <span className="text-blue-600">Community Action</span>
              </h3>

              <div
                className={`space-y-6 text-gray-700 transform transition-all duration-1000 delay-500 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-lg leading-relaxed">
                  Founded in 2010, <strong>GREEN Inc.</strong> emerged from a
                  simple observation: the vibrant coral reefs of Southern Leyte
                  were showing signs of stress, and local communities needed
                  sustainable solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small group of passionate divers and marine
                  biologists has grown into a respected non-government
                  organization working at the critical intersection of
                  scientific research, environmental education, and community
                  empowerment.
                </p>
                <p className="text-lg leading-relaxed">
                  Our name—<strong>GREEN</strong>—stands for{" "}
                  <b>
                    <i>Guardians of Reef Ecosystems & Environmental Networks</i>
                  </b>
                  , reflecting our commitment to both protection and
                  partnership.
                </p>
              </div>

              {/* Stats with staggered animation */}
              <div
                className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100 transform transition-all duration-1000 delay-700 ${
                  isVisible.mainContainer
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 group-hover:animate-bounce">
                    2010
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

            {/* RIGHT SIDE - Image with animation */}
            <div
              className={`relative h-[500px] lg:h-auto transform transition-all duration-1000 delay-400 ${
                isVisible.mainContainer
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              {/* Base Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={images.underwaterResearch}
                  alt="GREEN Inc. team conducting underwater research"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute max-w-80 inset-0 bg-gradient-to-r from-white via-white/80 via-white/30"></div>
            </div>
          </div>
        </div>

        {/* Approach Section with staggered cards */}
        <div
          ref={(el) => (sectionRefs.current["approach"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-900 py-16 transform transition-all duration-1000 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
                isVisible.approach
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Unique Approach</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our methodology combines scientific rigor with
                community-centered solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Data-Driven Decisions Card */}
              <div
                className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="/images/7.jpg"
                    alt="Data analysis and research"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-blue-600/90 group-hover:via-blue-600/70 group-hover:to-blue-600/40 transition-all duration-500"></div>
                </div>

                {/* Default Content - Title */}
                <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Data-Driven Decisions
                    </h4>
                  </div>
                </div>

                {/* Hover Content - Description */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Data-Driven Decisions
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      All conservation actions are guided by rigorous scientific
                      data collected through our monitoring programs and
                      AI-assisted analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community-Led Solutions Card */}
              <div
                className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="images/6.jpg"
                    alt="Community engagement and training"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-teal-600/90 group-hover:via-teal-600/70 group-hover:to-teal-600/40 transition-all duration-500"></div>
                </div>

                {/* Default Content - Title */}
                <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Community-Led Solutions
                    </h4>
                  </div>
                </div>

                {/* Hover Content - Description */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Community-Led Solutions
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      We believe lasting change comes from empowering those who
                      depend on marine resources through training and
                      collaborative management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation in Conservation Card */}
              <div
                className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  isVisible.approach
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="images/PB110170.JPG"
                    alt="Innovative conservation technology"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-green-600/90 group-hover:via-green-600/70 group-hover:to-green-600/40 transition-all duration-500"></div>
                </div>

                {/* Default Content - Title */}
                <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Innovation in Conservation
                    </h4>
                  </div>
                </div>

                {/* Hover Content - Description */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Innovation in Conservation
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      Pioneering AI-assisted monitoring and sustainable
                      restoration techniques that push the boundaries of
                      traditional conservation methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Image Section with parallax effect */}
        <div
          ref={(el) => (sectionRefs.current["fullImage"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden transform transition-all duration-1000 ${
            isVisible.fullImage ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Parallax Background Image */}
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
              src="/images/PB120722.JPG"
              alt="GREEN Inc. team conducting underwater research"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay with subtle parallax */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            style={{
              transform: `translateY(${
                (scrollY - (sectionOffsets.fullImage || 0)) * 0.1
              }px)`,
            }}
          />

          {/* Content with counter-parallax */}
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

        {/* Timeline Section */}
        <div
          ref={(el) => (sectionRefs.current["timeline"] = el)}
          className="mb-20"
        >
          <h3
            className={`text-3xl font-bold mt-15 text-center text-gray-900 mb-12 transform transition-all duration-1000 ${
              isVisible.timeline
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Our <span className="text-blue-600">Journey</span> Through the Years
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
                    <div className="bg-white border-2 border-blue-500 rounded-full px-6 py-2 text-center hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-blue-600">
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

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements with counter animation */}
        <div
          ref={(el) => (sectionRefs.current["achievements"] = el)}
          className={`bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 transform transition-all duration-1000 ${
            isVisible.achievements
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <h3
            className={`text-3xl font-bold text-center text-gray-900 mb-12 transform transition-all duration-1000 delay-200 ${
              isVisible.achievements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Our <span className="text-blue-600">Impact</span> in Numbers
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 hover:scale-110 ${
                  isVisible.achievements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2 animate-pulse">
                  {achievement.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center transform transition-all duration-1000 delay-1000 ${
              isVisible.achievements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
                <span className="text-xl">📘</span>
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-semibold">
                  Published "Flora & Fauna of Tagbak Marine Park"
                </p>
                <p className="text-gray-600 text-sm">
                  The first comprehensive guide to the area's marine
                  biodiversity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Full Width Image Section with parallax */}
        <div
          ref={(el) => (sectionRefs.current["fullImageQuote"] = el)}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden transform transition-all duration-1000 ${
            isVisible.fullImageQuote
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          {/* Parallax Background Image */}
          <div
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              transform: `translateY(${
                (scrollY - (sectionOffsets.fullImageQuote || 0)) * 0.05
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/images/PB110217.JPG"
              alt="GREEN Inc. team conducting underwater research"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay with subtle parallax */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

          {/* Content with counter-parallax */}
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
                Join us in our mission to protect and restore our oceans for
                future generations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
