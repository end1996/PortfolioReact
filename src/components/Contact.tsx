import { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_29wyack',
        'template_pyyjr6y',
        formRef.current,
        'Mac61tOHRoOB4enMf'
      )
      .then(
        () => {
          alert('Mensaje enviado con éxito');
          formRef.current?.reset();
        },
        (error) => {
          alert('Error al enviar: ' + error.text);
        }
      );
  };
  return (
    <>
      <section id="contact" className="bg-light text-dark py-5">
        <Container className="d-flex justify-content-center px-1 px-md-5">
          <div className="w-100" style={{ maxWidth: "600px" }}>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="mb-4 text-center">Contacto</h2>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="from_name" name="from_name" placeholder="Nombre" required />
                  <label htmlFor="from_name">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="reply_to" name="reply_to" placeholder="Correo" required />
                  <label htmlFor="reply_to">Correo electrónico</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Mensaje"
                    style={{ height: '120px' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                <div className="text-center">
                  <Button type="submit" variant="primary">Enviar</Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

    </>
  )
}

export default Contact;