import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import VideoSection from "./components/VideoSection/VideoSection";
import CardsSection from "./components/CardsSection/CardsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ValuesSection from "./components/ValuesSection/ValuesSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import Footer from "./components/Footer/Footer";

import "./assets/styles/_global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <VideoSection />
      <CardsSection />
      <TestimonialsSection />
      <ValuesSection />
      <ExploreSection />
      <Footer />
    </div>
  );
}

export default App;
