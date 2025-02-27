import Layout from "@/components/layout/layout";
import db from "@/db.json"
import { Link } from "react-router-dom";

export default function Projects() {
  const projectsList = db.projects;
   return (
    <Layout>
        <h1 className="title-page">Projetos</h1>
        <ul className="project-list">
          {projectsList.map((projectItem) => (
            <ItemProject
              name={projectItem.name}
              tech={projectItem.tech}
              desc={projectItem.desc}
              href={projectItem.href}
            />
          ))}
        </ul>
    </Layout>
    );
  }
  
  const ItemProject = ({ img, desc, tech, name, href }) => {
    return (
      <Link className="project-item" to={href}>
        <h1>{name}</h1>
        <div>
          <p>{desc}</p>
          <p>
            {" "}
            <strong>Tecnologias e Ferramentas</strong> <br />
            {tech}
          </p>
        </div>
        <h3>Clique para abrir o Github</h3>
      </Link>
    );
  };
  