import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Clock, Users, Star, ArrowLeft } from "lucide-react";
const ScientificDataColl = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Scientific Data Collection | GREEN Inc. Volunteer";
  }, []);

  const programData = {
    title: "Scientific Data Collection",
    subtitle: "Scientific Discovery",
    tagline:
      "Master ecological data gathering, learn to identify key fish species and substrate types, contributing to long-term datasets.",
    heroImage:
      "https://res.cloudinary.com/dfsxmtyxk/image/upload/v1777342895/DSCF5597_lmehg1.jpg",
    fullDescription: [
      "Sound conservation decisions require sound data. Our Scientific Data Collection program trains you in the methods and techniques used by marine biologists to assess reef health and track ecosystem changes over time.",
      "You'll learn to identify key indicator species, conduct photo quadrats, and record substrate composition—skills that form the backbone of professional reef monitoring programs worldwide.",
      "The data you collect becomes part of long-term datasets that help us understand how Sogod Bay's reefs are responding to both threats and conservation interventions. This is citizen science at its most impactful.",
    ],
    activities: [
      "Conduct fish population surveys and species identification",
      "Learn photo quadrat and video transect methods",
      "Record substrate composition and coral cover data",
      "Monitor water quality parameters",
      "Enter and manage ecological data in databases",
      "Assist in data analysis and report preparation",
      "Participate in long-term monitoring transects",
      "Learn scientific diving protocols and techniques",
    ],
    duration: "Flexible (1–24+ weeks)",
    bestFor: "Science-minded divers and researchers",
    level: "Intermediate to Advanced",
    pricing: {
      amount: "From ₱25,000/week",
      note: "Long-term discounts available",
    },
    inclusions: [
      "Comprehensive training in reef monitoring methods",
      "Introduction to coral reef data collection techniques",
      "Regular survey and monitoring dives",
      "30-40 training and survey dives per month (weather permitting)",
      "Complete scuba gear rental (BCD and Regulator)",
      "Free use of snorkeling gear when off-duty",
      "Tuition and lectures on marine science",
      "All marine park fees",
      "Support and supervision from experienced instructors",
      "Shared accommodation",
      "All meals, water, tea, and coffee",
      "GREEN, Inc. T-shirt",
    ],
    outcomes: [
      "Practical skills in scientific data collection",
      "Understanding of reef monitoring methodology",
      "Experience with photo quadrats and fish surveys",
      "Knowledge of data management and analysis",
      "Certificate of participation/completion (based on duration)",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={programData.heroImage}
            alt={programData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <button
            onClick={() => navigate("/volunteer")}
            className="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Programs</span>
          </button>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 backdrop-blur-sm text-teal-200 text-sm font-medium mb-4">
              {programData.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {programData.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              {programData.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About This Program
              </h2>
              <div className="space-y-4 text-gray-600">
                {programData.fullDescription.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What You'll Do
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {programData.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all"
                    >
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Program Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">
                        {programData.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="text-sm text-gray-500">Best For</p>
                      <p className="font-semibold text-gray-800">
                        {programData.bestFor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="text-sm text-gray-500">Level</p>
                      <p className="font-semibold text-gray-800">
                        {programData.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-green-600 p-6 text-white shadow-lg">
                <h4 className="text-lg font-bold mb-2">Program Fee</h4>
                <p className="text-3xl font-bold mb-4">
                  {programData.pricing.amount}
                </p>
                <p className="text-teal-100 text-sm mb-6">
                  {programData.pricing.note}
                </p>
                <button className="w-full py-3 rounded-xl bg-white text-teal-700 font-bold hover:shadow-xl transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-teal-600" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {programData.inclusions.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-teal-600" />
                Outcomes & Certification
              </h3>
              <ul className="space-y-3">
                {programData.outcomes.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extensions & Discounts */}
      <section className="py-16 bg-teal-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Project Extensions & Special Discounts
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We find that most of our volunteers find it hard to leave! While the
            average stay is 4 weeks, we offer flexible extensions and
            progressive rewards.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { weeks: "Weeks 1 – 6", price: "₱25,000.00", period: "/ week" },
              {
                weeks: "Weeks 7 – 12",
                price: "₱20,000.00",
                period: "/ week",
                discount: "20% discount",
                popular: true,
              },
              {
                weeks: "Weeks 13 – 24",
                price: "₱15,000.00",
                period: "/ week",
                discount: "40% discount",
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 text-center border-2 ${
                  tier.popular
                    ? "border-teal-500 bg-white shadow-lg relative"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-teal-600 text-white text-xs rounded-full font-semibold">
                    MOST POPULAR
                  </span>
                )}
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  {tier.weeks}
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {tier.price}
                </p>
                <p className="text-gray-500 text-sm">{tier.period}</p>
                {tier.discount && (
                  <p className="mt-3 text-teal-600 font-semibold text-sm">
                    {tier.discount}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <span className="text-amber-600 text-xl">🎉</span>
              <div>
                <p className="font-semibold text-gray-800">
                  The "Half-Year" Bonus
                </p>
                <p className="text-gray-600 text-sm">
                  Stay for 24 weeks, and your final four weeks are completely
                  free.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-teal-50 border border-teal-200">
              <span className="text-teal-600 text-xl">⭐</span>
              <div>
                <p className="font-semibold text-gray-800">Returning Heroes</p>
                <p className="text-gray-600 text-sm">
                  All former volunteers receive an automatic 20% discount on
                  their return stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Unique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What Makes This Unique
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Real conservation, not just experience tourism",
                "Focus on maintenance and monitoring, not one-day activities",
                "Opportunity to work in Sogod Bay's diverse reef systems",
                "Learn from active, evolving restoration methods",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 rounded-xl bg-teal-50 border border-teal-100"
                >
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">General Notes</h4>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-gray-600">
                  <span className="text-teal-600">•</span> Programs are designed
                  to be hands-on and field-based
                </li>
                <li className="flex gap-2 text-sm text-gray-600">
                  <span className="text-teal-600">•</span> Majority of
                  activities involve actual diving and site work
                </li>
                <li className="flex gap-2 text-sm text-gray-600">
                  <span className="text-teal-600">•</span> Flexibility depending
                  on weather and sea conditions
                </li>
                <li className="flex gap-2 text-sm text-gray-600">
                  <span className="text-teal-600">•</span> Volunteers contribute
                  directly to ongoing conservation efforts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Accommodation */}
      <section className="py-16 bg-teal-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Scuba Training & Certifications
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional instruction is included, but please note that PADI
                materials, manuals, and certification fees are paid separately.
                Further training is entirely optional unless you arrive as a
                non-diver.
              </p>
              <a
                href="https://divesupply.com.ph/assets/Documents/2025%20PADI%20price%20list%20ODS-AUG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-teal-600 font-semibold text-sm hover:text-teal-700"
              >
                View PADI Price List{" "}
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Accommodation Upgrades
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you prefer more privacy, we can arrange for private occupancy
                in nearby guest houses or small bungalows. These are subject to
                availability and provided at cost. Contact us directly and we
                will do our best to accommodate your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-green-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Mission?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Take the first step toward making a real difference in marine
            conservation.
          </p>
          <button className="px-10 py-4 rounded-xl bg-white text-teal-700 font-bold hover:shadow-2xl transition-all text-lg">
            Apply for This Program
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScientificDataColl;
