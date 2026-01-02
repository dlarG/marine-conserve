import React, { useState, useEffect } from "react";
import DonateModal from "./DonateModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
      const navbarHeight = 80; // Approximate navbar height
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
    { id: "about", label: "About Us" },
    { id: "research", label: "Research" },
    { id: "impact", label: "Impact" },
    { id: "team", label: "Team" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src="/logo/GREEN.jpg"
                alt="GREEN Inc. Logo"
                className="w-11 h-10.1 object-contain rounded-full"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div>
                <h1
                  className={`text-lg md:text-xl font-bold transition-all duration-500 ${
                    isScrolled ? "text-[#2E5E2E]" : "text-white"
                  }`}
                >
                  GREEN Inc.
                </h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavItem
                  key={item.id}
                  sectionId={item.id}
                  isScrolled={isScrolled}
                  isActive={activeSection === item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </NavItem>
              ))}

              <button
                onClick={handleDonateClick}
                className={`px-5 py-2 rounded-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isScrolled
                    ? "bg-gradient-to-r from-teal-600 to-green-600 text-white"
                    : "bg-gradient-to-r from-teal-600 to-green-600 text-white hover:bg-gray-100"
                }`}
              >
                Donate
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all hover:scale-110 duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
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
        <div
          className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl top-20 shadow-lg"
              : "bg-gray-900/95 backdrop-blur-xl top-24"
          }`}
        >
          <div className="px-4 py-8 space-y-6">
            {navigationItems.map((item) => (
              <MobileNavItem
                key={item.id}
                sectionId={item.id}
                isActive={activeSection === item.id}
                isScrolled={isScrolled}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </MobileNavItem>
            ))}

            <button
              onClick={handleDonateClick}
              className={`w-full px-6 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-teal-600 to-green-600 text-white hover:from-teal-700 hover:to-green-700"
                  : "bg-gradient-to-r from-teal-600 to-green-600 text-white hover:from-teal-700 hover:to-green-700"
              }`}
            >
              Donate Now
            </button>
          </div>
        </div>
      </nav>
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

const NavItem = ({ children, isScrolled, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer font-medium transition-all duration-300 relative group ${
      isActive
        ? isScrolled
          ? "text-[#2E5E2E]"
          : "text-[#2E5E2E]"
        : isScrolled
        ? "text-gray-700 hover:text-[#2E5E2E]"
        : "text-white hover:text-[#8B7355]"
    }`}
  >
    {children}
  </button>
);

const MobileNavItem = ({ children, onClick, isActive, isScrolled }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
      isActive
        ? isScrolled
          ? "bg-[#2E5E2E] text-white border-l-4 border-[#2E5E2E]"
          : "bg-[#2E5E2E] text-white border-l-4 border-[#2E5E2E]"
        : isScrolled
        ? "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
        : "text-white hover:bg-white/10 hover:text-blue-200"
    }`}
  >
    {children}
  </button>
);

export default Navbar;
