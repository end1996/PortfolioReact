import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

type NavBarProps = {
  theme: string;
  toggleTheme: () => void;
};

function NavBar({ theme, toggleTheme }: NavBarProps) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="py-3 border-bottom border-secondary opacity-75"
    >
      <Container fluid className="px-4 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Enmanuel
        </Navbar.Brand>

        {/* Toggle e íconos en móvil */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <Button
            variant={theme === "light" ? "dark" : "light"}
            onClick={toggleTheme}
            className="p-1 px-2"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          <a href="#" className="text-white fs-5"><FaTwitter /></a>
          <a href="#" className="text-white fs-5"><FaFacebookF /></a>
          <a href="#" className="text-white fs-5"><FaDribbble /></a>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" className="separator-border opacity-75">About</Nav.Link>
            <Nav.Link href="#whatido" className="separator-border opacity-75">What I Do</Nav.Link>
            <Nav.Link href="#resume" className="separator-border opacity-75">Resume</Nav.Link>
            <Nav.Link href="#portfolio" className="separator-border opacity-75">Portfolio</Nav.Link>
            <Nav.Link href="#client" className="separator-border opacity-75">Client</Nav.Link>
            <Nav.Link href="#contact" className="separator-border opacity-75">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Íconos en escritorio */}
        <div className="d-none d-lg-flex align-items-center gap-3 text-white fs-5">
          <Button
            variant={theme === "light" ? "dark" : "light"}
            onClick={toggleTheme}
            className="ms-2"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          <a href="#" className="text-white"><FaTwitter /></a>
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaDribbble /></a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
