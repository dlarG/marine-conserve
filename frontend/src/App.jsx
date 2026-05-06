import LittleLembeh from "./components/LittleLembeh";

import Navbar from "./components/navbars/Navbar";
import MissionNavbar from "./components/navbars/MissionNavbar";
import CoralRestorationNavbar from "./components/navbars/CoralRestorationNavbar";
import DebriRemovalNavbar from "./components/navbars/DebriRemovalNavbar";
import CotsMonitoringNavbar from "./components/navbars/CotsMonitoringNavbar";
import DataCollectionNavbar from "./components/navbars/DataCollectionNavbar";
import DonateNavbar from "./components/navbars/DonateNavbar";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Methods from "./components/Methods";
import Mission from "./components/Mission";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import AboutHero from "./components/cuts/AboutHero";
import BlogHero from "./components/blogs/BlogHero";
import TeamHero from "./components/team/TeamHero";
import ContactHero from "./components/contact/ContactHero";

import About1 from "./components/cuts/About1";
import About2 from "./components/cuts/About2";
import PillarAbout from "./components/cuts/PillarAbout";
import About3 from "./components/cuts/About3";
import TimelineAbout from "./components/cuts/TimeAbout";
import ContactPage from "./components/cuts/ContactPage";
import About4 from "./components/cuts/About4";

import CoralRestoration from "./components/projects/CoralRestoration";
import CotsResponse from "./components/projects/CotsResponse";
import DataCollection from "./components/projects/DataCollection";
import DebriRemoval from "./components/projects/DebriRemoval";

import Blogs from "./components/Blogs";
import AllBlogPost from "./components/blogs/AllBlogPost";
import FloraAndFauna from "./components/blogs/FloraAndFauna";
import MalitbogCoralres from "./components/blogs/MalitbogCoralres";
import DoubleActOfSogod from "./components/blogs/DoubleActOfSogod";

import Donate from "./components/Donate";

import CarouselEffect from "./components/CarouselEffect";
import HomeAbout from "./components/HomeAbout";
import "./index.css";
import { Contact } from "lucide-react";
import CtaHome from "./components/CtaHome";
import MissionHero from "./components/mission/MissionHero";
import { useState } from "react";

import DiscoverScubaDive from "./components/courses/diver_certification/DiscoverScubaDive";
import OpenWaterDiver from "./components/courses/diver_certification/OpenWaterDiver";
import AdvancedOpenWater from "./components/courses/diver_certification/AdvancedOpenWater";
import RescueDiver from "./components/courses/diver_certification/RescueDiver";
import Divemaster from "./components/courses/diver_certification/Divemaster";

import VolunteerHomepage from "./components/volunteer/VolunteerHomepage";
import CoralRestoration1 from "./components/volunteer/CoralRestoration1";
import DiveAgainstDebri from "./components/volunteer/DiveAgainstDebri";
import COTSMonitoring from "./components/volunteer/COTSMonitoring";
import ScientificDataColl from "./components/volunteer/ScientificDataColl";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="relative overflow-hidden">
        <About1 />
        <About2 />
        <PillarAbout />
        <About3 />
        <TimelineAbout />
      </section>

      <section id="blogs">
        <Blogs />
        <About4 />
      </section>

      <section id="team" className="relative overflow-hidden mt-15 mb-15">
        <Team />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

const HomePage2 = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
        <HomeAbout />
        <CtaHome />
      </section>
      <Footer />
    </div>
  );
};

const AboutPageSkeletonBody = () => {
  return (
    <div className="bg-white">
      {/* Section block 1 */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="h-8 w-72 bg-gray-200 rounded" />
        <div className="mt-6 space-y-3">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-11/12 bg-gray-100 rounded" />
          <div className="h-4 w-10/12 bg-gray-100 rounded" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="h-20 bg-gray-100 rounded-xl" />
          <div className="h-20 bg-gray-100 rounded-xl" />
          <div className="h-20 bg-gray-100 rounded-xl" />
        </div>
      </div>

      {/* Big image-like blocks to match About2/About3 */}
      <div className="w-full h-[60vh] bg-gray-100" />
      <div className="w-full h-[60vh] bg-gray-100" />

      {/* Pillars-ish placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-14 space-y-6">
        <div className="h-8 w-80 bg-gray-200 rounded mx-auto" />
        <div className="h-40 bg-gray-100 rounded-2xl" />
        <div className="h-40 bg-gray-100 rounded-2xl" />
        <div className="h-40 bg-gray-100 rounded-2xl" />
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [aboutHeroReady, setAboutHeroReady] = useState(false);

  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden">
        <AboutHero onReady={() => setAboutHeroReady(true)} />

        {aboutHeroReady ? (
          <>
            <About1 />
            <About2 />
            <PillarAbout />
            <About3 />
            <TimelineAbout />
            <Footer />
          </>
        ) : (
          <AboutPageSkeletonBody />
        )}
      </section>
    </div>
  );
};

const BlogPageSkeletonBody = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header blocks */}
        <div className="h-10 w-72 bg-gray-200 rounded mx-auto" />
        <div className="mt-6 space-y-3 max-w-2xl mx-auto">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-11/12 bg-gray-100 rounded" />
          <div className="h-4 w-9/12 bg-gray-100 rounded" />
        </div>

        {/* Featured cards */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <div className="h-64 bg-gray-100" />
            <div className="p-6 space-y-3">
              <div className="h-5 w-10/12 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-11/12 bg-gray-100 rounded" />
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-20 bg-gray-100 rounded-full" />
                <div className="h-6 w-24 bg-gray-100 rounded-full" />
                <div className="h-6 w-16 bg-gray-100 rounded-full" />
              </div>
              <div className="mt-6 h-10 w-36 bg-gray-100 rounded-lg" />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <div className="h-64 bg-gray-100" />
            <div className="p-6 space-y-3">
              <div className="h-5 w-9/12 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-10/12 bg-gray-100 rounded" />
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-20 bg-gray-100 rounded-full" />
                <div className="h-6 w-24 bg-gray-100 rounded-full" />
                <div className="h-6 w-16 bg-gray-100 rounded-full" />
              </div>
              <div className="mt-6 h-10 w-36 bg-gray-100 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Latest list */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-100" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-10/12 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="h-40 bg-gray-100" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-4/5 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-11/12 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [blogHeroReady, setBlogHeroReady] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <BlogHero onReady={() => setBlogHeroReady(true)} />

      {blogHeroReady ? (
        <section id="blog-content">
          <Blogs />
          <Footer />
        </section>
      ) : (
        <BlogPageSkeletonBody />
      )}
    </div>
  );
};

const TeamPageSkeletonBody = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title area */}
        <div className="text-center mb-16">
          <div className="h-9 w-52 bg-gray-100 rounded-full mx-auto mb-6" />
          <div className="h-10 w-72 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-4 w-[min(46rem,90%)] bg-gray-100 rounded mx-auto" />
          <div className="h-4 w-[min(42rem,85%)] bg-gray-100 rounded mx-auto mt-3" />
        </div>

        {/* Carousel cards skeleton (3 columns desktop) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
            >
              <div className="h-96 bg-gray-100" />
              <div className="p-6 space-y-3">
                <div className="h-6 w-2/3 bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
                <div className="h-4 w-4/6 bg-gray-100 rounded" />
                <div className="mt-4 flex gap-2">
                  <div className="h-6 w-20 bg-gray-100 rounded-full" />
                  <div className="h-6 w-24 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile list skeleton */}
        <div className="md:hidden space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
            >
              <div className="p-6 flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-3/5 bg-gray-100 rounded" />
                  <div className="h-4 w-4/5 bg-gray-100 rounded" />
                  <div className="h-4 w-3/5 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA skeleton */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gray-50 border border-gray-100 w-full max-w-2xl">
            <div className="h-8 w-52 bg-gray-200 rounded mx-auto" />
            <div className="mt-5 h-4 w-4/5 bg-gray-100 rounded mx-auto" />
            <div className="mt-3 h-4 w-3/5 bg-gray-100 rounded mx-auto" />
            <div className="mt-7 h-11 w-36 bg-gray-200 rounded-lg mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
const TeamPage = () => {
  const [teamHeroReady, setTeamHeroReady] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Navbar />

      <TeamHero onReady={() => setTeamHeroReady(true)} />

      {teamHeroReady ? (
        <section id="team-content" className="relative overflow-hidden">
          <Team />
          <Footer />
        </section>
      ) : (
        <TeamPageSkeletonBody />
      )}
    </div>
  );
};

const ContactPageSkeletonBody = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-8 w-40 bg-gray-200 rounded-full mx-auto mb-5" />
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-4 w-[min(46rem,90%)] bg-gray-100 rounded mx-auto" />
          <div className="h-4 w-[min(42rem,85%)] bg-gray-100 rounded mx-auto mt-3" />
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4" />
              <div className="h-5 w-2/3 bg-gray-100 rounded mb-3" />
              <div className="h-4 w-5/6 bg-gray-100 rounded mb-2" />
              <div className="h-4 w-2/3 bg-gray-100 rounded" />
            </div>
          ))}
        </div>

        {/* Form skeleton */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-14 bg-gray-200" />
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
                <div className="h-10 w-full bg-gray-100 rounded-lg" />
              </div>
              <div>
                <div className="h-4 w-28 bg-gray-100 rounded mb-2" />
                <div className="h-10 w-full bg-gray-100 rounded-lg" />
              </div>
            </div>

            <div>
              <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
              <div className="h-10 w-full bg-gray-100 rounded-lg" />
            </div>

            <div>
              <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
              <div className="h-28 w-full bg-gray-100 rounded-lg" />
            </div>

            <div className="h-12 w-full bg-gray-200 rounded-lg" />
          </div>
        </div>

        {/* Map skeleton */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-[50vh] bg-gray-100" />
        </div>

        {/* Footer line */}
        <div className="mt-10 text-center">
          <div className="h-4 w-[min(52rem,95%)] bg-gray-100 rounded mx-auto" />
        </div>
      </div>
    </div>
  );
};
const ContactPage2 = () => {
  const [contactHeroReady, setContactHeroReady] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <ContactHero onReady={() => setContactHeroReady(true)} />

      {contactHeroReady ? (
        <>
          <section id="contact-content">
            <ContactPage />
          </section>
          <Footer />
        </>
      ) : (
        <ContactPageSkeletonBody />
      )}
    </div>
  );
};

const MethodsPage = () => {
  return (
    <>
      <Navbar />
      <Methods />
    </>
  );
};

const DonatePage = () => {
  return (
    <>
      <Navbar />
      <Donate />
      <Footer />
    </>
  );
};

const MissionPage = () => {
  return (
    <>
      <Navbar />
      <MissionHero />
      <Mission />
      <Footer />
    </>
  );
};

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <Course />
      <Footer />
    </>
  );
};

const CoralRestorationPage = () => {
  return (
    <>
      <Navbar />
      <CoralRestoration />
      <Footer />
    </>
  );
};

const DataCollectionPage = () => {
  return (
    <>
      <Navbar />
      <DataCollection />;
      <Footer />
    </>
  );
};

const DebriRemovalPage = () => {
  return (
    <>
      <Navbar />
      <DebriRemoval />;
      <Footer />
    </>
  );
};

const FloraAndFaunaPage = () => {
  return <FloraAndFauna />;
};

const AllBlogPage = () => {
  return <AllBlogPost />;
};

const CotsResponsePage = () => {
  return (
    <>
      <Navbar />
      <CotsResponse />
      <Footer />
    </>
  );
};

const VolunteerPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section id="volunteer-hero">
          <VolunteerHomepage />
        </section>
        <Footer />
      </div>
    </>
  );
};

const CoralResVolunteerPage = () => {
  return (
    <>
      <Navbar />
      <CoralRestoration1 />
      <Footer />
    </>
  );
};

const DiveAgainstDebriVolunteerPage = () => {
  return (
    <>
      <Navbar />
      <DiveAgainstDebri />
      <Footer />
    </>
  );
};

const COTSMonitoringVolunteerPage = () => {
  return (
    <>
      <Navbar />
      <COTSMonitoring />
      <Footer />
    </>
  );
};

const SciDataCollectionVolunteerPage = () => {
  return (
    <>
      <Navbar />
      <ScientificDataColl />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/home" element={<LittleLembeh />} />
          <Route path="/" element={<HomePage2 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methods" element={<MethodsPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route
            path="/projects/coral-restoration"
            element={<CoralRestorationPage />}
          />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/carousel" element={<CarouselEffect />} />
          <Route
            path="/projects/cots-monitoring"
            element={<CotsResponsePage />}
          />
          <Route
            path="/projects/data-collection"
            element={<DataCollectionPage />}
          />
          <Route
            path="/projects/debris-removal"
            element={<DebriRemovalPage />}
          />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogs" element={<AllBlogPage />} />
          <Route path="/blog/1" element={<FloraAndFaunaPage />} />
          <Route path="/blog/2" element={<MalitbogCoralres />} />
          <Route path="/blog/3" element={<DoubleActOfSogod />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage2 />} />

          <Route
            path="/courses/discover-scuba"
            element={<DiscoverScubaDive />}
          />
          <Route path="/courses/open-water" element={<OpenWaterDiver />} />
          <Route
            path="/courses/advanced-open-water"
            element={<AdvancedOpenWater />}
          />
          <Route path="/courses/rescue-diver" element={<RescueDiver />} />
          <Route path="/courses/divemaster" element={<Divemaster />} />

          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route
            path="/volunteer/coral-restoration"
            element={<CoralResVolunteerPage />}
          />
          <Route
            path="/volunteer/dive-against-debris"
            element={<DiveAgainstDebriVolunteerPage />}
          />
          <Route
            path="/volunteer/cots-monitoring"
            element={<COTSMonitoringVolunteerPage />}
          />
          <Route
            path="/volunteer/scientific-data-collection"
            element={<SciDataCollectionVolunteerPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
