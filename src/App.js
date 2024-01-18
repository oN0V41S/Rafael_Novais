import React from 'react'
import './styles/App.css'
import Nav from './components/layout/Nav.js';
import Title from "./components/title.js";
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';

export default function App(){
    return(
    <body className='home-back'>
        <main className='home'>
            <Nav/>
            <Title></Title>
            <Projects></Projects>
            <Skills></Skills>
        </main>
    </body>
    );
}
