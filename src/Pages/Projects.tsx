import { Link } from "react-router-dom";
import photo from "../../public/Screenshot 2026-03-25 220854.png";
import Delivery from "../../public/Screenshot 2026-04-07 035651.png";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  return (
    <div className="ps-4">
      <h1 className="text-3xl font-bold">Progetti</h1>
      <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4 px-5 py-5 items-stretch overflow-hidden">
        <ProjectCard
          src="https://todo-list-five-plum-14.vercel.app/"
          photo={photo}
          title="TodoList"
        />
        <Link to="/delivery-system">
          <ProjectCard photo={Delivery} title="PizzaTrack" framework="LARAVEL" css="BOOTSTRAP"/>
        </Link>
      </div>
    </div>
  );
}
