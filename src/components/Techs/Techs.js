import React from "react";
import Title from "../Title/Title";

function Techs(props) {
  return (
    <div className="techs__container">
      <Title title="Технологии" />
      <section className="techs">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </section>
    </div>
  );
}

export default Techs;
