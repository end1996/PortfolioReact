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
          <p className="badge bg-primary text-14 fw-400">Agosto 2025 - Marzo 2026</p>
          <h3 className="text-21">Desarrollador FullStack</h3>
          <p className="text-primary">Corporación Interkambio</p>
          <ul className={`mb-0 ${themeName == "dark" ? "text-white-50" : ""}`}>
            <li className="mb-2">
              Arquitectura y desarrollo de un <strong>sistema de sincronización transaccional masivo</strong> entre un backend local (<strong>Java Spring Boot</strong>) y WooCommerce, manejando sincronización de miles de productos mediante orquestación de hilos asíncronos (Thread Pools) robustos.
            </li>
            <li className="mb-2">
              Implementación pionera de <strong>Inteligencia Artificial offline (LLM Qwen local)</strong> para el auto-etiquetado y extracción de metadatos de catálogos de libros, elevando el SEO y las recomendaciones sin depender de APIs cloud costosas.
            </li>
            <li className="mb-2">
              Construcción de interfaces frontend escalables con <strong>React y TypeScript</strong> (patrones de arquitectura limpia), garantizando la integridad visual y de datos mediante el control estricto de DTOs y serializaciones hacia el backend.
            </li>
            <li className="mb-2">
              Resolución de deuda técnica crítica en plataformas e-commerce existentes, corrigiendo corrupción de datos en flujos de creación/actualización y normalización de URLs relativas.
            </li>
            <li>
              Administración de servidores y despliegue: configuración de entornos en <strong>VPS Linux con NGINX</strong>, mantenimiento de bases de datos relacionales y control de versiones con Git, asegurando alta disponibilidad operativa.
            </li>
          </ul>
        </div>
        <div
          className={`rounded p-4 mb-4 ${
            themeName == "default" ? "border" : ""
          } ${themes[themeName].primary}`}
        >
          <p className="badge bg-primary text-14 fw-400">
            Febrero 2025 - Junio 2025
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
