const MissionVissionHome = () => {
  const cards = [
    {
      title: "Our Mission",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "To empower coastal communities through education and science-based initiatives, fostering grassroots responsiveness to environmental needs while protecting and restoring marine ecosystems for future generations.",
      color: "from-[#2c6e3f] to-[#4c9a6c]",
    },
    {
      title: "Our Vision",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "A future where coastal communities and marine ecosystems thrive in harmony, with Southern Leyte serving as a model for sustainable marine conservation and community-led environmental stewardship.",
      color: "from-[#4c9a6c] to-[#7fc29b]",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#eaf7ef] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#2c6e3f]/10 text-[#2c6e3f] text-sm font-semibold rounded-full mb-4">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-[#4c9a6c] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">{card.icon}</div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 flex items-center text-[#2c6e3f] font-semibold">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sustainability",
                desc: "Long-term environmental solutions",
              },
              {
                name: "Community First",
                desc: "Empowering local stakeholders",
              },
              { name: "Science-Based", desc: "Data-driven conservation" },
              { name: "Education", desc: "Knowledge as a catalyst for change" },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-16 h-16 bg-[#eaf7ef] rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-[#2c6e3f] rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {value.name}
                </h4>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVissionHome;
