function AboutMe() {
  return (
    <>
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center m-5">
          <h2 className="text-132 fw-bold w-100 mb-0 opacity-1">Sobre mí</h2>
          <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
            Conóceme
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start py-3">
            <h2 className="text-28 fw-bold mb-3 text">
              Soy <span className="text-primary">Enmanuel Nava,</span> un
              desarrollador fullstack
            </h2>
            <p className="opacity-75 text-16">
              Soy un apasionado del desarrollo web con experiencia en
              tecnologías modernas. Me especializo en crear aplicaciones web
              dinámicas y eficientes, utilizando herramientas como React y
              Flutter.
            </p>
            <p className="opacity-75 text-16">
              Me encanta aprender y adaptarme a nuevas tecnologías, siempre
              buscando mejorar mis habilidades y ofrecer soluciones innovadoras.
              Mi objetivo es contribuir al desarrollo de proyectos que impacten
              positivamente a los usuarios y a la comunidad.
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
                  <span className="opacity-75">28</span>
                </li>
                <li className="border-0">
                  <span className="fw-bold me-2">De:</span>
                  <span className="opacity-75">Lima,Perú</span>
                </li>
              </ul>
              <a
                href="/CV_Enmanuel_Nava_Developer_2025.pdf"
                download=""
                className="btn btn-primary rounded-pill text-16 p-3"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="container my-5">
            <div className="row text-center py-4">
              <div className="col-6 col-md-3 border-end border-secondary">
                <h1>💻</h1>
                <p className="fw-bold text-16">Desarrollo Web</p>
              </div>
              <div className="col-6 col-md-3 border-end border-secondary">
                <h1>📱</h1>
                <p className="fw-bold text-16">Desarrollo Móvil</p>
              </div>
              <div className="col-6 col-md-3 border-end border-secondary mt-4 mt-md-0">
                <h1>📊</h1>
                <p className="fw-bold text-16">Gestión de Proyectos</p>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h1>📝</h1>
                <p className="fw-bold text-16">Liderazgo de Equipos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
