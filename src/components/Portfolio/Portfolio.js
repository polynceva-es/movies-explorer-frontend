import React from "react";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <PortfolioLink
            text="Статичный сайт"
            link="https://polynceva-es.github.io/how-to-learn/"
          />
        </li>
        <li className="portfolio__item">
          <PortfolioLink
            text="Адаптивный сайт"
            link="https://polynceva-es.github.io/russian-travel/"
          />
        </li>
        <li className="portfolio__item">
          <PortfolioLink
            text="Одностраничное приложение"
            link="https://github.com/polynceva-es/react-mesto-api-full-gha"
          />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
