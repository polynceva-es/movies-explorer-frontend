import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const {page, movies} = props;

  return (
    <>
      <section className="movies-card-list">
        {movies.map((movie) => (
          <MoviesCard
          key={movie.id}
          page={page}
          nameRU={movie.nameRU}
          imageUrl={movie.image.url}
          trailerLink={movie.trailerLink}
          duration={movie.duration}
           />
        ))}
      </section>
    </>
  );
}

export default MoviesCardList;
