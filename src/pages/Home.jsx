import Layout from "@/components/layout/layout";

import About from "@/components/about/about";
import Playlist from "@/components/playlist/playlist";

export default function Home() {
  return (
    <>
      <Layout>
        <About/>
        <Playlist/>
      </Layout>
    </>
  );
}
