import { Link } from "react-router-dom";

import reactIcon from "@/static/skills/reactjs.png";
import jSIcon from "@/static/skills/javascript.png";
import javaIcon from "@/static/skills/java.png";

export default function TopSkill() {
  return (
    <div className="topSkill aside-component">
      <h3>Top Habilidades</h3>
      <Link to="/skills">
        <ul className="topSkill-list aside-list">
          <li>
            <Skill src={reactIcon} name="React.JS" />
          </li>
          <li>
            <Skill src={jSIcon} name="JavaScript" />
          </li>
          <li>
            <Skill src={javaIcon} name="java" />
          </li>
        </ul>
      </Link>
    </div>
  );
}

function Skill({ src, name }) {
  return (
    <div className="topSkill-item aside-item">
      <img src={src} alt="imgSkill" className="aside-img" />
      <h5>{name}</h5>
    </div>
  );
}
