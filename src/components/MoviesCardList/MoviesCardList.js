import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { page, moviesList, onClickLiked } = props;

  return (
    <>
      <section className="movies-card-list">
        {moviesList.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              page={page}
              movie={movie}
              nameRU={movie.nameRU}
              imageUrl={movie.image.url}
              trailerLink={movie.trailerLink}
              duration={movie.duration}
              onClickLiked={onClickLiked}
              defaultIsLiked={false} ////???
            />
          );
        })}
      </section>
    </>
  );
}

export default MoviesCardList;
