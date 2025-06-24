import { useState } from "react";
import { portfolioProjects, type Project } from "../data/portfolioData";
import { Button, Row, Col, Modal, Card } from "react-bootstrap";
import RepoLanguages from "./RepoLanguages";
import { themes } from "../utils/themes";

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

  return (
    <div className="container">
      <div className="position-relative d-flex text-center my-5">
        <h2 className="text-132 fw-bold w-100 mb-0 opacity-1">PORTFOLIO</h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          My work
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
              className={`h-100 border ${themes[themeName].secondary}`}
            >
              <Card.Img
                variant="top"
                src={project.image}
                className="project-img p-2"
              />
              <Card.Body>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProject?.image}
            className="img-fluid mb-3"
            alt={selectedProject?.title}
          />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
