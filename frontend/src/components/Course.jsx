/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const courseData = {
    title: "Dive into your Marine Career",
    tagline:
      "Ready to explore the underwater world or take your diving skills to the next level? Our courses offer a complete range of PADI-certified courses, delivered in a safe, community-based, and conservation-focused environment",
    heroImage:
      "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343136/555705217_10238078344967574_7898261656592206056_n_mjjsbg.jpg",
    fullDescription: [
      "Coral reefs are the rainforests of the sea, supporting 25% of all marine life while covering less than 1% of the ocean floor. In Sogod Bay, these vital ecosystems face threats from climate change, pollution, and destructive fishing practices.",
      "As a Coral Restoration volunteer, you'll be at the forefront of our reef rehabilitation efforts. You'll work directly in our established underwater nurseries, learning the science behind coral propagation while actively contributing to habitat recovery.",
      "This program is perfect for those who want to see tangible results from their conservation work. Every coral fragment you plant is a step toward restoring the vibrant marine ecosystems that Sogod Bay is known for.",
    ],
    activities: [
      "Clean and maintain coral nursery structures",
      "Harvest and prepare coral fragments for planting",
      "Out-plant resilient coral species onto degraded reefs",
      "Monitor coral health and growth rates",
      "Document restoration progress through photography",
      "Learn coral identification and ecology",
      "Assist in nursery expansion projects",
      "Participate in reef clean-up operations",
    ],
    duration: "Flexible (1–24+ weeks)",
    bestFor: "Scuba divers passionate about reef restoration",
    level: "Beginner to Advanced",
    pricing: {
      amount: "From ₱25,000/week",
      note: "Long-term discounts available",
    },
    inclusions: [
      "Hands-on coral nursery maintenance and transplantation",
      "Training in coral identification and ecology",
      "Regular reef monitoring and restoration dives",
      "30-40 training and survey dives per month (weather permitting)",
      "Complete scuba gear rental (BCD and Regulator)",
      "Free use of snorkeling gear when off-duty",
      "Tuition and lectures on marine conservation",
      "All marine park fees",
      "Support and supervision from experienced instructors",
      "Shared accommodation",
      "All meals, water, tea, and coffee",
      "GREEN, Inc. T-shirt",
    ],
    outcomes: [
      "Practical experience in coral reef restoration",
      "Understanding of coral propagation techniques",
      "Skills in underwater monitoring and data collection",
      "Knowledge of reef ecology and conservation challenges",
      "Certificate of participation/completion (based on duration)",
    ],
  };

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
      link: "discover-scuba",
      title: "PADI Discover Scuba Diving",
      subtitle: "Foundation Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775547474/pexels-aydenzaki-8029908_gdieio.jpg",
      duration: "1-3 days",
      level: "Beginner",
      price: "₱4,500.00",
      shortDescription:
        "This course provides a comprehensive introduction to scuba diving, covering essential skills and safety protocols.",
    },
    {
      link: "open-water",
      title: "PADI Open Water Diver",
      subtitle: "Certification Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549211/pexels-domingo-dias-260502921-12678039_uygdph.jpg",
      duration: "3-4 days",
      level: "Beginner - Intermediate",
      price: "₱19,450.00",
      shortDescription:
        "This course covers all the essential skills and knowledge needed to become a certified diver.",
    },
    {
      link: "advanced-open-water",
      title: "PADI Advanced Open Water Diver",
      subtitle: "Professional Training",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549270/pexels-diego-sandoval-3158170-4767068_ccrfv9.jpg",
      duration: "2-3 days",
      level: "Advanced",
      price: "₱15,950.00",
      shortDescription:
        "This course focuses on refining your diving skills and expanding your knowledge in underwater exploration.",
    },
    {
      link: "rescue-diver",
      title: "PADI Rescue Diver",
      subtitle: "Emergency Response Training",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771396302/pexels-ruben-galante-3187936-4809004_agffbd.jpg",
      duration: "4-5 days",
      level: "Advanced",
      price: "₱19,950.00",
      shortDescription:
        "Rescue Diver is designed to equip divers with the skills and knowledge to prevent and manage diving emergencies, both for themselves and others.",
    },
    {
      link: "divemaster",
      title: "PADI Divemaster",
      subtitle: "Leadership Development",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771396412/pexels-tomfisk-1522160_xmorgy.jpg",
      duration: "4-6 weeks",
      level: "Advanced - Professional",
      price: "₱65,000.00",
      shortDescription:
        "Divemaster is the first professional level in the PADI system, designed to develop leadership skills and prepare divers for a career in the diving industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Background Elements */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={courseData.heroImage}
            alt={courseData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {courseData.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              {courseData.tagline}
            </p>
          </div>
        </div>
      </section>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
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
              onClick={() => navigate(`/courses/${course.link}`)}
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
