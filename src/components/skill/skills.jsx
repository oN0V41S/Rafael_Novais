import ItemSkill from "@/components/skill/ItemSkill";

import limaIcon from "@/static/skills/lima.png";
import pythonIcon from "@/static/skills/python.svg";
import javaIcon from "@/static/skills/java.png";
import gitIcon from "@/static/skills/git.svg";
import kotlinIcon from "@/static/skills/kotlin.svg";
import reactIcon from "@/static/skills/reactjs.png";
import nextIcon from "@/static/skills/nextjs.svg";
import sassIcon from "@/static/skills/sass.svg";
import jsIcon from "@/static/skills/javascript.png";

export default function Skills() {
  return (
    <section className="Skills">
      <h1 className="title-page">Habilidades</h1>
      <div className="skill-list">
        <ItemSkill
          Skill="SassCSS"
          capacidades="Criação de estilos com a biblioteca do SassCSS que possibilita a utilização de novos recursos para o CSS comum."
          src={sassIcon}
        />
        <ItemSkill
          Skill="NextJS"
          capacidades="Desenvolvimento de Aplicações com a Biblioteca Next utilizando os principais recursos da biblioteca e outros pacotes."
          src={nextIcon}
        />
        <ItemSkill
          Skill="ReactJS"
          capacidades="Desenvolvimento de Aplicações com a Biblioteca React e seus principais recursos e outros pacotes."
          src={reactIcon}
        />
        <ItemSkill
          Skill="JavaScript"
          capacidades="Criação de estilos com a biblioteca do SassCSS que possibilita a utilização de novos recursos para o CSS comum."
          src={jsIcon}
        />
        <ItemSkill
          Skill="Python"
          capacidades="Conhecimento em programação com Python, Estrutura de POO"
          src={pythonIcon}
        />
        <ItemSkill
          Skill="Java ( Estudando )"
          capacidades="Conhecimento em programação com Java, Estrutura de POO, e biblioteca Spring Boot."
          src={javaIcon}
        />
        <ItemSkill
          Skill="Kotlin ( Estudando )"
          capacidades="Conhecimento em programação com Kotlin, Estrutura de POO, e biblioteca Spring Boot."
          src={kotlinIcon}
        />
        <ItemSkill
          Skill="Git e Github"
          capacidades="Conhecimento em Versionamento com Git, e Repositórios com Github."
          src={gitIcon}
        />
        <ItemSkill
          Skill="Linguagens de Marcação"
          capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown, desenvolvidos academicamente."
          src={limaIcon}
        />
      </div>
    </section>
  );
}
