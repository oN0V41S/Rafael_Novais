import minhaFoto from "@/static/foto2.jpg";

export default function About() {
  return (
    <section className="about">
      <h1 className="about-name">Rafael Novais</h1>
      <div className="about-text">
        <h1 className="about-me">Um pouco sobre mim...</h1>
        <h2>Desenvolvedor Front-End</h2>
        <p>
          Meu nome é Rafael tenho 17 anos, sou apaixonado por programação desde
          os 14 anos, sou Desenvolvedor de Sistemas cursando Desenvolvimento de Sistemas pela instiução Senai, atualmente tenho
          conhecimento em Front-End, com foco em ReactJS, mas estou estudando
          novas habilidades em Back-End para me Tornar um Desenvolvedor
          FullSatck.
        </p>
      </div>
      <img src={minhaFoto} alt="Minha foto" className="about-picture" />
    </section>
  );
}
