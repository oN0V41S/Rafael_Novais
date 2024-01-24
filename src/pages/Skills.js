import React from "react";
import Aside from "@/components/layout/aside";
import Skill from "@/components/ItemSkill";

export default function Skills() {
  return (
    <main>
      <Aside />
      <section>
        <div className="skill-text">
          Habilidades
          <h1>Essas são algumas habilidades e Tecnologias que tenho conhecimento ou estou estudando no momento.</h1>
        </div>
        <div className="skills">
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
    </main>
  );
}
