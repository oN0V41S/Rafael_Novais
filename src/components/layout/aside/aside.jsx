import Link from "next/link";
import homeIcon from "@/static/icons/home.png";
import toolsIcon from "@/static/icons/tools.png";
import projectsIcon from "@/static/icons/project.png";
import linkedinIcon from "@/static/icons/social/linkedin.png";
import githubIcon from "@/static/icons/social/github.png";
import emailIcon from "@/static/icons/social/email.png";

export default function LayoutAside() {
  const AsideItem = ({ src, name, href }) => (
    <li>
    <Link className="aside-item" href={href}>
      <img className="aside-img" src={src} alt="aboutImg" />
      <h1>{name}</h1>
    </Link>
    </li>
  );

  const AsideComponent = ({ className, children, subtitle }) => (
    <div className="nav aside-component">
      <h3>{subtitle}</h3>
      <ul className="aside-list">{children}</ul>
    </div>
  );

  return (
    <aside className="aside">
      <AsideComponent id="navComponent">
          <AsideItem name="Home" href="/" src={homeIcon} />{" "}
          <AsideItem name="Habilidades" href="/skills" src={toolsIcon} />{" "}
          <AsideItem name="Projetos" href="/projects" src={projectsIcon} />{" "}
      </AsideComponent>
      <AsideComponent id="skillsComponent" subtitle="Habilidade">
          <AsideItem
            src={"https://img.icons8.com/ultraviolet/40/react--v1.png"}
            name="React.JS"
            href={"/skills"}
          />
          <AsideItem
            src={"https://img.icons8.com/color/48/javascript.png"}
            name="JavaScript"
            href={"/skills"}
          />
          <AsideItem
            src={"https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"}
            name="java"
            href={"/skills"}
          />
      </AsideComponent>
      <AsideComponent id="contactComponent" subtitle="Contato">
          <AsideItem
            src={linkedinIcon}
            name="Linkedin"
            href="https://www.linkedin.com/in/rafaelnovais042/"
          />
          <AsideItem
            src={githubIcon}
            name="Github"
            href="https://github.com/ON0V41S/"
          />
          <AsideItem
            src={emailIcon}
            name="Email"
            href="mailto:rafaelaugustonnovais@gmail.com"
          />
      </AsideComponent>
    </aside>
  );
}
