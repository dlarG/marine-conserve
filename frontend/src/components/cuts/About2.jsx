import React, { useState, useEffect, useRef } from "react";

function About3() {
  const sectionRefs = useRef({});
  const [sectionOffsets, setSectionOffsets] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    fullImage: false,
  });

  useEffect(() => {
    const calculateOffsets = () => {
      const offsets = {};
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          offsets[key] = sectionRefs.current[key].offsetTop;
        }
      });
      setSectionOffsets(offsets);
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);
    const timer = setTimeout(calculateOffsets, 100);

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      clearTimeout(timer);
    };
  }, []);

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect for intersection observer
  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
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
  }, []);

  return (
    <div
      ref={(el) => (sectionRefs.current["fullImage"] = el)}
      className={`w-full h-[60vh] overflow-hidden transform transition-all duration-1000 ${
        isVisible.fullImage ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        maxWidth: "100vw",
      }}
    >
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${
            (scrollY - (sectionOffsets.fullImage || 0)) * 0.05
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/images/close.JPG"
          alt="Close up image of fish"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/images/placeholder-fish.jpg";
            e.target.onerror = null;
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div
        className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1000 delay-300`}
      >
        <div className="text-center text-white px-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Protecting Marine Ecosystems
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Through scientific research and community partnerships
          </p>
        </div>
      </div>
    </div>
  );
}

export default About3;
