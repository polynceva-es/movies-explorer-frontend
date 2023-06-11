import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import ButtonMore from "../../ButtonMore/ButtonMore";
// import Preloader from "../../PreLoader/Preloader";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import useValidation from "../../../hooks/useValidation";

function Movies(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    movies,
    margin,
  } = props;

  const { values, onChange, isFormValid } = useValidation();

  const [filterMoviesList, setFilterMoviesList] = React.useState([]);

  // const [numberLastFilm, setNumberLastFilm] = React.useState(undefined);


  function onSubmitSearch(values) {

  }

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
      <main className="movies">
        <SearchForm
          values={values}
          onChange={onChange}
          isFormValid={isFormValid}
          onSubmitSearch={onSubmitSearch}
        />
        {/* <Preloader /> */}
        <MoviesCardList page="movies" movies={movies} />
        <ButtonMore />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
