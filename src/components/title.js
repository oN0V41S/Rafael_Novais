import '../styles/title/title.css'
import { Link } from 'react-router-dom';

export default function Title() {
  return (
    <section className='title'>
      <h3 className='title-text'> <strong>Olá</strong> Meu nome é Rafael Novais tenho 17 anos, sou apaixonado por programação desde os 14 anos, Sou Desenvolvedor de Sistemas pela Escola Senai, e estou constantemente </h3>
      <Nav />
    </section>
  )
}

function Nav() {
  return (
    <nav className='nav'>
      <a className='nav-link' href='#Projects'>Projetos</a>
      <a className='nav-link' href='#Skills'>Habilidades e Tecnologias</a>
      <a className='nav-link' href='#'>Contato</a>
    </nav>
  )
}