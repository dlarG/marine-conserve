const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          Our Mission
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-gray-900 text-xl">
              Advancing Marine Conservation Through Science
            </h2>
            <p className="text-gray-600 mb-4">
              The Coral Institute is a leading non-profit research organization
              dedicated to understanding and protecting the world's coral reefs
              and marine ecosystems. Founded in 2010, we combine cutting-edge
              science with community engagement to create lasting impact.
            </p>
            <p className="text-gray-600 mb-6">
              Our interdisciplinary team of marine biologists, ecologists, and
              conservation experts works globally to develop innovative
              solutions for reef restoration, study climate change impacts, and
              build sustainable marine management practices.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-blue-600 mb-1">2010</div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">45+</div>
                <div className="text-gray-700">Countries</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">200+</div>
                <div className="text-gray-700">Publications</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* <ImageWithFallback
              src="https://images.unsplash.com/photo-1763052413968-6d49d3e7f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Marine conservation research"
              className="w-full h-full object-cover"
            /> */}
            <img src="images/PB110211.JPG" alt="Coral Image" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          {/* Text Content */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* <ImageWithFallback
              src="https://images.unsplash.com/photo-1763052413968-6d49d3e7f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NjYxMTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Marine conservation research"
              className="w-full h-full object-cover"
            /> */}
            <img src="images/123.JPG" alt="Coral Image" />
          </div>
          <div>
            <h2 className="mb-6 text-gray-900 text-xl">
              Advancing Marine Conservation Through Science
            </h2>
            <p className="text-gray-600 mb-4">
              The Coral Institute is a leading non-profit research organization
              dedicated to understanding and protecting the world's coral reefs
              and marine ecosystems. Founded in 2010, we combine cutting-edge
              science with community engagement to create lasting impact.
            </p>
            <p className="text-gray-600 mb-6">
              Our interdisciplinary team of marine biologists, ecologists, and
              conservation experts works globally to develop innovative
              solutions for reef restoration, study climate change impacts, and
              build sustainable marine management practices.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-blue-600 mb-1">2010</div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">45+</div>
                <div className="text-gray-700">Countries</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">200+</div>
                <div className="text-gray-700">Publications</div>
              </div>
            </div>
          </div>

          {/* Image */}
        </div>
      </div>
    </section>
  );
};

export default About;
