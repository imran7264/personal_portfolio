import { useState } from "react";
import Shape from "./shape";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setStatus("SUCCESS");
        setName("");
        setEmail("");
        setText("");

      })
      .catch((error) => { 
        setStatus("ERROR while submitting the form");
        console.error("ERROR:", error);

      });
  };

  return (
    <section
      className="container-fluid vh-100 w-100 dark position-relative"
      id="contact"
    >
     
      <Shape
        width={400}
        height={400}
        top={"0%"}
        left={"0%"}
        animation={"waveAnim 2.5s infinite"}
      />
      <div className="row h-100 w-100 align-items-center justify-content-around flex-column-reverse flex-lg-row">
        <div className="col-sm-12 col-lg-4 text-center" data-aos="fade-down">
          <h3 className="linear-text">Shaikh imran</h3>
          <ul
            className="list gap-3 d-flex align-items-center justify-content-center flex-column"
            id="information"
          >
            
            <li className="list-item d-flex align-items-center">
              <FaPhone className="m-2" />
              <span>(+91)7264903252</span>
            </li>
            <li className="list-item d-flex">
              <FaEnvelope className="m-2" />
              <span>imranshaikh82639@gmail.com</span>
            </li>
          </ul>
          <p className="text mb-0">follow me on</p>

          <div className="icon-container">
            <a className="icon" href="https://github.com/imran7264">
              <FaGithub className="text-black" />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/shaikh-imran-b5a616225/"
            >
              <FaLinkedin className="text-primary" />
            </a>
          </div>
          <address className="address fst-italic">
            Ward 4 Gaibipura <br />
            Risod Washim, Maharashtra <br />
            India.
          </address>
        </div>

        <div className="col-sm-12 col-lg-6" data-aos="fade-up">
          <form
            onSubmit={handleSubmit}
            id="form"
            className="z-1"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>

              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={name}
                placeholder="Example name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Example@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                value={text}
                rows="3"
                placeholder="Some Message"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            {status === "SUCCESS" && <h5 className="fw-normal text-success">Your credientials has been submitted</h5>}
            {status === "ERROR" && <h5 className="fw-normal text-danger">Error while submitting</h5>}
  
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button> 
          </form>
        </div>
      </div>
    </section>
  );
}
