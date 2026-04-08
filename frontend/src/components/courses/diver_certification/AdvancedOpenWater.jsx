import React, { useMemo, useState } from "react";
import Navbar from "../../navbars/Navbar";
import Footer from "../../Footer";
import ApplyNowModal from "./ApplyNowModal";

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

const AdvancedOpenWater = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const dateRanges = useMemo(
    () => [
      {
        from: "February 5th",
        to: "March 5th",
        time: "Weekends • 9:00 AM – 12:00 PM",
        slots: "8 slots",
      },
      {
        from: "March 15th",
        to: "April 15th",
        time: "Tuesdays • 1:00 PM – 4:00 PM",
        slots: "6 slots",
      },
      {
        from: "May 1st",
        to: "June 1st",
        time: "Sundays • 9:00 AM – 12:00 PM",
        slots: "10 slots",
      },
    ],
    []
  );

  const dateOptions = useMemo(
    () =>
      dateRanges.map((d) => ({
        value: `${d.from} - ${d.to}`,
        label: `${d.from} - ${d.to} (${d.time})`,
      })),
    [dateRanges]
  );

  const tabs = useMemo(
    () => [
      { key: "skills", label: "Skills to Learn" },
      { key: "prereq", label: "Prerequisites" },
      { key: "inclusion", label: "What's Included" },
      { key: "fees", label: "Tuition Fees" },
      { key: "not_included", label: "Not Included" },
      { key: "certificate", label: "Certificate" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("skills");

  const tabModel = useMemo(() => {
    const baseDescription =
      "The PADI Advanced Open Water Diver course helps you build confidence and expand your dive skills through a series of Adventure Dives. You’ll improve your navigation, get deeper-dive experience, and spend more time diving under instructor guidance.";

    return {
      skills: {
        leftTitle: "Advanced Open Water Overview",
        leftText: baseDescription,
        rightTitle: "Skills to Learn",
        rightItems: [
          "Advanced buoyancy and trim refinement",
          "Underwater navigation (compass + natural navigation)",
          "Deep diving procedures and safety planning",
          "Dive planning with depth/time awareness",
          "Situational awareness and buddy teamwork",
          "Exposure to specialty-style adventure dives (varies by schedule)",
        ],
      },
      prereq: {
        leftTitle: "Requirements",
        leftText:
          "To enroll, you should already be a certified Open Water Diver (or equivalent). If you have any medical concerns, we recommend a clearance prior to participation.",
        rightTitle: "Prerequisites",
        rightItems: [
          "Open Water Diver certification (or equivalent)",
          "Minimum age requirement (set your policy)",
          "Completed medical questionnaire / clearance if required",
          "Comfortable diving in open water conditions",
        ],
      },
      inclusion: {
        leftTitle: "What's Included",
        leftText:
          "We provide instructor guidance and training structure. Package inclusions can vary depending on logistics and dive site requirements.",
        rightTitle: "Included",
        rightItems: [
          "Certified instructor-led training",
          "Knowledge development & briefings",
          "Adventure dive sessions (number depends on your program)",
          "Assessment and skill coaching",
          "Logbook guidance and performance feedback",
        ],
      },
      fees: {
        leftTitle: "Pricing",
        leftText:
          "Pricing depends on group size, schedule, and gear/rental needs. Replace the placeholders with your official rates.",
        rightTitle: "Tuition Fees",
        rightItems: [
          "Course Package: ₱—.— (set your price)",
          "Equipment rental: optional",
          "Boat/park fees: may apply depending on dive sites",
          "Reservation policy: optional",
        ],
      },
      not_included: {
        leftTitle: "Not Included",
        leftText:
          "Common items that may not be included unless specified in your package.",
        rightTitle: "Not Included",
        rightItems: [
          "Transportation to/from the dive site",
          "Meals and personal expenses",
          "Personal swimwear, towels, and sun protection",
          "Medical clearance fees (if applicable)",
        ],
      },
      certificate: {
        leftTitle: "Certification Preview",
        leftText:
          "After successful completion, you’ll receive your Advanced Open Water Diver certification (or the appropriate completion record, depending on your training agency and processing).",
        rightTitle: "Certificate Preview",
        rightImage: {
          src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
          alt: "Certificate preview (placeholder image)",
        },
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
              "url(https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549270/pexels-diego-sandoval-3158170-4767068_ccrfv9.jpg)",
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
              PADI Advanced Open Water Diver
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
              Build confidence, refine your diving skills, and explore new
              experiences through instructor-guided adventure dives.
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="w-full overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex items-center gap-4 md:gap-8 border-b border-gray-200 min-w-max">
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
            </div>

            <button
              type="button"
              onClick={() => setIsApplyOpen(true)}
              className="cursor-pointer w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-green-600 text-white hover:shadow-lg transition-all whitespace-nowrap"
            >
              APPLY NOW
            </button>
          </div>

          {activeTab === "certificate" && active?.rightImage?.src ? (
            <div className="mt-10">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-700">
                    {active?.leftTitle || "Certificate Preview"}
                  </h3>
                  <p className="mt-3 text-gray-600 max-w-3xl">
                    {active?.leftText}
                  </p>
                </div>

                <a
                  href="#dates"
                  className="inline-flex px-6 py-3 rounded-xl border-2 border-teal-600 text-teal-700 font-bold hover:bg-teal-600 hover:text-white transition-colors"
                >
                  VIEW COURSE DATES
                </a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img
                  src={active.rightImage.src}
                  alt={active.rightImage.alt || "Certificate image"}
                  className="w-full h-auto max-h-[720px] object-contain bg-white select-none"
                  loading="lazy"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          ) : (
            <div className="mt-10 grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
              <div className="text-gray-700 leading-relaxed">
                <h3 className="text-xl md:text-3xl font-light text-gray-700">
                  {active?.leftTitle}
                </h3>
                <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-600">
                  {active?.leftText}
                </p>

                <a
                  href="#dates"
                  className="inline-flex mt-8 md:mt-10 px-6 py-3 rounded-xl border-2 border-teal-600 text-teal-700 font-bold hover:bg-teal-600 hover:text-white transition-colors text-sm md:text-base"
                >
                  VIEW COURSE DATES
                </a>
              </div>

              <div>
                <h3 className="text-xl md:text-3xl font-light text-gray-700">
                  {active?.rightTitle}
                </h3>
                <div className="mt-4 md:mt-6">
                  <BulletList items={active?.rightItems || []} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DATES */}
      <section id="dates" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Course Dates
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Upcoming Advanced Open Water schedules.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {dateRanges.map((d, idx) => (
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

      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Continue Your Journey
              </h2>
              <p className="text-lg text-gray-600">
                Ready for more? Take the next step with our certification
                courses.
              </p>
            </div>
            <a
              href="/courses"
              className="text-teal-700 font-semibold hover:text-teal-800 inline-flex items-center gap-2 group"
            >
              View All Courses
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Open Water Diver",
                description:
                  "Your first step into the underwater world. Learn the basics and get certified to dive anywhere in the world.",
                href: "/courses/open-water",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549211/pexels-domingo-dias-260502921-12678039_uygdph.jpg",
                level: "Previous Course",
              },
              {
                title: "Rescue Diver",
                description:
                  "Learn to prevent and manage problems in the water and become a stronger buddy.",
                href: "/courses/rescue-diver",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1775549361/pexels-cannontaler-20481590_yck89a.jpg",
                level: "Next Course",
              },
              {
                title: "Divemaster",
                description:
                  "Take the plunge into leadership and dive theory. Become a dive professional.",
                href: "/courses/divemaster",
                image:
                  "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771396227/pexels-leonardo-lamas-32247393-7001658_jez7o0.jpg",
                level: "Advanced",
              },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group relative h-[400px] rounded-3xl overflow-hidden"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                    {c.level}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/80 mb-4">{c.description}</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ApplyNowModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        courseKey="advanced-open-water"
        courseTitle="PADI Advanced Open Water Diver"
        dateOptions={dateOptions}
        apiBaseUrl="http://localhost:5000"
      />
    </div>
  );
};

export default AdvancedOpenWater;
