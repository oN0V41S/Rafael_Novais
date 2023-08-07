import React from 'react'
import './Home.css'
import Nav from "../../components/layout/Nav";
import Content from "./Content";

function Home(){
    return(
    <body className='home-back'>
        <main className='home'>
            <Nav/>
            <Content></Content>
        </main>
    </body>
    );
}

export default Home;