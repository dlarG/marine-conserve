import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import Mission from "./components/Mission";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      {/* 
      <section id="mission">
        <Mission />
      </section> */}

      <section id="about">
        <About />
      </section>

      <section
        id="research"
        className="min-h-screen bg-[#94B4C1] flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-white">Research Section</h2>
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

      <section id="team" className="relative overflow-hidden mt-15 mb-15">
        <Team />
      </section>
      <Footer />
    </div>
  );
}

export default App;
