import React from 'react'
import '@/styles/skills.css';
import Aside from '@/components/layout/navigation'

export default function Skills() {
    return (
        <>
            <Aside />
            <section id='Skills'>
                <h3 className='skill-text'>Essas são algumas habilidades e Tecnologias que tenho conhecimento atualmente. </h3>
                <div className='skills'>
                    <Skill Skill="Linguagens de Marcação" />
                    <Skill Skill="Pythoo" />
                </div>
            </section>
        </>
    )
}

function Skill({ Skill, src }) {
    return (
        <div className='skill'>
            <img alt='skillImg' src={src} />
            <h2>{Skill}</h2>
        </div>
    )
}