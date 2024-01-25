import Aside from "./layout/aside";
import Header from "./layout/header";

export default function Layout({ children }) {
  return (
    <>
      <Aside />
      <Header />
      <main>{children}</main>
    </>
  );
}
