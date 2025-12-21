const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Research",
    image:
      "https://images.unsplash.com/photo-1733413931571-1b1f7a4785f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwY29yYWx8ZW58MXx8fHwxNzY2MTE1Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "PhD in Marine Biology from Stanford. 15+ years studying coral resilience to climate change.",
  },
  {
    name: "Dr. James Martinez",
    role: "Chief Conservation Officer",
    image:
      "https://images.unsplash.com/photo-1651065223932-284c48b49cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsfGVufDF8fHx8MTc2NjExNTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Former NOAA scientist with expertise in reef restoration and marine protected areas.",
  },
  {
    name: "Dr. Aisha Okonkwo",
    role: "Lead Geneticist",
    image:
      "https://images.unsplash.com/photo-1719042575585-e9d866f43210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2NjAzOTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Pioneering research in coral genetics and adaptive evolution in warming oceans.",
  },
  {
    name: "Dr. Kenji Tanaka",
    role: "Field Operations Director",
    image:
      "https://images.unsplash.com/photo-1763052413968-6d49d3e7f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Oversees restoration projects across Asia-Pacific with focus on community engagement.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
            Our Team
          </div>
          <h2 className="mb-4 text-gray-900">World-Class Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our interdisciplinary team brings together leading scientists and
            conservation professionals from around the globe.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
              <h3 className="mb-1 text-gray-900">{member.name}</h3>
              <div className="text-blue-600 mb-3">{member.role}</div>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-center mb-8 text-gray-900">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gray-900 mb-1">Prof. Elizabeth Hayes</div>
              <div className="text-gray-600">MIT Ocean Engineering</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">Dr. Mohamed Al-Rashid</div>
              <div className="text-gray-600">UN Environment Programme</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">Dr. Linda Yamamoto</div>
              <div className="text-gray-600">World Wildlife Fund</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
