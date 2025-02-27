import React from "react";
import Playlist from "@/components/home/playlist";
import "@/styles/home/about.scss"

export default function About() {
  return (
    <section >
      <h1 className="about-name title-page">Rafael Novais</h1>
      <AboutContainer 
          title="Desenvolvedor de Sistemas."
          body="Desenvolvedor Full Stack Júnior/Pleno
Desenvolvedor Full Stack com experiência em Java , TypeScript , Python , Kotlin e frameworks como Spring Boot , Express , React , NestJS , Next.js e Angular . Proficiente em bancos de dados relacionais (MySQL ) e não relacionais (MongoDB ), além de ferramentas de DevOps como AWS , Azure , Docker , Jenkins e GitHub Actions . Habilidades em desenvolvimento de APIs REST, microserviços e automação de pipelines. Busco contribuir com soluções inovadoras em ambientes dinâmicos e colaborativos.
\n
Desenvolvedor Front-End Júnior/Pleno
Experiência prática em React , Next.js , Angular , Styled Components e Progressive Web Applications (PWAs) . Focado em design responsivo, otimização de performance e integração eficiente com APIs REST. Apaixonado por criar interfaces intuitivas e funcionais que melhoram a experiência do usuário. Comprometido com o desenvolvimento de soluções inovadoras em equipes multidisciplinares.
\n
Desenvolvedor Back-End Júnior/Pleno
Especializado no desenvolvimento de APIs REST com Java e Spring Boot , além de proficiência em bancos de dados relacionais (MySQL ) e NoSQL (MongoDB ). Experiência com metodologias ágeis (Scrum , Kanban ) e ferramentas de versionamento como Git e GitHub . Busco oportunidades para aprimorar minhas habilidades em back-end e contribuir para projetos inovadores e escaláveis.
\n
Analista de Dados Júnior/Pleno
Capacidade de aplicar conhecimentos em Python para análise exploratória de dados, automação de processos ETL e visualização com ferramentas como Power BI e Tableau . Experiência em geração de insights estratégicos para decisões baseadas em dados. Comprometido com a entrega de resultados que impulsionem o crescimento e a eficiência organizacional."
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