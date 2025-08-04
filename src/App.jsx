import { useEffect } from "react";
import React from "react";
import "./App.css";
import "./index.css";
import Container from "./components/container";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import Hr from "./components/hr";
import Footer from "./components/footer";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);


  return (
    <Container>
      <Navbar />
      <Home />
      <Hr />
      <Skills />
      <Hr />
      <About />
      <Hr />
      <Projects />
      <Hr />
      <Contact />
      <Hr />
      <Footer />
    </Container>
  );
}
export default App;
