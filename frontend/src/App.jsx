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
        <h2 className="text-4xl font-bold text-white">Impact Section</h2>
      </section>

      <section id="team">
        <Team />
      </section>
      <Footer />
    </div>
  );
}

export default App;
