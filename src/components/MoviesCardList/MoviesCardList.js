import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";

function MoviesCardList() {
  const cards = Array.apply(null, Array(5)).map(() => {});
  return (
    <>
      <section className="movies-card-list">
        {cards.map((card) => (
          <MoviesCard />
        ))}
      </section>
      <ButtonMore />
    </>
  );
}

export default MoviesCardList;
