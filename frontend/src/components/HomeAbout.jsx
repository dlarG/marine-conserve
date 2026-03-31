const HomeAbout = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#2c6e3f]">GREEN, Inc.</span>{" "}
              (Grassroots Responsiveness thru Education on Environmental Needs,
              Incorporated) was formally established in{" "}
              <span className="font-semibold">2013</span> by{" "}
              <span className="font-semibold">Jerome Jack Napala</span>,
              alongside like-minded individuals passionate about marine
              conservation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Before founding GREEN, Inc., Mr. Napala was a simple government
              employee with a deep appreciation for the marine environment. His
              life took a major turn when he was awarded a marine conservation
              scholarship with{" "}
              <span className="font-semibold text-[#2c6e3f]">
                Coral Cay Conservation
              </span>
              , where he earned his early dive certification and gained
              firsthand understanding of the critical importance of healthy
              marine ecosystems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This experience profoundly influenced his decision to pursue a
              career in marine biology and eventually become a{" "}
              <span className="font-semibold text-[#2c6e3f]">
                PADI Open Water Scuba Instructor
              </span>
              , combining his scientific knowledge with hands-on diving
              expertise.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#4c9a6c]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Marine Conservation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#4c9a6c]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Community Engagement
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#4c9a6c]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Science-Based Initiatives
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771387710/P6140239_d37zrt.jpg"
                alt="Coral reef conservation"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384334/P1280001_j9rsit.jpg"
                alt="Diving education"
                className="rounded-2xl shadow-lg w-full h-40 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384415/P3290154_g7mysv.jpg"
                alt="Marine research"
                className="rounded-2xl shadow-lg w-full h-40 object-cover"
              />
              <img
                src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384300/P9160010_qt0fkc.jpg"
                alt="Community engagement"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
