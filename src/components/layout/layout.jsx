import React from "react";

import LayoutAside from "@/components/layout/aside/aside";
import Header from "@/components/layout/header/header";

export default function Layout({ children }) {
  return (
    <>
      <LayoutAside />
      <Header />
      <main className="">{children}</main>
    </>
  );
}
