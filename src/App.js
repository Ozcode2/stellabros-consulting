import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Define refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to a specific section
  const scrollToSection = (section) => {
    if (section === "home")
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <Header scrollToSection={scrollToSection} />
        {/* Use refs on sections to scroll into view */}
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={contactRef} id="about">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
