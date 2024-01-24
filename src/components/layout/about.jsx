import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="contact aside-component">
      <h3>Contato</h3>
      <ul className="contact-list aside-list">
        <li>
          <AboutImg src="" name="Linkedin" href="https://www.linkedin.com/in/rafaelnovais042/" />
        </li>
        <li>
          <AboutImg src="" name="Github" href=""/>
        </li>
        <li>rafaelaugustonnovais@gmail.com</li>
        <li>(+55)11 9 98317761</li>
      </ul>
    </div>
  );
}

function AboutImg({ src, name, href }) {
  return (
    <a className="about-img aside-item" href={href}>
      <img className="aside-img" src={src} alt="aboutImg" />
      <h4>{name}</h4>
    </a>
  );
}
