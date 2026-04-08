import { getAge } from "@/domain/utils/getAge";
import ReactGa from "react-ga4";

function AboutMe() {

  const handleCVDownload = () => {
    ReactGa.event({
      category: 'Interacción clave',
      action: "Descarga CV",
      label: 'CV Principal (Resumen)'
    })
  }
  return (
    <>
      <div className="container">
        <div className="position-relative d-flex text-center my-5">
          <h2
            id="behind-text"
            className="text-132 fw-bold w-100 mb-0 opacity-1"
          >
            SOBRE MÍ
          </h2>
          <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
            Conóceme
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-28 fw-bold mb-3">
              Soy <span className="text-primary">Enmanuel Nava,</span> un
              desarrollador FullStack
            </h2>
            <p className="opacity-75 text-16">
              Especializado en el diseño y construcción de plataformas escalables, con un dominio sólido del desarrollo backend transaccional en <strong>Java y Spring Boot</strong>, y arquitecturas frontend modulares utilizando <strong>React y TypeScript</strong>. Me apasiona resolver problemas complejos: desde sincronización masiva de datos y cuellos de botella de rendimiento, hasta mantener sistemas resilientes bajo estrictos patrones de arquitectura limpia (Hexagonal, Container/Presentational).
            </p>
            <p className="opacity-75 text-16">
              Más allá de la web tradicional, poseo bases sólidas en <strong>análisis de datos, Machine Learning y Deep Learning con Python</strong>. Integro conceptos de Inteligencia Artificial (como el uso eficiente de LLMs locales) para buscar la automatización de procesos y el enriquecimiento de metadatos. Mi propósito es diseñar software seguro, eficiente y optimizado para generar un impacto real en el negocio.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4 text-lg-start">
            <div className="ps-lg-4">
              <ul className="text-16 list-style-2">
                <li>
                  <span className="fw-bold me-2">Nombre:</span>
                  <span className="opacity-75">Enmanuel Nava</span>
                </li>
                <li>
                  <span className="fw-bold me-2">Email:</span>
                  <a href="mailto:end199615@gmail.com" className="opacity-75">
                    end199615@gmail.com
                  </a>
                </li>
                <li>
                  <span className="fw-bold me-2">Edad:</span>
                  <span className="opacity-75">{getAge("1996/09/21")}</span>
                </li>
                <li className="border-0">
                  <span className="fw-bold me-2">De:</span>
                  <span className="opacity-75">Lima,Perú</span>
                </li>
              </ul>
              <a
                href="/CV_Enmanuel_Nava_Developer_2026.pdf"
                download
                className="btn button btn-primary rounded-pill"
                onClick={handleCVDownload}
              >
                Descargar CV
              </a>
            </div>
          </div>
          <div className="container my-5">
            <div className="row text-center py-4">
              <div className="col-6 col-md-3 border-end border-secondary">
                <h1 className="text-48">🚀</h1>
                <p className="text-16">Arquitectura de Software</p>
              </div>
              <div className="col-6 col-md-3 border-end border-secondary">
                <h1 className="text-48">⚙️</h1>
                <p className="text-16">Backend y APIs (Java)</p>
              </div>
              <div className="col-6 col-md-3 border-end border-secondary mt-4 mt-md-0">
                <h1 className="text-48">⚛️</h1>
                <p className="text-16">Frontend Modular (React)</p>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h1 className="text-48">🧠</h1>
                <p className="text-16">Integración IA Local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
