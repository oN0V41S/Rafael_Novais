import githubIcon from "@/static/icons/github.png";
import linkedinIcon from "@/static/icons/linkedin.png";
import emailIcon from "@/static/icons/email.png";

export default function Contact() {
  return (
    <div className="contact aside-component">
      <h3>Contato</h3>
      <ul className="contact-list aside-list">
        <li>
          <AboutLink
            src={linkedinIcon}
            name="Linkedin"
            href="https://www.linkedin.com/in/rafaelnovais042/"
          />
        </li>
        <li>
          <AboutLink
            src={githubIcon}
            name="Github"
            href="https://github.com/ON0V41S/"
          />
        </li>
        <li>
          <AboutLink
            src={emailIcon}
            name="Email"
            href="mailto:rafaelaugustonnovais@gmail.com"
          />
        </li>
      </ul>
    </div>
  );
}

function AboutLink({ src, name, href }) {
  return (
    <a className="about-img aside-item" href={href}>
      <img className="aside-img" src={src} alt="aboutImg" />
      <h4>{name}</h4>
    </a>
  );
}
