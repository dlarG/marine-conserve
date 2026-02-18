import React, { useState, useEffect, useRef } from "react";

function About4() {
  const sectionRefs = useRef({});
  const [isVisible, setIsVisible] = useState({
    mainContainer: false,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
              // Start animations when the section becomes visible
              if (key === "mainContainer" && !hasAnimated) {
                setHasAnimated(true);
              }
            }
          },
          { threshold: 0.1, rootMargin: "50px" }
        );

        observer.observe(sectionRefs.current[key]);
        observers.push(observer);
      }
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [hasAnimated]);

  return (
    <div>
      <div
        ref={(el) => (sectionRefs.current["mainContainer"] = el)}
        className={`bg-white max-h-screen w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden transform transition-all duration-1000 ${
          isVisible.mainContainer
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-12 opacity-0 scale-95"
        }`}
      >
        <div className="grid lg:grid-cols-2">
          {/* Image Section - Now on the Left */}
          <div
            className={`relative h-[500px] lg:h-auto order-2 lg:order-1 transform transition-all duration-1000 delay-400 ${
              isVisible.mainContainer
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384130/resort_lgfsik.jpg"
                alt="GREEN Inc. team conducting underwater research"
                className="w-full h-full object-cover transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "/images/placeholder-marine.jpg";
                  e.target.onerror = null;
                }}
              />
            </div>
            {/* Updated gradient overlay - positioned on the right side only */}
            <div className="absolute top-0 right-0 w-32 lg:w-48 h-full bg-gradient-to-l from-white via-white/90 via-white/60 to-transparent"></div>
          </div>

          {/* Text Content Section - Now on the Right */}
          <div className="p-10 lg:p-10 xl:p-12 relative z-10 order-1 lg:order-2">
            <h3
              className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-300 ${
                isVisible.mainContainer
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-teal-600">Sogod Bay Scuba Resort.</span>
            </h3>
            <div
              className={`space-y-6 text-gray-700 transform transition-all duration-1000 delay-500 ${
                isVisible.mainContainer
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed">
                Dip your toes in the water, enjoy your lunch while admiring the
                view of the water with the hills in the background, and think
                back on the dives you had earlier that morning. Simply your
                normal routine at Sogod Bay Resort.
              </p>
              <p className="text-lg leading-relaxed">
                Stay in one of the double rooms and enjoy the bay views from
                your bed, or stay in the flats across the street close to the
                greens behind. All rooms are equipped with a TV, AC, and hot
                water shower. And just a short walk from their fabulous in-house
                restaurant.
              </p>
              <p className="text-lg leading-relaxed">
                Sogod Bay Scuba Resort is a fundamental part of marine
                conservation within the Bay of Southern Leyte and continues to
                encourage and support marine-related projects. The associated
                PADI dive shop is actively arranging COT management, coral
                nurseries, and diving against debris dives. Sogod Bay Coral
                Restoration has a year-long history of planning and managing
                these dives with Sogod Bay Resort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
