export default function ItemSkill({ Skill, src, capacidades }) {
  return (
    <div className="skill">
      <div>
        <img alt="skillImg" src={src} />
        <h1>{Skill}</h1>
      </div>
      <p>{capacidades}</p>
    </div>
  );
}
