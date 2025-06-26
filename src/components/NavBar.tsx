import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";

type NavBarProps = {
  themeName: string;
  toggleTheme: () => void;
};

function NavBar({ themeName, toggleTheme }: NavBarProps) {
  return (
    <Navbar
      bg={themeName === "default" ? "dark" : "default"}
      variant={themeName === "default" ? "dark" : "default"}
      expand="lg"
      fixed="top"
      className="border-bottom border-secondary opacity-75"
      style={{ padding: "1rem 0" }}
    >
      <Container fluid className="px-4 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-light">
          Enmanuel
        </Navbar.Brand>

        {/* Toggle e íconos en móvil */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <Button
            variant="outline-light"
            onClick={toggleTheme}
            className="p-1 px-2"
          >
            {themeName === "default" ? "🌙" : "☀️"}
          </Button>
          <a href="https://www.linkedin.com/in/enmanuel-nava-dev/" className="text-light navbar-icons" target="no-blank"><FaLinkedin /></a>
          <a href="https://www.facebook.com/enmanuel.navadavila/" className="text-light navbar-icons" target="no-blank"><FaFacebookF /></a>
          <a href="https://github.com/end1996" className="text-light navbar-icons" target="no-blank"><FaGithub /></a>
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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#stack">Stack</Nav.Link>
            <Nav.Link href="#summary">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Íconos en escritorio */}
        <div className="d-none d-lg-flex align-items-center gap-3 text-white fs-5">
          <Button
            variant="outline-light"
            onClick={toggleTheme}
            className="ms-2"
          >
            {themeName === "default" ? "🌙" : "☀️"}
          </Button>
          <a href="https://www.linkedin.com/in/enmanuel-nava-dev/" className="text-light navbar-icons" target="no-blank"><FaLinkedin /></a>
          <a href="https://www.facebook.com/enmanuel.navadavila/" className="text-light navbar-icons" target="no-blank"><FaFacebookF /></a>
          <a href="https://github.com/end1996" className="text-light navbar-icons" target="no-blank"><FaGithub /></a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
