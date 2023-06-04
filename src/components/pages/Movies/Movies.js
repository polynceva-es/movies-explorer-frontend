import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import ButtonMore from "../../ButtonMore/ButtonMore";
// import Preloader from "../../PreLoader/Preloader";

function Movies(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
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
