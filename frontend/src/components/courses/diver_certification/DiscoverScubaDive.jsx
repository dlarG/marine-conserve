import React, { useMemo, useState } from "react";
import Navbar from "../../navbars/Navbar";
import Footer from "../../Footer";

const TabLink = ({ active, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer relative px-1 pb-4 text-sm md:text-base font-medium transition-colors ${
        active ? "text-teal-700" : "text-gray-500 hover:text-gray-800"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-[1px] h-[3px] rounded-full transition-all duration-300 ${
          active ? "w-full bg-teal-600" : "w-0 bg-transparent"
        }`}
      />
    </button>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="space-y-3 text-gray-700">
      {items.map((it, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
          <span className="leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
};

const CourseTile = ({ title, description, href }) => {
  return (
    <a
      href={href}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-extrabold text-gray-900 group-hover:text-teal-700 transition-colors">
            {title}
          </h4>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
        <span className="text-teal-700 font-semibold">→</span>
      </div>
    </a>
  );
};

const DiscoverScubaDive = () => {
  const tabs = useMemo(
    () => [
      { key: "skills", label: "Skills to Learn" },
      { key: "prereq", label: "Prerequisites" },
      { key: "inclusion", label: "What's Included" },
      { key: "fees", label: "Tuition Fees" },
      { key: "not_included", label: "Not Included" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("skills");

  // NEW: content model for the two-column layout
  const tabModel = useMemo(() => {
    const baseDescription =
      "Discover Scuba Diving (DSD) is a beginner-friendly, non-certification experience that allows you to try scuba diving under the direct supervision of an instructor. Typically lasting a few hours to a full day, it includes a safety briefing, shallow water skills practice, and a guided, shallow open-water dive to experience breathing underwater.";

    return {
      skills: {
        leftTitle: "Scuba Diving Basics",
        leftText: baseDescription,
        rightTitle: "Skills to Learn",
        rightItems: [
          "Basic scuba equipment introduction and setup",
          "Pre-dive safety check & buddy procedures",
          "Breathing underwater and regulator clearing",
          "Buoyancy basics and underwater positioning",
          "Equalization techniques",
          "Basic mask skills (clear & recover)",
          "Hand signals and underwater communication",
          "Safe entries/exits and shallow-water confidence building",
        ],
      },
      prereq: {
        leftTitle: "Requirements",
        leftText:
          "Before joining, make sure you're comfortable in the water and meet the minimum requirements. If you have any medical concerns, we recommend a clearance prior to participation.",
        rightTitle: "Prerequisites",
        rightItems: [
          "Comfortable in water (no advanced swimming needed)",
          "Willingness to learn and follow instructor guidance",
          "Minimum age requirement (set your policy)",
          "Completed medical questionnaire / clearance if required",
        ],
      },
      inclusion: {
        leftTitle: "What's Included",
        leftText:
          "We provide the instruction and equipment needed for your introductory session so you can focus on learning and enjoying the experience.",
        rightTitle: "Included",
        rightItems: [
          "Instructor-led briefing & guidance",
          "Use of scuba gear during the session (BCD, regulator, tank, weights)",
          "Basic skills practice and safety orientation",
          "Assistance throughout the session",
          "Guided shallow-water dive experience",
          "Photos of your dive (optional add-on)",
          "Certificate of participation",
        ],
      },
      fees: {
        leftTitle: "Pricing",
        leftText:
          "Pricing depends on group size, schedule, and any add-ons. Replace the placeholders with your official rates and we can format them into a proper price table.",
        rightTitle: "Tuition Fees",
        rightItems: [
          "Intro Session: ₱3,000.00 (set your price)",
          "Add-ons: ₱5,600.00 (photos, additional time, private session)",
          "Group discounts: optional",
          "Reservation policy: optional",
        ],
      },
      not_included: {
        leftTitle: "Not Included",
        leftText:
          "To avoid surprises, these common items are usually not covered unless you specify otherwise.",
        rightTitle: "Not Included",
        rightItems: [
          "Transportation to/from the dive site",
          "Meals and personal expenses",
          "Personal swimwear, towels, and sun protection",
          "Medical clearance fees (if applicable)",
        ],
      },
    };
  }, []);

  const active = tabModel[activeTab];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-white" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775547474/pexels-aydenzaki-8029908_gdieio.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm">
              Diver Certification Path
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Discover Scuba Diving
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
              Try scuba for the first time with a guided intro experience. Learn
              the basics, build confidence, and explore underwater in a safe,
              supportive environment.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#details"
                className="px-5 py-2.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
              >
                View details
              </a>
              <a
                href="#dates"
                className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/15 transition-colors"
              >
                Course dates
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* DETAILS WITH TABS */}
      <section
        id="details"
        className="bg-gradient-to-b from-white to-teal-50/60"
      >
        <div className="max-w-7xl mx-auto px-4 py-14">
          {/* Top tabs bar + Apply button */}
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-8 border-b border-gray-200 w-full md:w-auto">
              {tabs.map((t) => (
                <TabLink
                  key={t.key}
                  active={activeTab === t.key}
                  onClick={() => setActiveTab(t.key)}
                >
                  {t.label}
                </TabLink>
              ))}
            </div>

            <button
              type="button"
              onClick={() => (window.location.href = "/contact")}
              className="ml-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-green-600 text-white font-extrabold tracking-wide shadow hover:shadow-lg transition-all"
            >
              APPLY NOW
            </button>
          </div>

          {/* Two-column content (like inspiration) */}
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            {/* Left description */}
            <div className="text-gray-700 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-light text-gray-700">
                {active?.leftTitle}
              </h3>
              <p className="mt-6 text-base md:text-lg text-gray-600">
                {active?.leftText}
              </p>

              <a
                href="#dates"
                className="inline-flex mt-10 px-6 py-3 rounded-xl border-2 border-teal-600 text-teal-700 font-bold hover:bg-teal-600 hover:text-white transition-colors"
              >
                VIEW COURSE DATES
              </a>
            </div>

            {/* Right bullets */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-700">
                {active?.rightTitle}
              </h3>
              <div className="mt-6">
                <BulletList items={active?.rightItems || []} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE DATES */}
      <section id="dates" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Course Dates
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            We offer regular Discover Scuba Diving sessions throughout the year.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                from: "February 1st",
                to: "March 1st",
                time: "Saturdays • 9:00 AM – 12:00 PM",
                slots: "8 slots",
              },
              {
                from: "March 10th",
                to: "April 10th",
                time: "Tuesdays • 1:00 PM – 4:00 PM",
                slots: "6 slots",
              },
              {
                from: "April 20th",
                to: "May 20th",
                time: "Sundays • 9:00 AM – 12:00 PM",
                slots: "10 slots",
              },
              {
                from: "June 20th",
                to: "July 20th",
                time: "Sundays • 9:00 AM – 12:00 PM",
                slots: "10 slots",
              },
              {
                from: "August 20th",
                to: "September 20th",
                time: "Sundays • 9:00 AM – 12:00 PM",
                slots: "10 slots",
              },
            ].map((d, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-gradient-to-b from-green-50 to-green-50"
              >
                <div className="text-sm text-gray-500">Date Range</div>
                <div className="mt-1 text-xl font-extrabold text-gray-900">
                  {d.from} – {d.to}
                </div>

                <div className="mt-3 text-sm text-gray-600">{d.time}</div>
                <div className="mt-2 text-sm text-gray-600">{d.slots}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL COURSES */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Additional Courses
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Continue your diver journey with the next certification steps.
              </p>
            </div>
            <a
              href="/courses"
              className="text-teal-700 font-semibold hover:text-teal-800"
            >
              See all courses →
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Open Water Diver",
                description:
                  "Get certified to dive and learn core skills for independent diving with a buddy.",
                href: "/courses/openwater-diver",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549211/pexels-domingo-dias-260502921-12678039_uygdph.jpg",
              },
              {
                title: "Advanced Open Water Diver",
                description:
                  "Build confidence, refine skills, and try different adventure dives.",
                href: "/courses/advanced-openwater-diver",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549270/pexels-diego-sandoval-3158170-4767068_ccrfv9.jpg",
              },
              {
                title: "Rescue Diver",
                description:
                  "Learn to prevent and manage problems in the water and become a stronger buddy.",
                href: "/courses/rescue-diver",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549361/pexels-cannontaler-20481590_yck89a.jpg",
              },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-sm hover:shadow-md transition-all min-h-[230px]"
              >
                {/* Background image */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

                {/* Text content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-extrabold text-white">
                      {c.title}
                    </h4>
                    <span className="text-white/90 font-semibold">→</span>
                  </div>
                  <p className="mt-2 text-sm text-white/85">{c.description}</p>

                  <span className="mt-4 inline-flex w-fit px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold tracking-wide">
                    View course
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiscoverScubaDive;
