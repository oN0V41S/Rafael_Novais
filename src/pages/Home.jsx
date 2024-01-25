import ItemPlaylist from "@/components/ItemPlaylists";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="about">
          <h1 className="about-name">Rafael Novais</h1>
          <h1 className="about-me">Um pouco sobre mim...</h1>
          <h2>Desenvolvedor Front-End</h2>
          <p>
            Meu nome é Rafael tenho 17 anos, sou apaixonado por programação
            desde os 14 anos, sou Desenvolvedor de Sistemas, atualmente tenho
            conhecimento em Front-End, com foco em ReactJS, mas estou estudando
            novas habilidades em Back-End para me Tornar um Desenvolvedor
            FullSatck.
          </p>
        </section>
        <section className="playlist">
          <h2>Veja meus projetos e habilidades a baixo </h2>
          <div className="playlist-list">
            <ItemPlaylist
              src=""
              href="/skills"
              name="Tecnologias e Ferramentas"
              desc="Algumas das tecnologias e ferramentas que possuo conhecimento ou estou estudando."
            />
            <ItemPlaylist
              src=""
              href="/projects"
              name="Projetos"
              desc="Alguns dos Projetos que desenvolvi ou participei."
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
