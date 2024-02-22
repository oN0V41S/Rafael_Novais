import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "@/static/icons/home.png";

export default function Header() {
  return (
    <header className="header">
      <h3>Rafael Novais</h3>
      <Link to="/">
        <img src={homeIcon} alt="" />
      </Link>
    </header>
  );
}
