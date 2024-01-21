import "@/styles/playlist.css";
import { Link } from "react-router-dom";

export default function Playlist() {
  return (
    <section className="playlist">
      <ItemPlaylist
        src=""
        href="/skills"
        name="Tecnologias e Ferramentas"
        desc="Algumas das tecnologias e ferramentas que possuo conhecimento ou estou estudando."
      />
      <ItemPlaylist
        src=""
        href="/projects"
        name="Projetos"
        desc="Alguns dos Projetos que desenvolvi ou participei."
      />
    </section>
  );
}

function ItemPlaylist({ src, name, desc, href }) {
  return (
    <Link to={href} className="playlist-item">
      <div className="playlist-bar"> </div>
      <img src={src} alt="" />
      <h3>{name}</h3>
      <h5>{desc}</h5>
    </Link>
  );
}
