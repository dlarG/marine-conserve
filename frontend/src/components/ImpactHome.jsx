const ImpactHome = () => {
  const stats = [
    { number: "15+", label: "Marine Protected Areas", icon: "🌊" },
    { number: "50+", label: "Coastal Communities", icon: "🏝️" },
    { number: "200+", label: "Dive Certifications", icon: "🤿" },
    { number: "1000+", label: "Students Educated", icon: "📚" },
    { number: "25+", label: "Research Publications", icon: "📊" },
    { number: "∞", label: "Passion for Oceans", icon: "💚" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#2c6e3f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact So Far
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Through grassroots efforts and community collaboration, we're making
            waves in marine conservation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactHome;
