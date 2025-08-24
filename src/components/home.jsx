import Typewriter from "typewriter-effect";
import Button from "./button";
import { FaArrowRight, FaUser } from "react-icons/fa";
import imranImg from "../assets/images/imran-i.jpg";
import "aos/dist/aos.css";
import Shape from "./shape";
import { LuMailX } from "react-icons/lu";

export default function Home() {
  return (
    <section
      className="container-fluid shadow-sm rounded min-vh-100 position-relative dark"
      id="home"
    >
      <Shape width={130} height={130} left={"40px"} top={"100px"} />
      <Shape
        width={300}
        height={300}
        top={"39%"}
        left={"50%"}
        animation={"waveAnim 2.5s infinite"}
      />

      <div className="row flex-row-reverse justify-content-center min-vh-100">
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-info mt-5 mt-md-0 pt-5"
          id="back-img"
          data-aos="fade-left"
        >
          <div className="border-0 shadow-md text-center card-top align-self-end align-self-md-center">
            <div className="img-top align-self-start">
              <img className="rounded-5 w-75" src={imranImg} alt="logo" id="logo"/>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 d-flex align-items-center text-center"
          id="intro"
          data-aos="fade-right"
        >
          <div className="card-body">
            <h1 className="card-title display-5 fw-bold">
              <span className="linear-text">I'm Shaikh Imran,</span> frontend
              developer
            </h1>
            <h3>
              I am a{" "}
              <span className="linear-text d-inline-block">
                <Typewriter
                  options={{
                    cursor: "_",
                    deleteSpeed: 100,
                    strings: ["Student", "Learner", "Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>

            <p className="card-text fs-5 fst-italic" style={{letterSpacing: 2}}>
              Hi, I'm Shaikh Imran — a passionate Front-End Developer currently
              learning the MERN stack. I'm seeking a valuable opportunity where
              I can apply my logic and design skills to grow and master my
              craft.{" "}
            </p>
            <div className="container col-12 d-inline-flex justify-content-center gap-4">
              <Button href={"#about"}>
                Know More <FaArrowRight />
              </Button>
              <Button href={"#contact"}>
                Contact Me <FaUser />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
