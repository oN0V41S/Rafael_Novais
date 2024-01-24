import "@/styles/playlist.css";
import { Link } from "react-router-dom";

export default function ItemPlaylist({ src, name, desc, href }) {
  return (
    <Link to={href} className="playlist-item">
      <div className="playlist-bar"> </div>
      <img src={src} alt="" />
      <h3>{name}</h3>
      <h5>{desc}</h5>
    </Link>
  );
}
