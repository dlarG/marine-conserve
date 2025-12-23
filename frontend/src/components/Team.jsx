const teamMembers = [
  {
    name: "Jerome Jack Napala",
    role: "Green Inc. CEO, Marine Biologist, and PADI Divemaster",
    image:
      "https://images.unsplash.com/photo-1733413931571-1b1f7a4785f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwY29yYWx8ZW58MXx8fHwxNzY2MTE1Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Jerome started the nursery almost ten years ago after witnessing how his childhood reefs had begun to show signs of stress. He started with a couple of plastic bottles, ropes, and the will to succeed.",
  },
  {
    name: "Christian Polo",
    role: "Coral Jardinero and PADI Divemaster",
    image:
      "https://images.unsplash.com/photo-1651065223932-284c48b49cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsfGVufDF8fHx8MTc2NjExNTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Christian has been a trusted helper and coral nurse for several years. He is a scuba divemaster and spends his days diving on the beautiful reefs in Sogod Bay. He is also the first to jump in the waters, whether for a debris dive or to manage COTs.",
  },
  {
    name: "Jollibee Looc",
    role: "Marine Biologist, Coral Jardinera and PADI AOW Diver",
    image:
      "https://images.unsplash.com/photo-1719042575585-e9d866f43210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2NjAzOTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Born in Agusan del Sur, surrounded by rivers and fresh water, Jobs did not have much experience with the open ocean growing up. She still became a marine biologist with a PADI Advanced Open Water certificate, and her time working with GREEN, Inc. has helped her build her career. She now works in the aquarium industry, and despite the criticisms of that industry, she hopes it can teach people about the importance of ocean conservation.",
  },
  {
    name: "Nova Almine",
    role: "Marine Biologist, Coral Jardinera, PADI AOW, and a social science convert",
    image:
      "https://images.unsplash.com/photo-1763052413968-6d49d3e7f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Nova joined GREEN, Inc. while doing her undergrad in marine biology. Growing up in Southern Leyte, she became deeply passionate about the ocean and realised the many issues surrounding this complex ecosystem, in water as well. as above. She continues to study marine life and the coastal communities that depend on these crucial marine ecosystems. ",
  },
  {
    name: "Charlotte Henriksen",
    role: "Marine Biologist, Office Runner, and PADI Rescuer",
    image:
      "https://images.unsplash.com/photo-1763052413968-6d49d3e7f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Growing up surrounded by seas and spending most of her childhood in or on water, she always knew the ocean as her home. Charlotte has a degree in Tropical Marine Biology and has, over the years, been volunteering and working on the reefs in Sogod Bay. She has fallen madly in love with the reefs and continues to return whenever an opportunity arises. On land, she is the practical assistant, focusing on the administrative tasks at GREEN Inc.",
  },
  {
    name: "Jesse Lou Tinapay",
    role: "Liaison Officer",
    image:
      "https://images.unsplash.com/photo-1601588400000-5b5c5c5c5c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Jesse is the former Liaison Officer of Coral Cay Conservation and an experienced PADI Open Water Scuba Instructor with more than 3000 completed dives and counting. He is a certified NUDI geek and has been diving the reefs of Sogod Bay enough to know all the cracks and crevices like his own pocket. He will know where to find whichever marine organism you want to encounter. ",
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
              <div className="text-gray-900 mb-1">Prof. Elizabeth</div>
              <div className="text-gray-600">Role 1</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">Dr. Mohamed</div>
              <div className="text-gray-600">Role 2</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">Dr. Linda</div>
              <div className="text-gray-600">Role 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
