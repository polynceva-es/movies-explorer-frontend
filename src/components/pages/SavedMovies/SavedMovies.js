import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import useValidation from "../../../hooks/useValidation";

function SavedMovies(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    savedMoviesList,
    onClickLiked,
    onSubmitSaveSearch,
    margin,
  } = props;

  const { values, onChange, isFormValid, setValues } = useValidation();

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
        <SearchForm
          values={values}
          onChange={onChange}
          isFormValid={isFormValid}
          onSubmitSearch={onSubmitSaveSearch}
        />
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
