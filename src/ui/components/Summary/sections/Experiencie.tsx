import { themes } from "@/ui/theme/themes";

type ExperienceProps = {
  themeName: string;
};

export function Experiencie({ themeName }: ExperienceProps) {
  return (
      <div className="col-md-6">
        <h2 className="text-24 fw-600 mb-4">Mi Experiencia</h2>
        <div
          className={`rounded p-4 mb-4 ${
            themeName == "default" ? "border" : ""
          } ${themes[themeName].primary}`}
        >
          <p className="badge bg-primary text-14 fw-400">Actualidad</p>
          <h3 className="text-21">Desarrollador FullStack</h3>
          <p className="text-primary">Corporación Interkambio</p>
          <ul className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
            <li>
              Desarrollo de sitios web a medida con WordPress, optimizados para
              velocidad y posicionamiento SEO.
            </li>
            <li>
              Creación de proyectos escalables utilizando React, Spring Boot y
              TypeScript.
            </li>
            <li>
              Despliegue de aplicaciones en producción mediante NGINX y
              servidores VPS, garantizando disponibilidad y rendimiento.
            </li>
            <li>
              Administración y mantenimiento de bases de datos MySQL, asegurando
              la integridad y eficiencia de los datos.
            </li>
            <li>
              Mantenimiento y mejora de sitios web existentes, incluyendo
              optimización de rendimiento, corrección de errores y actualización
              de funcionalidades.
            </li>
            <li>
              Manejo de control de versiones con GIT y seguimiento/ estimación
              de tareas mediante metodología Kanban
            </li>
          </ul>
        </div>
        <div
          className={`rounded p-4 mb-4 ${
            themeName == "default" ? "border" : ""
          } ${themes[themeName].primary}`}
        >
          <p className="badge bg-primary text-14 fw-400">
            Febrero 2025 – Junio 2025
          </p>
          <h3 className="text-21">Practicante de desarrollo web</h3>
          <p className="text-primary">APM Inversiones E.I.R.L</p>
          <ul className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
            <li>
              Participar en el desarrollo y mantenimiento de sitios web
              utilizando HTML, CSS, JavaScript, PHP y React
            </li>
            <li>Creación de plugins personalizados para Wordpress</li>
            <li>Líder de proyecto usando metodología SCRUM</li>
            <li>
              Implementar mejoras en la interfaz de usuario para mejorar la
              experiencia del cliente.
            </li>
            <li>
              Utilizar herramientas como Git y MySQL para el control de
              versiones y gestión de bases de datos.
            </li>
          </ul>
        </div>
        <div
          className={`rounded p-4 mb-4 ${
            themeName == "default" ? "border" : ""
          } ${themes[themeName].primary}`}
        >
          <p className="badge bg-primary text-14 fw-400">Mayo 2022</p>
          <h3 className="text-21">Asesor técnico</h3>
          <p className="text-primary">COMDATA</p>
          <p className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
            Recibir y atender llamadas telefónicas de clientes con un servicio
            fijo que presenten desperfectos / averías con cualquiera de sus
            productos contratados, para brindarle las pautas y ayudarlo con su
            casuística.
          </p>
        </div>
      </div>
  );
}
