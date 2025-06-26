import { themes } from "../utils/themes";

type SummaryProps = {
  themeName: string;
};

export function Summary({ themeName }: SummaryProps) {
  return (
    <div className="container">
      <div className="position-relative d-flex text-center my-5">
        <h2 id="behind-text" className="text-132 fw-bold w-100 mb-0 opacity-1">CURRICULUM</h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Perfil Profesional
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="row gx-5 text-start">
        <div className="col-md-6">
          <h2 className="text-24 fw-600 mb-4">Mi Educación</h2>
          <div className={`rounded p-4 mb-4 ${themeName == "default" ? "border" : "" } ${themes[themeName].primary}`}>
            <p className="badge bg-primary text-14 fw-400">Actualidad</p>
            <h3 className="text-21">
              Ingeniería de software con inteligencia artificial
            </h3>
            <p className="text-primary">SENATI</p>
            <p className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
              Actualmente cursando el 5to ciclo de la carrera en modalidad
              semi-presencial.
            </p>
          </div>
          {/* <div className="border rounded p-4 mb-4"> */}
          <div className={`rounded p-4 mb-4 ${themeName == "default" ? "border" : "" } ${themes[themeName].primary}`}>
            <p className="badge bg-primary text-14 fw-400">Mayo 2018</p>
            <h3 className="text-21">Ingeniería Electrónica</h3>
            <p className="text-primary">
              Instituto Universitario Politécnico “Santiago Mariño”{" "}
            </p>
            <p className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>7mo semestre aprobado.</p>
          </div>
          <div className={`rounded p-4 mb-4 ${themeName == "default" ? "border" : "" } ${themes[themeName].primary}`}>
            <p className="badge bg-primary text-14 fw-400">Mayo 2014</p>
            <h3 className="text-21">Técnico medio en informática</h3>
            <p className="text-primary">
              Unidad Educativa Arquidiocesana “María Auxiliadora”{" "}
            </p>
            <p className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
              Titulación de secundaria diversificada en comercio y servicios
              administrativos mención informática.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-24 fw-600 mb-4">Mi Experiencia</h2>
          <div className={`rounded p-4 mb-4 ${themeName == "default" ? "border" : "" } ${themes[themeName].primary}`}>
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
          <div className={`rounded p-4 mb-4 ${themeName == "default" ? "border" : "" } ${themes[themeName].primary}`}>
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
      </div>
    </div>
  );
}
