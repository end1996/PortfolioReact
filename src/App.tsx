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
import { themes } from "./utils/themes";

function App() {
const [themeName, setThemeName] = useState("default");
const theme = themes[themeName];

const toggleTheme = () => {
  const next = themeName === "default" ? "dark" : "default";
  setThemeName(next);
};

  return (
    <>
      <NavBar themeName={themeName} toggleTheme={toggleTheme} />

      <AnimatedSection
        id="home"
        className={`vh-100 d-flex flex-column align-items-center justify-content-center text-center ${theme.primary}`}
        preset="fade-in"
        duration={0.8}
        trigger="onLoad"
      >
        <Profile />
      </AnimatedSection>

      <AnimatedSection id="about" className={`py-5 ${theme.secondary}`} preset="fade-in">
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection
        id="stack"
        className={`py-5 ${theme.primary}`}
        preset="fade-in"
        delay={0.2}
      >
        <Stack />
      </AnimatedSection>

      <AnimatedSection id="summary" preset="fade-in" className={`py-5 ${theme.secondary}`}>
        <Summary themeName={themeName}/>
      </AnimatedSection>

      <AnimatedSection id="portfolio" className={`py-5 ${theme.primary}`} preset="fade-in" duration={0.6}>
        <Portfolio themeName={themeName}/>
      </AnimatedSection>

      <AnimatedSection
        id="contact"
        className={`py-5 ${theme.secondary}`}
        preset="fade-in"
        delay={0.2}
      >
        <Contact themeName={themeName}/>
      </AnimatedSection>

      <footer className={`text-center py-3 ${theme.footer}`}>
        <div className="container">
          <p className="mb-3 mb-lg-0">&copy; 2025 Enmanuel Nava. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
