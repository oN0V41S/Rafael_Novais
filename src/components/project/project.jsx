import ItemProject from "@/components/project/ItemProject";
import DevWizard from "@/static/projects/devwizards.png";

export default function Project() {
  return (
    <section className="project">
      <h1 className="title-page">Projetos</h1>
      <div className="project-list">
        <ItemProject
          img={DevWizard}
          name="DevWizards"
          tech="ReactJS, TailwindCSS, Figma, Trello"
          desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre do Curso de Desenvolvimento de Sistemas"
        />
      </div>
    </section>
  );
}
