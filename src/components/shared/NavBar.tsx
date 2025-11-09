import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import ReactGa from "react-ga4";

type NavBarProps = {
  themeName: string;
  toggleTheme: () => void;
};

function NavBar({ themeName, toggleTheme }: NavBarProps) {
  // Manejar clics de navegación interna
  const handleNavClick = (sectionId: string) => {
    ReactGa.event({
      category: "Navegación interna",
      action: "Clic en Menú",
      label: sectionId,
    });
    console.log(`GA Event: Nav Click - ${sectionId}`);
  };

  // Manejar clics en enlaces sociales/externos
  const handleSocialClick = (socialName: string) => {
    ReactGa.event({
      category: "Enlaces externos",
      action: "Clic en Social",
      label: socialName,
    });
    console.log(`GA Event: Social Click - ${socialName}`);
  };

  // Manejar el cambio de tema}
  const handleThemeToggle = () => {
    toggleTheme();
    const newTheme = themeName === "default" ? "Dark" : "Light";
    ReactGa.event({
      category: "Interacción",
      action: "Cambio de Tema",
      label: `Cambiado a ${newTheme}`,
    });
    console.log(`GA Event: Theme Toggle - ${newTheme}`);
  };

  return (
    <Navbar
      bg={themeName === "default" ? "dark" : "default"}
      variant={themeName === "default" ? "dark" : "default"}
      expand="lg"
      fixed="top"
      className="border-bottom border-secondary opacity-75"
      style={{ padding: "1rem 0" }}
    >
      <Container
        fluid
        className="px-4 d-flex justify-content-between align-items-center"
      >
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-4 text-light"
          onClick={() => handleNavClick("home")}
        >
          Enmanuel
        </Navbar.Brand>

        {/* Toggle e íconos en móvil */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <Button
            variant="outline-light"
            onClick={handleThemeToggle}
            className="p-1 px-2"
          >
            {themeName === "default" ? "🌙" : "☀️"}
          </Button>
          <a
            href="https://www.linkedin.com/in/enmanuel-nava-dev/"
            className="text-light navbar-icons"
            target="no-blank"
            onClick={() => handleSocialClick('LinkedIn')}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/enmanuel.navadavila/"
            className="text-light navbar-icons"
            target="no-blank"
            onClick={() => handleSocialClick('Facebook')}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/end1996"
            className="text-light navbar-icons"
            target="no-blank"
            onClick={() => handleSocialClick('GitHub')}
          >
            <FaGithub />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* Collapse + menú */}
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav
            className="
              flex-column flex-lg-row
              text-start text-lg-center
              mx-0 mx-lg-auto
              gap-2 gap-lg-3
              mt-3 mt-lg-0
            "
          >
            <Nav.Link href="#home" onClick={() => handleNavClick('home')}>Inicio</Nav.Link>
            <Nav.Link href="#about" onClick={() => handleNavClick('about')}>Sobre mí</Nav.Link>
            <Nav.Link href="#stack" onClick={() => handleNavClick('stack')}>Stack</Nav.Link>
            <Nav.Link href="#summary" onClick={() => handleNavClick('summary')}>Curriculum</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handleNavClick('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handleNavClick('contact')}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Íconos en escritorio */}
        <div className="d-none d-lg-flex align-items-center gap-3 text-white fs-5">
          <Button
            variant="outline-light"
            onClick={handleThemeToggle}
            className="ms-2"
          >
            {themeName === "default" ? "🌙" : "☀️"}
          </Button>
          <a
            href="https://www.linkedin.com/in/enmanuel-nava-dev/"
            className="text-light navbar-icons link-primary"
            target="no-blank"
            onClick={() => handleSocialClick('LinkedIn (Desktop)')}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/enmanuel.navadavila/"
            className="text-light navbar-icons link-primary"
            target="no-blank"
            onClick={() => handleSocialClick('Facebook (Dekstop)')}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/end1996"
            className="text-light navbar-icons link-primary"
            target="no-blank"
            onClick={() =>  handleSocialClick('Github (Desktop)')}
          >
            <FaGithub />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
