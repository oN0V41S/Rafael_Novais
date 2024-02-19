import { Link } from "react-router-dom";

const projects = [
  {
    name: "DevWizards",
    img: "https://github.com/oN0V41S/Rafael_Novais/blob/main/src/static/projects/devwizards.png?raw=true",
    tech: "ReactJS, TailwindCSS, Figma, Trello",
    desc: "Participei da criação de uma página WEB stática que tem como objetivo mostrar as principais habilidades e conhecimentos desenvolvidos nas unidades currículares do 1o Semestre do Curso de Desenvolvimento de Sistemas no Senai.",
    href: "https://github.com/oN0V41S/ProjetoIntegrador",
  },
];

export default function Project() {
  return (
    <section className="project">
      <h1 className="title-page">Projetos</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ItemProject
            name={project.name}
            img={project.img}
            tech={project.tech}
            desc={project.desc}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}

const ItemProject = ({ img, desc, tech, name, href }) => {
  return (
    <Link className="project-item" to={href}>
      <img src={img} alt={name} />
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
