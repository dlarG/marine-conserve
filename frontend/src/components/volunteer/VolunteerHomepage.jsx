import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Waves, Fish, Shield, Clipboard } from "lucide-react";

const VolunteerHomepage = () => {
  const [isVisible] = React.useState({
    approach: true,
  });
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Volunteer Programs | GREEN Inc.";
  }, []);

  const programs = [
    {
      id: "coral-restoration",
      title: "Coral Restoration",
      subtitle: "Restoring the Foundation",
      description:
        "Get hands-on with coral restoration. Work in our underwater nurseries, cleaning reef structures and out-planting resilient coral fragments to rebuild devastated habitats.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343136/555705217_10238078344967574_7898261656592206056_n_mjjsbg.jpg",
    },
    {
      id: "dive-against-debris",
      title: "Dive Against Debris",
      subtitle: "The War on Waste",
      description:
        "Participate in debris removal missions. Remove ghost gear and plastic pollution, documenting every piece to help drive global policy changes for cleaner oceans.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343078/P8190137_zohnsu.jpg",
    },
    {
      id: "cots-monitoring",
      title: "COTS Monitoring",
      subtitle: "Protecting the Reef",
      description:
        "Join the hunt during Crown-of-Thorns monitoring. Track and manage outbreaks of these coral-eating predators to ensure our local reefs aren't stripped bare.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777343004/255053295_1323088658146866_9006587557721285913_n_qfsh6m.jpg",
    },
    {
      id: "scientific-data-collection",
      title: "Scientific Data Collection",
      subtitle: "Scientific Discovery",
      description:
        "Master ecological data gathering. Learn to identify key fish species and substrate types, contributing to long-term datasets that help us understand sanctuary health.",
      image:
        "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777342895/DSCF5597_lmehg1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ───────────────── Hero Section ───────────────── */}
      <section className="relative h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384417/PB080058_jzitbw.jpg"
            alt="Marine conservation volunteer diving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Dive with Purpose.
              <br />
              <span className="text-teal-300">Conserve with Impact.</span>
            </h1>
            <p className="text-xl md:text-lg text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Join GREEN, Inc. and be part of hands-on marine conservation
              efforts. Your mission awaits beneath the surface—restore reefs,
              remove debris, and protect marine life in one of the Philippines'
              most biodiverse bays.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all text-lg"
              >
                Explore Programs
              </a>
              <a
                href="#apply"
                className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all text-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ───────────────── Program Cards ───────────────── */}
      <section id="programs" className="py-20 bg-teal-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">
                Program
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from four impactful conservation initiatives, each designed
              to give you hands-on experience in marine protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                    {program.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <button
                    onClick={() => navigate(`/volunteer/${program.id}`)}
                    className="cursor-pointer inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Hover overlay accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`px-15 text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible.approach
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-300">
            <h4 className="text-2xl font-semibold text-teal-700 mb-4">
              Your Mission Underwater
            </h4>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-6">
              As a GREEN volunteer, you aren't just a visitor; you are a vital
              member of our conservation team. Your journey takes you through
              the four pillars of our reef resilience strategy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerHomepage;
