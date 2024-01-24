import { Link } from 'react-router-dom'
import home from '@/static/aside/nav/home.png'

export default function Navigation() {
  return (
        <ul id='Navigation' className='aside-list aside-component'>
          <li> <NavLink name="Home" href='/' src={home} /> </li>
          <li> <NavLink name="Habilidades" href='/skills' src='' /> </li>
          <li> <NavLink name="Projetos" href='/projects' src=''/> </li>
        </ul>
  )
}

function NavLink({name, href, src }) {
  return (
      <Link to={href} className='nav-link aside-item'>
          <img className='aside-img' src={src} alt='' />
          <h4>{name}</h4>
      </Link>
  )
}