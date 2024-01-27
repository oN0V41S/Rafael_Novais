import LayoutAside from "./layout/aside";
import Header from "./layout/header";

export default function Layout({ children }) {
  return (
    <>
      <LayoutAside />
      <Header />
      <main>{children}</main>
    </>
  );
}
