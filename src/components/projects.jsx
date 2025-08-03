import TodoImg from "../assets/images/todo-list.png";
import ClockImg from "../assets/images/analog-clock.png";
import CalciImg from "../assets/images/perc-calci.png";
import ExpandableCardImg from "../assets/images/expandalbe_card.png";
import Card from "./card";
import Button from "./button";

const PROJECTS = [
  {
    id: 1,
    title: "Discount Calculator",
    img: CalciImg,
    text: "A simple discount calculator designed for calculate the discount and the amount after discount",
    tech: "HTML, CSS, Javascript",
    link: "https://shaikh-imran-percentage-caculator.netlify.app/",
  },
  {
    id: 2,
    title: "Expandable Cards",
    img: ExpandableCardImg,
    text: "A simple and beutifull UI card slider among with text and button",
    tech: "HTML, CSS, Javascript",
    link: "https://shaikh-imran-expandable-cards.netlify.app/",
  },
  {
    id: 3,
    title: "Analog Clock",
    img: ClockImg,
    text: "A beutifull and good looking UI a digital analog clock with date and time and also included some feutures like light or dark mode and changeable theme",
    tech: "HTML CSS, Javascript",
    link: "https://shaikh-imran-analog-clock.netlify.app/",
  },
  {
    id: 4,
    title: "Todo List",
    img: TodoImg,
    text: "A fully functional Todo list among with tabs, user can add todo , delete todo, also user can edit and mark as complete, a dark mode feuture also included",
    link: "https://shaikh-imran-todo-list.netlify.app/",
  },
];
export default function Projects() {
  return (
    <section
      className="container-fluid min-vh-100 w-100 px-1 py-3"
      id="project"
    >
      <h1 className="linear-text text-center py-2">Projects</h1>
      <div className="row h-100 card-grid-container mt-5">
        {PROJECTS.map((project) => (
            <Card 
            className='bg-danger'
            key={project.id}
            img={project.img}
            title={project.title}
            text={project.text}
            >
                <Button href={project.link}>view Live</Button>

            </Card>
        ))}
        {/* <div className="card shadow p-0 border">
          <img
            src={TodoImg}
            alt="image"
            className="card-img-top border-bottom"
          />
          <div className="card-body">
            <h5 className="card-title">ToDo List</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              unde animi officiis in nesciunt sed nisi dolor aliquam magni!
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Know More
            </a>
          </div>
        </div>

        <div className="card shadow p-0 border">
          <img src={ClockImg} alt="image" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">ToDo List</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              unde animi officiis in nesciunt sed nisi dolor aliquam magni!
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Know More
            </a>
          </div>
        </div>

        <div className="card shadow p-0 border">
          <img src={CalciImg} alt="image" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">ToDo List</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              unde animi officiis in nesciunt sed nisi dolor aliquam magni!
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Know More
            </a>
          </div>
        </div>

        <div className="card shadow p-0 border">
          <img src={ExpandableCardImg} alt="image" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">ToDo List</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure
              unde animi officiis in nesciunt sed nisi dolor aliquam magni!
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Know More
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
