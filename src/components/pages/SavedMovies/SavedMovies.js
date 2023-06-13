import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function SavedMovies(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    savedMoviesList,
    onClickLiked,
    margin,
  } = props;
  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
      />
      <Header
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
        goToLogin={goToLogin}
        margin={margin}
      />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
          page="saved-movies"
          moviesList={savedMoviesList}
          onClickLiked={onClickLiked}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
