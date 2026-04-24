// App.jsx - Enhanced Mobile-Responsive Luxury Resort Landing Page
import React, { useState, useEffect, useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

// Scroll Reveal Component
const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionVariants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    scale: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : directionVariants[direction]
      }
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Luxury Card Component
const LuxuryCard = ({ image, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-ocean-900/5 hover:shadow-2xl hover:shadow-ocean-900/10 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="font-playfair text-xl lg:text-2xl font-bold text-ocean-900 mb-3">
          {title}
        </h3>
        <p className="text-ocean-600 leading-relaxed font-light text-sm lg:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Image sources from Unsplash
const images = {
  hero: "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777008348/chelsea-gates-0653_wY0nRc-unsplash_d55jgg.jpg",
  heroMobile:
    "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777008348/chelsea-gates-0653_wY0nRc-unsplash_d55jgg.jpg",
  about:
    "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777009122/pexels-quang-nguyen-vinh-222549-14024044_ranbpo.jpg",
  coral:
    "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775627247/Punta_MPA_San_Francisco_Southern_Leyte_csk4rx.jpg",
  villa:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  diving:
    "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775547474/pexels-aydenzaki-8029908_gdieio.jpg",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  island:
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
  gallery1:
    "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&q=80",
  gallery2:
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
  gallery3:
    "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600&q=80",
  gallery4:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  gallery5:
    "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&q=80",
  gallery6:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  cta: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  testimonial1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  testimonial2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  testimonial3:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Resort", id: "about" },
    { label: "Experiences", id: "experiences" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-ocean-900/5"
            : "bg-gradient-to-b from-ocean-900/80 via-ocean-900/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 relative z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`font-playfair text-xl sm:text-2xl font-bold transition-colors duration-500 ${
                  scrolled ? "text-ocean-800" : "text-white"
                }`}
              >
                Little Lembeh
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Coral Restoration Link */}
              <motion.a
                href="/"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-2 ${
                  scrolled
                    ? "text-green-700 hover:text-green-600"
                    : "text-green-300 hover:text-green-200"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Coral Restoration
              </motion.a>

              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-ocean-800 hover:text-ocean-600"
                      : "text-white/90 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection("book")}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  scrolled
                    ? "bg-ocean-800 text-white hover:bg-ocean-700 shadow-lg shadow-ocean-800/20"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={
                    mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  className={`block w-full h-0.5 rounded-full transition-colors ${
                    scrolled || mobileMenuOpen ? "bg-ocean-800" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block w-full h-0.5 rounded-full transition-colors ${
                    scrolled || mobileMenuOpen ? "bg-ocean-800" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  className={`block w-full h-0.5 rounded-full transition-colors ${
                    scrolled || mobileMenuOpen ? "bg-ocean-800" : "bg-white"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-ocean-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Coral Restoration Mobile */}
                <motion.a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 text-green-700 font-medium"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Coral Restoration Program
                </motion.a>

                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-ocean-800 font-medium hover:bg-ocean-50 rounded-xl transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.button
                  onClick={() => scrollToSection("book")}
                  className="w-full px-6 py-3.5 bg-ocean-800 text-white font-medium rounded-xl hover:bg-ocean-700 transition-colors shadow-lg"
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Stay
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ============ HERO SECTION ============ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-screen min-h-[600px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={images.hero}
              alt="Little Lembeh Resort"
              className="w-full h-full object-cover hidden md:block"
            />
            <img
              src={images.heroMobile}
              alt="Little Lembeh Resort"
              className="w-full h-full object-cover md:hidden"
            />
          </motion.div>
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/50 via-ocean-900/30 to-ocean-900/70" />

        {/* Hero content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gold-400 font-light tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-4 sm:mb-6 uppercase"
          >
            Welcome to Paradise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-none"
          >
            Little
            <br className="sm:hidden" /> Lembeh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8 sm:mb-12 max-w-2xl px-2"
          >
            Escape to Paradise, Dive into Serenity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.button
              onClick={() => scrollToSection("book")}
              className="w-full sm:w-auto px-8 sm:px-10 bg-gold-500 text-ocean-900 font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/25 text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Resort
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-1.5"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section
        id="about"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-sand-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <motion.div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={images.about}
                    alt="Little Lembeh Resort View"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 sm:w-48 h-32 sm:h-48 border-2 border-gold-400/30 rounded-2xl sm:rounded-3xl hidden sm:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <motion.p className="text-gold-600 font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
                  Our Story
                </motion.p>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ocean-900 mb-6 sm:mb-8 leading-tight">
                  Where Luxury Meets Nature
                </h2>
                <div className="space-y-4 sm:space-y-6 text-ocean-700 leading-relaxed">
                  <p className="text-base sm:text-lg font-light">
                    Nestled along pristine white sand beaches with crystal-clear
                    waters, Little Lembeh offers an exclusive escape where every
                    moment is crafted for those who appreciate the
                    extraordinary.
                  </p>
                  <p className="text-base sm:text-lg font-light">
                    From world-class diving in vibrant coral reefs to sunset
                    dining overlooking the horizon, our resort combines barefoot
                    luxury with unforgettable tropical experiences.
                  </p>
                  <p className="text-base sm:text-lg font-light">
                    With just 24 exclusive villas, privacy and personalized
                    service are at the heart of everything we do.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-10">
                  <div>
                    <p className="text-3xl sm:text-4xl font-playfair font-bold text-ocean-900">
                      24
                    </p>
                    <p className="text-ocean-600 font-light mt-1 text-xs sm:text-sm">
                      Private Villas
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-playfair font-bold text-ocean-900">
                      5km
                    </p>
                    <p className="text-ocean-600 font-light mt-1 text-xs sm:text-sm">
                      White Sand Beach
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-playfair font-bold text-ocean-900">
                      30+
                    </p>
                    <p className="text-ocean-600 font-light mt-1 text-xs sm:text-sm">
                      Dive Sites
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ CORAL RESTORATION BANNER ============ */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-ocean-900 overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10">
          <img
            src={images.coral}
            alt="Coral Restoration"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-green-300 font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
              Conservation
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Coral Restoration Program
            </h2>
            <p className="text-ocean-200 font-light text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join our mission to restore and protect the vibrant coral reefs
              surrounding Little Lembeh and Sogod Bay. Every stay contributes to
              marine conservation.
            </p>
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition-all duration-300 shadow-xl shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <span className="text-lg">→</span>
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ EXPERIENCES SECTION ============ */}
      <section
        id="experiences"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-gold-600 font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
                Curated Experiences
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ocean-900">
                Extraordinary Moments Await
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <LuxuryCard
              image={images.villa}
              title="Luxury Accommodation"
              description="Beachfront villas with private pools, outdoor showers, and panoramic ocean views designed for ultimate relaxation."
              index={0}
            />
            <LuxuryCard
              image={images.diving}
              title="World-Class Diving"
              description="Explore vibrant coral reefs and diverse marine life with expert guides at some of the world's best dive sites."
              index={1}
            />
            <LuxuryCard
              image={images.dining}
              title="Fine Dining"
              description="Savor exceptional cuisine crafted from fresh local ingredients, served beachfront with stunning sunset views."
              index={2}
            />
            <LuxuryCard
              image={images.island}
              title="Island Adventures"
              description="Discover hidden lagoons, trek through tropical forests, and experience the magic of untouched paradise."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ============ GALLERY SECTION ============ */}
      <section
        id="gallery"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-sand-50"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-gold-600 font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
                Gallery
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ocean-900">
                A Glimpse of Paradise
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              images.gallery1,
              images.gallery2,
              images.gallery3,
              images.gallery4,
              images.gallery5,
              images.gallery6,
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section
        id="testimonials"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="text-gold-600 font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 uppercase">
                Guest Reviews
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ocean-900">
                Loved by Our Guests
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Travel Writer",
                image: images.testimonial1,
                quote:
                  "Little Lembeh is everything you dream of and more. The diving is absolutely world-class, and the villas are pure luxury. I've never experienced anything quite like it.",
              },
              {
                name: "James Cooper",
                role: "Marine Biologist",
                image: images.testimonial2,
                quote:
                  "As a marine biologist, I've traveled the world, but the reef here is truly exceptional. The resort's commitment to conservation while providing luxury is remarkable.",
              },
              {
                name: "Elena Rodriguez",
                role: "Luxury Travel Curator",
                image: images.testimonial3,
                quote:
                  "The attention to detail at Little Lembeh is extraordinary. From the moment you arrive, every experience is thoughtfully curated. This is barefoot luxury at its finest.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-sand-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-4 sm:top-6 left-6 sm:left-8 text-6xl sm:text-8xl font-playfair text-gold-400/20 leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-ocean-700 leading-relaxed mb-6 sm:mb-8 relative z-10 font-light text-sm sm:text-base lg:text-lg">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover ring-2 ring-gold-400/30"
                  />
                  <div>
                    <p className="font-semibold text-ocean-900 text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-ocean-500 text-xs sm:text-sm font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BOOKING CTA SECTION ============ */}
      <section
        id="book"
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={images.cta}
            alt="Book your stay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/95 via-ocean-900/80 to-ocean-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-gold-400 font-medium tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-4 sm:mb-6 uppercase">
            Limited Availability
          </p>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Ready to Escape to Paradise?
          </h2>

          <p className="text-lg sm:text-xl text-white/80 font-light mb-10 sm:mb-12 max-w-2xl mx-auto px-2">
            Reserve your villa today and experience the ultimate tropical
            luxury. Only 24 exclusive villas available for your private retreat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <motion.button
              className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-gold-500 text-ocean-900 font-semibold rounded-full text-base sm:text-lg hover:bg-gold-400 transition-all duration-300 shadow-2xl shadow-gold-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay Now
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 border-2 border-white/40 text-white font-semibold rounded-full text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Rates
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ocean-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Little Lembeh
              </h3>
              <p className="text-ocean-200 font-light leading-relaxed text-sm sm:text-base">
                An exclusive tropical sanctuary where luxury meets pristine
                nature. Your paradise awaits.
              </p>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-4 sm:mb-6 tracking-wide uppercase text-xs sm:text-sm">
                Resort
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Our Story",
                  "Villas & Suites",
                  "Dining",
                  "Experiences",
                  "Gallery",
                ].map((link) => (
                  <motion.button
                    key={link}
                    onClick={() =>
                      scrollToSection(
                        link
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")
                      )
                    }
                    className="block text-ocean-200 hover:text-gold-400 transition-colors font-light text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-4 sm:mb-6 tracking-wide uppercase text-xs sm:text-sm">
                Information
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Rates & Booking",
                  "Location",
                  "Contact Us",
                  "FAQ",
                  "Travel Guide",
                ].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-ocean-200 hover:text-gold-400 transition-colors font-light text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-4 sm:mb-6 tracking-wide uppercase text-xs sm:text-sm">
                Contact
              </h4>
              <div className="space-y-3 sm:space-y-4 font-light text-ocean-200 text-sm sm:text-base">
                <p>
                  Jl. Paradise Beach No. 1<br />
                  Lembeh Island, Indonesia
                </p>
                <p>+62 123 4567 890</p>
                <p>hello@littlelembeh.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-ocean-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-ocean-400 font-light text-xs sm:text-sm">
              &copy; 2026 Little Lembeh. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-ocean-400 hover:text-gold-400 transition-colors font-light text-xs sm:text-sm"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
