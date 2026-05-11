import React, { useState, useEffect, useMemo, useRef } from "react";
import DonateModal from "../DonateModal";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  // Courses dropdown states
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const coursesRef = useRef(null);
  const closeTimerRef = useRef(null);

  const navigate = useNavigate();

  const volunteerOptions = [
    { label: "Coral Conservation", path: "/volunteer/coral-restoration" },
    {
      label: "Marine Debris Removal",
      path: "/volunteer/dive-against-debris",
    },
    { label: "COTS Monitoring", path: "/volunteer/cots-monitoring" },
    {
      label: "Scientific Data Collection",
      path: "/volunteer/scientific-data-collection",
    },
  ];

  const coursesMenu = useMemo(
    () => [
      {
        key: "",
        label: "PADI Diver Certification Path",
        items: [
          { label: "Discover Scuba Diving", slug: "discover-scuba" },
          { label: "Open Water Diver", slug: "open-water" },
          { label: "Advanced Open Water Diver", slug: "advanced-open-water" },
          { label: "Rescue Diver", slug: "rescue-diver" },
          { label: "Divemaster", slug: "divemaster" },
        ],
      },
      {
        key: "",
        label: "Specialty Courses",
        items: [
          { label: "Marine Photography", slug: "special/marine-photography" },
          { label: "Deep Diver", slug: "special/deep-diver" },
          { label: "Navigation", slug: "special/dive-navigation" },
          { label: "Night Diver", slug: "special/night-diver" },
          {
            label: "Peak Performance Buoyancy",
            slug: "special/peak-performance-buoyancy",
          },
        ],
      },
      {
        key: "",
        label: "Emergency First Responder Course",
        items: [
          { label: "Primary Care", slug: "primary-care" },
          { label: "Secondary Care", slug: "secondary-care" },
        ],
      },
      {
        key: "volunteer-programs",
        label: "Volunteer Programs",
        items: volunteerOptions.map((opt) => ({
          label: opt.label,
          slug: opt.path,
        })),
        isHighlighted: true, // Add flag for highlighting
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const navigationItems = [
    { id: "home", label: "Home", goto: "/" },
    { id: "about", label: "About Us", goto: "/about" },
    { id: "blogs", label: "Blogs", goto: "/blog" },
    { id: "team", label: "Team", goto: "/team" },
    { id: "contact", label: "Contact Us", goto: "/contact" },
  ];

  const coursePathMap = {
    "special-courses": "special-courses",
    "safety-courses": "safety-courses",
  };

  const goToCourse = (courseKey, subSlug) => {
    // Handle volunteer programs - navigate using the full path
    if (courseKey === "volunteer-programs") {
      navigate(subSlug);
      setIsCoursesOpen(false);
      setIsMobileMenuOpen(false);
      return;
    }

    const base = coursePathMap[courseKey] || courseKey;

    if (courseKey === "all") {
      navigate("/courses");
      setIsCoursesOpen(false);
      setIsMobileMenuOpen(false);
      return;
    }

    const url = subSlug ? `/courses/${subSlug}` : `/courses/${base}`;
    navigate(url);
    setIsCoursesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openCourses = () => {
    clearCloseTimer();
    setIsCoursesOpen(true);
  };

  const scheduleCloseCourses = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Handle clicks outside dropdowns to close them
  useEffect(() => {
    const handlePointerDown = (e) => {
      if (
        isCoursesOpen &&
        coursesRef.current &&
        !coursesRef.current.contains(e.target)
      ) {
        setIsCoursesOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCoursesOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const targetPosition = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDonateClick1 = () => {
    navigate("/donate");
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    scrollToSection("hero");
  };

  const desktopLinkClass = ({ isActive }) => {
    const base =
      "cursor-pointer font-medium transition-all duration-300 relative px-4 py-2.5 rounded-full group";
    const inactive = isScrolled
      ? "text-gray-700 hover:text-[#2E5E2E]"
      : "text-white/80 hover:text-white";
    const active = isScrolled
      ? "text-[#2E5E2E] bg-teal-100"
      : "text-white bg-white/20";
    return `${base} ${isActive ? active : inactive}`;
  };

  const mobileLinkClass = ({ isActive }) => {
    const base =
      "block w-full text-left text-base font-medium py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group";
    const inactive = isScrolled
      ? "text-gray-800 hover:bg-gray-50"
      : "text-white/90 hover:bg-white/10";
    const active = isScrolled
      ? "bg-gradient-to-r from-teal-50 to-green-50 text-[#2E5E2E]"
      : "bg-gradient-to-r from-teal-900/30 to-green-900/30 text-white";
    return `${base} ${isActive ? active : inactive}`;
  };

  const coursesButtonClass = () => {
    const base =
      "hidden cursor-pointer md:inline-flex items-center gap-2 px-4.5 py-2 rounded-full font-medium border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group";
    const colors = isScrolled
      ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
      : "border-white/60 text-white hover:bg-white/10";
    return `${base} ${colors}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left side */}
            <div
              className="flex items-center space-x-2 md:space-x-3 group cursor-pointer z-10"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384195/GREEN_stouub.jpg"
                  alt="GREEN Inc. Logo"
                  className="w-11 h-10.1 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-300" />
              </div>
              <div>
                <h1
                  className={`text-lg md:text-xl font-bold transition-all duration-500 ${
                    isScrolled ? "text-[#2E5E2E]" : "text-white"
                  } group-hover:text-teal-600`}
                >
                  GREEN Inc.
                </h1>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-green-400 transition-all duration-300" />
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.goto}
                    end={item.id === "home"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={desktopLinkClass}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-4 transition-all duration-300 ${
                        isScrolled
                          ? "bg-gradient-to-r from-teal-500 to-green-500"
                          : "bg-gradient-to-r from-teal-300 to-green-300"
                      }`}
                    />
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center space-x-3">
              {/* Programs mega menu */}
              <div
                className="hidden md:block relative"
                ref={coursesRef}
                onMouseEnter={openCourses}
                onMouseLeave={scheduleCloseCourses}
              >
                <button
                  type="button"
                  className={coursesButtonClass()}
                  aria-haspopup="menu"
                  aria-expanded={isCoursesOpen}
                  onFocus={openCourses}
                  onBlur={scheduleCloseCourses}
                >
                  <span className="relative z-10">Programs</span>
                  <svg
                    className={`relative z-10 w-4 h-4 transition-transform duration-200 ${
                      isCoursesOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div
                    className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      isScrolled ? "bg-teal-600" : "bg-white/20"
                    }`}
                  />
                </button>

                {isCoursesOpen && (
                  <div
                    className={`absolute right-0 mt-3 w-[1080px] justify-center align-middle rounded-2xl overflow-hidden shadow-2xl border ${
                      isScrolled
                        ? "bg-white border-gray-200"
                        : "border-white/10 backdrop-blur-2xl"
                    }`}
                    role="menu"
                    onMouseEnter={openCourses}
                    onMouseLeave={scheduleCloseCourses}
                  >
                    <div className="p-8">
                      <div className="grid w-full mx-auto grid-cols-4 gap-6">
                        {coursesMenu.map((course, index) => (
                          <div
                            key={`course-col-${index}`}
                            className={`min-w-0 ${
                              course.isHighlighted
                                ? "relative bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-4 -m-2 border border-teal-200"
                                : ""
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                if (course.key !== "volunteer-programs") {
                                  goToCourse(course.key);
                                }
                              }}
                              className={`w-full text-left font-extrabold tracking-wide uppercase text-sm mb-3 ${
                                course.key === "volunteer-programs"
                                  ? "cursor-default text-teal-700"
                                  : "cursor-pointer"
                              } ${
                                !course.isHighlighted && isScrolled
                                  ? "text-gray-900 hover:text-teal-700"
                                  : !course.isHighlighted
                                  ? "text-white hover:text-teal-200"
                                  : ""
                              }`}
                            >
                              {course.isHighlighted ? (
                                <span className="flex items-center gap-2">
                                  {course.label}
                                </span>
                              ) : (
                                course.label
                              )}
                            </button>

                            <div className="space-y-1.5">
                              {(course.items || []).map((item) => (
                                <button
                                  key={item.slug}
                                  type="button"
                                  onClick={() =>
                                    goToCourse(course.key, item.slug)
                                  }
                                  className={`w-full cursor-pointer text-left text-sm rounded-lg px-3 py-2 transition-all duration-200 ${
                                    course.isHighlighted
                                      ? "text-teal-700 hover:bg-white/80 hover:text-teal-900 hover:shadow-sm"
                                      : isScrolled
                                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                      : "text-white/70 hover:text-white hover:bg-white/5"
                                  }`}
                                >
                                  {item.label}
                                </button>
                              ))}
                            </div>

                            {/* CTA for volunteer section */}
                            {course.isHighlighted && (
                              <button
                                onClick={() => {
                                  navigate("/volunteer");
                                  setIsCoursesOpen(false);
                                }}
                                className="cursor-pointer mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-teal-500 to-green-500 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                              >
                                <span>Make an Impact</span>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Donate button */}
              <button
                onClick={handleDonateClick1}
                className={`hidden md:block px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-teal-700 transition-all duration-300 transform active:scale-95 relative overflow-hidden group ${
                  isScrolled
                    ? "bg-teal-600 to-green-600 text-white"
                    : "bg-teal-600/90 text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <span className="relative z-10">Donate</span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-full transition-all duration-300" />
              </button>
              <button
                type="button"
                className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border transition ${
                  isScrolled
                    ? "bg-white border-gray-200 text-gray-900"
                    : "bg-white/10 border-white/20 text-white"
                }`}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <path d="M6 6l12 12" />
                      <path d="M18 6l-12 12" />
                    </>
                  ) : (
                    <>
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl top-20 shadow-lg"
              : "bg-gray-900/95 backdrop-blur-xl top-20"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.goto}
                end={item.id === "home"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                <span className="relative z-10 flex items-center">
                  <span>{item.label}</span>
                </span>
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-300/50">
              <button
                onClick={() => {
                  navigate("/courses");
                  setIsMobileMenuOpen(false);
                }}
                className={`relative w-full px-6 py-4 rounded-xl font-medium overflow-hidden group mb-3 border-2 ${
                  isScrolled
                    ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                    : "border-white/60 text-white hover:bg-white/10"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Diving Courses
                </span>
                <div
                  className={`absolute inset-0 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isScrolled ? "bg-teal-600" : "bg-white/20"
                  }`}
                />
              </button>

              <button
                onClick={() => {
                  navigate("/volunteer");
                  setIsMobileMenuOpen(false);
                }}
                className="relative w-full px-6 py-4 rounded-xl font-medium overflow-hidden group mb-3 bg-gradient-to-r from-teal-500/10 to-green-500/10 border-2 border-teal-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Volunteer Programs
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-teal-500 to-green-500 text-white">
                    Featured
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                onClick={handleDonateClick1}
                className="relative w-full px-6 py-4 rounded-xl font-medium overflow-hidden group"
              >
                <span className="relative z-10 text-white flex items-center justify-center">
                  Donate Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-green-700 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
