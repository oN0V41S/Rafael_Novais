import Layout from "@/components/layout";
import ItemProject from "@/components/ItemProject";

import DevWizard from "@/static/projects/devwizards.png";
import tools from "@/static/projects/tools.png";

export default function Projects() {
  return (
    <>
      <Layout>
        <section className="project">
          <div className="project-title">
            <h1>Projetos</h1>
            <h4>
              Veja a Seguir alguns projetos que estou desenvolvendo ou já
              desenvolvi.
            </h4>
          </div>
          <div className="project-list">
            <ItemProject
              img={DevWizard}
              name="DevWizards"
              tech="ReactJS, TailwindCSS, Figma, Trello"
              desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre"
            />
            <ItemProject
              img={tools}
              name="Em breve"
              tech="Em breve"
              desc="Em breve"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
