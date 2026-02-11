import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FloraAndFauna = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Use setTimeout to avoid synchronous state update in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <img
            src="/images/tagbak1.jpg"
            alt="Tagbak Marine Park underwater biodiversity"
            className="w-full h-[110%] object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer inline-flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blogs
            </button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Flora & Fauna of Tagbak Marine Park:
              <br />
              <span className="text-teal-300">A Comprehensive Guide</span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                October 15, 2017
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                25 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Introduction */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 font-light mb-8">
              Tagbak Marine Park stands as one of the Philippines' most
              biodiverse marine sanctuaries, harboring an extraordinary array of
              marine life that represents the crown jewel of Southern Leyte's
              coastal ecosystem. This comprehensive guide documents over 200
              species of corals, fish, and invertebrates discovered during our
              extensive research expeditions.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mb-12">
              Our research team has spent countless hours underwater,
              meticulously cataloging the incredible biodiversity that thrives
              within these protected waters. From vibrant coral gardens to
              schools of tropical fish, Tagbak Marine Park offers a window into
              the pristine marine ecosystems of the past.
            </p>
          </div>
        </div>

        {/* First Image Section */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <figure className="mb-12">
            <img
              src="/images/tagbak-coral-garden.jpg"
              alt="Vibrant coral garden at Tagbak Marine Park"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1546620177-1ad3b950c8e5?w=1200&h=500&fit=crop&q=80";
              }}
            />
            <figcaption className="text-center text-gray-500 text-sm mt-4 italic">
              The spectacular coral gardens of Tagbak Marine Park showcase over
              50 species of hard corals
            </figcaption>
          </figure>
        </div>

        {/* Marine Biodiversity Section */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Marine Biodiversity Overview
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The marine park encompasses 15.69 hectares of pristine coral reef
              ecosystem, featuring an remarkable diversity of marine species.
              Our comprehensive surveys have identified distinct habitat zones,
              each supporting unique assemblages of marine organisms.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">50+</h3>
                <p className="text-gray-700 font-medium">Hard Coral Species</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">120+</h3>
                <p className="text-gray-700 font-medium">Fish Species</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                  30+
                </h3>
                <p className="text-gray-700 font-medium">
                  Invertebrate Species
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              The coral formations range from massive brain corals to delicate
              branching species, creating complex three-dimensional structures
              that provide shelter and feeding grounds for countless marine
              organisms. The fish communities include both resident species and
              seasonal visitors, creating a dynamic ecosystem that changes
              throughout the year.
            </p>
          </div>
        </div>

        {/* Second Image Section */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <figure className="mb-12">
            <img
              src="/images/tagbak-fish-diversity.jpg"
              alt="Diverse fish species swimming among corals"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=500&fit=crop&q=80";
              }}
            />
            <figcaption className="text-center text-gray-500 text-sm mt-4 italic">
              Schools of tropical fish create living rainbows above the coral
              formations
            </figcaption>
          </figure>
        </div>

        {/* Species Highlights Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notable Species Discoveries
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Among our most significant findings are several species of
              conservation concern, including juvenile green sea turtles,
              Napoleon wrasse, and various species of grouper that use the park
              as a nursery ground. The presence of these indicator species
              confirms the exceptional health of the marine ecosystem.
            </p>

            <blockquote className="border-l-4 border-teal-500 pl-6 my-8 bg-teal-50 p-6 rounded-r-xl">
              <p className="text-lg italic text-gray-700 mb-4">
                "The biodiversity we've documented at Tagbak Marine Park rivals
                that of world-renowned marine sanctuaries. This ecosystem
                represents a living library of marine species that must be
                preserved for future generations."
              </p>
              <cite className="text-gray-600 font-semibold">
                Dr. Maria Santos, Marine Biologist
              </cite>
            </blockquote>

            <p className="text-lg leading-relaxed text-gray-700">
              The invertebrate communities are equally impressive, with colorful
              sea stars, giant clams, and intricate coral polyps creating a
              vibrant underwater tapestry. Many of these species serve critical
              ecological roles, from filtering water to providing calcium
              carbonate for reef structure.
            </p>
          </div>
        </div>

        {/* Third Image Section */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <figure className="mb-12">
            <img
              src="/images/tagbak-turtle.jpg"
              alt="Green sea turtle gliding over coral reef"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=500&fit=crop&q=80";
              }}
            />
            <figcaption className="text-center text-gray-500 text-sm mt-4 italic">
              A juvenile green sea turtle, one of the park's most cherished
              residents
            </figcaption>
          </figure>
        </div>

        {/* Conservation Implications */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conservation Implications
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              This comprehensive biodiversity assessment provides crucial
              baseline data for conservation planning and management decisions.
              The remarkable species richness documented here underscores the
              critical importance of maintaining strict protection measures
              within the marine park boundaries.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Our findings will inform adaptive management strategies, helping
              ensure that Tagbak Marine Park continues to serve as a refuge for
              marine biodiversity in an era of increasing environmental
              pressures. The data collected forms the foundation for long-term
              monitoring programs that will track ecosystem health and species
              population trends over time.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Biodiversity",
            "Marine Research",
            "Conservation",
            "Tagbak Marine Park",
            "Species Documentation",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share & Navigation */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-50 text-teal-600 hover:bg-teal-100 rounded-lg font-semibold transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Blogs
          </button>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Share this article:</span>
            <div className="flex gap-2">
              <button className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FloraAndFauna;
