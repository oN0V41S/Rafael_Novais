export default function ItemProject({ img, desc, tech, name }) {
  return (
    <div className="project">
      <img src={img} alt="" className="project-img" />
      <div className="project-info">
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <h2>Algumas tecnologias utilizadas: {tech}</h2>
      </div>
    </div>
  );
}