import ItemPlaylist from "@/components/playlist/playlist";

export default function Skills() {
  return (
    <section className="skills">
      <h1 className="title-page">Habilidades</h1>
      <div className="skill-list">
        <SkillArea id="FrontEnd" name="Front-End">
          <ItemSkill
            Skill="Next"
            capacidades="Desenvolvimento de Aplicações com a Biblioteca Next utilizando os principais recursos da biblioteca e outros pacotes."
            src={"https://img.icons8.com/color/48/nextjs.png"}
          />
          <ItemSkill
            Skill="React"
            capacidades="Familiaridade com a biblioteca criando aplicações com NodeJS, React-Hooks, react-router e outras bibliotecas utilizadas."
            src={"https://img.icons8.com/ultraviolet/40/react--v1.png"}
          />
          <ItemSkill
            Skill="SassCSS"
            capacidades="Criação de estilos com a biblioteca do SassCSS que possibilita a utilização de novos recursos para o CSS comum."
            src={"https://img.icons8.com/color/48/sass.png"}
          />
          <ItemSkill
            Skill="Linguagens de Marcação"
            capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown e outros."
            src={"https://img.icons8.com/glyph-neue/64/source-code.png"}
          />
        </SkillArea>
        <SkillArea id="BackEnd" name="Back-End">
          <ItemSkill
            Skill="Flask"
            capacidades="Criação de APIRest."
            src={"https://img.icons8.com/ios/50/flask.png"}
          />
          <ItemSkill
            Skill="Spring"
            capacidades="Spring Boot, Spring initilzr, API Rest, JPAs."
            src={"https://img.icons8.com/color/48/nextjs.png"}
          />
          <ItemSkill
            src="https://img.icons8.com/ios-filled/50/000000/database.png"
            Skill="SQL"
            capacidades="Gerenciar e Manipular banco de dados Relacionais, com as principais instruções SQL"
          />
        </SkillArea>
        <SkillArea id="Languages" name="Linguagens de Programação">
          <ItemSkill
            Skill="JavaScript"
            capacidades="Familiaridade com a linguagem, Fetch APIs, DOM."
            src={"https://img.icons8.com/color/48/javascript.png"}
          />
          <ItemSkill
            Skill="TypeScript"
            capacidades="Familiaridade com a linguagem,conhecimento em conceito de tipagem e POO."
            src={"https://img.icons8.com/color/48/typescript.png"}
          />
          <ItemSkill
            Skill="Python"
            capacidades="Familiaridade com a linguagem, Estrutura de POO."
            src={"https://img.icons8.com/color/48/python.png"}
          />
          <ItemSkill
            Skill="Java"
            capacidades="Familiaridade com a linguagem, Estrutura de POO."
            src={"https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"}
          />
          <ItemSkill
            Skill="Kotlin"
            capacidades="Familiaridade com a linguagem, Estrutura de POO"
            src={"https://img.icons8.com/color/48/kotlin.png"}
          />
        </SkillArea>
        <SkillArea id="DevTools" name="Ferramentas de Desenvolvimento">
          <ItemSkill
            src={"https://img.icons8.com/color/48/git.png"}
            Skill="Git e Github"
            capacidades="Familiaridade com git, e Gerenciamento de Repositórios com Github."
          />
          <ItemSkill
            src={"https://img.icons8.com/fluency/48/docker.png"}
            Skill="Docker"
            capacidades="Capacidades de criar imagens e conteiners do docker, e instância-lós."
          />
          <ItemSkill
            src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"}
            Skill="Postman"
            capacidades="Testes de solicitações HTTP e outros recursos da ferramenta."
          />
          
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

function ItemSkill({ Skill, src, capacidades }) {
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
