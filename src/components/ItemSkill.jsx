export default function Skill({ Skill, src, capacidades }) {
  return (
    <div className="skill">
      <img alt="skillImg" src={src} />
      <h2>{Skill}</h2>
      <p className="skill-desc">{capacidades}</p>
    </div>
  );
}
