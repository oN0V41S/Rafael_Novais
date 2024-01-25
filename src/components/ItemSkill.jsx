export default function Skill({ Skill, src, capacidades }) {
  return (
    <div className="skill">
      <div>
        <img alt="skillImg" src={src} />
        <h4>{Skill}</h4>
      </div>
      <p>{capacidades}</p>
    </div>
  );
}
