import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { page, moviesList, onClickLiked } = props;

  return (
    <>
      <section className="movies-card-list">
        {moviesList.map((movie) => {
          let defaultIsLiked;
          if(page === "saved-movies") {
            defaultIsLiked = true;
          } else if(page === "movies" && movie._id !== undefined) {
            defaultIsLiked = true;
          } else {
            defaultIsLiked = false;
          }
          return (
            <MoviesCard
              key={page === "saved-movies" ? movie._id : movie.id}
              page={page}
              movie={movie}
              nameRU={movie.nameRU}
              imageUrl={page === "saved-movies" ? movie.image : movie.image.url}
              trailerLink={movie.trailerLink}
              duration={movie.duration}
              onClickLiked={onClickLiked}
              defaultIsLiked={defaultIsLiked}
            />
          );
        })}
      </section>
    </>
  );
}

export default MoviesCardList;
