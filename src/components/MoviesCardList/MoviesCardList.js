import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const cards = Array.apply(null, Array(5)).map((elem, i) => {
    return i % 2 === 0;
  });

  return (
    <>
      <section className="movies-card-list">
        {cards.map((card) => (
          <MoviesCard page={props.page}
          isLikedProps={card} />
        ))}
      </section>
    </>
  );
}

export default MoviesCardList;
