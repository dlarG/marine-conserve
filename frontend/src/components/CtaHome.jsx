import React from "react";
import { useNavigate } from "react-router-dom";
const CtaHome = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-teal-800 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
        >
          <defs>
            <pattern
              id="waves"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <path
                d="M0 20 Q10 15 20 20 T40 20"
                stroke="white"
                fill="none"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join us in protecting and restoring the reefs and coastal resources of
          Southern Leyte. Every contribution, whether time or resources, helps
          create lasting impact.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/donate")}
            className="cursor-pointer px-8 py-3 bg-white text-[#2c6e3f] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Donate Now
          </button>
          <button
            onClick={() => navigate("/volunteer")}
            className="cursor-pointer px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
          >
            Become a Volunteer
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="cursor-pointer px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-200"
          >
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaHome;
