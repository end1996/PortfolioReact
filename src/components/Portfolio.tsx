import { useState } from "react";
import { portfolioProjects, type Project} from "../data/portfolioData";
import { Button, Row, Col, Modal, Card } from "react-bootstrap";

const categories = ["Todos", "Wordpress", "PHP", "Java", "Flutter", "React"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-secondary text-white min-vw-80 p-md-5">
        <h2 className="mb-4 text-center">Mi Portafolio</h2>

        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? "light" : "outline-light"}
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
                className="h-100 shadow-sm cursor-pointer"
              >
                <Card.Img variant="top" src={project.image} className="project-img p-2"/>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.category}</Card.Text>
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
    </section>
  );
}
