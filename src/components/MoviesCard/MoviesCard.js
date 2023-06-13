import React, { useState } from "react";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonIsLiked from "../ButtonIsLiked/ButtonIsLiked";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

function MoviesCard(props) {
  const {
    movie,
    nameRU,
    imageUrl,
    trailerLink,
    duration,
    page,
    onClickLiked,
    defaultIsLiked
  } = props;
  const imageSRC = page === "saved-movies" ? imageUrl : `https://api.nomoreparties.co/${imageUrl}`;

  const [isLiked, setIsLiked] = React.useState(defaultIsLiked);

  function getDuration(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours ? hours + "ч " + minutes + "м" : minutes + "м";
  }

  function handleClickLikedToggle() {
    onClickLiked(movie, isLiked, setIsLiked);
  }

  let button;
  if (page === "saved-movies") {
    button = <ButtonDelete handleClickLikedToggle={handleClickLikedToggle} />;
  } else if (page === "movies" && isLiked) {
    button = <ButtonIsLiked handleClickLikedToggle={handleClickLikedToggle} />;
  } else if (page === "movies" && !isLiked) {
    button = <ButtonSave handleClickLikedToggle={handleClickLikedToggle} />;
  }

  return (
    <article className="movie-card">
      {button}
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
