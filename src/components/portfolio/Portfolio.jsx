import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Challenge Empresa Kolabs",
    github: "https://github.com/rafaelpdemelo/desafiokolabs",
  },
  {
    id: 2,
    image: IMG2,
    title: "Challenge TODO - Rocketseat",
    github: "https://github.com/rafaelpdemelo/challenge-01-todolist",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI for Web Programming Subject",
    github: "https://www.figma.com/file/4MDNZBoTPQaiWseon5aHQn/Projeto-Prog-Web-(Copy)?node-id=0%3A1",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos Recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
