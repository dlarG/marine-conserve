import React, { useState, useEffect, useRef } from "react";

function About1() {
  const sectionRefs = useRef({});
  const [isVisible, setIsVisible] = useState({
    mainContainer: false,
  });

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
    <div className="bg-blue-100 shadow-md">
      <div
        ref={(el) => (sectionRefs.current["mainContainer"] = el)}
        className={`bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] rounded-l-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
          isVisible.mainContainer
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-12 opacity-0 scale-95"
        }`}
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-10 lg:p-10 xl:p-12 relative z-10">
            <h3
              className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 delay-300 ${
                isVisible.mainContainer
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              About <span className="text-teal-600">GREEN Inc.</span>
            </h3>

            <div
              className={`space-y-6 text-gray-700 transform transition-all duration-1000 delay-500 ${
                isVisible.mainContainer
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed">
                Grassroots Responsiveness thru Education on Environmental Needs,
                Incorporated <strong>(GREEN, Inc.)</strong> was formally
                established in <strong>2013</strong> by{" "}
                <strong>Jerome Jack Napala</strong>, alongside like-minded
                individuals passionate about marine conservation.
              </p>
              <p className="text-lg leading-relaxed">
                Before founding GREEN, Inc., Mr. Napala was a simple government
                employee with a deep appreciation for the marine environment.
                His life and professional path took a major turn when he was
                awarded a{" "}
                <strong>
                  marine conservation scholarship with Coral Cay Conservation
                </strong>
                , where he earned his early dive certification and gained a
                firsthand understanding of the critical importance of healthy
                marine ecosystems.
              </p>
              <p className="text-lg leading-relaxed">
                This experience profoundly influenced his decision to pursue a
                career in <strong>marine biology</strong> and eventually become
                a <strong>PADI Open Water Scuba Instructor, </strong>
                combining his scientific knowledge with hands-on diving
                expertise. Through GREEN, Inc., Jerome and his team channel
                their passion into{" "}
                <strong>
                  marine conservation, community engagement, and science-based
                  initiatives{" "}
                </strong>
                to protect and restore the reefs and coastal resources of
                Southern Leyte.
              </p>
            </div>

            <div
              className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100 transform transition-all duration-1000 delay-700 ${
                isVisible.mainContainer
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 group-hover:animate-bounce">
                  2013
                </div>
                <div className="text-gray-600 text-sm mt-1">Year Founded</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-teal-600 group-hover:animate-bounce">
                  10+
                </div>
                <div className="text-gray-600 text-sm mt-1">Years Active</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 group-hover:animate-bounce">
                  35+
                </div>
                <div className="text-gray-600 text-sm mt-1">Studies</div>
              </div>
            </div>
          </div>
          <div
            className={`relative h-[500px] lg:h-auto transform transition-all duration-1000 delay-400 ${
              isVisible.mainContainer
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/aboutus1.jpg"
                alt="GREEN Inc. team conducting underwater research"
                className="w-full h-full object-cover transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "/images/placeholder-marine.jpg";
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="absolute max-w-80 inset-0 bg-gradient-to-r from-white via-white/80 via-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
