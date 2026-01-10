import React, { useState, useEffect } from "react";

const Course = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      title: "Coral Reef Restoration",
      subtitle: "Specialization Course",
      image: "/images/steel2.jpg",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$899",
      shortDescription:
        "Advanced techniques in coral propagation and reef restoration",
      description:
        "Hands-on training in coral restoration techniques, including propagation methods, transplantation, and monitoring protocols used in real conservation projects.",
      skills: [
        "Coral fragment collection",
        "Nursery construction and maintenance",
        "Transplantation techniques",
        "Health monitoring protocols",
        "Restoration site assessment",
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
      title: "Scientific Diving Certification",
      subtitle: "Professional Training",
      image: "/images/1222.jpg",
      duration: "6 weeks",
      level: "Advanced",
      price: "$1,299",
      shortDescription: "Professional diving skills for marine research",
      description:
        "Intensive training program for scientific diving operations, research methodologies, and safety protocols required for professional marine research.",
      skills: [
        "Advanced diving techniques",
        "Underwater research methods",
        "Equipment maintenance",
        "Emergency response protocols",
        "Scientific data collection",
      ],
      prerequisites: [
        "Advanced Open Water certification",
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
      title: "Marine Conservation Leadership",
      subtitle: "Management Course",
      image: "/images/conserve.jpg",
      duration: "10 weeks",
      level: "Advanced",
      price: "$1,099",
      shortDescription: "Develop skills to lead conservation initiatives",
      description:
        "Comprehensive program covering project management, community engagement, policy development, and funding strategies for marine conservation projects.",
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
        "Leadership workshop materials",
        "Case study resources",
        "Mentorship with experts",
        "Networking opportunities",
        "Certificate of completion",
        "Alumni network access",
      ],
      notIncluded: [
        "Laptop or computer",
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
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Marine Courses
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your career in marine conservation with our comprehensive
            training programs
          </p>
        </div>

        {/* Course Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {courses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? "bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {course.title}
            </button>
          ))}
        </div>

        {/* Active Course Display */}
        <div
          className={`transform transition-all duration-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-500 ${
                activeTab === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Course Header */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/images/default-course.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-sm font-medium text-teal-300">
                      {course.subtitle}
                    </span>
                    <h2 className="text-4xl font-bold mb-2">{course.title}</h2>
                    <p className="text-lg opacity-90">
                      {course.shortDescription}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(
                        course.level
                      )}`}
                    >
                      {course.level}
                    </span>
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      {/* Description */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Course Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {course.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Skills You'll Learn
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {course.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0" />
                              <span className="text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Prerequisites
                        </h3>
                        <div className="space-y-2">
                          {course.prerequisites.map((prereq, prereqIndex) => (
                            <div
                              key={prereqIndex}
                              className="flex items-start gap-3"
                            >
                              <svg
                                className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                      {/* Pricing Card */}
                      <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl mb-6 border border-teal-100">
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-teal-600 mb-2">
                            {course.price}
                          </div>
                          <p className="text-gray-600">
                            Complete course package
                          </p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-teal-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                          Enroll Now
                        </button>
                      </div>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {course.included.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <svg
                                className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What's Not Included */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Not Included
                        </h4>
                        <ul className="space-y-2">
                          {course.notIncluded.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <svg
                                className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {item}
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

        {/* Contact CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our education advisors are here to help you select the perfect
              course for your career goals.
            </p>
            <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-teal-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
              Contact an Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
