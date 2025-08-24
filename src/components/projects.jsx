import TodoImg from "../assets/images/todo-list.png";
import ClockImg from "../assets/images/analog-clock.png";
import CalciImg from "../assets/images/perc-calci.png";
import ExpandableCardImg from "../assets/images/expandalbe_card.png";
import quizImg from "../assets/images/quiz-app.png"
import Card from "./card";
import Button from "./button";

const PROJECTS = [
  {
    id: 1,
    title: "Discount Calculator",
    img: CalciImg,
    text: "A simple calculator to find discounts and final prices, built to practice JavaScript form handling and basic DOM manipulation.",
    tech: "HTML, CSS, Javascript",
    link: "https://shaikh-imran-percentage-caculator.netlify.app/",
  },
  {
    id: 2,
    title: "Expandable Cards",
    img: ExpandableCardImg,
    text: "A clean and interactive card slider with expandable sections, created to improve UI/UX design skills and DOM event handling.",
    tech: "HTML, CSS, Javascript",
    link: "https://shaikh-imran-expandable-cards.netlify.app/",
  },
  {
    id: 3,
    title: "Analog Clock",
    img: ClockImg,
    text: "A functional analog clock with date, time, light/dark mode, and themes, built to practice JavaScript intervals, CSS styling, and UI logic.",
    tech: "HTML CSS, Javascript",
    link: "https://shaikh-imran-analog-clock.netlify.app/",
  },
  {
    id: 4,
    title: "Todo List",
    img: TodoImg,
    text: "A simple task management app that saves user data in browser local storage, built to practice state management and CRUD operations.",
    link: "https://shaikh-imran-todo-list.netlify.app/",
  },
  {
    id: 5,
    title: "Quiz Application",
    img: quizImg,
    text: "An interactive quiz application with score tracking, designed to practice React components, props, and state handling.",
    link: "https://shaikh-imran-quiz-application.netlify.app/",
  },
];
export default function Projects() {
  return (
    <section
      className="container-fluid min-vh-100 w-100 px-1 py-3"
      id="project"
    >
      <h1 className="linear-text text-center py-2 mb-0 pb-0">Projects</h1>
      <p className="text-center">These projects were created to strengthen my coding skills and practice core concepts in JavaScript and React by building small, functional applications.</p>
      <div className="row h-100 card-grid-container mt-5">
        {PROJECTS.map((project) => (
            <Card 
            className='bg-danger border'
            key={project.id}
            img={project.img}
            title={project.title}
            text={project.text}
            >
                <Button href={project.link} target={"_blank"}>view Live</Button>

            </Card>
        ))}
        
      </div>
    </section>
  );
}
