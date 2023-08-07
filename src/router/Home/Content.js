import './Content.css'
import { Link } from 'react-router-dom';

function Content(){
    return(
        <section className='content'>
          <div className='biography'>
            <h1 className='title-biography'>Bem Vindo,</h1>
            <p className='content-biography'>Meu nome é Rafael Novais tenho 16 anos, Atualmente sou Desenvolvedor Front-End, com um curso de Desenvolvimento Web, e atualmente estou fazendo tecnólogo em Desenvolvimento de Sistemas.</p>
          </div>
          <div className='menu'>
            <Link className='link-menu' to='/Projects'>Projetos</Link>
            <Link className='link-menu' to='/Skills'>Habilidades</Link>
          </div>
        </section>
    )
}

export default Content;