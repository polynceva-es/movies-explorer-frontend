import React, { useState } from "react";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonIsLiked from "../ButtonIsLiked/ButtonIsLiked";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

function MoviesCard(props) {
  const { nameRU, imageUrl, trailerLink, duration, page } = props;
    const imageSRC = `https://api.nomoreparties.co/${imageUrl}`;

    function getDuration(mins) {
      let hours = Math.trunc(mins/60);
      let minutes = mins % 60;
      return hours + 'ч ' + minutes + 'м';
    }

  // const [isLiked, setIsLiked] = React.useState(isLikedProps);
  // let button;
  // if (page === "saved-movies") {
  //   button = <ButtonDelete />;
  // } else if (page === "movies" && isLiked) {
  //   button = <ButtonIsLiked />;
  // } else if (page === "movies" && !isLiked) {
  //   button = <ButtonSave />;
  // }
  return (
    <article className="movie-card">
      {/* {button} */}
      <figure className="movie-card__figure">
        <a href={trailerLink} target="_blanck" className="movie-card__link">
          <img className="movie-card__image" src={imageSRC} alt="Кадр фильма" />
        </a>
        <figcaption className="movie-card__figcaption">
          <p className="movie-card__title">{nameRU}</p>
          <p className="movie-card__duration">{getDuration(duration)}</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default MoviesCard;
