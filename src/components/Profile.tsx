import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/profile.jpg";

function Profile() {
  return (
    <>
      <div className="row align-items-center justify-content-center w-100 h-100">
        <div className="col-lg-8 text-center">
          <h1 className="text-128 mb-3">Hola, soy Enmanuel</h1>
          <h3 className="text-primary">
            <Typewriter
              words={[
                "Desarrollador Fullstack",
                "Estudiante de ingeniería de software con Inteligencia Artificial",
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
    </>
  );
}
export default Profile;
