import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLaptop,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";
import Collapse from "bootstrap/js/dist/collapse";
import Card from "./card";
import Shape from "./shape";

const CARD_DATA = [
  {
    id: 1,
    title: "Html",
    icon: <FaHtml5 className="text-danger" />,
    description:
      "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.",
  },
  {
    id: 2,
    title: "Css",
    icon: <FaCss3 className="text-info" />,
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and positioning of elements.",
  },
  {
    id: 3,
    title: "Javascript",
    icon: <FaJs className="text-warning" />,
    description:
      "JavaScript (JS) is a programming language used to add interactivity and dynamic behavior to websites.",
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className="text-info" />,
    description:
      "React is a JavaScript library for building fast and interactive user interfaces using reusable components.",
  },
  {
    id: 5,
    title: "Bootstrap",
    icon: <FaBootstrap className="text-primary" />,
    description:
      "Bootstrap is a front-end framework that helps create responsive and visually consistent websites using pre-built CSS and JavaScript components.",
  },
  {
    id: 6,
    title: "Php",
    icon: <FaPhp className="text-primary" />,
    description:
      "PHP is a server-side scripting language used to develop dynamic and interactive web applications.",
  },
  {
    id: 7,
    title: "Node",
    icon: <FaNodeJs className="text-primary" />,
    description:
      "Node.js is a JavaScript runtime that allows you to run JavaScript code on the server side to build backend applications.",
  },
  {
    id: 8,
    title: "MySQL",
    icon: <FaDatabase />,
    description:
      "MySQL is an open-source relational database management system used to store, manage, and retrieve data for web applications.",
  },
  {
    id: 9,
    title: "Git",
    icon: <FaGitAlt className="text-danger" />,
    description:
      "Git is a version control system that tracks changes in code and allows multiple developers to collaborate efficiently.",
  },
  {
    id: 10,
    title: "Github",
    icon: <FaGithub />,
    description:
      "GitHub is a cloud-based platform for hosting and managing Git repositories, enabling collaboration and version control in software development.",
  },
  {
    id: 11,
    title: "UI Design",
    icon: <FaPalette className="text-info" />,
    description:
      "UI Design is the process of creating visually appealing and user-friendly interfaces for websites or applications.",
  },
  {
    id: 12,
    title: "Responsive Design",
    icon: <FaLaptop />,
    description:
      "Responsive Design is the approach of designing websites to adapt and look good on all screen sizes and devices.",
  },
  {
    id: 13,
    title: "Mobile First Approach",
    icon: <FaMobileAlt />,
    description:
      "Mobile First Approach is a design strategy that prioritizes designing for mobile devices before scaling up to larger screens.",
  },
];

const SKILL_DATA = [
  { id: 1, title: "HTML/CSS", value: 90, bg: "bg-danger" },
  { id: 2, title: "Javascript", value: 70, bg: "bg-warning" },
  { id: 3, title: "React.js", value: 50, bg: "bg-info" },
  { id: 4, title: "Responsive Design", value: 80, bg: "bg-info" },
  { id: 5, title: "Node.js", value: 30 },
  { id: 6, title: "PHP", value: 50 },
];

export default function CardList() {
  return (
    <div
      className="container-fluid py-1 shadow m-vh-100 overflow-hidden position-relative dark"
      id="skill"
    >
      <div className="text-center my-4">
        <h1 className="linear-text">My Skills</h1>
      </div>
      <Shape width={300} height={300} top={100} left={100} />
      <div className="row grid-container p-2">
        {CARD_DATA.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            text={card.description}
            icon={card.icon}
          ></Card>
        ))}
      </div>

      <SkillProgress />
    </div>
  );
}

function SkillProgress() {
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const skillChunks = chunkArray(SKILL_DATA, 3);

  return (
    <div className="container-fluid my-3 py-3 rounded">
      <h1 className="text-center linear-text">Skills Progress</h1>
      <p className="text-center mb-4">
        skills which are currently in progress...
      </p>
      {skillChunks.map((chunk, i) => (
        <div className="row" key={i}>
          {chunk.map((progress) => (
            <div className="col-md-4 mb-3" key={progress.id}>
              <Card title={progress.title} arial-valuemin={0}>
                <div
                  className="progress"
                  role="progressbar"
                  data-aos="fade-right"
                  style={{ height: "20px" }}
                >
                  <div
                    className={`progress-bar progress-bar-striped fw-bold ${progress.bg}`}
                    style={{ width: `${progress.value}%` }}
                  >
                    {progress.value}%
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
