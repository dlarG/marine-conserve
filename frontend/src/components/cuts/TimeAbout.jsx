import React, { useRef } from "react";
function TimelineAbout() {
  const sectionRefs = useRef({});
  const [isVisible] = React.useState({
    timeline: true,
  });
  const timeline = [
    {
      year: "2013",
      event: "GREEN Inc. founded in Sogod Bay, Southern Leyte",
      description:
        "Establishment of coral nursery in Malitbog and reef monitoring",
    },
    {
      year: "2014",
      event: "Coral Nursery & Transplant Trials",
      description:
        "Tested different types of coral nursery and transplant methods, assisted scientific surveys in Silago, Southern Leyte",
    },
    {
      year: "2015",
      event: "Community Engagement Programs Launched",
      description:
        "Crown of thorns seastar research initiative begun its population monitoring program",
    },
    {
      year: "2017",
      event: "Published Flora & Fauna of Tagbak Marine Park",
      description:
        "Published the first comprehensive guidebook of the area's marine life",
    },
    {
      year: "2020",
      event: "Crown of Thorns Outbreak Reported",
      description:
        "Made a comprehensive report about the crown of thorns outbreak in Sogod Bay and presented it to the governor for a scientifically based intervention.",
    },
    {
      year: "2022",
      event: "Hinundayan Marine Survey",
      description:
        "Conducted surveys on coral reef and reef fishes on selected Marine Protected Areas in Southern Leyte funded by SPIADFI and USAID assisted Provincial Tourism office in exploring Hinundayan for possible dive sites",
    },
    {
      year: "2023",
      event: "Coral Restoration Initiatives Launched",
      description:
        "Started Dive Against Debris, Crown of Thorns Monitoring, Coral Restoration",
    },
  ];

  return (
    <div
      ref={(el) => (sectionRefs.current["timeline"] = el)}
      className="mb-20 mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white p-8">
        <h3
          className={`text-3xl font-bold text-center text-gray-900 mb-12 transform transition-all duration-1000 ${
            isVisible.timeline
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Our <span className="text-teal-600">Journey</span> Through the Years
        </h3>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-emerald-500 hidden md:block"></div>

          <div className="space-y-12 relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 transform transition-all duration-1000 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  isVisible.timeline
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                    ? "-translate-x-12 opacity-0"
                    : "translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-32 flex-shrink-0">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full px-6 py-2 text-center hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-gradient-to-r from-teal-50 to-white rounded-2xl p-6 shadow-lg border border-teal-100 max-w-lg mx-auto hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.event}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimelineAbout;
