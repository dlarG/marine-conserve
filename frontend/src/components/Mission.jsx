import React, { useState, useEffect } from "react";
import {
  BeakerIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Mission = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: BeakerIcon,
      title: "Applied Research",
      description:
        "Field studies and data collection to monitor reef health, ensuring restoration efforts are effective and ecologically sound.",
      highlights: [
        "AI-integrated coral surveys",
        "Crown-of-thorns population tracking",
        "Methodology development",
      ],
    },
    {
      icon: AcademicCapIcon,
      title: "Immersive Education",
      description:
        "Empowering divers and the public to become ocean stewards, transforming recreation into advocacy and learning.",
      highlights: [
        "Tagbak Marine Park guidebook",
        "Global speaking engagements",
        "Responsible diving programs",
      ],
    },
    {
      icon: UserGroupIcon,
      title: "Community Partnership",
      description:
        "Collaborating with local stakeholders to develop sustainable management practices that protect biodiversity and livelihoods.",
      highlights: [
        "Southern Leyte-based initiatives",
        "Livelihood integration",
        "Local capacity building",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [pillars.length]);

  return (
    <section className="relative py-15 md:py-15 overflow-hidden bg-gradient-to-b from-white to-[#EAE0CF]/30">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#213448] mb-6 leading-tight">
            <span className="text-[#547792]">Our Mission</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            GREEN, Inc. serves as a vital bridge between scientific rigor and
            grassroots action, working at the intersection of marine
            conservation, responsible diving, and community empowerment.
          </p>
        </div>

        {/* Three Pillars Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${
                activePillar === index
                  ? "border-[#547792] bg-white shadow-2xl scale-105"
                  : "border-gray-200 bg-white/50 hover:bg-white/80 hover:shadow-xl"
              }`}
              onClick={() => setActivePillar(index)}
              onMouseEnter={() => setActivePillar(index)}
            >
              {/* Pillar Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  activePillar === index
                    ? "bg-gradient-to-br from-[#213448] to-[#547792] text-white"
                    : "bg-[#EAE0CF] text-[#213448]"
                }`}
              >
                <pillar.icon className="w-8 h-8" />
              </div>

              {/* Pillar Content */}
              <h3 className="text-2xl font-bold text-[#213448] mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {pillar.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <LightBulbIcon className="w-5 h-5 text-[#94B4C1] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Active Indicator */}
              <div
                className={`absolute top-8 right-8 w-3 h-3 rounded-full transition-all duration-500 ${
                  activePillar === index ? "bg-[#547792]" : "bg-gray-300"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-[#213448] via-[#2d455f] to-[#213448] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/></g></g></svg%3E')]"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <ChartBarIcon className="w-12 h-12 text-[#94B4C1]" />
              <h3 className="text-3xl md:text-4xl font-bold">
                Long-Term Vision
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
                  We believe resilient, thriving seas are fundamental to
                  humanity's well-being. Our vision extends beyond preservation
                  to active regeneration of marine ecosystems.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-[#547792]/30 flex items-center justify-center">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10+ Years</div>
                    <div className="text-[#94B4C1]">
                      Of continuous data collection
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-4">
                  Immediate Focus Areas
                </h4>
                <div className="space-y-4">
                  {[
                    "AI-enhanced coral reef monitoring",
                    "Community-led restoration methodologies",
                    "Expanding Tagbak Marine Park research",
                    "Developing sustainable livelihood models",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#94B4C1] rounded-full"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-[#213448] mb-8 max-w-3xl mx-auto">
            "It is never too late to take action—every effort, no matter how
            small, helps conserve our marine environment."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#213448] to-[#547792] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-[#547792] text-[#547792] rounded-xl font-semibold hover:bg-[#547792]/10 transition-all duration-300">
              Learn About Our Methods
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
