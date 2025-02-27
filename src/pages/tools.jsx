import Layout from "@/components/layout/layout";
import db from "@/db.json";

export default function Tools() {
  const skillsList = db.skills;
  const frontEndList = skillsList.frontEnd;
  const backEndList = skillsList.backEnd;
  const linguagensList = skillsList.linguagens;
  const devOpsList = skillsList.devOps;

  return (
    <Layout>
        <h1 className="title-page">Habilidades</h1>
        <div className="skill-container">
          <SkillArea id="FrontEnd" title="Front-End" data={skillsList.frontEnd}>
          </SkillArea>
          <SkillArea id="BackEnd" title="Back-End">
            {backEndList.map((backEndItem) => (
              <ItemSkill
                key={backEndItem.title}
                title={backEndItem.title}
                desc={backEndItem.desc}
                img={backEndItem.img}
              />
            ))}
          </SkillArea>
          <SkillArea id="Languages" title="Linguagens de Programação">
            {linguagensList.map((linguagenItem) => (
              <ItemSkill
                key={linguagenItem.title}
                title={linguagenItem.title}
                desc={linguagenItem.desc}
                img={linguagenItem.img}
              />
            ))}
          </SkillArea>
          <SkillArea id="DevTools" title="Ferramentas de Desenvolvimento">
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
    </Layout>
  );
}

const ItemSkill = ({ title, img, desc, children }) => {
  <li key={title} className="skill">
    <div>
      <img alt="skillImg" src={img} />
      <h1>{title}</h1>
    </div>
    <p>{desc}</p>
    <ul>{children}</ul>
  </li>
};

const SkillArea = ({ title, children, data }) => {
  return (
    <div className="skill-area">
      <h2>{title}</h2>
      <ul className="skill-list">
        {data.map((item) => (
          <ItemSkill
            key={item.title}
            title={item.title}
            desc={item.desc}
            img={item.img}
            />
        ))}        
        {children}
        </ul>
    </div>
  )
};
