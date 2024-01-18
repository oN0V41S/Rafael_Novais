import React from 'react'
import '../styles/projects/projects.css'
import tools from '../static/icons8-tools-90.png'
import DevWizard from '../static/projects/devwizards.png'

export default function Projects() {
    return (
        <section id='Projects'>
            <h3 className='project-text'>Veja a Seguir alguns projetos que estou desenvolvendo ou já desenvolvi.</h3>
            <div className='projects'>
                <ItemProject name="DevWizards" tech="ReactJS, TailwindCSS, Figma, Trello" desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre" img={DevWizard} />
                <EmptyItemProject />
                <EmptyItemProject />
                <EmptyItemProject />
            </div>
        </section>
    )
}

function ItemProject({ img, desc, tech, name }) {
    return (
        <div className='project'>
            <img src={img} alt='' className='project-img' />
            <div className='project-aux'>{name}</div>
            <div className='project-info'>
                <h4 >{desc}</h4>
                <h5>Algumas tecnologias utilizadas: {tech}</h5>
            </div>
        </div>
    );
}

function EmptyItemProject({ }) {
    return (
        <div className='project'>
            <img src={tools} alt='' className='project-empty' />
            <div className='project-name'>Em breve</div>
        </div>
    );
}