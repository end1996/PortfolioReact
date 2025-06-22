import { techIcons } from "../assets/images/icons";

function Stack() {
  const technologies = [
    { name: "React", icon: techIcons.react },
    { name: "Flutter", icon: techIcons.flutter },
    { name: "Bootstrap", icon: techIcons.bootstrap },
    { name: "Git", icon: techIcons.git },
    { name: "HTML", icon: techIcons.html },
    { name: "CSS", icon: techIcons.css },
    { name: "PHP", icon: techIcons.php },
    { name: "MySQL", icon: techIcons.mysql },
    { name: "WordPress", icon: techIcons.wordpress },
    { name: "JavaScript", icon: techIcons.javascript },
    { name: "Java", icon: techIcons.java },
    { name: "Python", icon: techIcons.python },
    { name: "TypeScript", icon: techIcons.typescript },
  ];
  return (
    <>
      <section id="stack" className="text-center m-5">
        <div className="container position-relative d-flex text-center mb-5">
          <h2 className="text-132 fw-bold w-100 mb-0 opacity-1">Stack</h2>
          <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
            Tecnologías que manejo
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
      </section>
    </>
  );
}

export default Stack;
