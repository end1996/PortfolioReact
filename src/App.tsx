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

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.className = theme === "light" ? "bg-dark text-white" : "bg-light text-dark";
  };

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <AnimatedSection
        id="home"
        className="vh-100 d-flex flex-column align-items-center justify-content-center text-center"
        preset="slide-up"
        duration={0.8}
        trigger="onLoad"
      >
        <Profile theme={theme} />
      </AnimatedSection>

      <AnimatedSection
        id="about"
        className="p-2"
        preset="slide-left"
      >
        <AboutMe />
      </AnimatedSection>

      <Stack />

      <AnimatedSection
        className="p-5 bg-secondary text-white"
        preset="zoom-in"
        duration={0.6}
      >
        <Portfolio />
      </AnimatedSection>

      <AnimatedSection
        id="contact"
        className="p-5"
        preset="slide-up"
        delay={0.2}
      >
        <Contact />
      </AnimatedSection>

      <footer className="text-center py-4 bg-dark text-white">
        <p>&copy; 2025 Enmanuel Nava. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
