import React from "react";
import Title from "../Title/Title";

function AboutProject(props) {
  return (
    <>
      <Title title="О проекте" id="about-project"/>
      <section className="about-project">
        <article className="about-project__tabl">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
        <article className="about-project__date">
          <p className="about-project__param about-project__param_bold about-project__param_back">1 неделя</p>
          <p className="about-project__param about-project__param_bold about-project__param_front">4 недели</p>
          <p className="about-project__param about-project__param_light">Back-end</p>
          <p className="about-project__param about-project__param_light">Front-end</p>
        </article>
      </section>
    </>
  );
}

export default AboutProject;
