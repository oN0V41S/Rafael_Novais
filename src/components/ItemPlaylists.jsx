import { Link } from "react-router-dom";

export default function ItemPlaylist({ src, name, desc, href }) {

  return (
    <Link to={href} className="playlist-item">
        <span className="playlist-bar" />
      <div className="playlist-title">
        <img src={src} alt="" />
        <h3>{name}</h3>
      </div>
      <h5>{desc}</h5>
    </Link>
  );
}
