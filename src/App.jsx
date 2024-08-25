import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import IphoneModel from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <IphoneModel />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
