import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/profile-azul.jpg";
import { FaArrowDown } from "react-icons/fa";

function Profile() {
  return (
    <>
      <div className="row align-items-center justify-content-center w-100 h-100">
        <div className="col-lg-8 text-center">
          <h2 className="mb-3 mt-4 text-white mb-md-3 text-center">Hola, soy Enmanuel</h2>
          <h3 className="text-calc text-white mb-2">
            <Typewriter
              words={[
                "Desarrollador Fullstack.",
                "Estudiante de ingeniería de software con IA.",
                "Apasionado por el código.",
              ]}
              loop={0} // 0 = infinito
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
        </div>
        <div className="perfil col-lg-4 justify-content-center">
          <img src={profile} alt="Perfil" />
        </div>
      </div>
      <a href="#about" className="scroll-down-arrow text-white smooth-scroll pb-2 fs-2">
        <span>
          <FaArrowDown className="pulse"/>
        </span>
      </a>
    </>
  );
}
export default Profile;
