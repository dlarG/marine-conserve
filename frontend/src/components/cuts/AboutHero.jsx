import React from "react";

const AboutHero = ({
  title = "What We Do",
  subtitle = "We at GREEN Inc. protect and restore marine ecosystems through community-led conservation, research, and education.",
  backgroundVideoUrl = "https://res.cloudinary.com/dfsxmtyxk/video/upload/v1774835249/5133347-hd_1920_1080_30fps_bysctr.mp4",
}) => {
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
      <div className="relative h-full max-w-7xl mx-auto px-4 flex mt-30">
        <div className="max-w-2xl">
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#about-content"
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

export default AboutHero;
