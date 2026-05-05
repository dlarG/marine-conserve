import React, { useEffect } from "react";

const MissionHero = ({
  title = "Mission and Vision",
  subtitle = "Our mission is to empower coastal communities to become stewards of their local marine environments, fostering a sustainable future for our oceans. We envision a world where thriving marine ecosystems support biodiversity, sustain livelihoods, and inspire a deep connection between people and the sea.",
  backgroundVideoUrl = "https://res.cloudinary.com/dfsxmtyxk/video/upload/v1774835958/17801323-uhd_3840_2160_25fps_g24uwd.mp4",
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <header className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex mt-25">
        <div className="max-w-2xl">
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#mission-content"
              className="px-5 py-2.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
            >
              Learn more
            </a>
            <a
              href="/donate"
              className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/15 transition-colors"
            >
              Support our work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MissionHero;
