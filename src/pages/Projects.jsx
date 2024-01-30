import Layout from "@/components/layout/layout";
import ItemProject from "@/components/project/ItemProject";

import DevWizard from "@/static/projects/devwizards.png";

export default function Projects() {
  return (
    <>
      <Layout>
        <section className="project">
          <h1 className="project-title">Projetos</h1>
          <div className="project-list">
            <ItemProject
              img={DevWizard}
              name="DevWizards"
              tech="ReactJS, TailwindCSS, Figma, Trello"
              desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre"
            />
            <ItemProject
              img=""
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
