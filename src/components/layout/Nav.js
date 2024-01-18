import '../../styles/layout/Nav.css'
import imgNav1 from '../../static/nav/icons8-github-384.png'
import imgNav2 from '../../static/nav/icons8-linkedin-240.png'

export default function Nav() {
  return (
    <header className='navigation'>
      <h3 className='link-text'>Rafael Novais</h3>
      <div className='nav-link'>
        <NavIcon link="https://github.com/oN0V41S" img={imgNav1} />
        <NavIcon link="https://www.linkedin.com/in/rafael-novais-8bb770236/" img={imgNav2} />
      </div>
    </header>
  );
}

function NavIcon({ img, link }) {
  return (
    <a href={link} className='img-nav'>
      <img alt='' src={img} width={"100%"} />
    </a>
  )
}
