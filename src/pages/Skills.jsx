import Layout from "@/components/layout";
import Skill from "@/components/ItemSkill";

export default function Skills() {
  return (
    <>
      <Layout>
        <section className="Skills">
          <div className="skills-title">
            <h1>Habilidades</h1>
            <p>
              Essas são algumas habilidades e Tecnologias que tenho conhecimento
              ou estou estudando no momento.
            </p>
          </div>
          <div className="skill-list">
            <Skill
              Skill="Linguagens de Marcação"
              capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown, desenvolvidos academicamente."
            />
            <Skill
              Skill="Python"
              capacidades="Conhecimento em programação com Python, Estrutura de POO"
            />
            <Skill
              Skill="Java ( Estudando )"
              capacidades="Conhecimento em programação com Java, Estrutura de POO, em bibliotecas Spring Boot."
            />
            <Skill
              Skill="Kotlin ( Estudando )"
              capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown, desenvolvidos academicamente."
            />
            <Skill
              Skill="Git e Github"
              capacidades="Conhecimento em Versionamento com Git, e Repositórios com Github."
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
