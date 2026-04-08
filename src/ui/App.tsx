import { useEffect, useState } from "react";
import ReactGa from 'react-ga4';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import NavBar from "./components/shared/NavBar";
import AnimatedSection from "./components/shared/AnimatedSection";
import { Summary } from "./components/Summary/index";
import { themes } from "./theme/themes";

function App() {
  const [themeName, setThemeName] = useState("default");
  const theme = themes[themeName];

  // Hook para registrar la vista de página inicial
  useEffect(() => {
    // Envía la vista de página inicial a GA4
    ReactGa.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title
    })
    console.log("G4A Pageview Sent: ", window.location.pathname);
  }, []); // Asegurar que se ejecute una sola vez


  const toggleTheme = () => {
    const next = themeName === "default" ? "dark" : "default";
    setThemeName(next);
  };

    return (
      <>
        <NavBar themeName={themeName} toggleTheme={toggleTheme} />

        {/* --- Secciones del Portafolio --- */}

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

        {/* --- Footer --- */}  
        <footer className={`text-center py-3 ${theme.footer}`}>
          <div className="container">
            <p className="mb-3 mb-lg-0">&copy; 2025 Enmanuel Nava. Todos los derechos reservados.</p>
          </div>
        </footer>
      </>
    );
}

export default App;
