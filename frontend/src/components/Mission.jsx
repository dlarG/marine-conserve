import React, { useState, useEffect } from "react";

const Mission = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
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

  // Function to handle image loading errors
  const handleImageError = (e, fallbackSrc = "/images/placeholder.jpg") => {
    console.log("Image failed to load:", e.target.src);
    e.target.src = fallbackSrc;
    e.target.onerror = null; // Prevent infinite loop
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              className="w-full h-full object-cover animate-fade-in-slow"
              src="/images/123321.jpg"
              alt="Coral Reef Background"
              onError={(e) => handleImageError(e, "/images/default-bg.jpg")}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-teal-800/30 to-emerald-900/20" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(167, 243, 208, 0.15) 50%, rgba(20, 184, 166, 0.05) 100%)",
            }}
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-blue-900/60" />

          {/* Top gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/100 via-teal-900/60 via-teal-900/40 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Light rays */}
            {[...Array(4)].map((_, i) => (
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
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main heading - properly aligned */}
            <div className="mb-8 relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                  Restoring
                </span>
                <span className="block bg-gradient-to-r from-teal-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent mt-2">
                  Ocean Life
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ transitionDelay: "0.6s" }}
            >
              Preserving Southern Leyte's coral reefs through innovative
              restoration techniques and community engagement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {missionData.mission.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-teal-300 to-emerald-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-600 rounded-full" />
                <span className="text-teal-800 font-semibold text-sm">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Protecting Our{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Marine Heritage
                </span>
              </h2>

              <div className="prose prose-lg max-w-none">
                {missionData.mission.content
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-gray-700 leading-relaxed mb-6 ${
                        paragraph.trim() === "" ? "mb-8" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => scrollToSection("location")}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <img
                  src={missionData.mission.image}
                  alt="Philippines Map"
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e)}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-sm opacity-90 mb-2">
                      ACTIVE SINCE 2014
                    </div>
                    <div className="text-2xl font-bold">
                      Southern Leyte Reef Restoration
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-4">
              <span className="text-blue-800 font-semibold text-sm">
                PROJECT LOCATION
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Sogod Bay
              </span>
              , Southern Leyte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The ideal location for coral restoration with optimal conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 border-4 border-white rounded-2xl" />
              <img
                src={missionData.location.mapImage}
                alt="Map of Sogod Bay"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                onError={(e) => handleImageError(e)}
              />

              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-red-500 rounded-full animate-ping opacity-20" />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Strategic Location Advantages
              </h3>

              <div className="prose prose-lg max-w-none mb-8">
                {missionData.location.description
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {missionData.location.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-4">
              <span className="text-emerald-800 font-semibold text-sm">
                RESTORATION PROJECTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Restoration Methods
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative approaches to coral rehabilitation and reef restoration
            </p>
          </div>

          {missionData.projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`mb-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project images gallery */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative rounded-xl overflow-hidden shadow-lg ${
                          imgIndex === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover aspect-[4/3]"
                          onError={(e) => handleImageError(e)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    ))}
                  </div>

                  {/* Project icon */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-white to-gray-50 shadow-xl flex items-center justify-center text-3xl">
                    {project.icon}
                  </div>
                </div>

                {/* Project details */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {project.subtitle}
                  </p>

                  <div className="prose prose-lg max-w-none mb-8">
                    {project.description
                      .split("\n")
                      .map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-gray-600 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
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
                        <div key={fIndex} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-teal-400/10 to-blue-400/10"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
                left: `${i * 20}%`,
                top: `${20 + i * 15}%`,
                animation: `pulse ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our{" "}
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Conservation Effort
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Together, we can restore Southern Leyte's coral reefs and protect
            marine biodiversity for future generations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Support Our Mission
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Learn More About Coral Restoration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
