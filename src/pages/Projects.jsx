import DevWizard from '@/static/projects/devwizards.png'
import Aside from '@/components/layout/aside'
import ItemProject from '@/components/ItemProject'
import tools from '@/static/projects/tools.png'

export default function Projects() {
    return (
        <main>
            <Aside />
            <section>
                <h3 className='project-text'>Veja a Seguir alguns projetos que estou desenvolvendo ou já desenvolvi.</h3>
                <div className='projects'>
                    <ItemProject img={DevWizard} name="DevWizards" tech="ReactJS, TailwindCSS, Figma, Trello" desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre" />
                    <div className="project">
                        <img src={tools} alt="" className="project-img" />
                        <div className="project-info">
                            <h1>Em breve</h1>
                            <h2>Em Breve mais informações</h2>
                            <h2>Algumas tecnologias utilizadas: Em Breve</h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

