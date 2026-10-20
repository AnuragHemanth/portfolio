import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DSAPlayground from "./components/DSAPlayground";
import BackendSystems from "./components/BackendSystems";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f5f5]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DSAPlayground />
        <BackendSystems />
        <Projects />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
