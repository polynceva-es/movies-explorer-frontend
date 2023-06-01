import React from "react";
import Title from "../Title/Title";

function AboutProject(props) {
  return (
    <>
      <Title title="О проекте" />
      <section className="about-project page__container-small">
        <article className="about-project__tabl">
          <h3 className="about-project__tabl-title">
            Дипломный проект включал 5 этапов
          </h3>
          <h3 className="about-project__tabl-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__tabl-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
          <p className="about-project__tabl-text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
        <article className="about-project__date">
          <p className="about-project__date-text about-project__date-text_bold about-project__date-text_back">1 неделя</p>
          <p className="about-project__date-text about-project__date-text_bold about-project__date-text_front">4 недели</p>
          <p className="about-project__date-text about-project__date-text_light">Back-end</p>
          <p className="about-project__date-text about-project__date-text_light">Front-end</p>
        </article>
      </section>
    </>
  );
}

export default AboutProject;
