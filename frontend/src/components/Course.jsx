/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Waves,
  Camera,
  Compass,
  Moon,
  Gauge,
  Heart,
  Activity,
} from "lucide-react";

const SectionHeader = ({ title, subtitle, icon }) => (
  <div className="flex items-center gap-4 mb-8">
    {icon && (
      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white">
        {icon}
      </div>
    )}
    <div>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  </div>
);

const Course = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  // ──────────────────── Data ────────────────────
  const diverCourses = [
    {
      id: "discover-scuba",
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
      id: "open-water",
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
      id: "advanced-open-water",
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
      id: "rescue-diver",
      link: "rescue-diver",
      title: "PADI Rescue Diver",
      subtitle: "Emergency Response Training",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549361/pexels-cannontaler-20481590_yck89a.jpg",
      duration: "4-5 days",
      level: "Advanced",
      price: "₱19,950.00",
      shortDescription:
        "Rescue Diver is designed to equip divers with the skills and knowledge to prevent and manage diving emergencies.",
    },
    {
      id: "divemaster",
      link: "divemaster",
      title: "PADI Divemaster",
      subtitle: "Leadership Development",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549211/pexels-domingo-dias-260502921-12678039_uygdph.jpg",
      duration: "4-6 weeks",
      level: "Advanced - Professional",
      price: "₱65,000.00",
      shortDescription:
        "Divemaster is the first professional level in the PADI system, designed to develop leadership skills.",
    },
  ];

  const specialtyCourses = [
    {
      id: "marine-photography",
      link: "marine-photography",
      title: "Marine Photography",
      subtitle: "Specialty Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771396412/pexels-tomfisk-1522160_xmorgy.jpg",
      duration: "2 days",
      level: "All Levels",
      price: "₱12,500.00",
      shortDescription:
        "Capture the beauty of the underwater world. Learn composition, lighting, and camera techniques for stunning marine photography.",
    },
    {
      id: "deep-diver",
      link: "deep-diver",
      title: "Deep Diver",
      subtitle: "Specialty Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777348997/5152_uruygm.jpg",
      duration: "2-3 days",
      level: "Advanced",
      price: "₱14,500.00",
      shortDescription:
        "Extend your depth limits safely. Learn deep dive planning, gas management, and how to handle narcosis.",
    },
    {
      id: "navigation",
      link: "navigation",
      title: "Underwater Navigation",
      subtitle: "Specialty Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777349048/pexels-mjlo-35252466_xgdai3.jpg",
      duration: "2 days",
      level: "All Levels",
      price: "₱11,500.00",
      shortDescription:
        "Never get lost underwater again. Master compass navigation and natural navigation techniques.",
    },
    {
      id: "night-diver",
      link: "night-diver",
      title: "Night Diver",
      subtitle: "Specialty Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777349127/pexels-leonardo-lamas-32247393-7001553_gp8hys.jpg",
      duration: "2 days",
      level: "All Levels",
      price: "₱12,000.00",
      shortDescription:
        "Experience the reef in a whole new light. Learn night diving protocols, communication, and navigation.",
    },
    {
      id: "peak-performance-buoyancy",
      link: "peak-performance-buoyancy",
      title: "Peak Performance Buoyancy",
      subtitle: "Specialty Course",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549211/pexels-domingo-dias-260502921-12678039_uygdph.jpg",
      duration: "1-2 days",
      level: "All Levels",
      price: "₱10,500.00",
      shortDescription:
        "Achieve perfect buoyancy control. Reduce air consumption, protect marine life, and glide effortlessly.",
    },
  ];

  const efrCourse = {
    id: "efr",
    link: "efr",
    title: "Emergency First Response",
    subtitle: "Primary & Secondary Care",
    image:
      "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549361/pexels-cannontaler-20481590_yck89a.jpg",
    duration: "1-2 days",
    level: "All Levels",
    price: "₱8,500.00",
    shortDescription:
      "Learn CPR, first aid, and emergency management skills. Earn your Primary Care (CPR) and Secondary Care (First Aid) certifications.",
    features: [
      "Primary Care (CPR) certification",
      "Secondary Care (First Aid) certification",
      "AED training included",
      "Emergency oxygen use orientation",
      "Recognized worldwide",
    ],
  };

  const volunteerPrograms = [
    {
      id: "coral-restoration",
      link: "/volunteer/coral-restoration",
      title: "Coral Restoration",
      subtitle: "Restoring the Foundation",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343136/555705217_10238078344967574_7898261656592206056_n_mjjsbg.jpg",
      duration: "Flexible",
      level: "All Levels",
      shortDescription:
        "Get hands-on with coral restoration. Work in underwater nurseries and out-plant resilient coral fragments.",
    },
    {
      id: "dive-against-debris",
      link: "/volunteer/dive-against-debris",
      title: "Marine Debris Removal",
      subtitle: "The War on Waste",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343078/P8190137_zohnsu.jpg",
      duration: "Flexible",
      level: "All Levels",
      shortDescription:
        "Remove ghost gear and plastic pollution. Document debris to drive global policy changes.",
    },
    {
      id: "cots-monitoring",
      link: "/volunteer/cots-monitoring",
      title: "COTS Monitoring",
      subtitle: "Protecting the Reef",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343004/255053295_1323088658146866_9006587557721285913_n_qfsh6m.jpg",
      duration: "Flexible",
      level: "All Levels",
      shortDescription:
        "Track and manage Crown-of-Thorns starfish outbreaks to protect coral reefs.",
    },
    {
      id: "scientific-data",
      link: "/volunteer/scientific-data-collection",
      title: "Scientific Data Collection",
      subtitle: "Scientific Discovery",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777342895/DSCF5597_lmehg1.jpg",
      duration: "Flexible",
      level: "All Levels",
      shortDescription:
        "Master ecological data gathering. Learn fish ID, substrate surveys, and contribute to long-term datasets.",
    },
  ];

  const whyDivewithUs = [
    {
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with extensive diving and marine conservation experience.",
      icon: "👨‍🏫",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses cover essential diving skills, safety protocols, and environmental awareness.",
      icon: "📚",
    },
    {
      title: "Hands-on Training",
      description:
        "Gain practical experience through pool sessions and open water dives.",
      icon: "🤿",
    },
    {
      title: "Personalized Attention",
      description:
        "Enjoy small class sizes with personalized support from instructors.",
      icon: "🎯",
    },
    {
      title: "Modern Equipment",
      description: "Train with the latest diving gear and technology.",
      icon: "⚙️",
    },
    {
      title: "Flexible Scheduling",
      description: "Choose from various course dates to fit your availability.",
      icon: "📅",
    },
  ];

  const categories = [
    { key: "all", label: "All Courses" },
    { key: "diver", label: "Diver Path" },
    { key: "specialty", label: "Specialties" },
    { key: "efr", label: "EFR" },
    { key: "volunteer", label: "Volunteer" },
  ];

  const getAllCourses = () => {
    let all = [];
    if (activeCategory === "all" || activeCategory === "diver") {
      all = [...all, ...diverCourses.map((c) => ({ ...c, category: "diver" }))];
    }
    if (activeCategory === "all" || activeCategory === "specialty") {
      all = [
        ...all,
        ...specialtyCourses.map((c) => ({ ...c, category: "specialty" })),
      ];
    }
    if (activeCategory === "all" || activeCategory === "efr") {
      all = [...all, { ...efrCourse, category: "efr" }];
    }
    if (activeCategory === "all" || activeCategory === "volunteer") {
      all = [
        ...all,
        ...volunteerPrograms.map((c) => ({ ...c, category: "volunteer" })),
      ];
    }
    return all;
  };

  const renderCourseCard = (course, index) => (
    <div
      key={course.id || index}
      onMouseEnter={() => setHoveredCard(course.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className="group relative cursor-pointer"
      onClick={() =>
        navigate(
          course.link.startsWith("/") ? course.link : `/courses/${course.link}`
        )
      }
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${
          course.badgeColor || "from-teal-500 to-blue-500"
        } rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
      ></div>
      <div
        className={`h-full relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 ${
          hoveredCard === course.id ? "transform -translate-y-2 shadow-2xl" : ""
        }`}
      >
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
          {course.badge && (
            <div
              className={`absolute top-4 right-4 ${course.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5`}
            >
              {course.icon && course.icon}
              {course.badge}
            </div>
          )}
        </div>
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
              {course.price && (
                <div className="text-2xl font-bold text-gray-900">
                  {course.price}
                </div>
              )}
              <div className="text-sm text-gray-500">• {course.duration}</div>
            </div>
            <div
              className={`text-lg ${
                hoveredCard === course.id ? "animate-pulse" : ""
              }`}
            >
              →
            </div>
          </div>
          {course.features && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
              {course.features.slice(0, 3).map((f, i) => (
                <span
                  key={i}
                  className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* ───────────────── Hero Section ───────────────── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343136/555705217_10238078344967574_7898261656592206056_n_mjjsbg.jpg"
            alt="Dive Courses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Dive into your Marine Career
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Ready to explore the underwater world or take your diving skills
              to the next level? Our courses offer a complete range of
              PADI-certified courses, delivered in a safe, community-based, and
              conservation-focused environment.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#diver-courses"
                className="px-6 py-3 rounded-xl bg-white text-teal-700 font-semibold hover:shadow-lg transition-all"
              >
                View Courses
              </a>
              <a
                href="#volunteer"
                className="px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Volunteer Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Category Filter ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`cursor-pointer px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ───────────────── Main Content ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        {/* All Courses Grid (when filtered) */}
        {activeCategory !== "all" ? (
          <div>
            <SectionHeader
              title={categories.find((c) => c.key === activeCategory)?.label}
              subtitle={
                activeCategory === "diver"
                  ? "Your path from beginner to professional"
                  : activeCategory === "specialty"
                  ? "Enhance your skills with specialized training"
                  : activeCategory === "efr"
                  ? "Life-saving skills for every diver"
                  : "Dive with purpose, conserve with impact"
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {getAllCourses().map((course, idx) =>
                renderCourseCard(course, idx)
              )}
            </div>
          </div>
        ) : (
          <>
            {/* ───────────────── DIVER PATH ───────────────── */}
            <div id="diver-courses" className="mb-20">
              <SectionHeader
                title="Diver Certification Path"
                subtitle="Your journey from beginner to dive professional"
              />
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {diverCourses.map((course, idx) =>
                  renderCourseCard(course, idx)
                )}
              </div>
            </div>

            {/* ───────────────── SPECIALTY COURSES ───────────────── */}
            <div className="mb-20">
              <SectionHeader
                title="Specialty Courses"
                subtitle="Expand your diving capabilities with focused training"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialtyCourses.map((course, idx) =>
                  renderCourseCard(course, idx)
                )}
              </div>
            </div>

            {/* ───────────────── EFR COURSE ───────────────── */}
            <div className="mb-20">
              <SectionHeader
                title="Emergency First Response"
                subtitle="Essential life-saving skills for divers and non-divers alike"
              />
              <div className="max-w-lg">{renderCourseCard(efrCourse, 0)}</div>
            </div>

            {/* ───────────────── VOLUNTEER PROGRAMS ───────────────── */}
            <div id="volunteer" className="mb-20">
              <SectionHeader
                title="Volunteer Programs"
                subtitle="Combine diving with hands-on marine conservation"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {volunteerPrograms.map((program, idx) =>
                  renderCourseCard(program, idx)
                )}
              </div>
            </div>
          </>
        )}

        {/* ───────────────── Why Choose Us ───────────────── */}
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

        {/* ───────────────── CTA ───────────────── */}
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
            <button className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="relative z-10">Contact Admissions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="cursor-pointer group bg-white text-gray-800 font-bold py-4 px-8 rounded-xl border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Course Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
