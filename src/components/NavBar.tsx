import { Button, Container, Nav, Navbar } from "react-bootstrap";

type NavBarProps = {
  theme: string;
  toggleTheme: () => void;
}
function NavBar({ theme, toggleTheme }: NavBarProps) {
  return (
    <Navbar bg={theme} variant={theme} expand="lg" fixed="top">
      <Container>
        <Button variant={theme === "light" ? "dark" : "light"} onClick={toggleTheme} className="ms-2">
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
        <Navbar.Brand href="#home" className="px-3">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre mí</Nav.Link>
            <Nav.Link href="#portfolio">Portafolio</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;