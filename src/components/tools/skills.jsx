import db from "@/db"

export default function Skills() {
  // Pegando dados do banco local 
  const skills = db.Skills;
  const frontEnd = skills.frontEnd;
  const backEnd = skills.backEnd;
  const linguagens = skills.linguagens;
  const devTools = skills.devTools;

  console.log(skills)
  return (
    <section className="skills">
      <h1 className="title-page">Habilidades</h1>
      <div className="skill-list">
        <SkillArea id="FrontEnd" name="Front-End">
          {frontEnd.map((skill) => (
            <ItemSkill title={skill.title} desc={skill.desc} img={skill.img} />
          ))}
        </SkillArea>
        <SkillArea id="BackEnd" name="Back-End">
          {backEnd.map((skill) => (
            <ItemSkill title={skill.title} desc={skill.desc} img={skill.img} />
          ))}
        </SkillArea>
        <SkillArea id="Languages" name="Linguagens de Programação">
          {linguagens.map((skill) => (
            <ItemSkill title={skill.title} desc={skill.desc} img={skill.img} />
          ))}
        </SkillArea>
        <SkillArea id="DevTools" name="Ferramentas de Desenvolvimento">
          {devTools.map((skill) => (
            <ItemSkill title={skill.title} desc={skill.desc} img={skill.img} />
          ))}
        </SkillArea>
      </div>
    </section>
  );
}

function SkillArea({ id, name, children }) {
  return (
    <div id={id} className="skill-area">
      <h2>{name}</h2>
      {children}
    </div>
  );
}

function ItemSkill({ title, img, desc }) {
  return (
    <div className="skill">
      <div>
        <img alt="skillImg" src={img} />
        <h1>{title}</h1>
      </div>
      <p>{desc}</p>
    </div>
  );
}
