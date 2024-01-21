export default function Skill({ Skill, src, capacidades }) {
  return (
    <div className="skill">
      <div className="skill-bar"> </div>
      <div className="skill-title">
        <img alt="skillImg" src={src} />
        <h2>{Skill}</h2>
      </div>
      <p className="skill-desc">{capacidades}</p>
    </div>
  );
}
