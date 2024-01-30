import { Link } from 'react-router-dom'
import homeIcon from '@/static/icons/home.png'
import toolsIcon from '@/static/icons/tools.png'
import projectsIcon from '@/static/icons/project.png'

export default function Navigation() {
  return (
    <div className=' nav aside-component'>
        <ul className='aside-list'>
          <li> <NavLink name="Home" href='/' src={homeIcon} /> </li>
          <li> <NavLink name="Habilidades" href='/skills' src={toolsIcon} /> </li>
          <li> <NavLink name="Projetos" href='/projects' src={projectsIcon}/> </li>
        </ul>
    </div>
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