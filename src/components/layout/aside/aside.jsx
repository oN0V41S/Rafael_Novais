import { Link } from "react-router-dom";

// Icones
import homeIcon from "@/static/icons/home.png";
import toolsIcon from "@/static/icons/tools.png";
import projectsIcon from "@/static/icons/project.png";
import linkedinIcon from "@/static/icons/social/linkedin.png";
import githubIcon from "@/static/icons/social/github.png";
import emailIcon from "@/static/icons/social/email.png";

export default function LayoutAside() {
  return (
    <aside className="aside">
      <Navigation />
      <TopSkill />
      <Contact />
    </aside>
  );
}

function AsideLink({ src, name, href }) {
  return (
    <a className="aside-item" href={href}>
      <img className="aside-img" src={src} alt="aboutImg" />
      <h1>{name}</h1>
    </a>
  );
}

function Navigation() {
  return (
    <div className="nav aside-component">
      <ul className="aside-list">
        <li>
          {" "}
          <AsideLink name="Home" href="/" src={homeIcon} />{" "}
        </li>
        <li>
          {" "}
          <AsideLink name="Habilidades" href="/skills" src={toolsIcon} />{" "}
        </li>
        <li>
          {" "}
          <AsideLink name="Projetos" href="/projects" src={projectsIcon} />{" "}
        </li>
      </ul>
    </div>
  );
}

function TopSkill() {
  return (
    <div id="topSkill" className="aside-component">
      <h3>Top Habilidades</h3>
      <Link to="/skills">
        <ul className="aside-list">
          <li>
            <AsideLink
              src={"https://img.icons8.com/ultraviolet/40/react--v1.png"}
              name="React.JS"
            />
          </li>
          <li>
            <AsideLink
              src={"https://img.icons8.com/color/48/javascript.png"}
              name="JavaScript"
            />
          </li>
          <li>
            <AsideLink
              src={
                "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
              }
              name="java"
            />
          </li>
        </ul>
      </Link>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact aside-component">
      <h3>Contato</h3>
      <ul className="contact-list aside-list">
        <li>
          <AsideLink
            src={linkedinIcon}
            name="Linkedin"
            href="https://www.linkedin.com/in/rafaelnovais042/"
          />
        </li>
        <li>
          <AsideLink
            src={githubIcon}
            name="Github"
            href="https://github.com/ON0V41S/"
          />
        </li>
        <li>
          <AsideLink
            src={emailIcon}
            name="Email"
            href="mailto:rafaelaugustonnovais@gmail.com"
          />
        </li>
      </ul>
    </div>
  );
}
