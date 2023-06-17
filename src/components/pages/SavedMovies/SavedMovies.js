import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import Preloader from "../../PreLoader/Preloader";
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
    loadSavedMovies,
    errorMessage,
    setErrorMessage,
    isLoader,
    margin,
  } = props;

  const { values, onChange, isFormValid } = useValidation();

  React.useEffect(()=> {
    loadSavedMovies();
    setErrorMessage("");
  }, []);

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
        <span className="not-found-message">{errorMessage}</span>
        <Preloader isLoader={isLoader}/>
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
