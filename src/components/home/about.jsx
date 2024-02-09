import minhaFoto from "@/static/foto2.jpg";
import Playlist from "@/components/playlist/playlist";

export default function About() {
  return (
    <section className="about">
      <h1 className="about-name title-page">Rafael Novais</h1>
      <h2>Desenvolvedor FullStack</h2>
      <div className="about-text">
        <p>
          Meu nome é Rafael, sou apaixonado por programação desde
          os 14 anos, curso Desenvolvimento de
          Sistemas pela instiução Senai, atualmente tenho conhecimento em
          Front/Back-End, Banco de Dados, e Teste de Software, estou dedicando meu tempo 100% a estudar novas tecnologias e ferramentas.
        </p>
        <Playlist/>
      </div>
      <img src={minhaFoto} alt="Minha foto" className="about-picture" />
    </section>
  );
}
