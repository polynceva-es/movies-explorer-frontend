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
    margin,
    onSubmitSearch,
    filterMoviesList,
    filterFilmList,
    windowWidth,
    numberLastFilm,
    setNumberLastFilm,
    setFilterMoviesList,
    onClickLiked
  } = props;

  const { values, onChange, isFormValid, setValues } = useValidation();
  const [filterAndLimitedMoviesList, setFilterAndLimitedMoviesList] =
    React.useState([]);

  React.useEffect(() => {
    const filterFilmParam = JSON.parse(localStorage.getItem("filterParam"));
    if (filterFilmParam) {
      setValues(filterFilmParam);
    }
    const filterFilmListFromLocalStorage = JSON.parse(localStorage.getItem("filterFilmList"));
    if(filterFilmListFromLocalStorage) {
      setFilterMoviesList(filterFilmListFromLocalStorage);
    } else if (filterFilmParam) {
      filterFilmList();
    }
  }, []);

  React.useEffect(() => {
    let limit;

    if (numberLastFilm !== undefined) {
      limit = numberLastFilm;
    } else {
      if (windowWidth >= 1280) {
        limit = 12;
      } else if (windowWidth >= 768) {
        limit = 8;
      }
      else {
        limit = 5;
      }
    }
      if (limit > filterMoviesList.length) {
        setFilterAndLimitedMoviesList(filterMoviesList);
        setNumberLastFilm(limit);
      } else {
        let newList = [];
        for (let i = 0; i < limit; i++) {
          newList.push(filterMoviesList[i]);
        }
        setFilterAndLimitedMoviesList(newList);
        setNumberLastFilm(limit);
      }
  }, [filterMoviesList, numberLastFilm]);

  function handleClickMore() {
    if (windowWidth >= 1280) {
      setNumberLastFilm(numberLastFilm + 3)
    } else {
      setNumberLastFilm(numberLastFilm + 2)
    }
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
        <MoviesCardList
          page="movies"
          moviesList={filterAndLimitedMoviesList}
          onClickLiked={onClickLiked}
        />

        { filterMoviesList.length > filterAndLimitedMoviesList.length ? (
          <ButtonMore handleClickMore={handleClickMore} />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
