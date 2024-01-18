import React from 'react'
import '../styles/skills/Skills.css';
import img1 from '../static/nav/icons8-github-384.png'

export default function Skills() {
    return (
        <section>
            <h3 className='skill-text'>Essas são algumas habilidades e Tecnologias que tenho conhecimento atualmente. </h3>
            <div className='skills'>
                <Skill Skill="Linguagens de Marcação"/>
                <Skill Skill="Pythoo"/>
            </div>
        </section>
    )
}

function Skill({Skill, Img}) {
    return (
        <div className='skill'>
            <img alt='skill image' src={Img} />
            <h2>{Skill}</h2>
        </div>
    )
}