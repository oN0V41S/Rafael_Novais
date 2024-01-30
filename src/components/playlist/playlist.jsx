import toolsIcon from "@/static/icons/tools.png"
import projectIcon from "@/static/icons/project.png"
import ItemPlaylist from "@/components/playlist/ItemPlaylists";

export default function Playlist() {
  return (
    <section className="playlist">
      <div className="playlist-list">
        <ItemPlaylist
          src={toolsIcon}
          href="/skills"
          name="Tecnologias e Ferramentas"
          desc="Algumas das tecnologias e ferramentas que possuo conhecimento ou estou estudando."
        />
        <ItemPlaylist
          src={projectIcon}
          href="/projects"
          name="Projetos"
          desc="Alguns dos Projetos que desenvolvi ou participei."
        />
      </div>
    </section>
  );
}
