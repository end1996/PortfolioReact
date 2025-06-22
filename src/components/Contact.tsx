import { useRef } from "react";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_29wyack",
        "template_pyyjr6y",
        formRef.current,
        "Mac61tOHRoOB4enMf"
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito");
          formRef.current?.reset();
        },
        (error) => {
          alert("Error al enviar: " + error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-132 fw-bold w-100 mb-0 opacity-1">CONTACT</h2>
        <p className="text-36 fw-bold position-absolute w-100 align-self-center lh-base mb-0">
          Get in Touch
          <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
        </p>
      </div>
      <div className="row gy-5">
        <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
          <h2 className="mb-3 text-5 text-uppercase text-white">Address</h2>
          <p className="text-3 mb-4 text-light">
            4th Floor, Plot No.22,
            <br />
            145 Murphy Canyon Rd.
            <br />
            San Diego CA 2028
          </p>
          <p className="text-3 mb-1 text-light">
            <span className="text-primary text-4 me-2">
              <i className="fas fa-phone"></i>
            </span>
            (060) 444 434 444
          </p>
          <p className="text-3 mb-1 text-light">
            <span className="text-primary text-4 me-2">
              <i className="fas fa-fax"></i>
            </span>
            (060) 555 545 555
          </p>
          <p className="text-3 mb-4 text-light">
            <span className="text-primary text-4 me-2">
              <i className="fas fa-envelope"></i>
            </span>
            chat@simone.com
          </p>
          <h2 className="mb-3 text-5 text-uppercase text-white">Follow Me</h2>
          <ul className="social-icons justify-content-center justify-content-md-start social-icons-muted">
            <li className="social-icons-dribbble">
              <a
                href="http://www.dribbble.com/harnishdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons-twitter">
              <a
                href="https://twitter.com/harnishdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons-facebook">
              <a
                href="http://www.facebook.com/harnishdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="social-icons-google">
              <a
                href="http://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li className="social-icons-github">
              <a
                href="http://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-8 col-xl-9 order-0 order-md-1">
          <h2 className="mb-3 text-5 text-uppercase text-center text-md-start text-white">
            Send us a note
          </h2>
          <form
            className="form-dark"
            id="contact-form"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="row g-4">
              <div className="col-xl-6">
                <input
                  name="user_name"
                  type="text"
                  className="form-control"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="col-xl-6">
                <input
                  name="user_email"
                  type="email"
                  className="form-control"
                  required
                  placeholder="Email"
                />
              </div>
              <div className="col">
                <textarea
                  name="message"
                  className="form-control"
                  rows={5}
                  required
                  placeholder="Tell us more about your needs........"
                ></textarea>
              </div>
            </div>
            <p className="text-center mt-4 mb-0">
              <button
                id="submit-btn"
                className="btn btn-primary rounded-pill d-inline-flex"
                type="submit"
              >
                Send Message
              </button>
            </p>
            <div className="Toastify"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
