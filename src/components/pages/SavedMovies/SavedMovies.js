import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const { loggedIn, isMenuOpen, handleMenuOpen, goToProfile, goToLogin, margin } = props;
  return (
    <>
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
        <MoviesCardList page="saved-movies" />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
