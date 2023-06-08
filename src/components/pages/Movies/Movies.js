import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import ButtonMore from "../../ButtonMore/ButtonMore";
// import Preloader from "../../PreLoader/Preloader";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function Movies(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
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
      <main className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList page="movies" />
        <ButtonMore />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
