import { techIcons } from "../assets/images/icons";

function Stack() {
  const technologies = [
    { name: "React", icon: techIcons.react },
    { name: "Flutter", icon: techIcons.flutter },
    { name: "Bootstrap", icon: techIcons.bootstrap },
    { name: "Spring Boot", icon: techIcons.springboot },
    { name: "WordPress", icon: techIcons.wordpress },
    { name: "HTML", icon: techIcons.html },
    { name: "CSS", icon: techIcons.css },
    { name: "JavaScript", icon: techIcons.javascript },
    { name: "TypeScript", icon: techIcons.typescript },
    { name: "PHP", icon: techIcons.php },
    { name: "Java", icon: techIcons.java },
    { name: "Python", icon: techIcons.python },
    { name: "MySQL", icon: techIcons.mysql },
    { name: "Git", icon: techIcons.git },
  ];
  return (
    <>
      <div className="position-relative d-flex text-center my-5">
        <h2 id="behind-text" className="text-132 fw-bold w-100 mb-0 opacity-1">
          STACK
        </h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Tecnologías
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="container d-flex flex-wrap justify-content-center">
        {technologies.map((tech, index) => (
          <div key={index} className="m-3 text-center tech-icon">
            <img src={tech.icon} alt={tech.name} className="img-fluid mb-2" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stack;
