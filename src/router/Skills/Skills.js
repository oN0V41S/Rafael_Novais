import React from 'react'
import './Skills.css';
import Nav from '../../components/layout/Nav';
import img1 from '../../static/nav/icons8-github-384.png'
// import itemSkill from './itemSkill';


function Skills(){
    return(
        <body className='home-back'>
            <main className="home">
             <Nav></Nav>
             <div className='desc-skills'>
                <h3>Essas São Algumas das minhas Habilidades Desenvolvidas. </h3>
             </div>
             <div className='skills'>
                <div className='item-skill'>
                    <div className='img-item'>
                        <img alt='' src={img1}/>
                    </div>
                    <div className='desc-item'>
                        <h4>HTML5, JavaScript e CSS3</h4>
                    </div>
                </div>
                <div className='item-skill'>
                    <div className='img-item'>
                        <img alt='' src={img1}/>
                    </div>
                    <div className='desc-item'>
                        <h4>HTML5, JavaScript e CSS3</h4>
                    </div>
                </div>
                <itemSkill/>
             </div>
            </main>
        </body>
    )
}

export default Skills;