import React from "react";
import Playlist from "@/components/home/playlist";

export default function About() {
  return (
    <section >
      <h1 className="about-name title-page">Rafael Novais</h1>
      <AboutContainer 
          title="Desenvolvedor FullStack"
          body="Meu nome é Rafael, sou apaixonado por programação desde os 14 anos, curso Desenvolvimento de Sistemas pela instiução Senai, atualmente tenho conhecimento em Front/Back-End, Banco de Dados, e Teste de Software, estou dedicando meu tempo 100% a estudar novas tecnologias e ferramentas."
      />
      <Playlist/>
    </section>
  );
}

const AboutContainer = props => (
  <div className="about-text">
  <h2>{props.title}</h2>
  <p>{props.body}</p>
</div>
);