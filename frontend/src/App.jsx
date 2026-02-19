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

import "./index.css";

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
      <DonateNavbar />
      <Donate />
    </>
  );
};

const MissionPage = () => {
  return (
    <>
      <MissionNavbar />
      <Mission />
    </>
  );
};

const CoursePage = () => {
  return <Course />;
};

const CoralRestorationPage = () => {
  return (
    <>
      <CoralRestorationNavbar />
      <CoralRestoration />
    </>
  );
};

const DataCollectionPage = () => {
  return (
    <>
      <DataCollectionNavbar />
      <DataCollection />;
    </>
  );
};

const DebriRemovalPage = () => {
  return (
    <>
      <DebriRemovalNavbar />
      <DebriRemoval />;
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
      <CotsMonitoringNavbar />
      <CotsResponse />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
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

          <Route path="/blogs" element={<AllBlogPage />} />
          <Route path="/blog/1" element={<FloraAndFaunaPage />} />
          <Route path="/blog/2" element={<MalitbogCoralres />} />
          <Route path="/blog/3" element={<DoubleActOfSogod />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
