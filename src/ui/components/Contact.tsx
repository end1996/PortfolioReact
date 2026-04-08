import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { themes } from "@/ui/theme/themes";

type ContactProps = {
  themeName: string;
};

function Contact({ themeName }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("submitting");
    const formData = new FormData(formRef.current);
    
    // Leemos la API Key desde las variables de entorno de Vite de manera segura
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        console.error("Error Web3Forms:", data);
        setStatus("error");
        setErrorMessage(data.message || "Hubo un error con el servidor.");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setStatus("error");
      setErrorMessage("Actualmente no hay conexión al servidor.");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };
  return (
    <div className="container">
      <div className="position-relative d-flex text-center my-5">
        <h2 id="behind-text" className="text-132 fw-bold w-100 mb-0 opacity-1">CONTACTO</h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Contáctame
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="row gy-5">
        <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
          <h2 className="mb-3 text-21 text-uppercase">Dirección</h2>
          <p className="text-16 mb-4">Santiago de Surco, Lima, Perú</p>
          <p className="text-16 mb-1">
            <span className="text-primary text-4 me-2">
              <i className="fas fa-phone">
                <FaPhone />
              </i>
            </span>
            (+51) 984101254
          </p>
          <p className="text-16 mb-4">
            <span className="text-primary text-4 me-2">
              <i className="fas fa-envelope">
                <FaEnvelope />
              </i>
            </span>
            end199615@gmail.com
          </p>
          <h2 className="mb-3 text-21 text-uppercase">Sígueme</h2>
          <ul className="social-icons justify-content-center justify-content-md-start social-icons-muted">
            <li className="social-icons-linkedin">
              <a
                href="https://www.linkedin.com/in/enmanuel-nava-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin">
                  <FaLinkedin />
                </i>
              </a>
            </li>
            <li className="social-icons-facebook">
              <a
                href="https://www.facebook.com/enmanuel.navadavila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li className="social-icons-github">
              <a
                href="https://github.com/end1996"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <FaGithub />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-8 col-xl-9 order-0 order-md-1">
          <h2 className="mb-3 text-21 text-uppercase text-center text-md-start">
            Déjame un mensaje
          </h2>
          <form
            className="form"
            id="contact-form"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="row g-4">
              <div className="col-xl-6">
                <input
                  name="user_name"
                  type="text"
                  className={`form-control ${themes[themeName].primary}`}
                  required
                  placeholder="Nombre"
                />
              </div>
              <div className="col-xl-6">
                <input
                  name="user_email"
                  type="email"
                  className={`form-control ${themes[themeName].primary}`}
                  required
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="col">
                <textarea
                  name="message"
                  className={`form-control ${themes[themeName].primary}`}
                  rows={5}
                  required
                  placeholder="Dime que necesitas........"
                ></textarea>
              </div>
            </div>
            <p className="text-center mt-4 mb-0">
              <button
                id="submit-btn"
                className="btn button btn-primary rounded-pill d-inline-flex"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </p>
            {status === "success" && (
              <div className="alert alert-success mt-3 p-2 text-center" role="alert">
                ¡Mensaje enviado con éxito! Te responderé a la brevedad.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger mt-3 p-2 text-center" role="alert">
                Error: {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
