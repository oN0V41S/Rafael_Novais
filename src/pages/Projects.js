import '@/styles/projects.css'
import DevWizard from '@/static/projects/devwizards.png'
import Aside from '../components/layout/navigation'

import { ItemProject, EmptyItemProject } from '../components/ItemProject';

export default function Projects() {
    return (
        <>
            <Aside />
            <section id='Projects'>
                <h3 className='project-text'>Veja a Seguir alguns projetos que estou desenvolvendo ou já desenvolvi.</h3>
                <div className='projects'>
                    <ItemProject name="DevWizards" tech="ReactJS, TailwindCSS, Figma, Trello" desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre" img={DevWizard} />
                    <EmptyItemProject />
                    <EmptyItemProject />
                    <EmptyItemProject />
                </div>
            </section>
        </>
    )
}

