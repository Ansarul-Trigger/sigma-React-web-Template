import Header from "./components/Header";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Implementation from "./components/Implementation";
import Insights from "./components/Insights";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <UseCases />
        <Implementation />
        <Insights />
        <AboutUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
