import React, { useState, useEffect, useRef } from "react";

const Mission = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const missionData = {
    mission: {
      title: "Our Mission",
      subtitle: "Reef Restoration & Community Support",
      content: `This project started with the love for the reefs around Southern Leyte, which is still the very foundation of our project.

Our mission is to support our local reefs and the surrounding communities. 

We rehabilitate the more resistant coral colonies and introduce them to the local reefs. Here they grow and construct reefs capable of withstanding the current climatic challenges. In assisting the reefs, we also help surrounding communities by sustaining their livelihood in fishery and tourism.`,
      image: "/images/PH.png",
      stats: [
        { value: "10+", label: "Years Experience" },
        { value: "5000+", label: "Coral Fragments Restored" },
        { value: "3", label: "Local Communities" },
        { value: "95%", label: "Survival Rate" },
      ],
    },
    location: {
      title: "Project Location",
      subtitle: "Sogod Bay, Malitbog, Southern Leyte",
      description: `The project currently consists of a coral nursery with an associated coral garden. The success of a specific restoration method is dependent on the location and its conditions. In the past ten years, we have had the opportunity to test different types of nurseries at numerous sites and adapt our methods to best suit our criteria.

Our nurseries are located in Sogod Bay, Malitbog, in Southern Leyte, Philippines. We mainly use rope and steel structures as our coral nursery units (CNU), at depths between 5 - 20 m. The correct depth is a balancing act between providing enough solar light penetration for photosynthesis to occur and limiting wave action to prevent damage.`,
      mapImage: "/images/sogodbay.jpg",
      features: [
        "Optimal depth: 5-20 meters",
        "Protected bay location",
        "Ideal water temperature",
        "Minimal wave action",
        "Rich marine biodiversity",
      ],
    },
    projects: [
      {
        id: "steel-nursery",
        title: "Steel Nursery",
        subtitle: "3m x 9m Steel Coral Nursery Unit",
        description: `Damaged coral fragments are collected and brought to the 3x9m steel coral nursery unit (CNU). The units are placed at different depths throughout the restoration site and function as donors for the rope nurseries. A fabricated steel coral nursery unit will be used measuring 3m x 9m.`,
        features: [
          "Steel structure for durability",
          "Multiple depth placement",
          "Donor site for rope nurseries",
          "Stable foundation for growth",
        ],
        images: [
          "/images/steel1.jpg",
          "/images/steel.jpg",
          "/images/steel2.jpg",
        ],
        color: "from-blue-500 to-teal-500",
        icon: "🔩",
      },
      {
        id: "rope-nursery",
        title: "Rope Nursery",
        subtitle: "Midwater Suspension System",
        description: `Coral fragments are harvested and transported from our steel nursery to our rope nursery, where they remain for two months before being transplanted onto the reefs. In the rope nursery, our fragments are kept midwater attached to ropes floating due to suspended plastic bottles.

This method prevents the sandy seafloor from smothering the fragments and possibly causing bleaching. According to previous studies, this method reduces stress, encourages growth and produces coral colonies more resilient to the challenges on the reefs.`,
        features: [
          "Two-month preparation period",
          "Prevents seafloor smothering",
          "Reduces coral stress",
          "Increases resilience",
          "Sustainable design",
        ],
        images: ["/images/rope1.jpg", "/images/rope2.jpg", "/images/rope.jpg"],
        color: "from-emerald-500 to-green-500",
        icon: "🧵",
      },
    ],
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageError = (e, fallbackSrc = "/images/placeholder.jpg") => {
    e.target.src = fallbackSrc;
    e.target.onerror = null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
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
            src="/images/123321.jpg"
            alt="Coral Reef Background"
            className="w-full h-[120%] object-cover"
            style={{ minHeight: "calc(70vh + 100px)" }}
            onError={(e) => handleImageError(e, "/images/default-bg.jpg")}
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
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-emerald-400/20 blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-blue-400/15 blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                <span className="inline-block animate-slide-up">Restoring</span>{" "}
                <span className="inline-block text-transparent bg-gradient-to-r from-teal-200 via-emerald-200 to-blue-200 bg-clip-text animate-slide-up delay-150">
                  Ocean Life
                </span>
              </h1>

              <div
                className={`h-1 w-64 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-8 transform transition-all duration-1000 delay-500 ${
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
                Preserving Southern Leyte's coral reefs through innovative
                <span className="block mt-2 font-medium text-white">
                  restoration techniques and community engagement.
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
            <div className="w-1 h-3 bg-gradient-to-b from-teal-300 to-emerald-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/10 to-white"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text content */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full blur-xl opacity-70"></div>

              <div className="relative">
                <span className="inline-block text-sm font-medium text-teal-600 uppercase tracking-wider mb-4 bg-teal-50 px-4 py-2 rounded-full">
                  Our Mission
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Protecting Our
                  <span className="block text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">
                    Marine Heritage
                  </span>
                </h2>

                <div className="space-y-6">
                  {missionData.mission.content.split("\n").map(
                    (paragraph, index) =>
                      paragraph.trim() && (
                        <p
                          key={index}
                          className="text-lg text-gray-700 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      )
                  )}
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white p-6 border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-gray-700 font-medium">
                      Years Experience
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      5000+
                    </div>
                    <div className="text-gray-700 font-medium">
                      Coral Fragments
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("location")}
                  className="mt-8 group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Our Location</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-xl opacity-60"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                <div className="aspect-[3/3] overflow-hidden">
                  <img
                    src={missionData.mission.image}
                    alt="Philippines Map"
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/10 to-white"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-4 bg-blue-50 px-4 py-2 rounded-full">
              Project Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
                Sogod Bay
              </span>
              , Southern Leyte
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The ideal location for coral restoration with optimal conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-xl opacity-70"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={missionData.location.mapImage}
                    alt="Map of Sogod Bay"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => handleImageError(e)}
                  />
                </div>
                {/* Location marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-red-500 rounded-full animate-ping opacity-20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-xl opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Strategic Location Advantages
                </h3>

                <div className="space-y-6 mb-8">
                  {missionData.location.description.split("\n").map(
                    (paragraph, index) =>
                      paragraph.trim() && (
                        <p
                          key={index}
                          className="text-lg text-gray-700 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      )
                  )}
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {missionData.location.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/10 to-white"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-wider mb-4 bg-emerald-50 px-4 py-2 rounded-full">
              Restoration Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text">
                Restoration Methods
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative approaches to coral rehabilitation and reef restoration
            </p>
          </div>

          {missionData.projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`mb-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Project images gallery */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative rounded-2xl overflow-hidden shadow-lg group ${
                          imgIndex === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={img}
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => handleImageError(e)}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur-xl opacity-70"></div>

                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-emerald-600 font-medium mb-6">
                      {project.subtitle}
                    </p>

                    <div className="space-y-4 mb-8">
                      {project.description
                        .split("\n")
                        .map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-gray-700 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-start gap-2 group"
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                              <svg
                                className="w-3 h-3 text-emerald-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-500"></div>

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Join Our
            <span className="block">Conservation Mission</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Together, we can restore Southern Leyte's coral reefs and protect
            marine biodiversity for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="cursor-pointer group relative bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2">
                <span>Support Our Mission</span>
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

            <button className="cursor-pointer group relative border-2 border-white text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2">
                <span>Learn More</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
