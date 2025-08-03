import Shape from "./shape";
import Hr from "./hr";

export default function About() {
  return (
   
       


    <section
      className="container-fluid py-2 px-0 px-lg-2 min-vh-100 overflow-hidden shadow position-relative dark"
      id="about"
    >
      <h1 className="linear-text text-center p-2">About Me</h1>
      <Shape width={130} height={130} left={"30px"} top={"30px"} />
      <Shape
        width={300}
        height={300}
        left={"15%"}
        top={"20%"}
        animation={"waveAnim 2.5s infinite"}
        opacity={0.5}
      />
      <Shape width={300} height={300} left={"80%"} top={"80%"} opacity={0.4} animation={"waveAnim 2.5s infinite"}/>
      <Shape width={130} height={130} left={"98%"} top={"98%"} />

      <section id="about" className="container">
        <div className="row d-flex justify-content-center">

<div className="col-md-12 col-lg-8 p-0" data-aos="fade-up">
 <div className="text-center">
   <h2 className="linear-text">
    
       Hi, I'm Shaikh Imran, a passionate Front-End Developer{" "}
     
   </h2>
   <h4 className="text-center">Based in Risod Maharashtra India.</h4>
   <p>
     I specialize in building responsive and interactive websites using
     modern web technologies like HTML, CSS, JavaScript, React, and
     Bootstarp. My goal is to create clean, efficient, and
     user-friendly digital experiences. I'm currently learning
     MERN and diving into animations and performance optimization. I
     love turning complex problems into simple, beautiful interfaces.
     When I'm not coding, I enjoy Learning new Technologies, or traveling. Let's build
     something amazing together!
   </p>
 </div>
</div>


        </div>
      </section>




      <section
        id="education"
        className="timeline-section"
        data-aos="fade-right"
      >
        <h2 className="section-title linear-text">Education</h2>
        <div className="timeline m-0">
          {/* <!-- Education Item --> */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <time className="timeline-date">2020 – 2023</time>
            <div className="timeline-content">
              <h3>Bachelor of Arts</h3>
              <p>Yashwantrao Chavan Maharashtra Open University</p>
            </div>
          </div>
          {/* <!-- /Education Item --> */}

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <time className="timeline-date">2024 – Current</time>
            <div className="timeline-content">
              <h3>Bachelor of Computer Application</h3>
              <p>Swami Ramanand Teerth Marathwada University – Nanded</p>
            </div>
          </div>
          {/* <!-- /Education Item --> */}
        </div>
      </section>

      <section
        id="experience"
        className="timeline-section"
        data-aos="fade-left"
      >
        <h2 className="section-title linear-text">Experience (Intern)</h2>
        <div className="timeline m-0">
          {/* <!-- Experience Item --> */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <time className="timeline-date">Feb 2024 – Oct 2024</time>
            <div className="timeline-content">
              <h3>Front-End Developer @ Samta Foundation</h3>
              <ul>
                <li>Maintained and redesigned user interfaces</li>
                <li>Added responsive design to existing projects</li>
              </ul>
              <p>
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap,
                a bit of PHP
              </p>
            </div>
          </div>
          {/* <!-- /Experience Item --> */}

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <time className="timeline-date">Nov 2024 – Current</time>
            <div className="timeline-content">
              <h3>Front-End Developer @ Visanet Software Pvt. Ltd.</h3>
              <p>
                <strong>About the Company:</strong> VISANET.IN provides
                high-quality affordable web hosting services & web applications
                for companies & govt.
              </p>
              <ul>
                <li>
                  Created responsive, mobile-friendly web pages using HTML5,
                  CSS3 & Bootstrap
                </li>
                <li>
                  Built interactive features (sliders, dropdowns, form
                  validations) with JavaScript
                </li>
                <li>Debugged and optimized website performance</li>
                <li>
                  Collaborated with senior developers on UI/UX improvements
                </li>
              </ul>
              <p>
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap,
                Git, GitHub
              </p>
            </div>
          </div>
          {/* <!-- /Experience Item --> */}
        </div>
      </section>
    </section>


    
  );
}
