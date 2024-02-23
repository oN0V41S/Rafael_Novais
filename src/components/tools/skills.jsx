import db from "@/db";

export default function Skills() {
  const skillsList = db.skills;
  const frontEndList = skillsList.frontEnd;
  const backEndList = skillsList.backEnd;
  const linguagensList = skillsList.linguagens;
  const devOpsList = skillsList.devOps;

  const ItemSkill = ({ title, img, desc, children }) => (
    <li key={title} className="skill">
      <div>
        <img alt="skillImg" src={img} />
        <h1>{title}</h1>
      </div>
      <p>{desc}</p>
      <ul>{children}</ul>
    </li>
  );

  const SkillArea = ({ name, children }) => (
    <div className="skill-area">
      <h2>{name}</h2>
      <ul className="skill-list">{children}</ul>
    </div>
  );

  return (
    <section>
      <h1 className="title-page">Habilidades</h1>
      <div className="skill-container">
        <SkillArea id="FrontEnd" name="Front-End" list={frontEndList}>
          {frontEndList.map((frontEndItem) => (
            <ItemSkill
              key={frontEndItem.title}
              title={frontEndItem.title}
              desc={frontEndItem.desc}
              img={frontEndItem.img}
            />
          ))}
        </SkillArea>
        <SkillArea id="BackEnd" name="Back-End">
          {backEndList.map((backEndItem) => (
            <ItemSkill
              key={backEndItem.title}
              title={backEndItem.title}
              desc={backEndItem.desc}
              img={backEndItem.img}
            />
          ))}
        </SkillArea>
        <SkillArea id="Languages" name="Linguagens de Programação">
          {linguagensList.map((linguagenItem) => (
            <ItemSkill
              key={linguagenItem.title}
              title={linguagenItem.title}
              desc={linguagenItem.desc}
              img={linguagenItem.img}
            />
          ))}
        </SkillArea>
        <SkillArea id="DevTools" name="Ferramentas de Desenvolvimento">
          {devOpsList.map((devOpsItem) => (
            <ItemSkill
              key={devOpsItem.title}
              title={devOpsItem.title}
              desc={devOpsItem.desc}
              img={devOpsItem.img}
            />
          ))}
        </SkillArea>
      </div>
    </section>
  );
}
