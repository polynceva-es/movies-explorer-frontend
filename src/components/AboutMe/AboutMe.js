import React from "react";
import Title from "../Title/Title";
import photo from "../../images/photo.jpg";

function AboutMe(props) {
  return (
    <>
      <Title title="Студент" id="about-me" />
      <section className="about-me">
        <img className="about-me__photo" src={photo} alt="Фотография профиля" />
        <article className="about-me__info">
          <div>
            <h3 className="about-me__name">Екатерина</h3>
            <p className="about-me__prof">Фроненд-разработчик, 32 года</p>
            <p className="about-me__about">
              Я&nbsp;живу в&nbsp;Москве, закончила физический факультет
              по&nbsp;специальности &laquo;медицинская физика&raquo; ДВФУ.
              У&nbsp;меня есть муж и&nbsp;сын. Я&nbsp;люблю слушать музыку,
              а&nbsp;ещё увлекаюсь вышивкой крестом. Недавно начала кодить.
              Учусь на&nbsp;курсе Я.Практикума по&nbsp;веб-разработке.
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/polynceva-es"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
      </section>
    </>
  );
}

export default AboutMe;
