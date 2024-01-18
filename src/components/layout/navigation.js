import { Link } from 'react-router-dom'

import '@/styles/layout/aside.css'
import imgNav1 from '@/static/aside/github.png'
import imgNav2 from '@/static/aside/linkedin.png'
import iconHome from '@/static/aside/home.png'


export default function Aside() {
  return (
    <aside className='aside'>
      <Navigation/>
    </aside>
  );
}

function Navigation() {
  return (
      <div className='nav' id='Navigation'>
          <NavLink name="Home" href='/' src={iconHome} />
          <NavLink name="Habilidades" href='/skills' src='' />
          <NavLink name="Projetos" href='/projects' src=''/>
      </div>
  )
}

function NavLink({name, href, src }) {
  return (
      <Link to={href} className='nav-link'>
          <img className='nav-img' src={src} alt='' />
          <h1>{name}</h1>
      </Link>
  )
}