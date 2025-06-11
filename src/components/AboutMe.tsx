import { Container } from "react-bootstrap";

function AboutMe() {
    return (
        <Container>
            <h2>Sobre mí</h2>
            <div className="mb-4">
                <p className="lead">
                    Transformo ideas en <span className="text-primary fw-bold">soluciones digitales</span> combinando expertise técnico con liderazgo efectivo
                </p>
            </div>

            <div className="skills-highlight">
                <span className="badge bg-primary me-2">Desarrollo de Software</span>
                <span className="badge bg-secondary me-2">Liderazgo de Equipos</span>
                <span className="badge bg-success me-2">Ingeniería Electrónica</span>
                <span className="badge bg-info">Gestión de Proyectos</span>
            </div>

            <p className="mt-4 about-description">
                Mi enfoque combina programación en diversos lenguajes con la coordinación de equipos técnicos,
                siempre orientado hacia soluciones innovadoras y de calidad que generen valor real.
            </p>
        </Container>
    )
}

export default AboutMe;