import './Nav.css'
import imgNav1 from '../../static/nav/icons8-github-384.png'
import imgNav2 from '../../static/nav/icons8-linkedin-240.png'
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <nav className='navigation'>
          <Link className='link-nav' to='/'>Novais</Link>
          <div className='nav-midia'>
            <a href='https://github.com/oN0V41S'> <img alt='' className='img-nav' width='width:28px' src={imgNav1}/> </a>
            <a href='https://www.linkedin.com/in/rafael-novais-8bb770236/'> <img alt='' className='img-nav' width='width:28px' src={imgNav2}/> </a>
          </div>
        </nav>
    );
}

export default Nav;