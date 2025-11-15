import { useState } from "react";
import ReactGa from "react-ga4";
import { portfolioProjects, type Project } from "../data/portfolioData";
import { Button, Row, Col, Modal, Card } from "react-bootstrap";
import RepoLanguages from "../api/RepoLanguages";
import { themes } from "../utils/themes";
import { FaGithub } from "react-icons/fa";

const categories = ["Todos", "Wordpress", "PHP", "Java", "Flutter", "React"];

type PortfolioProps = {
  themeName: string;
};

export default function Portfolio({ themeName }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  /**
   * Registra un evento cuando el usuario hace clic para ver el código de un proyecto.
   * @param projectName El nombre del proyecto para usarlo como 'label' en GA4.
   */
  const handleViewCode = (projectName: string) => {
    ReactGa.event({
      category: 'Portfolio',
      action: 'Ver código',
      label: projectName
    })
    console.log("Evento recibido");
  }

  return (
    <div className="container">
      <div className="position-relative d-flex text-center my-5">
        <h2 id="behind-text" className="text-132 fw-bold w-100 mb-0 opacity-1">
          PORTFOLIO
        </h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Proyectos
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>

      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={cat === selectedCategory ? "primary" : "outline-secondary"}
            //variant="outline-secondary"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Row>
        {filteredProjects.map((project) => (
          <Col xs={12} sm={6} md={4} key={project.id} className="mb-4">
            <Card
              onClick={() => setSelectedProject(project)}
              className={`h-100 ${themes[themeName].secondary}`}
            >
              {project.type === "video" ? (
                <video
                  className="project-img p-2 w-100"
                  src={project.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ borderRadius: "0.5rem" }}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="project-img p-2"
                  alt={project.alt}
                />
              )}

              <Card.Body className="position-relative">
                {project.repo && (
                  <a
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="position-absolute top-0 end-0 m-2 text-dark fs-4 link-primary"
                    onClick={() => handleViewCode(project.title)}
                  >
                    <FaGithub />
                  </a>
                )}

                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.category}</Card.Text>
                <Card.Footer>
                  <RepoLanguages repo={project.repo} />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={selectedProject !== null}
        onHide={() => setSelectedProject(null)}
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject?.type === "video" ? (
            <video
              src={selectedProject?.image}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-100"
              style={{ borderRadius: "0.5rem" }}
            />
          ) : (
            <img
              src={selectedProject?.image}
              className="img-fluid mb-3"
              alt={selectedProject?.title}
            />
          )}
          <p>{selectedProject?.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
