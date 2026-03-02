import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PathFlow from './components/PathFlow';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <main className="relative z-10 px-4 sm:px-6">
        <Navbar />
        <Hero />

        <div className="mx-auto mb-10 flex w-full max-w-6xl flex-col gap-6 sm:gap-8">
          <About />
          <PathFlow />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Achievements />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
