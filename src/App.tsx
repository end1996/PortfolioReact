import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import AnimatedSection from "./components/AnimatedSection";
import { Summary } from "./components/Summary";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.className =
      theme === "light" ? "bg-dark text-white" : "bg-light text-dark";
  };

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <AnimatedSection
        id="home"
        className="vh-100 d-flex flex-column align-items-center justify-content-center text-center"
        preset="fade-in"
        duration={0.8}
        trigger="onLoad"
      >
        <Profile theme={theme} />
      </AnimatedSection>

      <AnimatedSection id="about" className="py-5" preset="slide-left">
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection
        className="py-5"
        preset="slide-up"
        delay={0.2}
      >
        <Stack />
      </AnimatedSection>

      <AnimatedSection id="summary" preset="slide-up" className="py-5">
        <Summary theme={theme}/>
      </AnimatedSection>

      <AnimatedSection id="portfolio" className="py-5" preset="zoom-in" duration={0.6}>
        <Portfolio theme={theme}/>
      </AnimatedSection>

      <AnimatedSection
        id="contact"
        className="py-5"
        preset="slide-up"
        delay={0.2}
      >
        <Contact />
      </AnimatedSection>

      <footer className="text-center py-4 bg-dark text-white w-100">
        <p>&copy; 2025 Enmanuel Nava. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
