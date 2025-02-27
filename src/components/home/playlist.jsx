import Link from "next/link";
import toolsIcon from "@/static/icons/tools.png"
import projectIcon from "@/static/icons/project.png"
import "@/styles/home/playlist.scss"

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
    <Link href={href} className="playlist-item">
        <span className="playlist-bar" />
      <div className="playlist-title">
        <img src={src} alt="" />
        <h3>{name}</h3>
      </div>
    </Link>
);