import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

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
            {/* Logo Section */}
            <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer">
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-teal-400 shadow-lg transition-all duration-500">
                <img
                  src="/logo/fav.png"
                  alt="Coral Institute Logo"
                  className="w-10 h-10 object-contain rounded-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              </div>
              <div>
                <h1
                  className={`text-lg md:text-xl font-bold transition-all duration-500 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  GREEN Inc.
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavItem href="#about" isScrolled={isScrolled}>
                About Us
              </NavItem>
              <NavItem href="#research" isScrolled={isScrolled}>
                Research
              </NavItem>
              <NavItem href="#impact" isScrolled={isScrolled}>
                Impact
              </NavItem>
              <NavItem href="#team" isScrolled={isScrolled}>
                Team
              </NavItem>
              <NavItem href="#contact" isScrolled={isScrolled}>
                Contact
              </NavItem>

              <button className="px-6 py-3 rounded-xl font-medium bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                Get Involved
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-800 transition-all hover:scale-110 duration-300"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl top-20"
              : "bg-transparent backdrop-blur-sm"
          }`}
        >
          <div className="px-4 py-8 space-y-6">
            <MobileNavItem
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </MobileNavItem>
            <MobileNavItem
              href="#research"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Research
            </MobileNavItem>
            <MobileNavItem
              href="#impact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Impact
            </MobileNavItem>
            <MobileNavItem
              href="#team"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </MobileNavItem>
            <MobileNavItem
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </MobileNavItem>
            <button className="w-full bg-black text-white px-6 py-4 md:px-4 md:py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Get Involved
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

const NavItem = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`font-medium transition-all duration-300 relative group ${
      isScrolled ? "text-gray-700" : "text-white"
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-500 to-teal-400"
          : "bg-gradient-to-r from-white to-blue-200"
      }`}
    ></span>
  </a>
);

const MobileNavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-gray-800 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
  >
    {children}
  </a>
);

export default Navbar;
