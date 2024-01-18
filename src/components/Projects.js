import React from 'react'
import '../styles/projects/projects.css'
import tools from '../static/icons8-tools-90.png'

export default function Projects() {
    return (
        <section>
            <h3 className='project-text'>Veja a Seguir alguns projetos que estou desenvolvendo ou já desenvolvi.</h3>
            <div className='projects'>
                <ItemProject desc="Projeto Desenvolvido em uma Squad em Sala de Aula com foco em práticar todo conteúdo estudado no semestre"/>
                <EmptyItemProject />
                <EmptyItemProject />
                <EmptyItemProject />
            </div>
        </section>
    )
}

function ItemProject({img, desc}) {
    return (
        <div className='project'>
            <img src={img} alt='' className='project-img'/>
            <div className='project-info'>{desc}</div>
        </div>
    );
}

function EmptyItemProject({}) {
    return (
        <div className='project'>
            <img src={tools} alt='' className='project-img'/>
            <div className='project-name'>Em breve</div>
        </div>
    );
}