import { themes } from "../../../utils/themes";

type EducationProps = {
  themeName: string;
};

export function Education({ themeName }: EducationProps) {
  return (
    <div className="col-md-6">
      {/* Educación */}
      <h2 className="text-24 fw-600 mb-4">Mi Educación</h2>
      <div
        className={`rounded p-4 mb-4 ${
          themeName == "default" ? "border" : ""
        } ${themes[themeName].primary}`}
      >
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
      <div
        className={`rounded p-4 mb-4 ${
          themeName == "default" ? "border" : ""
        } ${themes[themeName].primary}`}
      >
        <p className="badge bg-primary text-14 fw-400">Mayo 2018</p>
        <h3 className="text-21">Ingeniería Electrónica</h3>
        <p className="text-primary">
          Instituto Universitario Politécnico “Santiago Mariño”{" "}
        </p>
        <p className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
          7mo semestre aprobado.
        </p>
      </div>
      <div
        className={`rounded p-4 mb-4 ${
          themeName == "default" ? "border" : ""
        } ${themes[themeName].primary}`}
      >
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
  );
}
