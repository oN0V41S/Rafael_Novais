export default function Skill({ Skill, src, capacidades }) {
  return (
    <div className="skill">
      <div className="skill-title">
        <img alt="skillImg" src={src} />
        <h4>{Skill}</h4>
      </div>
      <p className="skill-desc">{capacidades}</p>
    </div>
  );
}
