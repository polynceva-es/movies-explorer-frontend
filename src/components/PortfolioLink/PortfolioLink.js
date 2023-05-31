import React from "react";
import arrow from "../../images/text__COLOR_font-main.svg";

function PortfolioLink(props) {
  return (
      <a
        className="portfolio-link"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
        <img className="portfolio-link__logo" src={arrow} alt="Стрелочка" />
      </a>
  );
}

export default PortfolioLink;
