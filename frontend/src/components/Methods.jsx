import React, { useState, useEffect } from "react";

const Methods = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeMethod, setActiveMethod] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const methods = [
    {
      id: "wedging",
      title: "Wedging",
      subtitle: "Natural Substrate Integration",
      description:
        "This is done through finding cracks and holes on dead corals and other stable hard substrates that are present underwater. Small coral fragments from the coral nursery will then be wedge into those cracks and holes, making it sure that the corals are properly wedge and movement is at the minimum. Calcification of coral fragments will be visible within a week from transplantation.",
      image: "/images/wedging.jpg", // Replace with actual image
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      features: [
        { label: "Method", value: "Natural Cracks" },
        { label: "Calcification", value: "Within 1 Week" },
        { label: "Movement", value: "Minimal" },
        { label: "Substrate", value: "Dead Corals" },
      ],
      specifications: [
        "Uses existing cracks and holes",
        "Minimal movement requirement",
        "Quick calcification process",
      ],
    },
    {
      id: "concrete",
      title: "Concrete Nails & Plastic Tie",
      subtitle: "Modified Secure Attachment",
      description:
        "This is done using hammer to drive concrete nails into stable hard substrates underwater. Use of plastic tie to secure coral fragments into the concrete nail and substrate. This concrete nails will serve as the primary foundation for a coral fragment to grow and calcify. This method is a modification from the experience the group learned from DOST Filipinnovation on Coral Reef Restoration Project in Lungsodaan Padre Burgos wherein the said project used marine epoxy to secure coral fragments.",
      image: "/images/nails1.jpg",
      color: "from-teal-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-50",
      features: [
        { label: "Attachment", value: "Concrete Nails" },
        { label: "Secure Method", value: "Plastic Ties" },
        { label: "Source", value: "DOST Filipinnovation" },
        { label: "Modification", value: "From Marine Epoxy" },
      ],
      specifications: [
        "Hammer-driven concrete nails",
        "Plastic tie securement",
        "Stable foundation creation",
        "Proven modified technique",
      ],
    },
    {
      id: "terracotta",
      title: "Terracotta Tiles (ArchREEF)",
      subtitle: "Biodegradable Artificial Reefs",
      description:
        "Terracotta is also similar to the calcium carbonate found in real coral reefs, which makes it more suitable. And crucially, ceramics like terracotta clay will naturally erode in a few decades, the scientists hope, the tiles will be gone and all that will be left are the new corals. We can source this Terracotta tiles from the provincial government of Southern Leyte. The tourism office of the province is producing this for a minimum cost.",
      image: "/images/tiles1.jpg", // Replace with actual image
      color: "from-blue-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-50",
      features: [
        { label: "Material", value: "Terracotta Clay" },
        { label: "Erosion Time", value: "Decades" },
        { label: "Source", value: "Southern Leyte" },
        { label: "Cost", value: "Minimal" },
      ],
      specifications: [
        "Calcium carbonate similarity",
        "Natural erosion over decades",
        "Locally sourced materials",
        "Cost-effective production",
      ],
    },
  ];

  const handleMethodChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveMethod(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
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

          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/100 via-teal-900/60 via-teal-900/40 to-transparent" />

          <div className="absolute left-0 inset-y-0 w-1/3 bg-gradient-to-r from-teal-900/30 to-transparent" />
          <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-emerald-900/20 to-transparent" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1
              className={`flex justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="block mx-5 bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                Our
              </span>
              <span className="block bg-gradient-to-r from-teal-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                Methods
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              Explore our innovative techniques for coral reef restoration,
              combining traditional methods with modern sustainable approaches.
            </p>

            <div
              className={`transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <button
                onClick={() => {
                  const methodsSection =
                    document.getElementById("methods-content");
                  if (methodsSection) {
                    methodsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-3">
                  <span>Explore Methods</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "1s",
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white transition-all duration-300">
              <div className="w-1 h-4 bg-gradient-to-b from-teal-300 to-emerald-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden transform transition-all duration-1000
          `}
      >
        <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img
            src="/images/small.jpg"
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
              Coral Nursery Unit (CNU)
            </h3>
            <p className="text-lg md:text-l max-w-5xl mx-auto leading-relaxed drop-shadow-md">
              The project will use two types of coral nursery units. The steel
              and rope nursery units. A fabricated steel coral nursery unit will
              be used measuring 3 m x 9 m and a 50 meters hanging coral nursery
              unit will be deployed at the 2-depth contour of the coral nursery
              site. The minimum depth for this coral nurseries is five 5 meters
              and twenty 20 meters maximum. Depth for the coral nursery is very
              crucial in order for the corals in the nursery to have enough
              solar light penetration and ensure wave action will not affect
              their condition in the nursery site.
            </p>
          </div>
        </div>
      </div>
      <div
        id="methods-content"
        className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/20 rounded-full -translate-y-64 translate-x-64 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full translate-y-64 -translate-x-64 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/10 to-blue-100/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-6">
              <span className="text-teal-700 font-semibold text-sm">
                OUR FOUR PROVEN METHODS
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {methods.map((method, index) => (
              <button
                key={method.id}
                onClick={() => handleMethodChange(index)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-500 ${
                  activeMethod === index
                    ? `bg-gradient-to-r ${method.color} text-white shadow-xl scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="font-semibold">{method.title}</span>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeMethod === index
                      ? "bg-white"
                      : "bg-gray-300 group-hover:bg-teal-400"
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            className={`transition-all duration-500 ${
              isAnimating ? "opacity-50" : "opacity-100"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={methods[activeMethod].image} alt="" srcset="" />
                    <div
                      className={`w-full h-full ${methods[activeMethod].bgColor} flex items-center justify-center`}
                    >
                      <div className="text-center p-8">
                        <div className="text-8xl mb-6 opacity-30">
                          {methods[activeMethod].icon}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {methods[activeMethod].title} Image
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${methods[activeMethod].color} text-white font-semibold shadow-lg`}
                      >
                        {methods[activeMethod].subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white">
                      <div className="text-sm opacity-90 mb-2">
                        ACTIVE DEPLOYMENT
                      </div>
                      <div className="text-2xl font-bold">
                        {methods[activeMethod].title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {methods[activeMethod].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                    >
                      <div className="text-xs text-gray-500 mb-1">
                        {feature.label}
                      </div>
                      <div
                        className={`text-lg font-bold bg-gradient-to-r ${methods[activeMethod].color} bg-clip-text text-transparent`}
                      >
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                      {methods[activeMethod].title}
                    </h3>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">
                    0{activeMethod + 1}/03
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {methods[activeMethod].description}
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600"
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
                    Key Specifications
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {methods[activeMethod].specifications.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${methods[activeMethod].color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
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
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() =>
                  handleMethodChange(
                    activeMethod === 0 ? methods.length - 1 : activeMethod - 1
                  )
                }
                disabled={isAnimating}
                className="group flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-teal-700 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
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
                <span className="font-semibold">Previous Method</span>
              </button>

              <div className="flex items-center gap-2">
                {methods.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleMethodChange(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeMethod === index
                        ? `bg-gradient-to-r ${methods[index].color} w-8`
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to method ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  handleMethodChange(
                    activeMethod === methods.length - 1 ? 0 : activeMethod + 1
                  )
                }
                disabled={isAnimating}
                className="group flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-teal-700 transition-colors duration-300"
              >
                <span className="font-semibold">Next Method</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-20 bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Methodology{" "}
              <span className="text-teal-600">Comparison Table</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">
                      Method
                    </th>
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">
                      Best For
                    </th>
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">
                      Duration
                    </th>
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">
                      Cost
                    </th>
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">
                      Success Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((method, index) => (
                    <tr
                      key={method.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{method.icon}</span>
                          <span className="font-medium">{method.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {index === 0 && "Large-scale restoration"}
                        {index === 1 && "Natural reef integration"}
                        {index === 2 && "Stable substrate attachment"}
                        {index === 3 && "Sustainable artificial reefs"}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {index === 0 && "Long-term"}
                          {index === 1 && "Medium-term"}
                          {index === 2 && "Medium-term"}
                          {index === 3 && "Long-term"}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            index === 0
                              ? "bg-red-100 text-red-700"
                              : index === 3
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {index === 0 ? "$$$$" : index === 3 ? "$" : "$$"}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${method.color}`}
                              style={{
                                width: `${
                                  index === 0
                                    ? 85
                                    : index === 1
                                    ? 75
                                    : index === 2
                                    ? 80
                                    : 90
                                }%`,
                              }}
                            />
                          </div>
                          <span className="font-semibold">
                            {index === 0
                              ? "85%"
                              : index === 1
                              ? "75%"
                              : index === 2
                              ? "80%"
                              : "90%"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methods;
