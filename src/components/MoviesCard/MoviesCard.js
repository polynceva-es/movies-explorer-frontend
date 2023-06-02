import React, { useState } from "react";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonIsLiked from "../ButtonIsLiked/ButtonIsLiked";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

function MoviesCard(props) {
  const { nameRU, imageUrl, trailerLink, duration } = props;

  return (
    <article className="movie-card">
      <ButtonDelete />
      <figure>
        <a href={trailerLink}>
          <img src={imageUrl} alt={nameRU} />
        </a>
        <figcaption>
          {nameRU}
          {duration}
        </figcaption>
      </figure>
    </article>
  );
}

export default MoviesCard;
