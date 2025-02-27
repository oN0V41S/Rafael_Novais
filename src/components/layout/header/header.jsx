import React from "react";
import Link from "next/link";

import homeIcon from "@/static/icons/home.png";

export default function Header() {
  return (
    <header className="header">
      <h3>Rafael Novais</h3>
      <Link href="/">
        <img src={homeIcon} alt="" />
      </Link>
    </header>
  );
}
