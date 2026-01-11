import React, { useState, useEffect } from "react";
import DonateModal from "./DonateModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "research", "impact", "team"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

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

  const handleDonateClick = () => {
    setIsDonateModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "research", label: "Research" },
    { id: "impact", label: "Impact" },
    { id: "team", label: "Team" },
  ];

  const handleLogoClick = () => {
    navigate("/");
    scrollToSection("hero");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
            : "bg-transparent py-4"
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
                  src="/logo/GREEN.jpg"
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
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer font-medium transition-all duration-300 relative px-4 py-2 rounded-full group ${
                      activeSection === item.id
                        ? isScrolled
                          ? "text-[#2E5E2E]"
                          : "text-white"
                        : isScrolled
                        ? "text-gray-700 hover:text-[#2E5E2E]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Hover underline effect */}
                    <span
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-4 transition-all duration-300 ${
                        isScrolled
                          ? "bg-gradient-to-r from-teal-500 to-green-500"
                          : "bg-gradient-to-r from-teal-300 to-green-300"
                      }`}
                    />
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <span
                        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-6 rounded-full ${
                          isScrolled
                            ? "bg-gradient-to-r from-teal-600 to-green-600"
                            : "bg-gradient-to-r from-teal-400 to-green-400"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center space-x-3">
              <button
                onClick={() => navigate("/courses")}
                className={`cursor:pointer hidden md:block px-4.5 py-2 rounded-full font-medium border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
                  isScrolled
                    ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                    : "border-white/60 text-white hover:bg-white/10"
                }`}
                style={{ cursor: "pointer" }}
              >
                <span className="relative z-10">Courses</span>
                <div
                  className={`cursor:pointer absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isScrolled ? "bg-teal-600" : "bg-white/20"
                  }`}
                />
              </button>

              <button
                onClick={handleDonateClick}
                className={` hidden md:block px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
                  isScrolled
                    ? "bg-gradient-to-r from-teal-600 to-green-600 text-white"
                    : "bg-gradient-to-r from-teal-600/90 to-green-600/90 text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <span className="relative z-10">Donate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-full transition-all duration-300" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-xl transition-all duration-300 relative group ${
                  isScrolled
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-base font-medium py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id
                    ? isScrolled
                      ? "bg-gradient-to-r from-teal-50 to-green-50 text-[#2E5E2E]"
                      : "bg-gradient-to-r from-teal-900/30 to-green-900/30 text-white"
                    : isScrolled
                    ? "text-gray-800 hover:bg-gray-50"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="ml-auto">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                    </span>
                  )}
                </span>
                {activeSection === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-green-400 rounded-r" />
                )}
              </button>
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
                  Courses
                </span>
                <div
                  className={`absolute inset-0 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isScrolled ? "bg-teal-600" : "bg-white/20"
                  }`}
                />
              </button>

              <button
                onClick={handleDonateClick}
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
