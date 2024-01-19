import React from 'react'
import Aside from '@/components/layout/navigation'
import '@/styles/skills.css';

export default function Skills() {
    return (
        <>
            <Aside />
            <section id='Skills'>
                <h3 className='skill-text'>Essas são algumas habilidades e Tecnologias que tenho conhecimento atualmente. </h3>
                <div className='skills'>
                    <Skill Skill="Linguagens de Marcação" capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown, desenvolvidos academicamente." />
                    <Skill Skill="Python" capacidades="Conhecimento em programação com Python, Estrutura de POO"/>
                    <Skill Skill="Java ( Estudando )" capacidades="Conhecimento em programação com Java, Estrutura de POO, em bibliotecas Spring Boot." />
                    <Skill Skill="Kotlin ( Estudando )" capacidades="Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown, desenvolvidos academicamente." />
                    <Skill Skill="Git e Github" capacidades="Conhecimento em Versionamento com Git, e Repositórios com Github."/>
                </div>
            </section>
        </>
    )
}

function Skill({ Skill, src, capacidades }) {
    return (
        <div className='skill'>
            <div className='skill-title'>    
                <img alt='skillImg' src={src} />
                <h2>{Skill}</h2>
            </div>
            <p className='skill-desc'>{capacidades}</p>
        </div>
    )
}