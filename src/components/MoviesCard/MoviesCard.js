import React, { useState } from "react";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonIsLiked from "../ButtonIsLiked/ButtonIsLiked";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import image from "../../images/pic__COLOR_pic.jpg";

function MoviesCard(props) {
  const { nameRU, imageUrl, trailerLink, duration, page, isLikedProps } = props;
const [isLiked, setIsLiked] = React.useState(isLikedProps);
let button;
if(page === "saved-movies") {
  button = <ButtonDelete />
} else if (page === "movies" && isLiked) {
  button = <ButtonIsLiked />
} else if (page === "movies" && !isLiked) {
  button = <ButtonSave />
};
  return (
    <article className="movie-card">
      {button}
      <figure className="movie-card__figure">
        <a href={trailerLink} className="movie-card__link">
          <img className="movie-card__image" src={image} alt={nameRU} />
        </a>
        <figcaption className="movie-card__figcaption">
          <p className="movie-card__title">33 слова о дизайне</p>
          <p className="movie-card__duration">1ч 17м</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default MoviesCard;
