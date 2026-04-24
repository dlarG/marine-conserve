// LittleLembeh.jsx - Complete single file with all components inline
import React, { useState, useEffect } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

// Scroll reveal component for smooth section animations
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Luxury card component
const LuxuryCard = ({ image, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-ocean-900/5 hover:shadow-2xl hover:shadow-ocean-900/10 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="p-8">
        <h3 className="font-playfair text-2xl font-bold text-ocean-900 mb-3">
          {title}
        </h3>
        <p className="text-ocean-600 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Image placeholders using Unsplash
const images = {
  hero: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=80",
  heroAlt:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  about:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
  villa:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  diving:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
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

const LittleLembeh = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-ocean-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className={`font-playfair text-2xl font-bold transition-colors duration-500 ${
                  scrolled ? "text-ocean-800" : "text-white"
                }`}
              >
                Little Lembeh
              </span>
            </motion.button>

            <div className="hidden lg:flex items-center space-x-10">
              {[
                { label: "Resort", id: "about" },
                { label: "Experiences", id: "experiences" },
                { label: "Gallery", id: "gallery" },
                { label: "Reviews", id: "testimonials" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-ocean-800 hover:text-ocean-600"
                      : "text-white hover:text-gold-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection("book")}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  scrolled
                    ? "bg-ocean-800 text-white hover:bg-ocean-700"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden"
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection("book")}
            >
              <span
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  scrolled
                    ? "bg-ocean-800 text-white"
                    : "bg-white/20 text-white"
                }`}
              >
                Book
              </span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ============ HERO SECTION ============ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-screen overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ scale }}>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={images.hero}
              alt="Little Lembeh Resort"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/40 via-ocean-900/30 to-ocean-900/60" />

        {/* Hero content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold-400 font-light tracking-[0.3em] text-sm mb-6 uppercase"
          >
            Welcome to Paradise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
          >
            Little
            <br className="md:hidden" /> Lembeh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-12 max-w-3xl"
          >
            Escape to Paradise, Dive into Serenity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("book")}
              className="px-10 py-4 bg-gold-500 text-ocean-900 font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/25"
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
              className="px-10 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Resort
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="relative">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
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
                {/* Decorative element */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-gold-400/30 rounded-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <motion.p
                  className="text-gold-600 font-medium tracking-[0.2em] text-sm mb-4 uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Our Story
                </motion.p>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-ocean-900 mb-8 leading-tight">
                  Where Luxury Meets Nature
                </h2>
                <div className="space-y-6 text-ocean-700 leading-relaxed">
                  <motion.p
                    className="text-lg font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Nestled along pristine white sand beaches with crystal-clear
                    waters, Little Lembeh offers an exclusive escape where every
                    moment is crafted for those who appreciate the
                    extraordinary.
                  </motion.p>
                  <motion.p
                    className="text-lg font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    From world-class diving in vibrant coral reefs to sunset
                    dining overlooking the horizon, our resort combines barefoot
                    luxury with unforgettable tropical experiences.
                  </motion.p>
                  <motion.p
                    className="text-lg font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    With just 24 exclusive villas, privacy and personalized
                    service are at the heart of everything we do.
                  </motion.p>
                </div>

                <motion.div
                  className="mt-10 flex gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div>
                    <p className="text-4xl font-playfair font-bold text-ocean-900">
                      24
                    </p>
                    <p className="text-ocean-600 font-light mt-1">
                      Private Villas
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-playfair font-bold text-ocean-900">
                      5km
                    </p>
                    <p className="text-ocean-600 font-light mt-1">
                      White Sand Beach
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-playfair font-bold text-ocean-900">
                      30+
                    </p>
                    <p className="text-ocean-600 font-light mt-1">Dive Sites</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCES SECTION ============ */}
      <section id="experiences" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-gold-600 font-medium tracking-[0.2em] text-sm mb-4 uppercase">
                Curated Experiences
              </p>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-ocean-900">
                Extraordinary Moments Await
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section id="gallery" className="py-32 px-6 lg:px-8 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-gold-600 font-medium tracking-[0.2em] text-sm mb-4 uppercase">
                Gallery
              </p>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-ocean-900">
                A Glimpse of Paradise
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section id="testimonials" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-gold-600 font-medium tracking-[0.2em] text-sm mb-4 uppercase">
                Guest Reviews
              </p>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-ocean-900">
                Loved by Our Guests
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-sand-50 rounded-3xl p-10 relative shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-6 left-8 text-8xl font-playfair text-gold-400/20 leading-none">
                  &ldquo;
                </div>
                <p className="text-ocean-700 leading-relaxed mb-8 relative z-10 font-light text-lg">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold-400/30"
                  />
                  <div>
                    <p className="font-semibold text-ocean-900">
                      {testimonial.name}
                    </p>
                    <p className="text-ocean-500 text-sm font-light">
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
        className="relative py-48 px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={images.cta}
            alt="Book your stay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 to-ocean-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.p
            className="text-gold-400 font-medium tracking-[0.3em] text-sm mb-6 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Limited Availability
          </motion.p>

          <h2 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Escape to Paradise?
          </h2>

          <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
            Reserve your villa today and experience the ultimate tropical
            luxury. Only 24 exclusive villas available for your private retreat.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="px-12 py-5 bg-gold-500 text-ocean-900 font-semibold rounded-full text-lg hover:bg-gold-400 transition-all duration-300 shadow-2xl shadow-gold-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay Now
            </motion.button>
            <motion.button
              className="px-12 py-5 border-2 border-white/50 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Rates
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ocean-900 text-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6">
                Little Lembeh
              </h3>
              <p className="text-ocean-200 font-light leading-relaxed">
                An exclusive tropical sanctuary where luxury meets pristine
                nature. Your paradise awaits.
              </p>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">
                Resort
              </h4>
              <div className="space-y-3">
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
                      scrollToSection(link.toLowerCase().replace(/ & | /g, "-"))
                    }
                    className="block text-ocean-200 hover:text-gold-400 transition-colors font-light"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">
                Information
              </h4>
              <div className="space-y-3">
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
                    className="block text-ocean-200 hover:text-gold-400 transition-colors font-light"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">
                Contact
              </h4>
              <div className="space-y-4 font-light text-ocean-200">
                <p>
                  Jl. Paradise Beach No. 1<br />
                  Lembeh Island, Indonesia
                </p>
                <p>+62 123 4567 890</p>
                <p>hello@littlelembeh.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-ocean-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ocean-400 font-light text-sm">
              &copy; 2024 Little Lembeh. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-ocean-400 hover:text-gold-400 transition-colors font-light text-sm"
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

export default LittleLembeh;
