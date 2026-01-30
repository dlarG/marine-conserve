/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";

const Course = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyDivewithUs = [
    {
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with extensive diving and marine conservation experience.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses cover essential diving skills, safety protocols, and environmental awareness.",
    },
    {
      title: "Hands-on Training",
      description:
        "Gain practical experience through pool sessions and open water dives.",
    },
    {
      title: "Personalized Attention",
      description:
        "Enjoy small class sizes with personalized support from instructors.",
    },
    {
      title: "Modern Equipment",
      description: "Train with the latest diving gear and technology.",
    },
    {
      title: "Flexible Scheduling",
      description: "Choose from various course dates to fit your availability.",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Marine Biology Fundamentals",
      subtitle: "Foundation Course",
      image: "/images/conserve.jpg",
      duration: "8 weeks",
      level: "Beginner",
      price: "$599",
      shortDescription:
        "Learn the basics of marine ecosystems and biodiversity",
      description:
        "Comprehensive introduction to marine life, ecosystems, and conservation principles. Perfect for beginners wanting to understand ocean environments.",
      skills: [
        "Marine ecosystem identification",
        "Species classification",
        "Underwater observation techniques",
        "Data collection methods",
        "Marine conservation principles",
      ],
      prerequisites: [
        "Basic swimming ability",
        "High school diploma or equivalent",
        "No prior marine experience required",
      ],
      included: [
        "Course materials and textbooks",
        "Lab access and equipment",
        "Field trip to marine sanctuary",
        "Certificate of completion",
        "Access to online resources",
        "Instructor support",
      ],
      notIncluded: [
        "Accommodation",
        "Meals during field trips",
        "Personal diving equipment",
        "Travel expenses",
      ],
    },
    {
      id: 2,
      title: "Discover Scuba Diving",
      subtitle: "Learn Scuba Diving Basics",
      image: "/images/steel2.jpg",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$899",
      shortDescription:
        "Beginner-friendly course to learn scuba diving basics.",
      description:
        "Hands-on training in scuba diving techniques, including equipment usage, safety protocols, and underwater navigation.",
      skills: [
        "Basic scuba diving skills",
        "Underwater communication",
        "Buoyancy control",
        "Marine life identification",
        "Safety procedures",
      ],
      prerequisites: [
        "Open Water Diving certification",
        "Marine Biology Fundamentals or equivalent",
        "Good physical fitness",
        "Underwater photography basics (preferred)",
      ],
      included: [
        "Specialized restoration tools",
        "Diving equipment rental",
        "Boat transportation to sites",
        "Professional certification",
        "Research project opportunity",
        "Mentorship program",
      ],
      notIncluded: [
        "Diving certification course",
        "Personal diving gear",
        "Insurance coverage",
        "Accommodation and meals",
      ],
    },
    {
      id: 3,
      title: "Open Water Diver",
      subtitle: "Professional Training",
      image: "/images/1222.jpg",
      duration: "6 weeks",
      level: "Advanced",
      price: "$1,299",
      shortDescription:
        "A highly-trained PADI Instructor will teach you how to scuba dive in a relaxed, supportive learning environment",
      description:
        "Open Water Diver is the first scuba certification level. A highly-trained PADI Instructor will teach you how to scuba dive in a relaxed, supportive learning environment. By the end of the course, you'll have the skills and knowledge to dive at home or abroad and be an ambassador for the underwater world.",
      skills: [
        "Advanced diving techniques",
        "Underwater research methods",
        "Dive site assessment",
        "Emergency response protocols",
      ],
      prerequisites: [
        "Scuba Diving certification",
        "50+ logged dives",
        "CPR/First Aid certification",
        "Medical fitness certificate",
      ],
      included: [
        "Professional diving equipment",
        "Scientific instruments training",
        "Boat operations certification",
        "Safety equipment",
        "International certification",
        "Job placement assistance",
      ],
      notIncluded: [
        "Medical examinations",
        "Personal protective equipment",
        "Accommodation",
        "Visa/travel arrangements",
      ],
    },
    {
      id: 4,
      title: "Advanced Open Water Diver",
      subtitle: "Professional Development",
      image: "/images/conserve.jpg",
      duration: "10 weeks",
      level: "Advanced",
      price: "$1,099",
      shortDescription:
        "Enhance your skills in underwater exploration and conservation",
      description:
        "Advanced Open Water Diver is designed for divers who want to enhance their skills and knowledge in underwater exploration and conservation. This course focuses on advanced diving techniques, environmental awareness, and research methodologies.",
      skills: [
        "Project planning and management",
        "Community engagement strategies",
        "Policy analysis and development",
        "Grant writing and fundraising",
        "Stakeholder communication",
      ],
      prerequisites: [
        "Bachelor's degree or equivalent experience",
        "2+ years in environmental field",
        "Previous conservation project involvement",
        "Basic research methodology knowledge",
      ],
      included: [
        "Advanced research equipment",
        "Community outreach toolkit",
        "Policy development templates",
        "Grant application samples",
        "Networking events access",
      ],
      notIncluded: [
        "Field work expenses",
        "Conference attendance fees",
        "Personal project funding",
      ],
    },
    {
      id: 5,
      title: "Underwater Photography & Videography",
      subtitle: "Creative Documentation",
      image: "/images/5.jpg",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$799",
      shortDescription: "Capture stunning marine life through lens",
      description:
        "Learn professional underwater photography and videography techniques to document marine life and create compelling content for conservation awareness.",
      skills: [
        "Underwater camera operation",
        "Lighting and composition",
        "Marine life behavior documentation",
        "Video editing techniques",
        "Conservation storytelling",
      ],
      prerequisites: [
        "Open Water Diving certification",
        "Basic photography knowledge",
        "Own underwater camera system",
        "Good buoyancy control",
      ],
      included: [
        "Professional lighting equipment",
        "Video editing software license",
        "Portfolio development session",
        "Exhibition opportunity",
        "Online gallery space",
        "Professional critique sessions",
      ],
      notIncluded: [
        "Camera equipment purchase",
        "Memory cards and batteries",
        "Diving equipment rental",
        "Photo printing costs",
      ],
    },
    {
      id: 6,
      title: "Emergency First Response for Divers",
      subtitle: "Safety Training",
      image: "/images/5.jpg",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$799",
      shortDescription:
        "Learn essential first aid skills for diving emergencies",
      description:
        "Emergency First Response for Divers is a course designed to teach divers how to respond to diving emergencies and provide basic first aid. This course covers primary and secondary care, CPR, and the use of an AED.",
      skills: [
        "CPR and first aid techniques",
        "Emergency response protocols",
        "Oxygen administration",
        "Dive accident management",
      ],
      prerequisites: [
        "Open Water Diving certification",
        "Basic photography knowledge",
        "Own underwater camera system",
        "Good buoyancy control",
      ],
      included: [
        "CPR and first aid training materials",
        "Emergency response equipment",
        "First aid kit",
        "Certification exam fees",
      ],
      notIncluded: [
        "Camera equipment purchase",
        "Memory cards and batteries",
        "Diving equipment rental",
        "Photo printing costs",
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-gradient-to-r from-green-400 to-emerald-500 text-white";
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-400 to-amber-500 text-white";
      case "Advanced":
        return "bg-gradient-to-r from-red-400 to-rose-500 text-white";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Wave pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-8">
            <div className="relative w-full p-8 overflow-hidden">
              <h1
                className={`text-2xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Dive Into Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-600 animate-gradient">
                  Marine Career
                </span>
              </h1>
              <p
                className={`text-sm md:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Ready to explore the underwater world or take your diving skills
                to the next level? Our courses offer a complete range of
                PADI-certified courses, delivered in a safe, community-based,
                and conservation-focused environment
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className=" group relative cursor-pointer"
              onClick={() => setActiveTab(course.id - 1)}
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${course.badgeColor} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
              ></div>

              {/* Main Card */}
              <div
                className={`h-full relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 ${
                  hoveredCard === course.id
                    ? "transform -translate-y-2 shadow-2xl"
                    : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1566024287286-457246b56b8a?w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Badge */}
                  {course.badge && (
                    <div
                      className={`absolute top-4 right-4 ${course.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}
                    >
                      {course.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-teal-600">
                      {course.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-teal-700 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {course.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        • {course.duration}
                      </div>
                    </div>
                    <div
                      className={`text-lg ${
                        hoveredCard === course.id ? "animate-pulse" : ""
                      }`}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Course Details */}
        <div
          className={`mb-20 transition-all duration-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-500 ${
                activeTab === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                {/* Hero Section */}
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1566024287286-457246b56b8a?w=1600&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl">
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className={`px-4 py-1.5 rounded-full text-sm font-bold ${getLevelColor(
                            course.level
                          )}`}
                        >
                          {course.level}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                          {course.duration}
                        </span>
                        {course.badge && (
                          <span
                            className={`${course.badgeColor} px-4 py-1.5 rounded-full text-sm font-bold`}
                          >
                            {course.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        {course.title}
                      </h2>
                      <p className="text-xl opacity-90">{course.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      {/* Description */}
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-3 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                          Course Overview
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg bg-gradient-to-r from-teal-50 to-transparent p-6 rounded-2xl">
                          {course.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></span>
                          Skills You'll Master
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {course.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-lg">✓</span>
                              </div>
                              <div>
                                <span className="text-gray-800 font-medium">
                                  {skill}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Prerequisites */}
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-3 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></span>
                          Requirements
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {course.prerequisites.map((prereq, prereqIndex) => (
                            <div
                              key={prereqIndex}
                              className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                                <svg
                                  className="w-3 h-3 text-white"
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
                              <span className="text-gray-700">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                      {/* Pricing Card */}
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
                        <div className="text-center mb-8">
                          <div className="text-5xl font-bold mb-2">
                            {course.price}
                          </div>
                          <p className="text-gray-300">
                            Complete course package
                          </p>
                        </div>

                        <button className="w-full group relative overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                          <span className="relative z-10">Enroll Now</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>

                        <div className="mt-6 text-center text-gray-300 text-sm">
                          ⚡ Limited spots available for next session
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                            <span className="text-green-600">✓</span>
                          </div>
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {course.included.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-gray-700 flex items-start gap-3 group"
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                <svg
                                  className="w-3 h-3 text-green-600"
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
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What's Not Included */}
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-rose-100 flex items-center justify-center">
                            <span className="text-red-600">✗</span>
                          </div>
                          Not Included
                        </h4>
                        <ul className="space-y-3">
                          {course.notIncluded.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-gray-700 flex items-start gap-3 group"
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                <svg
                                  className="w-3 h-3 text-red-600"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Dive With Us */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Our Courses?
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine professional training with marine conservation to
              create the perfect learning environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyDivewithUs.map((reason, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-300 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-blue-500/10 rounded-3xl p-12 backdrop-blur-sm border border-white/30 shadow-xl transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Dive In?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have transformed their
            passion for the ocean into meaningful careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="relative z-10">Contact Admissions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button className="group bg-white text-gray-800 font-bold py-4 px-8 rounded-xl border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Course Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-wave {
          animation: wave 2s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Course;
