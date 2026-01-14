import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Methods from "./components/Methods";
import MethodNavbar from "./components/MethodNavbar";
import Mission from "./components/Mission";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MissionNavbar from "./components/MissionNavbar";
import Course from "./components/Course";
import Blogs from "./components/Blogs";

import About1 from "./components/cuts/About1";
import About2 from "./components/cuts/About2";
import PillarAbout from "./components/cuts/PillarAbout";
import About3 from "./components/cuts/About3";
import TimelineAbout from "./components/cuts/TimeAbout";

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
      </section>

      <section id="team" className="relative overflow-hidden mt-15 mb-15">
        <Team />
      </section>
      <section
        id="impact"
        className="min-h-screen bg-[#547792] flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
            <span className="text-xl">📘</span>
          </div>
          <div className="text-left">
            <p className="text-gray-900 font-semibold">
              Published "Flora & Fauna of Tagbak Marine Park"
            </p>
            <p className="text-gray-600 text-sm">
              The first comprehensive guide to the area's marine biodiversity
            </p>
          </div>
        </div>
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

const MissionPage = () => {
  return (
    <div className="min-h-screen">
      <MissionNavbar />
      <Mission />
    </div>
  );
};

const CoursePage = () => {
  return <Course />;
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
