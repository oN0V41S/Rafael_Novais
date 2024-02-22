import { Link } from "react-router-dom";

import toolsIcon from "@/static/icons/tools.png"
import projectIcon from "@/static/icons/project.png"

export default function Playlist() {
  return (
    <section>
      <div className="playlist-list">
        <ItemPlaylist
          name="Habilidades"
          href="/skills"
          src={toolsIcon}
        />
        <ItemPlaylist
          name="Projetos"
          href="/projects"
          src={projectIcon}
        />
      </div>
    </section>
  );
}


const ItemPlaylist = ({ src, name, href }) => (
    <Link to={href} className="playlist-item">
        <span className="playlist-bar" />
      <div className="playlist-title">
        <img src={src} alt="" />
        <h3>{name}</h3>
      </div>
    </Link>
);