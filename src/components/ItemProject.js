import tools from "@/static/tools.png";

export function ItemProject({ img, desc, tech, name }) {
  return (
    <div className="project">
      <img src={img} alt="" className="project-img" />
      <div className="project-aux">{name}</div>
      <div className="project-info">
        <h4>{desc}</h4>
        <h5>Algumas tecnologias utilizadas: {tech}</h5>
      </div>
    </div>
  );
}

export function EmptyItemProject() {
  return (
    <div className="project">
      <img src={tools} alt="" className="project-empty" />
      <div className="project-name">Em breve</div>
    </div>
  );
}
