import React from 'react'
import './Project.css'
import Nav from "../../components/layout/Nav";
import ItemProject from './ItemProject.js'

function Projects(){
    return(
        <body className='home-back'>
            <main className="home">
                <Nav/>
                <div className='desc-projects'>
                    <h3>Esses são alguns dos projetos Desenvolidos por mim <br/> E por as respectivas equipes de trabalho</h3>
                </div>
                <div className='Projects'>
                    <ItemProject tittle="Camila Modas" desc="Camila Modas, foi um Trabalho de Conclusão de Curso que desenvolvi junto ao meu grupo, usando apenas as Ferramentas Básicas do HTML,CSS e JavaScript"/>
                    <ItemProject tittle="Gestão Fácil" desc="Gestão Fácil é o proeto no qual eu e minha equipe buscamos desenvolver um sistema de Frete para Empresa. Para isso usamos React, e algumas bibliotecas como Tailwind, e para manipular as informações estamos desenvolvendo um Banco de Dados."/>
                </div>
            </main>
        </body>

    )
}

export default Projects;