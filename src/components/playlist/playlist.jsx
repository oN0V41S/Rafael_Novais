import { Link } from "react-router-dom";

import toolsIcon from "@/static/icons/tools.png"
import projectIcon from "@/static/icons/project.png"

export default function Playlist() {
  return (
    <section className="playlist">
      <div className="playlist-list">
        <ItemPlaylist
          src={toolsIcon}
          href="/skills"
          name="Tecnologias e Ferramentas"
        />
        <ItemPlaylist
          src={projectIcon}
          href="/projects"
          name="Projetos"
        />
      </div>
    </section>
  );
}


function ItemPlaylist({ src, name, desc, href }) {
  return (
    <Link to={href} className="playlist-item">
        <span className="playlist-bar" />
      <div className="playlist-title">
        <img src={src} alt="" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

