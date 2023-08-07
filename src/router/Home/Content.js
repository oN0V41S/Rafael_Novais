import './Content.css'
import { Link } from 'react-router-dom';

function Content(){
    return(
        <section className='content'>
          <div className='biography'>
            <h1 className='title-biography'>Bem Vindo,</h1>
            <p className='content-biography'>Meu nome é Rafael Novais tenho 16 anos, Atualmente sou Desenvolvedor Front-End, concluindo curso de Introdução a Desenvolvimento Web, tenho interesse em futuramente ser um Desenvolvedor Full-Stack.</p>
          </div>
          <div className='menu'>
            <Link className='link-menu' to='/Projects'>Projetos</Link>
            <Link className='link-menu' to='/Skills'>Habilidades</Link>
          </div>
        </section>
    )
}

export default Content;